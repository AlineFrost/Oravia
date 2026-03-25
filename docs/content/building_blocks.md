# Building Blocks (beta)

Oravia words are built from **(sub)clusters** (sounds of the semantic group) + **roots** (sounds connecting words across multiple clusters). Not all words have shared roots. When they do, the meaning frequently makes more sense when combined with the (sub)cluster meaning.

Note: 

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
  <span id="bb-count" style="color: #5a8bb8; font-size: 0.85rem;"></span>
</div>

<div style="overflow-x:auto; overflow-y:auto; max-height:75vh; border:1px solid #d3e8f7; border-radius:6px;">
<table id="bb-table" style="width:100%; border-collapse:collapse; font-size:0.82rem; line-height:1.3;">
  <thead>
    <tr id="bb-header" style="background:#e3f2fd; cursor:pointer; user-select:none;">
      <th data-col="type"    style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">Type ↕</th>
      <th data-col="sound"   style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">Sound ↕</th>
      <th data-col="meaning" style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">Meaning ↕</th>
      <th data-col="oravia"  style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;z-index:1;">Words (Oravia)</th>
      <th data-col="english" style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;z-index:1;">Words (English)</th>
      <th data-col="_n"      style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.3rem;text-align:right; color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;width:28px;">#</th>
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
        const hay = (r.sound+' '+r.meaning+' '+r.oravia.join(' ')+' '+r.english.join(' ')).toLowerCase();
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

      tr.innerHTML =
        '<td style="padding:0.28rem 0.5rem;">'+typeLabel+'</td>'+
        '<td style="padding:0.28rem 0.5rem;font-weight:700;color:'+soundColor+';">'+r.sound+'</td>'+
        '<td style="padding:0.28rem 0.5rem;color:#444;">'+r.meaning+'</td>'+
        '<td style="padding:0.28rem 0.5rem;color:#2c6e9e;">'+r.oravia.join(', ')+'</td>'+
        '<td style="padding:0.28rem 0.5rem;color:#5a6a7a;">'+r.english.join(', ')+'</td>'+
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

  render();
})();
</script>
