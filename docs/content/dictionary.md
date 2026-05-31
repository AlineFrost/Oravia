# Dictionary

A full alphabetical listing of all Oravia words. Entries may show cluster, translation, word structure, an example sentence, and related words that share the same root.  

Words are formed by (sub)cluster + root.  
The cluster indicates a word's domain. The root gives additional hints about its meaning.

---

<div id="oravia-dictionary">Loading dictionary…</div>

<script>
(function () {
  var container = document.getElementById('oravia-dictionary');
  var tried = [];

  function uniq(arr) {
    var seen = {};
    return arr.filter(function (x) {
      if (!x || seen[x]) return false;
      seen[x] = true;
      return true;
    });
  }

  var pathParts = location.pathname.split('/').filter(Boolean);
  var repoBase = pathParts.length ? '/' + pathParts[0] + '/' : '/';

  var candidates = uniq([
    new URL('../js/dictionary.js', location.href).href,
    new URL('js/dictionary.js', location.href).href,
    location.origin + repoBase + 'js/dictionary.js',
    location.origin + '/js/dictionary.js'
  ]);

  function loadNext(i) {
    if (i >= candidates.length) {
      if (container && container.textContent.indexOf('Loading dictionary') !== -1) {
        container.innerHTML = '<p style="color:red">Dictionary script did not load. Tried:<br><code>' + tried.join('</code><br><code>') + '</code></p>';
      }
      return;
    }

    var src = candidates[i];
    tried.push(src);
    var s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = function () {
      setTimeout(function () {
        if (container && container.textContent.indexOf('Loading dictionary') !== -1) {
          container.innerHTML = '<p style="color:red">dictionary.js loaded, but did not render. Check that <code>data/dictionary_data.json</code> exists next to <code>js/</code>.</p>';
        }
      }, 2500);
    };
    s.onerror = function () { loadNext(i + 1); };
    document.head.appendChild(s);
  }

  loadNext(0);
})();
</script>
