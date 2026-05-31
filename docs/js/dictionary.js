(function () {
  'use strict';

  var CLUSTER_COLORS = {
    "volitional action": "#5b6af0", "physical action": "#f07a5b", "bodily actions": "#e8a857",
    "travel": "#5bbff0", "house": "#7ac85b", "create": "#c85bd4", "communication": "#5bd4c8",
    "evaluate": "#d4b05b", "regulations": "#8c7af0", "wonder": "#f0c85b", "social": "#5bf07a",
    "family": "#f05b8c", "compare": "#5b8cf0", "finances": "#f0d45b", "fiction trope": "#a05bf0",
    "inquire": "#5bc8f0", "tools": "#c8a05b", "geometrics": "#7af05b", "materials": "#f05b5b",
    "environment": "#5bd46b", "time": "#7a8cf0", "weather": "#5bb8f0", "bigger animals": "#c8785b",
    "smaller animals": "#d4a07a", "eating and drinking": "#f07a7a", "cooking food": "#e8855b",
    "music": "#a87af0", "fun": "#f07ab8", "harm": "#e84040", "suffer": "#c05870",
    "suffering": "#c05870",
    "conflict": "#d04040", "body parts": "#7ab8e8", "health": "#7ad4a0", "interior body": "#a07ad4",
    "hygiene": "#7ad4c8", "sea": "#5b9cf0", "geography": "#5bc8d4", "objective qualities": "#c8b87a",
    "subjective qualities": "#d4987a", "clothing": "#d480d4", "colors": "#f07060",
    "society": "#78a8e8", "government": "#5878d4", "knowledge": "#e8c860", "machine": "#788898",
    "process": "#8898b8", "components": "#a878c8", "number": "#a8a8a8", "quantifiers": "#88c880",
    "function words": "#a8b8c8"
  };

  function clusterColor(c) {
    return CLUSTER_COLORS[(c || '').trim().toLowerCase()] || '#9a9a9a';
  }

  var allGram    = [];
  var allRegular = [];
  var filteredGram    = [];
  var filteredRegular = [];
  var bbSounds   = [];

  function init() {
    var container = document.getElementById('oravia-dictionary');
    if (!container) return;

    fetch('/data/dictionary_data.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        allGram    = data.filter(function (w) { return w.type === 'gram'; });
        allRegular = data.filter(function (w) { return !w.type; });
        filteredGram    = allGram.slice();
        filteredRegular = allRegular.slice();

        // Load bb sounds non-blocking for link rendering
        fetch('/data/building_blocks.json')
          .then(function(r) { return r.json(); })
          .then(function(bb) { bbSounds = bb.map(function(b){ return b.sound; }); })
          .catch(function() {});

        buildUI();
        bindControls();
        bindDelegation();
        renderAll();
        updateCount();
      })
      .catch(function () {
        container.innerHTML = '<p style="color:red">Failed to load dictionary data.</p>';
      });
  }

  function buildUI() {
    var container = document.getElementById('oravia-dictionary');

    var clusters = [];
    var seen = {};
    for (var i = 0; i < allRegular.length; i++) {
      var c = (allRegular[i].c || '').trim();
      if (c && !seen[c]) { seen[c] = true; clusters.push(c); }
    }
    clusters.sort();

    var clusterOpts = '<option value="all">all clusters</option>';
    for (var j = 0; j < clusters.length; j++) {
      clusterOpts += '<option value="' + esc(clusters[j]) + '">' + esc(clusters[j]) + '</option>';
    }

    container.innerHTML =
      '<div class="dict-controls">' +
        '<div class="dict-search-row">' +
          '<select id="dict-mode" class="dict-select dict-mode-toggle">' +
            '<option value="oravia">Oravia ›</option>' +
            '<option value="english">‹ English</option>' +
          '</select>' +
          '<input id="dict-search" type="text" class="dict-input" placeholder="Search…" autocomplete="off" />' +
        '</div>' +
        '<div class="dict-filter-row">' +
          '<select id="dict-cluster" class="dict-select">' + clusterOpts + '</select>' +
          '' +
          '<span id="dict-count" class="dict-count"></span>' +
        '</div>' +
      '</div>' +
      '<div id="dict-gram-section">' +
        '<div class="dict-section-header">Grammar &amp; Particles</div>' +
        '<div id="dict-gram-list"></div>' +
      '</div>' +
      '<div class="dict-section-divider"></div>' +
      '<div id="dict-regular-list"></div>' +
'';
  }

  function bindControls() {
    function update() {
      var q        = (document.getElementById('dict-search').value || '').toLowerCase().trim();
      var mode     = document.getElementById('dict-mode').value;
      var cluster  = document.getElementById('dict-cluster').value;
      filteredGram = allGram.filter(function (w) {
        if (!q) return true;
        if (mode === 'oravia') return w.w.indexOf(q) !== -1;
        return (w.e + ' ' + (w.usage || '')).toLowerCase().indexOf(q) !== -1;
      });

      filteredRegular = allRegular.filter(function (w) {
        if (cluster !== 'all' && (w.c || '').trim() !== cluster) return false;
        if (!q) return true;
        if (mode === 'oravia') return w.w.indexOf(q) !== -1;
        var bdText = (w.bd || []).map(function(p){ return p.meaning; }).join(' ');
        return (w.e + ' ' + (w.ea || '') + ' ' + bdText).toLowerCase().indexOf(q) !== -1;
      });

      renderAll();
      updateCount();
    }

    document.getElementById('dict-search').addEventListener('input', update);
    document.getElementById('dict-mode').addEventListener('change', update);
    document.getElementById('dict-cluster').addEventListener('change', update);
  }

  function bindDelegation() {
    var container = document.getElementById('oravia-dictionary');
    container.addEventListener('click', function (evt) {
      var item = evt.target;
      if (item.classList.contains('dict-related-item')) {
        var target = item.getAttribute('data-word');
        if (target) jumpToWord(target);
      }
    });
    container.addEventListener('keydown', function (evt) {
      var item = evt.target;
      if (item.classList.contains('dict-related-item')) {
        if (evt.key === 'Enter' || evt.key === ' ') {
          evt.preventDefault();
          var target = item.getAttribute('data-word');
          if (target) jumpToWord(target);
        }
      }
    });

    // Click on breakdown sound → go to building blocks page filtered to that sound
    container.addEventListener('click', function (evt) {
      var link = evt.target.closest('.dict-bb-link');
      if (link) {
        evt.preventDefault();
        sessionStorage.setItem('bb_exact', link.getAttribute('data-bb'));
        window.location.href = link.getAttribute('href');
      }
    });
  }

  function renderAll() {
    var gramSection   = document.getElementById('dict-gram-section');
    var gramList      = document.getElementById('dict-gram-list');
    var regList       = document.getElementById('dict-regular-list');

    // Grammar section
    if (filteredGram.length === 0) {
      gramSection.style.display = 'none';
    } else {
      gramSection.style.display = '';
      var gh = '';
      for (var i = 0; i < filteredGram.length; i++) gh += renderGramEntry(filteredGram[i]);
      gramList.innerHTML = gh;
    }

    // Regular section
    if (filteredRegular.length === 0) {
      regList.innerHTML = '<p class="dict-empty">No results.</p>';
    } else {
      var rh = '';
      for (var j = 0; j < filteredRegular.length; j++) rh += renderEntry(filteredRegular[j]);
      regList.innerHTML = rh;
    }


  }

  function renderGramEntry(w) {
    var html = '<div class="dict-entry dict-entry-gram" id="entry-' + w.w + '">';
    html += '<span class="dict-word">' + esc(w.w) + '</span>';
    html += ' <span class="dict-trans-inline">' + esc(w.e) + '</span>';
    if (w.usage) html += '<div class="dict-gram-usage">' + esc(w.usage) + '</div>';
    html += '</div>';
    return html;
  }


  function renderEntry(w) {
    var color = clusterColor(w.c);
    var html  = '<div class="dict-entry" id="entry-' + w.w + '">';

    // headword + cluster badge
    html += '<div class="dict-headword">';
    html += '<span class="dict-word">' + esc(w.w) + '</span>';
    if (w.c && w.c.trim()) {
      html += '<span class="dict-cluster-badge" style="border-color:' + color + ';color:' + color + '">' + esc(w.c.trim()) + '</span>';
    }
    html += '</div>';

    // primary translation
    html += '<div class="dict-trans-primary">' + esc(w.e) + '</div>';

    // all meanings
    if (w.ea && w.ea !== w.e) {
      html += '<div class="dict-trans-all">' + esc(w.ea) + '</div>';
    }

    // component breakdown
    if (w.bd && w.bd.length > 0) {
      var bdParts = w.bd.map(function (p) {
        var isInBB = bbSounds.indexOf(p.sound) !== -1;
        var soundStr = isInBB
          ? '<a href="/content/building_blocks/" data-bb="' + esc(p.sound) + '" class="dict-bb-link">' + esc(p.sound) + '</a>'
          : esc(p.sound);
        return soundStr + ' (' + esc(p.meaning) + ')';
      });
      html += '<div class="dict-breakdown">' + bdParts.join(' + ') + '</div>';
    }

    // example sentence with gloss
    if (w.ex && w.ex.length > 0) {
      var ex = w.ex[0];
      html += '<div class="dict-example">';
      html += '<span class="dict-ex-oravia">' + esc(ex.o) + '</span>';
      if (ex.g) {
        html += '<br><span class="dict-ex-gloss">' + esc(ex.g) + '</span>';
      }
      html += '<span class="dict-ex-sep"> = </span>';
      html += '<span class="dict-ex-english">' + esc(ex.e) + '</span>';
      html += '</div>';
    }

    // related words
    if (w.rel && w.rel.length > 0) {
      var relHtml = w.rel.map(function (r) {
        return '<span class="dict-related-item" data-word="' + r + '" role="button" tabindex="0">' + esc(r) + '</span>';
      }).join('');
      html += '<div class="dict-related"><span class="dict-rel-label">related words</span> ' + relHtml + '</div>';
    }

    html += '</div>';
    return html;
  }

  function jumpToWord(word) {
    var el = document.getElementById('entry-' + word);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      highlight(el);
      return;
    }
    // Clear filters and retry
    document.getElementById('dict-search').value  = '';
    document.getElementById('dict-mode').value    = 'oravia';
    document.getElementById('dict-cluster').value = 'all';
    filteredGram    = allGram.slice();
    filteredRegular = allRegular.slice();
    renderAll();
    updateCount();
    setTimeout(function () {
      var target = document.getElementById('entry-' + word);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        highlight(target);
      }
    }, 50);
  }

  function highlight(el) {
    el.classList.add('dict-entry-highlight');
    setTimeout(function () { el.classList.remove('dict-entry-highlight'); }, 1800);
  }

  function updateCount() {
    var el = document.getElementById('dict-count');
    if (el) el.textContent = (filteredGram.length + filteredRegular.length) + ' / ' + (allGram.length + allRegular.length);
  }

  function esc(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
