# Semantic Explorer (beta)

Explore Oravia vocabulary by sound and cluster. Click a letter to begin.

<style>
#lex-exp { font-family: inherit; margin-top: 1.2rem; }

#lex-exp .lex-letters {
  display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1.4rem;
}
#lex-exp .lex-letter {
  padding: 4px 11px; border: 2px solid #4a9cd6 !important; border-radius: 5px;
  cursor: pointer; font-size: 0.92rem; font-weight: 700;
  color: #1a5a8a !important; background: #f0f7ff !important; line-height: 1.5;
  transition: background 0.1s, color 0.1s;
  font-family: inherit; box-shadow: none !important;
}
#lex-exp .lex-letter:hover { background: #d6edfb !important; }
#lex-exp .lex-letter.active {
  background: #1a5a8a !important; color: #fff !important;
  border-color: #1a5a8a !important;
}

#lex-exp .lex-breadcrumb {
  font-size: 0.82rem; color: #5a8bb8; margin-bottom: 1rem;
  min-height: 1.3em; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
}
#lex-exp .lex-crumb { cursor: pointer; color: #4a9cd6; }
#lex-exp .lex-crumb:hover { text-decoration: underline; }
#lex-exp .lex-crumb-sep { color: #bbb; }
#lex-exp .lex-crumb-current { color: #1a5a8a; font-weight: 600; cursor: default; }

#lex-exp .lex-section { margin-bottom: 1.2rem; }
#lex-exp .lex-section-label {
  font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.07em;
  color: #7aaccc; font-weight: 700; margin-bottom: 0.55rem;
}
#lex-exp .lex-row { display: flex; flex-wrap: wrap; gap: 7px; }

#lex-exp .lex-btn {
  padding: 6px 14px 7px; border: 2px solid #4a9cd6 !important; border-radius: 7px;
  cursor: pointer; background: #f0f7ff !important; text-align: left;
  transition: background 0.12s; font-family: inherit; min-width: 60px;
  box-shadow: none !important;
}
#lex-exp .lex-btn:hover { background: #d6edfb !important; }
#lex-exp .lex-btn.active {
  background: #1a5a8a !important; border-color: #1a5a8a !important;
}
#lex-exp .lex-btn .bs {
  display: block; font-weight: 700; font-size: 0.95rem;
  color: #1a5a8a; line-height: 1.2;
}
#lex-exp .lex-btn .bm {
  display: block; font-size: 0.72rem; color: #5a8bb8;
  margin-top: 2px; line-height: 1.2;
}
#lex-exp .lex-btn.active .bs { color: #fff; }
#lex-exp .lex-btn.active .bm { color: #a8d4ee; }

#lex-exp .lex-words-wrap { margin-top: 0.3rem; }
#lex-exp .lex-words-header {
  font-size: 0.82rem; color: #5a8bb8; margin-bottom: 0.7rem;
  padding-bottom: 0.4rem; border-bottom: 1.5px solid #d3e8f7;
}
#lex-exp .lex-words-header strong { color: #1a5a8a; }
#lex-exp .lex-etym { font-size: 0.78rem; color: #7aaccc; font-style: italic; }
#lex-exp .lex-word-row {
  display: flex; align-items: baseline; padding: 5px 0;
  border-bottom: 1px solid #e8f4fb;
}
#lex-exp .lex-word-row:last-child { border-bottom: none; }
#lex-exp .lex-w-ov {
  font-weight: 600; color: #1a5a8a; min-width: 150px; font-size: 0.92rem;
}
#lex-exp .lex-w-en { color: #445566; font-size: 0.86rem; }
#lex-exp .lex-empty {
  color: #aaa; font-style: italic; font-size: 0.88rem; padding: 0.5rem 0;
}
</style>

<div id="lex-exp">
  <div class="lex-letters" id="lex-letters"></div>
  <div class="lex-breadcrumb" id="lex-bc"></div>
  <div id="lex-body"></div>
</div>

<script>
(function() {
  var baseUrl = window.location.origin;
  var subclusters = [];
  var state = { letter: null, prefix: null, sound: null };

  function groupBy(arr, fn) {
    var out = {};
    arr.forEach(function(r) {
      var k = fn(r);
      if (!out[k]) out[k] = [];
      out[k].push(r);
    });
    return out;
  }

  fetch(baseUrl + '/data/building_blocks.json')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      subclusters = data.filter(function(r) { return r.type === 'subcluster'; });
      init();
    })
    .catch(function() {
      document.getElementById('lex-body').innerHTML =
        '<p style="color:#f44336">Could not load vocabulary data.</p>';
    });

  function init() {
    var letterMap = groupBy(subclusters, function(r) {
      return r.sound[0].toUpperCase();
    });
    var lettersEl = document.getElementById('lex-letters');
    Object.keys(letterMap).sort().forEach(function(l) {
      var btn = document.createElement('button');
      btn.className = 'lex-letter';
      btn.textContent = l;
      btn.id = 'lbtn-' + l;
      btn.onclick = function() { selectLetter(l, letterMap); };
      lettersEl.appendChild(btn);
    });
  }

  function selectLetter(letter, letterMap) {
    state = { letter: letter, prefix: null, sound: null };
    document.querySelectorAll('.lex-letter').forEach(function(b) {
      b.classList.toggle('active', b.textContent === letter);
    });
    renderBreadcrumb(letterMap);
    renderPrefixes(letter, letterMap);
  }

  function renderPrefixes(letter, letterMap) {
    var subs = letterMap[letter];
    var groups = groupBy(subs, function(r) { return r.sound.slice(0, 2); });
    var sortedPrefixes = Object.keys(groups).sort();

    var html = '<div class="lex-section">';
    html += '<div class="lex-section-label">clusters</div>';
    html += '<div class="lex-row" id="lex-prefix-row">';
    sortedPrefixes.forEach(function(prefix) {
      var items = groups[prefix];
      var clusterNames = [];
      items.forEach(function(r) {
        if (clusterNames.indexOf(r.cluster) < 0) clusterNames.push(r.cluster);
      });
      html += '<button class="lex-btn" data-prefix="' + prefix + '"'
        + ' onclick="lexSelectPrefix(\'' + prefix + '\')">'
        + '<span class="bs">' + prefix.toUpperCase() + '</span>'
        + '<span class="bm">' + clusterNames.join(' / ') + '</span>'
        + '</button>';
    });
    html += '</div></div>';
    html += '<div id="lex-sub-section"></div>';
    html += '<div id="lex-words-section"></div>';
    document.getElementById('lex-body').innerHTML = html;
    window._lexLetterMap = letterMap;
  }

  window.lexSelectPrefix = function(prefix) {
    state.prefix = prefix;
    state.sound = null;
    var letterMap = window._lexLetterMap;
    renderBreadcrumb(letterMap);

    document.querySelectorAll('#lex-prefix-row .lex-btn').forEach(function(b) {
      b.classList.toggle('active', b.dataset.prefix === prefix);
    });

    var matchSubs = subclusters.filter(function(r) {
      return r.sound[0].toUpperCase() === state.letter && r.sound.startsWith(prefix);
    }).sort(function(a, b) { return a.sound.localeCompare(b.sound); });

    var subsSection = document.getElementById('lex-sub-section');
    var wordsSection = document.getElementById('lex-words-section');
    wordsSection.innerHTML = '';

    if (matchSubs.length === 1) {
      state.sound = matchSubs[0].sound;
      subsSection.innerHTML = '';
      renderWords(matchSubs[0]);
    } else {
      var html = '<div class="lex-section">';
      html += '<div class="lex-section-label">subclusters</div>';
      html += '<div class="lex-row" id="lex-sound-row">';
      matchSubs.forEach(function(r) {
        html += '<button class="lex-btn" data-sound="' + r.sound + '"'
          + ' onclick="lexSelectSound(\'' + r.sound + '\')">'
          + '<span class="bs">' + r.sound + '</span>'
          + '<span class="bm">' + r.meaning + '</span>'
          + '</button>';
      });
      html += '</div></div>';
      subsSection.innerHTML = html;
    }
    renderBreadcrumb(letterMap);
  };

  window.lexSelectSound = function(sound) {
    state.sound = sound;
    var letterMap = window._lexLetterMap;

    document.querySelectorAll('#lex-sound-row .lex-btn').forEach(function(b) {
      b.classList.toggle('active', b.dataset.sound === sound);
    });

    var sub = subclusters.find(function(r) { return r.sound === sound; });
    renderWords(sub);
    renderBreadcrumb(letterMap);
  };

  function renderWords(sub) {
    var el = document.getElementById('lex-words-section');
    if (!sub || !sub.oravia || sub.oravia.length === 0) {
      el.innerHTML = '<p class="lex-empty">No words listed for this subcluster yet.</p>';
      return;
    }
    var etymSnippet = '';
    if (sub.etymology) {
      var first = sub.etymology.split(';')[0].replace(/^[★\s]+/, '').trim();
      if (first) etymSnippet = '<span class="lex-etym">' + first + '</span>';
    }
    var html = '<div class="lex-words-wrap">';
    html += '<div class="lex-words-header">'
      + '<strong>' + sub.sound + '</strong> &mdash; ' + sub.meaning
      + ' &nbsp;&middot;&nbsp; ' + sub.oravia.length + ' words'
      + (etymSnippet ? '<br>' + etymSnippet : '') + '</div>';
    sub.oravia.forEach(function(word, i) {
      html += '<div class="lex-word-row">'
        + '<span class="lex-w-ov">' + word + '</span>'
        + '<span class="lex-w-en">' + (sub.english[i] || '') + '</span>'
        + '</div>';
    });
    html += '</div>';
    el.innerHTML = html;
  }

  function renderBreadcrumb(letterMap) {
    var el = document.getElementById('lex-bc');
    var parts = [];
    if (state.letter) {
      if (state.prefix) {
        parts.push('<span class="lex-crumb" onclick="lexSelectLetter(\'' + state.letter + '\')">'
          + state.letter + '</span>');
      } else {
        parts.push('<span class="lex-crumb-current">' + state.letter + '</span>');
      }
    }
    if (state.prefix) {
      var prefixLabel = state.prefix.toUpperCase();
      if (state.sound && state.sound !== state.prefix) {
        parts.push('<span class="lex-crumb-sep">›</span>');
        parts.push('<span class="lex-crumb" onclick="lexSelectPrefix(\'' + state.prefix + '\')">'
          + prefixLabel + '</span>');
      } else if (!state.sound) {
        parts.push('<span class="lex-crumb-sep">›</span>');
        parts.push('<span class="lex-crumb-current">' + prefixLabel + '</span>');
      } else {
        parts.push('<span class="lex-crumb-sep">›</span>');
        parts.push('<span class="lex-crumb" onclick="lexSelectPrefix(\'' + state.prefix + '\')">'
          + prefixLabel + '</span>');
      }
    }
    if (state.sound && state.sound !== state.prefix) {
      parts.push('<span class="lex-crumb-sep">›</span>');
      parts.push('<span class="lex-crumb-current">' + state.sound + '</span>');
    }
    el.innerHTML = parts.join(' ');
    window._lexLetterMap = letterMap || window._lexLetterMap;
  }

  window.lexSelectLetter = function(letter) {
    selectLetter(letter, window._lexLetterMap);
  };
})();
</script>
