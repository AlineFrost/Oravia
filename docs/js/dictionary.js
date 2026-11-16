(function () {
  'use strict';

  console.log('Oravia dictionary.js loaded: 2026-11-15 extended search');

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
  var extendedEntries = [];
  var filteredExtended = [];
  var expressionWords = Object.create(null);
  var expressionBlocks = Object.create(null);
  var refreshSearch = function () {};
  var languageIndexes = {};
  var languagePromises = {};
  var languageErrors = {};
  // Foreign-language aliases are optional and loaded only when selected.
  // Source: Multilingualism, from Wiktionary contributors (CC BY-SA 4.0).
  var languageDataBase = 'https://cdn.jsdelivr.net/gh/MethodoxTech/Multilingualism@main/data/langs/';
  // Search modes remain first; additional languages appear by English name (A–Z).
  var SEARCH_LANGUAGES = [
    ['ar', 'Arabic (العربية)'],
    ['bn', 'Bengali (বাংলা)'],
    ['zh-Hans', 'Chinese, Simplified (简体中文)'],
    ['zh-Hant', 'Chinese, Traditional (繁體中文)'],
    ['nl', 'Dutch (Nederlands)'],
    ['eo', 'Esperanto'],
    ['fr', 'French (Français)'],
    ['de', 'German (Deutsch)'],
    ['hi', 'Hindi (हिन्दी)'],
    ['id', 'Indonesian (Bahasa Indonesia)'],
    ['it', 'Italian (Italiano)'],
    ['ja', 'Japanese (日本語)'],
    ['ko', 'Korean (한국어)'],
    ['fa', 'Persian (فارسی)'],
    ['pl', 'Polish (Polski)'],
    ['pt', 'Portuguese (Português)'],
    ['ru', 'Russian (Русский)'],
    ['es', 'Spanish (Español)'],
    ['sw', 'Swahili (Kiswahili)'],
    ['tl', 'Tagalog'],
    ['ta', 'Tamil (தமிழ்)'],
    ['te', 'Telugu (తెలుగు)'],
    ['th', 'Thai (ไทย)'],
    ['tr', 'Turkish (Türkçe)'],
    ['ur', 'Urdu (اردو)'],
    ['vi', 'Vietnamese (Tiếng Việt)']
  ];
  var scriptDir = getScriptDir();
  var dataUrl = resolveFromScript('../data/dictionary_data.json');
  var extendedDataUrl = resolveFromScript('../data/extended_search.json');
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
        buildExpressionIndexes();
        stats = computeStats(data);
        buildUI();
        var englishCount = document.getElementById('dict-english-count');
        if (englishCount) englishCount.textContent = 'loading…';
        bindControls();
        bindDelegation();
        renderAll();
        updateCount();
         applyIncomingWordTarget();
         // A missing extended file never prevents the official dictionary from working.
         fetch(extendedDataUrl, { cache: 'no-cache' })
           .then(function (r) {
             if (!r.ok) throw new Error('HTTP ' + r.status);
             return r.json();
           })
           .then(function (rows) {
             if (!Array.isArray(rows) || rows.some(function (x) {
               return !Array.isArray(x) || x.length < 2 || typeof x[0] !== 'string' || typeof x[1] !== 'string';
             })) throw new Error('Expected an array of [English, Oravia] pairs.');
             extendedEntries = rows;
             var count = document.getElementById('dict-english-count');
             if (count) count.textContent = String(computeEnglishEntryCount(extendedEntries));
             refreshSearch();
           })
           .catch(function (err) {
             console.warn('Optional extended search unavailable:', err);
             var count = document.getElementById('dict-english-count');
             if (count) count.textContent = String(computeEnglishEntryCount([])) + ' (extended unavailable)';
           });
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

  // Unique English search terms, including primary labels, synonyms and extended entries.
  function computeEnglishEntryCount(extra) {
    var seen = Object.create(null);
    function addTerms(s) {
      String(s || '').split(/[,/]/).forEach(function (part) {
        var word = part.trim().toLowerCase();
        if (word) seen[word] = true;
      });
    }
    allGram.concat(allRegular).forEach(function (w) {
      addTerms(w.e);
      addTerms(w.ea);
    });
    (extra || []).forEach(function (pair) { addTerms(pair[0]); });
    return Object.keys(seen).length;
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

     var languageOpts = '';
     SEARCH_LANGUAGES.forEach(function (item) {
       languageOpts += '<option value="' + escAttr(item[0]) + '">' + esc(item[1]) + '</option>';
     });

    var clusterOpts = '<option value="all">all clusters</option>';
    clusters.forEach(function (c) {
      clusterOpts += '<option value="' + esc(c) + '">' + esc(c) + '</option>';
    });

    container.innerHTML =
      '<div class="dict-controls">' +
        '<div class="dict-search-row">' +
          '<select id="dict-mode" class="dict-select dict-mode-toggle">' +
            '<option value="both">Oravia &amp; English</option>' +
            '<option value="oravia">Oravia</option>' +
            '<option value="en">English</option>' +
            languageOpts +
          '</select>' +
           '<input id="dict-search" type="text" class="dict-input" placeholder="Search…" autocomplete="off" />' +
        '</div>' +
        '<div class="dict-filter-row">' +
          '<select id="dict-cluster" class="dict-select">' + clusterOpts + '</select>' +
           '<label class="dict-core-label"><input id="dict-core-only" type="checkbox" /> Core only</label>' +
           '<label class="dict-core-label"><input id="dict-regex" type="checkbox" /> Regex</label>' +
          '<span id="dict-count" class="dict-count"></span>' +
        '</div>' +
        '<div class="dict-syllable-stats" style="font-size:0.72rem; margin-top:0.35rem; color:var(--md-default-fg-color);">' +
          'Syllable links: <strong>' + esc(pct(stats.linked, stats.total)) + '</strong> linked (' + stats.linked + '/' + stats.total + '), ' +
           '<strong>' + esc(pct(stats.unlinked, stats.total)) + '</strong> unlinked (' + stats.unlinked + '/' + stats.total + ').' +
           ' &nbsp; <strong id="dict-english-count">loading…</strong> entries.' +
        '</div>' +
         '<div id="dict-search-note" class="dict-count" role="status" aria-live="polite"></div>' +
       '</div>' +
       '<div id="dict-extended-section" style="display:none">' +
         '<div class="dict-section-header">Suggested expressions:</div>' +
         '<div id="dict-extended-list"></div>' +
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
      var regexEl = document.getElementById('dict-regex');
      var note = document.getElementById('dict-search-note');
      var raw = (search.value || '').trim();
      var q = raw.toLowerCase();
      var mode = modeEl.value;
      var cluster = clusterEl.value;
      var coreOnly = !!(coreEl && coreEl.checked);
      var lang = mode === 'both' || mode === 'oravia' || mode === 'en' ? 'en' : mode;
      var regex = null;
      note.textContent = '';
      if (raw && regexEl.checked) {
        try { regex = compileSearchRegex(raw); }
        catch (err) {
          filteredGram = []; filteredRegular = []; filteredExtended = [];
          renderAll(); updateCount();
          note.textContent = err.message;
          return;
        }
      }

      var foreignMatches = [];
      if (lang !== 'en') {
        if (languageIndexes[lang]) {
          foreignMatches = foreignEnglishMatches(lang, raw, regex);
        } else if (languageErrors[lang]) {
          note.textContent = 'Translations unavailable (' + lang + '). English and Oravia search still work.';
        } else {
          note.textContent = 'Loading ' + lang + ' search data…';
        }
      }

      // For 1–2-letter searches, match complete words rather than substrings.
      var shortQuery = !!raw && !regex && Array.from(raw).length <= 2;

      filteredGram = allGram.filter(function (w) {
        if (coreOnly && !w.core) return false;
        if (!q) return true;
        return matchesSearch(w, q, mode, regex, foreignMatches, shortQuery);
      });

      filteredRegular = allRegular.filter(function (w) {
        if (coreOnly && !w.core) return false;
        if (cluster !== 'all' && (w.c || '').trim() !== cluster) return false;
        if (!q) return true;
        return matchesSearch(w, q, mode, regex, foreignMatches, shortQuery);
      });

      // Longer searches and explicit regex retain their previous behavior.
      filteredExtended = (!raw || coreOnly || cluster !== 'all') ? [] : extendedEntries.filter(function (pair) {
        var english = pair[0], oravia = pair[1];
        var inOravia = shortQuery ? matchesOraviaComponent(oravia, q) : matchesOraviaText(oravia, q, regex);
        var inEnglish = regex ? regex.test(english) : (shortQuery ? matchesWholeWord(english, q) : foldSearch(english).indexOf(foldSearch(q)) !== -1);
        if (mode === 'oravia') return inOravia;
        if (mode === 'en') return inEnglish;
        if (mode === 'both') return inOravia || inEnglish;
        return foreignMatches.some(function (head) { return foldSearch(english) === head; });
      });
      // Exact headwords first while preserving the file order otherwise.
      filteredExtended.sort(function (a, b) {
        function rank(x) {
          var query = foldSearch(raw);
          if (foldSearch(x[0]) === query || foldSearch(x[1]) === query) return 0;
          if (foreignMatches.indexOf(foldSearch(x[0])) >= 0) return 1;
          return 2;
        }
        return rank(a) - rank(b);
      });

      renderAll();
      updateCount();
    }

    refreshSearch = update;
    document.getElementById('dict-search').addEventListener('input', update);
    document.getElementById('dict-mode').addEventListener('change', function () {
      loadLanguage(this.value);
      update();
    });
    document.getElementById('dict-cluster').addEventListener('change', update);
    document.getElementById('dict-regex').addEventListener('change', update);
    var coreOnly = document.getElementById('dict-core-only');
    if (coreOnly) coreOnly.addEventListener('change', update);
  }

  function foldSearch(value) {
    // Fold diacritics only on Latin letters; do not strip Hindi/Arabic vowel signs.
    return String(value == null ? '' : value).normalize('NFKC').toLowerCase()
      .normalize('NFD').replace(/([a-z])([\u0300-\u036f]+)/g, '$1').normalize('NFC').trim();
  }

  function compileSearchRegex(raw) {
    if (raw.length > 100) throw new Error('Regex must be 100 characters or shorter.');
    if (/\([^)]*[+*}][^)]*\)[+*{]/.test(raw)) throw new Error('Nested repetitions are not supported in regex search.');
    try { return new RegExp(raw, 'iu'); }
    catch (err) { throw new Error('Invalid regex: ' + err.message); }
  }

  // Resolve a derived Oravia form only to meanings attested in the official
  // dictionary and its building-block breakdowns. Keep exact entries first.
  // Transformations are retained so the click explanation preserves inflection.
  function resolveOraviaForm(term) {
    var word = foldSearch(term);
    if (expressionWords[word] || expressionBlocks[word]) return { base: word, changes: [] };
    var pending = [{ form: word, changes: [] }];
    var tried = Object.create(null);
    tried[word] = true;
    var suffixes = ['um', 'ar', 'is', 'jor', 'jal', 's'];
    while (pending.length) {
      var state = pending.shift();
      var candidates = [];
      suffixes.forEach(function (suffix) {
        if (state.form.length > suffix.length && state.form.slice(-suffix.length) === suffix) {
          candidates.push({ form: state.form.slice(0, -suffix.length),
            changes: state.changes.concat([{ kind: 'suffix', value: suffix }]) });
        }
      });
      if (state.form.length > 4 && (state.form.slice(0, 2) === 'ti' || state.form.slice(0, 2) === 'el')) {
        candidates.push({ form: state.form.slice(2),
          changes: state.changes.concat([{ kind: 'prefix', value: state.form.slice(0, 2) }]) });
      }
      for (var i = 0; i < candidates.length; i++) {
        var candidate = candidates[i];
        if (tried[candidate.form]) continue;
        if (expressionWords[candidate.form] || expressionBlocks[candidate.form]) {
          return { base: candidate.form, changes: candidate.changes };
        }
        tried[candidate.form] = true;
        pending.push(candidate);
      }
    }
    return { base: word, changes: [] };
  }

  function oraviaBaseForm(term) {
    return resolveOraviaForm(term).base;
  }

  function matchesOraviaText(text, query, regex) {
    if (regex) return regex.test(text || '');
    var original = foldSearch(query);
    var haystack = foldSearch(text);
    if (haystack.indexOf(original) !== -1) return true;
    // Search an inflected form by the attested underlying word or syllable.
    var base = oraviaBaseForm(original);
    return base !== original && haystack.indexOf(base) !== -1;
  }

  function matchesOraviaComponent(text, query) {
    return String(text || '').match(/'?\p{L}[\p{L}\p{M}]*/gu)?.some(function (component) {
      return foldSearch(component) === foldSearch(query);
    }) || false;
  }

  // Short queries must match a complete written word, e.g. "to" not "unto".
  function matchesWholeWord(text, query) {
    var target = foldSearch(query);
    return (foldSearch(text).match(/[\p{L}\p{M}\p{N}]+/gu) || []).some(function (word) {
      return word === target;
    });
  }

  function matchesSearch(w, q, mode, regex, foreignMatches, shortQuery) {
    // Match only the Oravia headword and its official English definitions.
    // Examples, usages, clusters, syllable breakdowns and search_terms are
    // displayed with results, but must not cause an entry to match.
    var oraviaMatch = shortQuery ? matchesOraviaComponent(w.w || '', q) : matchesOraviaText(w.w || '', q, regex);
    var meanings = [w.e, w.ea].filter(Boolean);
    var englishMatch = shortQuery
      ? matchesWholeWord(meanings.join(' '), q)
      : meanings.some(function (meaning) {
          return regex ? regex.test(meaning) : foldSearch(meaning).indexOf(foldSearch(q)) !== -1;
        });
    if (mode === 'oravia') return oraviaMatch;
    if (mode === 'en') return englishMatch;
    if (mode === 'both') return oraviaMatch || englishMatch;
    // Foreign-language matches correspond to full official English meanings.
    return foreignMatches.length > 0 && foreignMatches.some(function (english) {
      return meanings.some(function (meaning) {
        return String(meaning).split(/[,/]/).some(function (term) {
          return foldSearch(term) === english;
        });
      });
    });
  }

  function foreignEnglishMatches(lang, raw, regex) {
    if (!raw) return [];
    var query = foldSearch(raw);
    var matches = [];
    var rows = languageIndexes[lang] || [];
    for (var i = 0; i < rows.length; i++) {
      var forms = rows[i].forms;
      var found = forms.some(function (form) {
        return regex ? regex.test(form) : (Array.from(raw).length <= 2 ? foldSearch(form) === query : foldSearch(form).indexOf(query) !== -1);
      });
      if (found) matches.push(rows[i].english);
      if (matches.length >= 80) break;
    }
    return matches;
  }

  function loadLanguage(lang) {
    if (lang === 'en' || lang === 'both' || lang === 'oravia' || languageIndexes[lang] || languagePromises[lang]) return;
    languagePromises[lang] = fetch(languageDataBase + encodeURIComponent(lang) + '.json')
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .then(function (data) {
        // Each file is { code, name, native, columns, rows }; rows are [slug, translation, romanization, machine].
        var rows = Array.isArray(data) ? data : (data && Array.isArray(data.rows) ? data.rows : null);
        if (!rows) throw new Error('Invalid language index');
        languageIndexes[lang] = rows.map(function (r) {
          if (!Array.isArray(r)) return null;
          var terms = [];
          function add(item) {
            if (!item) return;
            if (typeof item === 'string') { terms.push(item); return; }
            if (Array.isArray(item)) { item.forEach(add); return; }
            if (typeof item === 'object') { add(item.w); add(item.r); add(item.k); }
          }
          add(r[1]); add(r[2]);
          return { english: foldSearch(String(r[0] || '').replace(/_/g, ' ')), forms: terms };
        }).filter(function (r) { return r && r.english && r.forms.length; });
        delete languageErrors[lang];
        refreshSearch();
      })
      .catch(function (err) {
        delete languagePromises[lang];
        languageErrors[lang] = err.message;
        console.warn('Multilingual index unavailable for ' + lang, err);
        refreshSearch();
      });
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
      var component = closest(evt.target, 'dict-expression-word');
      if (component) {
        var card = closest(component, 'dict-entry-extended');
        var definition = card && card.querySelector('.dict-expression-definition');
        if (definition) {
          var isOpen = component.getAttribute('aria-expanded') === 'true';
          card.querySelectorAll('.dict-expression-word').forEach(function (btn) {
            btn.setAttribute('aria-expanded', 'false');
          });
          if (isOpen) {
            definition.style.display = 'none';
          } else {
            var term = component.getAttribute('data-word') || '';
            var info = explainExpressionWord(term);
            definition.textContent = term + ' — ' + info.description;
            if (info.dictionaryWord) {
              var wordLink = document.createElement('a');
              wordLink.href = '#entry-' + encodeURIComponent(info.dictionaryWord);
              wordLink.className = 'dict-expression-source-word';
              wordLink.setAttribute('data-word', info.dictionaryWord);
              wordLink.textContent = '. view dictionary entry';
              definition.appendChild(wordLink);
            } else if (info.bbId) {
              var blockLink = document.createElement('a');
              blockLink.href = buildingBlocksPageUrl + '#' + encodeURIComponent(info.bbId);
              blockLink.className = 'dict-bb-link';
              blockLink.setAttribute('data-bb', term);
              blockLink.setAttribute('data-bb-id', info.bbId);
              blockLink.setAttribute('data-bb-type', info.bbType || '');
              blockLink.textContent = '. view building block';
              definition.appendChild(blockLink);
            }
            definition.style.display = '';
            component.setAttribute('aria-expanded', 'true');
          }
        }
        return;
      }
      var sourceWord = closest(evt.target, 'dict-expression-source-word');
      if (sourceWord) {
        evt.preventDefault();
        jumpToWord(sourceWord.getAttribute('data-word') || '');
        return;
      }
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
     var extendedSection = document.getElementById('dict-extended-section');
     var extendedList = document.getElementById('dict-extended-list');
     if (filteredExtended.length) {
       extendedSection.style.display = '';
       extendedList.innerHTML = filteredExtended.map(renderExtendedEntry).join('');
     } else {
       extendedSection.style.display = 'none';
       extendedList.innerHTML = '';
     }

    if (filteredGram.length === 0) {
      gramSection.style.display = 'none';
    } else {
      gramSection.style.display = '';
      gramList.innerHTML = filteredGram.map(renderGramEntry).join('');
    }

     if (filteredRegular.length === 0) {
       regList.innerHTML = filteredGram.length || filteredExtended.length ? '' : '<p class="dict-empty">No results.</p>';
    } else {
      regList.innerHTML = filteredRegular.map(renderEntry).join('');
    }
  }

  function renderExtendedEntry(pair) {
    // Keep existing cards. Suggested expressions are not bold dictionary headwords.
    return '<div class="dict-entry dict-entry-extended">' +
      '<div class="dict-trans-primary">' + esc(pair[0]) + '</div>' +
      '<div class="dict-headword"><span lang="art-x-oravia" translate="no" style="font-weight:400">' + renderExpressionWords(pair[1]) + '</span></div>' +
      '<div class="dict-expression-definition" role="status" aria-live="polite" style="display:none;font-size:0.85em;margin-top:0.35rem;font-weight:400"></div>' +
      '</div>';
  }

  // Suffixes written on their own in an expression, e.g. "-ar noli", "tam ganter -is".
  var SUFFIX_MEANINGS = { '-ar': 'completed (suffix)', '-is': 'prospective (suffix)', '-um': 'negative (suffix)' };

  function renderExpressionWords(expression) {
    // Keep multiword imports as one clickable name ('phoenix dactylifera).
    // Stop at known Oravia words, so e.g. 'linum ye still explains ye separately.
    var pieces = String(expression || '').split(/('?[\p{L}][\p{L}\p{M}]*)/u);
    // The import prefix itself is not a component of the dictionary.
    function knownWord(word) {
      var base = oraviaBaseForm(word);
      return !!(expressionWords[base] || expressionBlocks[base]);
    }
    function button(word, label) {
      return '<button type="button" class="dict-expression-word" data-word="' + escAttr(word) +
        '" aria-label="Show meaning of ' + escAttr(label) + '" aria-expanded="false" ' +
        'style="font:inherit;font-weight:400;color:inherit;background:none;border:0;border-bottom:1px dotted currentColor;border-radius:0;padding:0 1px;margin:0;cursor:pointer;text-align:inherit">' +
        esc(label) + '</button>';
    }
    var html = '';
    for (var i = 0; i < pieces.length; i++) {
      var piece = pieces[i];
      if (!/^'?\p{L}/u.test(piece)) { html += esc(piece); continue; }
      if (piece.charAt(0) === "'") {
        var imported = piece;
        // Unknown words directly following the import marker are part of its name.
        while (i + 2 < pieces.length && /^[\s.]+$/.test(pieces[i + 1]) &&
               /^\p{L}/u.test(pieces[i + 2]) && !knownWord(pieces[i + 2])) {
          imported += pieces[i + 1] + pieces[i + 2];
          i += 2;
        }
        html += button(imported, imported);
      } else {
        var prev = i > 0 ? pieces[i - 1] : '';
        var suffix = '-' + piece.toLowerCase();
        var word = (/(^|[\s;])-$/.test(prev) && SUFFIX_MEANINGS[suffix]) ? suffix : piece;
        html += button(word, piece);
      }
    }
    return html;
  }

  function buildExpressionIndexes() {
    // These are the ONLY sources for explanations: official headwords and
    // the recorded syllable/building-block breakdowns in dictionary_data.json.
    expressionWords = Object.create(null);
    expressionBlocks = Object.create(null);
    allGram.concat(allRegular).forEach(function (w) {
      var key = foldSearch(w.w);
      if (key && !expressionWords[key]) expressionWords[key] = w;
      (w.bd || []).concat(w.syllable_meanings || []).forEach(function (part) {
        var sound = foldSearch(part.sound);
        var meaning = part.meaning || part.bb_meaning;
        if (!sound || !meaning) return;
        if (!expressionBlocks[sound]) expressionBlocks[sound] = [];
        var record = {
          meaning: meaning,
          bbType: part.bb_type || '',
          bbId: part.bb_id || '',
          fromWord: w.w
        };
        // Deduplicate identical source senses, not their meanings.
        if (!expressionBlocks[sound].some(function (p) {
          return p.meaning === record.meaning && p.bbType === record.bbType && p.bbId === record.bbId;
        })) expressionBlocks[sound].push(record);
      });
    });
  }

  // Apply only documented grammatical markers to recorded headword/block
  // meanings. Never take a definition from extended English suggestions.
  function expressionMeaningWithInflection(resolved, recordedMeaning) {
    var meaning = recordedMeaning;
    // Changes were removed from outside in, so apply them from inside out.
    for (var i = resolved.changes.length - 1; i >= 0; i--) {
      var change = resolved.changes[i];
      if (change.kind === 'suffix') {
        if (change.value === 'um') meaning = 'not (' + meaning + ')';
        else if (change.value === 'ar') meaning = 'completed (' + meaning + ')';
        else if (change.value === 'is') meaning = 'prospective (' + meaning + ')';
        else if (change.value === 'jor') meaning = 'female (' + meaning + ')';
        else if (change.value === 'jal') meaning = 'male (' + meaning + ')';
        // -s marks the nonfinal element of a compound; it does not change
        // the component's lexical meaning, so no added label is necessary.
      } else if (change.kind === 'prefix') {
        // Use the recorded building-block meaning, not a guessed definition
        // of the full expression.
        var records = expressionBlocks[change.value] || [];
        var prefixMeanings = [];
        records.forEach(function (part) {
          if (part.meaning && prefixMeanings.indexOf(part.meaning) === -1) {
            prefixMeanings.push(part.meaning);
          }
        });
        if (prefixMeanings.length) meaning = prefixMeanings.join('; ') + ' + ' + meaning;
      }
    }
    return meaning;
  }

  function explainExpressionWord(term) {
    if (SUFFIX_MEANINGS[term]) return { description: SUFFIX_MEANINGS[term] };
    if (String(term).charAt(0) === "'") return { description: 'import (proper or technical name)' };
    var original = foldSearch(term);
    var resolved = resolveOraviaForm(original);
    var key = resolved.base;
    // Inflected forms use the recorded base word with the documented markers.
    var entry = expressionWords[key];
    if (entry) {
      return {
        description: expressionMeaningWithInflection(resolved, ((entry.ea && entry.ea !== entry.e) ? entry.ea : entry.e) || entry.usage || ''),
        dictionaryWord: entry.w
      };
    }

    // A syllable can have more than one recorded sense or grammatical role.
    // Show all distinct senses WITH their role, rather than choosing or guessing.
    var parts = (expressionBlocks[key] || []).slice();
    if (parts.length) {
      parts.sort(function (a, b) {
        var ar = a.bbType === 'root' ? 0 : a.bbType === 'subcluster' ? 1 : 2;
        var br = b.bbType === 'root' ? 0 : b.bbType === 'subcluster' ? 1 : 2;
        return ar - br;
      });
      var labels = [];
      parts.forEach(function (p) {
        var label = p.meaning;
        if (labels.indexOf(label) === -1) labels.push(label);
      });
      var referenced = parts.find(function (p) { return p.bbId; });
      return {
        description: expressionMeaningWithInflection(resolved, labels.join('; ')),
        bbId: referenced ? referenced.bbId : '',
        bbType: referenced ? referenced.bbType : ''
      };
    }
    return { description: '—' };
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
     el.textContent = n + ' / ' + total + ' words' + (filteredExtended.length ? ' · ' + filteredExtended.length + ' extended' : '');
  }

  function jumpToWord(word) {
    var search = document.getElementById('dict-search');
    var mode = document.getElementById('dict-mode');
    var cluster = document.getElementById('dict-cluster');
     var coreOnly = document.getElementById('dict-core-only');
     var regex = document.getElementById('dict-regex');
     if (regex) regex.checked = false;
     mode.value = 'oravia';
    cluster.value = 'all';
    if (coreOnly) coreOnly.checked = false;
    search.value = word;
    search.dispatchEvent(new Event('input'));
    setTimeout(function () {
      var el = document.getElementById('entry-' + word);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
