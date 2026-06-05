# Export Your Progress Data

Thank you for beta testing Oravia! Please use the button below to download your progress data and email it to your coordinator.

<div style="text-align: center; margin: 3rem 0;">
<button onclick="exportData()" style="background: #4a9cd6; color: white; border: none; padding: 1rem 2.5rem; border-radius: 4px; cursor: pointer; font-size: 1.1rem;">⬇ Download My Data</button>
</div>

<div id="export-status" style="text-align: center; color: #5a8bb8; margin-top: 1rem;"></div>

<script>
function exportData() {
    const log = JSON.parse(localStorage.getItem('oravia_log') || '[]');
    const status = document.getElementById('export-status');
    if (log.length === 0) {
        status.textContent = 'No data found. Make sure you are using the same browser you used for the lessons.';
        return;
    }
    const headers = ['timestamp', 'lesson', 'word_id', 'oravia', 'english', 'type', 'correct'];
    const rows = log.map(row => headers.map(h => JSON.stringify(row[h] ?? '')).join(','));
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'oravia_progress.csv';
    a.click();
    URL.revokeObjectURL(url);
    status.textContent = 'Downloaded ' + log.length + ' entries. Please email the file to your coordinator!';
}
</script>
