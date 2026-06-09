# Building Blocks

Oravia words are built from **(sub)clusters** (sounds of the semantic group) + **roots** (sounds connecting words across multiple clusters). Not all words have shared roots. When they do, the meaning frequently makes more sense when combined with the (sub)cluster meaning.

Use the filters to explore. 

<div id="bb-controls" style="margin: 1rem 0; display: flex; flex-wrap: wrap; gap: 0.6rem; align-items: center;">
  <input id="bb-search" type="text" placeholder="Search sound, word, or meaning..."
    style="padding: 0.4rem 0.75rem; border: 2px solid #4a9cd6; border-radius: 6px; font-size: 0.9rem; min-width: 200px; font-family: inherit;">
  <select id="bb-type"
    style="padding: 0.4rem 0.75rem; border: 2px solid #4a9cd6; border-radius: 6px; font-size: 0.9rem; font-family: inherit; background: white;">
    <option value="">Subclusters & Roots</option>
    <option value="subcluster">Subclusters only</option>
    <option value="root">Roots only</option>
  </select>
  <select id="bb-field"
    style="padding: 0.4rem 0.75rem; border: 2px solid #4a9cd6; border-radius: 6px; font-size: 0.9rem; font-family: inherit; background: white;">
    <option value="">All fields</option>
    <option value="sound">Sound</option>
    <option value="oravia">Oravia word</option>
    <option value="english">English</option>
  </select>
  <span id="bb-count" style="color: #5a8bb8; font-size: 0.85rem;"></span>
</div>

<div style="overflow-x:auto; overflow-y:auto; max-height:75vh; border:1px solid #d3e8f7; border-radius:6px;">
<table id="bb-table" style="width:100%; border-collapse:collapse; font-size:0.82rem; line-height:1.3;">
  <thead>
    <tr id="bb-header" style="background:#e3f2fd; cursor:pointer; user-select:none;">
      <th data-col="type"    style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;width:90px;min-width:90px;">Type ↕</th>
      <th data-col="sound"   style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">Sound ↕</th>
      <th data-col="meaning" style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">Meaning ↕</th>
      <th data-col="oravia"  style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;z-index:1;">Words (Oravia)</th>
      <th data-col="english"   style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;z-index:1;">Words (English)</th>
      <th data-col="natural_language" style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;z-index:1;">Natural Language</th>
      <th data-col="_n"        style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.3rem;text-align:right; color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;width:28px;">#</th>
    </tr>
  </thead>
  <tbody id="bb-body"></tbody>
</table>
</div>

<script>
(async function() {
  const baseUrl = window.location.origin;
  let allData = [];
  let sortCol = null;
  let sortAsc = true;

  try {
    const res = await fetch(baseUrl + '/data/building_blocks.json');
    allData = await res.json();

    // Manual etymology/meaning corrections decided from review notes.
    const bbCorrections = {
      'subcluster|mo':  { natural_language: 'Japanese mogu-mogu' },
      'subcluster|bei': { natural_language: '' },
      'root|loa':       { meaning: 'long/full extent', natural_language: 'Proto-Polynesian *loa' },
      'root|oi':        { natural_language: 'English joy' },
      'subcluster|yo':  { natural_language: 'Yoruba àwọ̀' }
    };
    allData = allData.map(r => {
      const key = (r.type || '') + '|' + String(r.sound || '').toLowerCase();
      return bbCorrections[key] ? Object.assign({}, r, bbCorrections[key]) : r;
    });
  } catch(e) {
    document.querySelector('div[style*="overflow-x"]').innerHTML =
      '<p style="color:#f44336;">Could not load building blocks data.</p>';
    return;
  }

  function render() {
    const q = document.getElementById('bb-search').value.toLowerCase().trim();
    const tp = document.getElementById('bb-type').value;

    let filtered = allData.filter(r => {
      if (tp && r.type !== tp) return false;
      if (q) {
        const field = document.getElementById('bb-field').value;
        const hay = field === 'sound'   ? r.sound.toLowerCase()
                  : field === 'oravia'  ? r.oravia.join(' ').toLowerCase()
                  : field === 'english' ? r.english.join(' ').toLowerCase()
                  : (r.sound+' '+r.meaning+' '+r.oravia.join(' ')+' '+r.english.join(' ')+' '+(r.natural_language||'')).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    if (sortCol && sortCol !== '_n') {
      filtered.sort((a, b) => {
        let va = (sortCol === 'oravia' || sortCol === 'english')
          ? (a[sortCol]||[]).join(', ')
          : (a[sortCol]||'');
        let vb = (sortCol === 'oravia' || sortCol === 'english')
          ? (b[sortCol]||[]).join(', ')
          : (b[sortCol]||'');
        va = va.toLowerCase(); vb = vb.toLowerCase();
        return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
      });
    }

    document.getElementById('bb-count').textContent = filtered.length + ' entries';

    const tbody = document.getElementById('bb-body');
    tbody.innerHTML = '';
    filtered.forEach((r, i) => {
      const tr = document.createElement('tr');
      const isSub = r.type === 'subcluster';
      const bg = isSub
        ? (i%2===0 ? '#f0f7ff' : '#e8f4fb')
        : (i%2===0 ? '#fffef0' : '#fdf9e3');
      tr.style.background = bg;
      tr.addEventListener('mouseenter', ()=>tr.style.background='#ddeeff');
      tr.addEventListener('mouseleave', ()=>tr.style.background=bg);

      const typeLabel = isSub
        ? '<span style="color:#1a6aa8;font-weight:600;">subcluster</span>'
        : '<span style="color:#9B7700;font-weight:600;">root</span>';
      const soundColor = isSub ? '#1a6aa8' : '#9B7700';

      const oraviaLinks = r.oravia.map(w =>
        '<a href="/content/vocabulary/" data-vw="'+w+'" class="vocab-link" style="color:#2c6e9e;text-decoration:none;">'+w+'</a>'
      ).join(', ');
      tr.innerHTML =
        '<td style="padding:0.28rem 0.5rem;width:90px;min-width:90px;">'+typeLabel+'</td>'+
        '<td style="padding:0.28rem 0.5rem;font-weight:700;color:'+soundColor+';">'+r.sound+'</td>'+
        '<td style="padding:0.28rem 0.5rem;color:#444;">'+r.meaning+'</td>'+
        '<td style="padding:0.28rem 0.5rem;">'+oraviaLinks+'</td>'+
        '<td style="padding:0.28rem 0.5rem;color:#5a6a7a;">'+r.english.join(', ')+'</td>'+
        '<td style="padding:0.28rem 0.5rem;color:#6a7a5a;font-size:0.78rem;">'+(r.natural_language||'')+'</td>'+
        '<td style="padding:0.28rem 0.3rem;text-align:right;color:#ccc;font-size:0.75rem;">'+(i+1)+'</td>';
      tbody.appendChild(tr);
    });
  }

  document.getElementById('bb-header').addEventListener('click', e => {
    const th = e.target.closest('th');
    if (!th || th.dataset.col === '_n') return;
    const col = th.dataset.col;
    if (sortCol === col) sortAsc = !sortAsc;
    else { sortCol = col; sortAsc = true; }
    render();
  });

  document.getElementById('bb-search').addEventListener('input', render);
  document.getElementById('bb-type').addEventListener('change', render);
  document.getElementById('bb-field').addEventListener('change', render);

  // Click on oravia word → go to vocabulary filtered to that word
  document.addEventListener('click', function(e) {
    const link = e.target.closest('.vocab-link');
    if (link) {
      sessionStorage.setItem('vocab_exact', link.dataset.vw);
    }
  });

  // Exact sound match from vocabulary page
  function applyExactMatch() {
    const exact = sessionStorage.getItem('bb_exact');
    if (exact) {
      sessionStorage.removeItem('bb_exact');
      // Filter allData to exact sound match only
      const tbody = document.getElementById('bb-body');
      tbody.innerHTML = '';
      const matches = allData.filter(r => r.sound === exact);
      document.getElementById('bb-count').textContent = matches.length + ' entries';
      matches.forEach((r, i) => {
        const tr = document.createElement('tr');
        const isSub = r.type === 'subcluster';
        const bg = isSub ? '#f0f7ff' : '#fffef0';
        tr.style.background = bg;
        const typeLabel = isSub
          ? '<span style="color:#1a6aa8;font-weight:600;">subcluster</span>'
          : '<span style="color:#9B7700;font-weight:600;">root</span>';
        const soundColor = isSub ? '#1a6aa8' : '#9B7700';
        const oraviaLinks = r.oravia.map(w =>
          '<a href="/content/vocabulary/" data-vw="'+w+'" class="vocab-link" style="color:#2c6e9e;text-decoration:none;">'+w+'</a>'
        ).join(', ');
        tr.innerHTML =
          '<td style="padding:0.28rem 0.5rem;width:90px;min-width:90px;">'+typeLabel+'</td>'+
          '<td style="padding:0.28rem 0.5rem;font-weight:700;color:'+soundColor+';">'+r.sound+'</td>'+
          '<td style="padding:0.28rem 0.5rem;color:#444;">'+r.meaning+'</td>'+
          '<td style="padding:0.28rem 0.5rem;">'+oraviaLinks+'</td>'+
          '<td style="padding:0.28rem 0.5rem;color:#5a6a7a;">'+r.english.join(', ')+'</td>'+
          '<td style="padding:0.28rem 0.5rem;color:#6a7a5a;font-size:0.78rem;">'+(r.natural_language||'')+'</td>'+
          '<td style="padding:0.28rem 0.3rem;text-align:right;color:#ccc;font-size:0.75rem;">'+(i+1)+'</td>';
        tbody.appendChild(tr);
      });
      // Add clear filter button
      const controls = document.getElementById('bb-controls');
      if (!document.getElementById('bb-clear')) {
        const btn = document.createElement('button');
        btn.id = 'bb-clear';
        btn.textContent = '✕ Show all';
        btn.style.cssText = 'padding:0.4rem 0.75rem;border:2px solid #4a9cd6;border-radius:6px;background:white;color:#4a9cd6;cursor:pointer;font-family:inherit;font-size:0.9rem;';
        btn.onclick = () => { btn.remove(); render(); };
        controls.appendChild(btn);
      }
      return;
    }
    render();
  }

  applyExactMatch();
})();
</script>
