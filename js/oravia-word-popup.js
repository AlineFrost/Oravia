(function () {
  'use strict';

  var scriptDir = getScriptDir();
  var dataUrl = resolveFromScript('../data/dictionary_data.json');
  var dictionary = new Map();
  var buildingBlocks = new Map();
  var popup = null;
  var currentWord = null;
  var observer = null;

  function getScriptDir() {
    var s = document.currentScript;
    if (!s) {
      var scripts = document.getElementsByTagName('script');
      s = scripts[scripts.length - 1];
    }
    var src = s && s.src ? s.src : 'js/oravia-word-popup.js';
    return src.replace(/[^\/]*$/, '');
  }

  function resolveFromScript(rel) {
    var a = document.createElement('a');
    a.href = scriptDir + rel;
    return a.href;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalize(s) {
    return String(s || '').replace(/^['’]+|['’]+$/g, '').toLowerCase();
  }

  function indexBuildingBlock(piece) {
    if (!piece || !piece.sound) return;
    var sound = normalize(piece.sound);
    if (!sound) return;

    var meaning = String(piece.bb_meaning || piece.meaning || '').trim();
    if (!meaning) return;

    var type = String(piece.bb_type || piece.position || 'building block').trim();
    var existing = buildingBlocks.get(sound);

    if (!existing) {
      existing = {
        sound: sound,
        meanings: [],
        types: [],
        bb_id: piece.bb_id || '',
        bb_href: piece.bb_href || ''
      };
      buildingBlocks.set(sound, existing);
    }

    if (existing.meanings.indexOf(meaning) === -1) existing.meanings.push(meaning);
    if (type && existing.types.indexOf(type) === -1) existing.types.push(type);
    if (!existing.bb_id && piece.bb_id) existing.bb_id = piece.bb_id;
    if (!existing.bb_href && piece.bb_href) existing.bb_href = piece.bb_href;
  }

  function indexEntry(entry) {
    if (!entry || !entry.w) return;
    dictionary.set(normalize(entry.w), entry);

    var pieces = [];
    if (Array.isArray(entry.bd)) pieces = pieces.concat(entry.bd);
    if (Array.isArray(entry.syllable_meanings)) pieces = pieces.concat(entry.syllable_meanings);
    pieces.forEach(indexBuildingBlock);
  }

  function init() {
    fetch(dataUrl, { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('Could not load ' + dataUrl);
        return r.json();
      })
      .then(function (data) {
        data.forEach(indexEntry);
        buildPopup();
        bindEvents();
        scanReadings(document);
        observeMagazine();
      })
      .catch(function (err) {
        console.error('Word popup init failed:', err);
      });
  }

  function buildPopup() {
    popup = document.createElement('div');
    popup.id = 'oravia-word-popup';
    popup.className = 'oravia-word-popup';
    popup.hidden = true;
    document.body.appendChild(popup);
  }

  /* Resolve an Oravia surface form to either a dictionary lemma or a building block.
     Priority is: exact dictionary > productive form > exact building block.
     This restores forms such as ciutels -> ciutel, moujeum -> mouje, etc. */
  function resolveLookup(part) {
    if (!part) return null;

    /* Leading apostrophe marks an import/non-dictionary form. */
    if (/^['’]/.test(part)) return null;

    var normalized = normalize(part);
    if (!normalized) return null;

    if (dictionary.has(normalized)) {
      return { kind: 'dictionary', key: normalized };
    }

    var explicit = {
      nima: 'nim',
      runa: 'run',
      haya: 'hay'
    };
    if (explicit[normalized] && dictionary.has(explicit[normalized])) {
      return { kind: 'dictionary', key: explicit[normalized] };
    }

    /* Productive suffixes. Longer suffixes are checked before -s. */
    var suffixes = ['um', 'ar', 'is', 'si', 's'];
    for (var i = 0; i < suffixes.length; i++) {
      var suffix = suffixes[i];
      if (normalized.length <= suffix.length + 1) continue;
      if (!normalized.endsWith(suffix)) continue;

      var base = normalized.slice(0, -suffix.length);
      if (dictionary.has(base)) {
        return { kind: 'dictionary', key: base };
      }
    }

    /* If it is not a dictionary word, allow a dictionary breakdown piece itself.
       Example: he -> the HE subcluster meaning from dictionary breakdown data. */
    if (buildingBlocks.has(normalized)) {
      return { kind: 'building-block', key: normalized };
    }

    return null;
  }

  function scanReadings(root) {
    root = root || document;
    prepareManualWords(root);

    var containers = [];
    var selector = '.oravia-reading, .mag-auto-flow, .mag-article';

    if (root.matches && root.matches(selector)) containers.push(root);

    /* If the paginator just inserted a paragraph/heading into a generated page,
       scan the nearest readable container too. */
    if (root.closest) {
      var nearest = root.closest(selector);
      if (nearest && containers.indexOf(nearest) === -1) containers.push(nearest);
    }

    if (root.querySelectorAll) {
      root.querySelectorAll(selector).forEach(function (el) {
        if (containers.indexOf(el) === -1) containers.push(el);
      });
    }

    containers.forEach(tokenizeReading);
  }

  function prepareManualWords(root) {
    if (!root.querySelectorAll) return;
    root.querySelectorAll('.oravia-word[data-lemma]:not([data-oravia-key])').forEach(function (el) {
      var lookup = resolveLookup(el.getAttribute('data-lemma'));
      if (lookup) makeClickable(el, lookup.key, lookup.kind);
    });
  }

  function tokenizeReading(container) {
    var walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          var p = node.parentElement;
          if (!p) return NodeFilter.FILTER_REJECT;
          if (p.closest('.oravia-word') || p.closest('code, pre, script, style, textarea, button, a, #oravia-word-popup')) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(replaceTextNode);
  }

  function replaceTextNode(node) {
    var text = node.nodeValue;

    /* Hyphens are separators so each side of a hyphenated expression can be
       looked up independently. Apostrophes remain attached for imports. */
    var parts = text.split(/([A-Za-zÀ-ÖØ-öø-ÿ'’]+)/g);
    if (parts.length === 1) return;

    var frag = document.createDocumentFragment();
    var changed = false;

    parts.forEach(function (part) {
      if (!part) return;
      var lookup = resolveLookup(part);

      if (lookup) {
        var span = document.createElement('span');
        span.className = 'oravia-word';
        span.textContent = part;
        makeClickable(span, lookup.key, lookup.kind);
        frag.appendChild(span);
        changed = true;
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    });

    if (changed && node.parentNode) node.parentNode.replaceChild(frag, node);
  }

  function makeClickable(el, key, kind) {
    el.setAttribute('data-oravia-key', key);
    el.setAttribute('data-oravia-kind', kind);
    if (kind === 'dictionary') el.setAttribute('data-dict-word', key);
    if (kind === 'building-block') el.setAttribute('data-building-block', key);
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
  }

  function observeMagazine() {
    var magazine = document.querySelector('[data-magazine]');
    if (!magazine || !window.MutationObserver) return;

    observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) scanReadings(node);
        });
      });
    });

    observer.observe(magazine, { childList: true, subtree: true });
  }

  function clickableFromEvent(evt) {
    return evt.target.closest && evt.target.closest('.oravia-word[data-oravia-key]');
  }

  function bindEvents() {
    document.addEventListener('click', function (evt) {
      var word = clickableFromEvent(evt);
      if (word) {
        evt.preventDefault();
        showWord(word);
        return;
      }

      if (evt.target && evt.target.classList.contains('oravia-word-popup-close')) {
        hidePopup();
        return;
      }

      if (popup && !popup.hidden && !evt.target.closest('#oravia-word-popup')) hidePopup();
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        hidePopup();
        return;
      }
      var word = clickableFromEvent(evt);
      if (word && (evt.key === 'Enter' || evt.key === ' ')) {
        evt.preventDefault();
        showWord(word);
      }
    });

    window.addEventListener('resize', function () {
      if (currentWord && popup && !popup.hidden) positionPopup(currentWord);
    });
  }

  function showWord(el) {
    var key = el.getAttribute('data-oravia-key');
    var kind = el.getAttribute('data-oravia-kind');
    if (!key) return;

    currentWord = el;

    if (kind === 'building-block') {
      var block = buildingBlocks.get(key);
      if (!block) return;
      popup.innerHTML = renderBuildingBlock(block, el.textContent);
    } else {
      var entry = dictionary.get(key);
      if (!entry) return;
      popup.innerHTML = renderEntry(entry, el.textContent);
    }

    popup.hidden = false;
    positionPopup(el);
  }

  function renderEntry(entry, surface) {
    var html = '';
    html += '<button class="oravia-word-popup-close" type="button" aria-label="Close">×</button>';
    html += '<div class="oravia-word-popup-head">';
    html += '<strong class="oravia-word-popup-word">' + esc(surface) + '</strong>';
    if (normalize(surface) !== normalize(entry.w)) {
      html += '<span class="oravia-word-popup-lemma">' + esc(entry.w) + '</span>';
    }
    html += '</div>';
    html += '<div class="oravia-word-popup-meaning">' + esc(entry.e || '') + '</div>';

    if (entry.ea && entry.ea !== entry.e) {
      html += '<div class="oravia-word-popup-more">' + esc(entry.ea) + '</div>';
    }

    if (Array.isArray(entry.bd) && entry.bd.length) {
      html += '<div class="oravia-word-popup-breakdown">';
      html += entry.bd.map(function (p) {
        return '<span class="oravia-bd-piece"><strong>' + esc(p.sound || '') + '</strong> ' + esc(p.meaning || '') + '</span>';
      }).join('<span class="oravia-bd-plus"> + </span>');
      html += '</div>';
    } else if (entry.usage) {
      html += '<div class="oravia-word-popup-usage">' + esc(entry.usage) + '</div>';
    }

    html += '<a class="oravia-word-popup-dict" href="../../content/dictionary/?word=' + encodeURIComponent(entry.w || '') + '">Dictionary →</a>';
    return html;
  }

  function renderBuildingBlock(block, surface) {
    var html = '';
    var type = block.types.length ? block.types.join(' / ') : 'building block';
    var meaning = block.meanings.join(' / ');

    html += '<button class="oravia-word-popup-close" type="button" aria-label="Close">×</button>';
    html += '<div class="oravia-word-popup-head">';
    html += '<strong class="oravia-word-popup-word">' + esc(surface) + '</strong>';
    html += '</div>';
    html += '<div class="oravia-word-popup-meaning">' + esc(meaning) + '</div>';
    html += '<div class="oravia-word-popup-usage">' + esc(type) + '</div>';
    return html;
  }

  function positionPopup(el) {
    if (window.matchMedia('(max-width: 700px)').matches) {
      popup.style.left = '';
      popup.style.top = '';
      return;
    }

    var rect = el.getBoundingClientRect();
    popup.style.left = '0px';
    popup.style.top = '0px';
    var pw = popup.offsetWidth;
    var ph = popup.offsetHeight;
    var margin = 10;

    var left = rect.left + window.scrollX;
    var top = rect.bottom + window.scrollY + 8;

    if (left + pw > window.scrollX + window.innerWidth - margin) {
      left = window.scrollX + window.innerWidth - pw - margin;
    }
    if (left < window.scrollX + margin) left = window.scrollX + margin;

    if (top + ph > window.scrollY + window.innerHeight - margin) {
      top = rect.top + window.scrollY - ph - 8;
    }

    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
  }

  function hidePopup() {
    if (!popup) return;
    popup.hidden = true;
    currentWord = null;
  }

  /* Paginator events: rescan after generated pages are ready. */
  function rescanAfterPagination() {
    if (!dictionary.size) return;
    setTimeout(function () { scanReadings(document); }, 0);
  }
  document.addEventListener('oravia-magazine-ready', rescanAfterPagination);
  document.addEventListener('oraviaMagazineReady', rescanAfterPagination);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  if (typeof document$ !== 'undefined' && document$ &&
    typeof document$.subscribe === 'function') {
  document$.subscribe(function () {
    if (dictionary.size) {
      if (popup) popup.hidden = true;
      scanReadings();
    }
  });
}
})();
