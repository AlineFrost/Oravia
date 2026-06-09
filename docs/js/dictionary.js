(function () {
  'use strict';

  console.log('Oravia dictionary.js loaded: 2026-06-08 core filter and search scopes');

  var CLUSTER_COLORS = {
    "volitional action": "#5b6af0", "physical action": "#f07a5b", "bodily actions": "#e8a857",
    "travel": "#5bbff0", "house": "#7ac85b", "create": "#c85bd4", "communication": "#5bd4c8",
    "evaluate": "#d4b05b", "regulations": "#8c7af0", "wonder": "#f0c85b", "social": "#5bf07a",
    "family": "#f05b8c", "compare": "#5b8cf0", "finances": "#f0d45b", "fiction trope": "#a05bf0",
    "inquire": "#5bc8f0", "tools": "#c8a05b", "geometrics": "#7af05b", "materials": "#f05b5b",
    "environment": "#5bd46b", "time": "#7a8cf0", "weather": "#5bb8f0", "bigger animals": "#c8785b",
    "smaller animals": "#d4a07a", "eating and drinking": "#f07a7a", "cooking food": "#e8855b",
    "music": "#a87af0", "fun": "#f07ab8", "harm": "#e84040", "suffer": "#c05870",
    "suffering": "#c05870", "conflict": "#d04040", "body parts": "#7ab8e8", "health": "#7ad4a0",
    "interior body": "#a07ad4", "hygiene": "#7ad4c8", "sea": "#5b9cf0", "geography": "#5bc8d4",
    "objective qualities": "#c8b87a", "subjective qualities": "#d4987a", "clothing": "#d480d4",
    "colors": "#f07060", "society": "#78a8e8", "government": "#5878d4", "knowledge": "#e8c860",
    "machine": "#788898", "process": "#8898b8", "components": "#a878c8", "number": "#a8a8a8",
    "quantifiers": "#88c880", "function words": "#a8b8c8"
  };

  var allGram = [];
  var allRegular = [];
  var filteredGram = [];
  var filteredRegular = [];
  var stats = { total: 0, linked: 0, unlinked: 0 };
  var scriptDir = getScriptDir();
  var dataUrl = resolveFromScript('../data/dictionary_data.json');
  var buildingBlocksPageUrl = resolveFromScript('../content/building_blocks/');

  function getScriptDir() {
    var s = document.currentScript;
    if (!s) {
      var scripts = document.getElementsByTagName('script');
      s = scripts[scripts.length - 1];
    }
    var src = s && s.src ? s.src : 'js/dictionary.js';
    return src.replace(/[^\/]*$/, '');
  }

  function resolveFromScript(rel) {
    var a = document.createElement('a');
    a.href = scriptDir + rel;
    return a.href;
  }

  function init() {
    var container = document.getElementById('oravia-dictionary');
    if (!container) return;

    fetch(dataUrl, { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('Could not load ' + dataUrl + ' — HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        if (!Array.isArray(data)) throw new Error('Dictionary data is not a JSON array.');
        allGram = data.filter(function (w) { return w.type === 'gram'; });
        allRegular = data.filter(function (w) { return !w.type; });
        filteredGram = allGram.slice();
        filteredRegular = allRegular.slice();
        stats = computeStats(data);
        buildUI();
        bindControls();
        bindDelegation();
        renderAll();
        updateCount();
        applyIncomingWordTarget();
      })
      .catch(function (err) {
        console.error(err);
        container.innerHTML = '<p style="color:red">Failed to load dictionary data.</p>' +
          '<p style="font-size:0.8rem">Tried: <code>' + esc(dataUrl) + '</code></p>' +
          '<p style="font-size:0.8rem">Details: ' + esc(err.message || String(err)) + '</p>';
      });
  }


  function applyIncomingWordTarget() {
    var target = sessionStorage.getItem('dict_exact') || '';
    if (!target && window.location.hash && window.location.hash.indexOf('#entry-') === 0) {
      target = decodeURIComponent(window.location.hash.slice(7));
    }
    if (target) {
      sessionStorage.removeItem('dict_exact');
      setTimeout(function () { jumpToWord(target); }, 80);
    }
  }

  function computeStats(data) {
    var total = 0;
    var linked = 0;
    var unlinked = 0;
    data.forEach(function (entry) {
      (entry.bd || []).forEach(function (part) {
        total += 1;
        if (part.bb_id || part.bb_href || part.bb_type) linked += 1;
        else unlinked += 1;
      });
    });
    return { total: total, linked: linked, unlinked: unlinked };
  }

  function pct(n, d) {
    if (!d) return '0.0%';
    return (100 * n / d).toFixed(1) + '%';
  }

  function clusterColor(c) {
    return CLUSTER_COLORS[(c || '').trim().toLowerCase()] || '#9a9a9a';
  }

  function buildUI() {
    var container = document.getElementById('oravia-dictionary');
    var clusters = [];
    var seen = {};
    allRegular.forEach(function (w) {
      var c = (w.c || '').trim();
      if (c && !seen[c]) { seen[c] = true; clusters.push(c); }
    });
    clusters.sort();

    var clusterOpts = '<option value="all">all clusters</option>';
    clusters.forEach(function (c) {
      clusterOpts += '<option value="' + esc(c) + '">' + esc(c) + '</option>';
    });

    container.innerHTML =
      '<div class="dict-controls">' +
        '<div class="dict-search-row">' +
          '<select id="dict-mode" class="dict-select dict-mode-toggle">' +
            '<option value="both">Both</option>' +
            '<option value="oravia">Oravia</option>' +
            '<option value="english">English</option>' +
          '</select>' +
          '<input id="dict-search" type="text" class="dict-input" placeholder="Search…" autocomplete="off" />' +
        '</div>' +
        '<div class="dict-filter-row">' +
          '<select id="dict-cluster" class="dict-select">' + clusterOpts + '</select>' +
          '<label class="dict-core-label"><input id="dict-core-only" type="checkbox" /> Core only</label>' +
          '<span id="dict-count" class="dict-count"></span>' +
        '</div>' +
        '<div class="dict-syllable-stats" style="font-size:0.72rem; margin-top:0.35rem; color:var(--md-default-fg-color);">' +
          'Syllable links: <strong>' + esc(pct(stats.linked, stats.total)) + '</strong> linked (' + stats.linked + '/' + stats.total + '), ' +
          '<strong>' + esc(pct(stats.unlinked, stats.total)) + '</strong> unlinked (' + stats.unlinked + '/' + stats.total + ').' +
        '</div>' +
      '</div>' +
      '<div id="dict-gram-section">' +
        '<div class="dict-section-header">Grammar &amp; Particles</div>' +
        '<div id="dict-gram-list"></div>' +
      '</div>' +
      '<div class="dict-section-divider"></div>' +
      '<div id="dict-regular-list"></div>';
  }

  function bindControls() {
    function update() {
      var search = document.getElementById('dict-search');
      var modeEl = document.getElementById('dict-mode');
      var clusterEl = document.getElementById('dict-cluster');
      var coreEl = document.getElementById('dict-core-only');
      var q = (search.value || '').toLowerCase().trim();
      var mode = modeEl.value;
      var cluster = clusterEl.value;
      var coreOnly = !!(coreEl && coreEl.checked);

      filteredGram = allGram.filter(function (w) {
        if (coreOnly && !w.core) return false;
        if (!q) return true;
        return matchesSearch(w, q, mode);
      });

      filteredRegular = allRegular.filter(function (w) {
        if (coreOnly && !w.core) return false;
        if (cluster !== 'all' && (w.c || '').trim() !== cluster) return false;
        if (!q) return true;
        return matchesSearch(w, q, mode);
      });

      renderAll();
      updateCount();
    }

    document.getElementById('dict-search').addEventListener('input', update);
    document.getElementById('dict-mode').addEventListener('change', update);
    document.getElementById('dict-cluster').addEventListener('change', update);
    var coreOnly = document.getElementById('dict-core-only');
    if (coreOnly) coreOnly.addEventListener('change', update);
  }

  function matchesSearch(w, q, mode) {
    if (mode === 'oravia') return (w.w || '').toLowerCase().indexOf(q) !== -1;
    if (mode === 'english') return englishSearchText(w).indexOf(q) !== -1;
    return (w.w || '').toLowerCase().indexOf(q) !== -1 || searchableText(w).indexOf(q) !== -1;
  }

  function englishSearchText(w) {
    var parts = [];
    parts.push(w.e, w.ea, w.usage, w.c);
    (w.bd || []).forEach(function (p) {
      parts.push(p.meaning, p.bb_meaning, p.bb_type);
    });
    (w.syllable_meanings || []).forEach(function (p) {
      parts.push(p.meaning, p.bb_meaning, p.position);
    });
    (w.ex || []).forEach(function (ex) {
      parts.push(ex.e, ex.g);
    });
    return parts.filter(Boolean).join(' ').toLowerCase();
  }

  function searchableText(w) {
    var parts = [];
    parts.push(w.w, w.e, w.ea, w.c, w.cs, w.sc, w.r, w.usage);
    if (Array.isArray(w.search_terms)) parts = parts.concat(w.search_terms);
    (w.bd || []).forEach(function (p) {
      parts.push(p.sound, p.meaning, p.bb_meaning, p.bb_type, p.bb_id);
    });
    (w.syllable_meanings || []).forEach(function (p) {
      parts.push(p.sound, p.meaning, p.bb_meaning, p.bb_type, p.position);
    });
    return parts.filter(Boolean).join(' ').toLowerCase();
  }

  function bindDelegation() {
    var container = document.getElementById('oravia-dictionary');

    container.addEventListener('click', function (evt) {
      var rel = closest(evt.target, 'dict-related-item');
      if (rel) {
        var target = rel.getAttribute('data-word');
        if (target) jumpToWord(target);
      }

      var link = closest(evt.target, 'dict-bb-link');
      if (link) {
        evt.preventDefault();
        sessionStorage.setItem('bb_exact', link.getAttribute('data-bb') || '');
        sessionStorage.setItem('bb_id', link.getAttribute('data-bb-id') || '');
        sessionStorage.setItem('bb_type', link.getAttribute('data-bb-type') || '');
        window.location.href = link.getAttribute('href');
      }
    });

    container.addEventListener('keydown', function (evt) {
      var item = closest(evt.target, 'dict-related-item');
      if (item && (evt.key === 'Enter' || evt.key === ' ')) {
        evt.preventDefault();
        var target = item.getAttribute('data-word');
        if (target) jumpToWord(target);
      }
    });
  }

  function closest(el, cls) {
    while (el && el !== document) {
      if (el.classList && el.classList.contains(cls)) return el;
      el = el.parentNode;
    }
    return null;
  }

  function renderAll() {
    var gramSection = document.getElementById('dict-gram-section');
    var gramList = document.getElementById('dict-gram-list');
    var regList = document.getElementById('dict-regular-list');

    if (filteredGram.length === 0) {
      gramSection.style.display = 'none';
    } else {
      gramSection.style.display = '';
      gramList.innerHTML = filteredGram.map(renderGramEntry).join('');
    }

    if (filteredRegular.length === 0) {
      regList.innerHTML = '<p class="dict-empty">No results.</p>';
    } else {
      regList.innerHTML = filteredRegular.map(renderEntry).join('');
    }
  }

  function coreBadge(w) {
    return w && w.core ? '<span class="dict-core-badge" title="Core word">core</span>' : '';
  }

  function renderGramEntry(w) {
    var html = '<div class="dict-entry dict-entry-gram" id="entry-' + escAttr(w.w) + '">';
    html += '<span class="dict-word">' + esc(w.w) + '</span>' + coreBadge(w);
    html += ' <span class="dict-trans-inline">' + esc(w.e) + '</span>';
    if (w.usage) html += '<div class="dict-gram-usage">' + esc(w.usage) + '</div>';
    html += '</div>';
    return html;
  }

  function renderEntry(w) {
    var color = clusterColor(w.c);
    var html = '<div class="dict-entry" id="entry-' + escAttr(w.w) + '">';

    html += '<div class="dict-headword">';
    html += '<span class="dict-word">' + esc(w.w) + '</span>';
    if (w.c && w.c.trim()) {
      html += '<span class="dict-cluster-badge" style="border-color:' + escAttr(color) + ';color:' + escAttr(color) + '">' + esc(w.c.trim()) + '</span>';
    }
    html += coreBadge(w);
    html += '</div>';

    html += '<div class="dict-trans-primary">' + esc(w.e || '') + '</div>';
    if (w.ea && w.ea !== w.e) html += '<div class="dict-trans-all">' + esc(w.ea) + '</div>';

    if (w.bd && w.bd.length > 0) {
      html += '<div class="dict-breakdown">' + w.bd.map(renderBdPiece).join(' + ') + '</div>';
    }

    if (w.ex && w.ex.length > 0) html += renderExample(w.ex[0]);

    if (w.rel && w.rel.length > 0) {
      html += '<div class="dict-related"><span class="dict-rel-label">related words</span> ';
      html += w.rel.map(function (r) {
        return '<span class="dict-related-item" tabindex="0" role="button" data-word="' + escAttr(r) + '">' + esc(r) + '</span>';
      }).join(' ');
      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  function renderBdPiece(p) {
    var sound = esc(p.sound || '');
    var meaning = esc(p.meaning || '');
    if (p.bb_id || p.bb_href || p.bb_type) {
      var href = buildingBlocksPageUrl + (p.bb_id ? '#' + encodeURIComponent(p.bb_id) : '');
      return '<a href="' + escAttr(href) + '" data-bb="' + escAttr(p.sound || '') + '" data-bb-id="' + escAttr(p.bb_id || '') + '" data-bb-type="' + escAttr(p.bb_type || '') + '" class="dict-bb-link">' + sound + '</a> (' + meaning + ')';
    }
    return sound + ' (' + meaning + ')';
  }

  function renderExample(ex) {
    var html = '<div class="dict-example">';
    if (ex.o) html += '<span class="dict-ex-oravia">' + esc(ex.o) + '</span>';
    if (ex.g) html += '<br><span class="dict-ex-gloss">' + esc(ex.g) + '</span>';
    if (ex.e) html += '<span class="dict-ex-sep"> = </span><span class="dict-ex-english">' + esc(ex.e) + '</span>';
    html += '</div>';
    return html;
  }

  function updateCount() {
    var el = document.getElementById('dict-count');
    if (!el) return;
    var n = filteredGram.length + filteredRegular.length;
    var total = allGram.length + allRegular.length;
    el.textContent = n + ' / ' + total + ' entries';
  }

  function jumpToWord(word) {
    var search = document.getElementById('dict-search');
    var mode = document.getElementById('dict-mode');
    var cluster = document.getElementById('dict-cluster');
    var coreOnly = document.getElementById('dict-core-only');
    mode.value = 'oravia';
    cluster.value = 'all';
    if (coreOnly) coreOnly.checked = false;
    search.value = word;
    search.dispatchEvent(new Event('input'));
    setTimeout(function () {
      var el = document.getElementById('entry-' + word);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('dict-entry-highlight');
        setTimeout(function () { el.classList.remove('dict-entry-highlight'); }, 1800);
      }
    }, 50);
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
  }

  function escAttr(s) { return esc(s); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
