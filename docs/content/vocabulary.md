# Vocabulary List (beta)

This is a beta version of the vocabulary list. Any changes such as deleted or edited words will ultimately depend on beta testers' feedback. At the moment, I think the total word list may get cut down to about 750.  

Search and filter all Oravia words. Click any column header to sort.  



<div id="vocab-controls" style="margin: 1rem 0; display: flex; flex-wrap: wrap; gap: 0.6rem; align-items: center;">
  <input id="vocab-search" type="text" placeholder="Search word or meaning..."
    style="padding: 0.4rem 0.75rem; border: 2px solid #4a9cd6; border-radius: 6px; font-size: 0.9rem; min-width: 200px; font-family: inherit;">
  <select id="vocab-cluster"
    style="padding: 0.4rem 0.75rem; border: 2px solid #4a9cd6; border-radius: 6px; font-size: 0.9rem; font-family: inherit; background: white;">
    <option value="">All clusters</option>
  </select>
  <select id="vocab-lesson"
    style="padding: 0.4rem 0.75rem; border: 2px solid #4a9cd6; border-radius: 6px; font-size: 0.9rem; font-family: inherit; background: white;">
    <option value="">All lessons</option>
  </select>
  <span id="vocab-count" style="color: #5a8bb8; font-size: 0.85rem;"></span>
</div>

<div style="overflow-x:auto; overflow-y:auto; max-height:75vh; border:1px solid #d3e8f7; border-radius:6px;">
<table id="vocab-table" style="width:100%; border-collapse:collapse; font-size:0.82rem; line-height:1.3;">
  <thead>
    <tr id="vocab-header" style="background:#e3f2fd; cursor:pointer; user-select:none;">
      <th data-col="cluster_name"  style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">Cluster ↕</th>
      <th data-col="cluster_sound" style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">Sound ↕</th>
      <th data-col="subcluster"    style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">Subcluster ↕</th>
      <th data-col="root"          style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">Root ↕</th>
      <th data-col="oravia"        style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">Oravia ↕</th>
      <th data-col="english"       style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">English ↕</th>
      <th data-col="english_all"   style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:left;  color:#3182bd;border-bottom:2px solid #4a9cd6;z-index:1;">Extended meanings</th>
      <th data-col="lesson"        style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.5rem;text-align:center;color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;">L ↕</th>
      <th data-col="_n"            style="position:sticky;top:0;background:#e3f2fd;padding:0.35rem 0.3rem;text-align:right; color:#3182bd;border-bottom:2px solid #4a9cd6;white-space:nowrap;z-index:1;width:28px;">#</th>
    </tr>
  </thead>
  <tbody id="vocab-body"></tbody>
</table>
</div>

<script>
(async function() {
  const baseUrl = window.location.origin;
  let allData = [];
  let sortCol = null;
  let sortAsc = true;

  try {
    const res = await fetch(baseUrl + '/data/vocabulary.json');
    allData = await res.json();
  } catch(e) {
    document.querySelector('div[style*="overflow-x"]').innerHTML =
      '<p style="color:#f44336;">Could not load vocabulary data.</p>';
    return;
  }

  function defaultSort(a, b) {
    const cs = (a.cluster_sound||'').localeCompare(b.cluster_sound||'');
    if (cs !== 0) return cs;
    const sc = (a.subcluster||'').localeCompare(b.subcluster||'');
    if (sc !== 0) return sc;
    return (a.oravia||'').localeCompare(b.oravia||'');
  }
  allData.sort(defaultSort);

  const clusterSel = document.getElementById('vocab-cluster');
  const clusters = [...new Set(allData.map(r => r.cluster_name).filter(Boolean))].sort();
  clusters.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    clusterSel.appendChild(opt);
  });

  const lessonSel = document.getElementById('vocab-lesson');
  const lessons = [...new Set(allData.map(r => r.lesson).filter(l => l > 0))].sort((a,b)=>a-b);
  lessons.forEach(l => {
    const opt = document.createElement('option');
    opt.value = l; opt.textContent = 'L' + l;
    lessonSel.appendChild(opt);
  });

  function render() {
    const q = document.getElementById('vocab-search').value.toLowerCase().trim();
    const cl = clusterSel.value;
    const ls = lessonSel.value ? parseInt(lessonSel.value) : 0;

    let filtered = allData.filter(r => {
      if (cl && r.cluster_name !== cl) return false;
      if (ls && r.lesson !== ls) return false;
      if (q) {
        const hay = (r.oravia+' '+r.english+' '+(r.english_all||'')).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    if (sortCol && sortCol !== '_n') {
      filtered.sort((a, b) => {
        let va = a[sortCol], vb = b[sortCol];
        if (sortCol === 'lesson') {
          va = va||0; vb = vb||0;
          return sortAsc ? va-vb : vb-va;
        }
        va = (va||'').toLowerCase();
        vb = (vb||'').toLowerCase();
        return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
      });
    }

    document.getElementById('vocab-count').textContent = filtered.length + ' words';

    const tbody = document.getElementById('vocab-body');
    tbody.innerHTML = '';
    filtered.forEach((r, i) => {
      const tr = document.createElement('tr');
      const bg = i%2===0 ? '#fdf8f3' : 'white';
      tr.style.background = bg;
      tr.addEventListener('mouseenter', ()=>tr.style.background='#e8f4fb');
      tr.addEventListener('mouseleave', ()=>tr.style.background=bg);

      const subcl = (r.subcluster && r.subcluster !== r.cluster_sound)
        ? r.subcluster.toUpperCase() : '—';

      tr.innerHTML =
        '<td style="padding:0.28rem 0.5rem;color:#555;">'+r.cluster_name+'</td>'+
        '<td style="padding:0.28rem 0.5rem;font-weight:600;color:#4a9cd6;">'+r.cluster_sound+'</td>'+
        '<td style="padding:0.28rem 0.5rem;color:#777;">'+subcl+'</td>'+
        '<td style="padding:0.28rem 0.5rem;color:#5a8bb8;">'+(r.root||'—')+'</td>'+
        '<td style="padding:0.28rem 0.5rem;font-weight:600;color:#2c6e9e;">'+r.oravia+'</td>'+
        '<td style="padding:0.28rem 0.5rem;">'+r.english+'</td>'+
        '<td style="padding:0.28rem 0.5rem;color:#6b7f8a;">'+(r.english_all||'—')+'</td>'+
        '<td style="padding:0.28rem 0.5rem;text-align:center;color:#5a8bb8;">'+(r.lesson>0?r.lesson:'—')+'</td>'+
        '<td style="padding:0.28rem 0.3rem;text-align:right;color:#ccc;font-size:0.75rem;">'+(i+1)+'</td>';
      tbody.appendChild(tr);
    });
  }

  document.getElementById('vocab-header').addEventListener('click', e => {
    const th = e.target.closest('th');
    if (!th || th.dataset.col === '_n') return;
    const col = th.dataset.col;
    if (sortCol === col) sortAsc = !sortAsc;
    else { sortCol = col; sortAsc = true; }
    render();
  });

  document.getElementById('vocab-search').addEventListener('input', render);
  clusterSel.addEventListener('change', render);
  lessonSel.addEventListener('change', render);

  render();
})();
</script>
