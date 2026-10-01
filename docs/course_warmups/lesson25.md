# Lesson 25: Dia / Hue / NO Subcluster

!!! info "How to Use This Lesson"
    This lesson is divided into five sections. Please move through them in this order: **Warm-Up**, **Grammar**, **Vocabulary**, **Practice**, **Flashcards**.
    
    **Do not try to memorize!** Just read through the content attentively. We will have plenty of exercises and reviews later!

---

=== "Warm-Up"

    ## How much do you remember?
    
    Check the boxes for words you think you know. Then click **Show Answers** to reveal the meanings.
    
    <div id="self-assessment-section">
    
    <div id="self-assessment-container"></div>
    
    </div>
    
    
=== "Grammar"

    ## Dia / Hue
    
     See if you can understand these sentences. Some words or uses may be new. Try to read them first, and then scroll down for tips, and then answers. 
    
    ```
    A nim fare a boemo dia.
    ```
    
    ```
    I anidaium e vardur hue mo. 
    ```
    
    ```
    A anye dia eofa i ansau e yani bevio. 
    ```
    
    ```
    A mo i nomie no anye hue en bo.
    ```
    
    ```
    Noder a anona i nomie no anopu hue, mai a anelem hue.
    ```
    
    ```
    Nolili a nim faibor a eomiu dia. A faiborar a anocari dia. 
    ```
    
    ```
    I anitaum ca runum!
    ```

    **Tips**

    -ar = completed action (optional!)  
    -is = yet to start action (optional!)  
    a...a... = is/are  
    a [subject] i [verb] e [direct complement] u [indirect complement/to/for]  
    anelem = keep  
    (ani)dai = want
    anita = take  
    anocari = leave  
    anopu = lose  
    ansau = start  
    anye = make, do  
    bevio = store, shop  
    eomiu = support  
    eofa = friend  
    fare = parent  
    faibor = partner, spouse  
    dia = agent, role  
    hue = recipient, result  
    mai = but  
    mo = food, eat  
    noder = even  
    nolili = forever  
    nomie = seems  
    vardur = tooth, bite
    yani = new  
    
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('subcluster3-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="subcluster3-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0 0 0.5rem 0;">Possible translations:</p>
    <p style="margin: 0 0 0.5rem 0;">My parent is a cook.</p>
    <p style="margin: 0 0 0.5rem 0;">I don't want the bitten food.</p>
    <p style="margin: 0 0 0.5rem 0;">The food seems like it was made at home.</p>
    <p style="margin: 0 0 0.5rem 0;">My creator friend is starting a new store.</p>
    <p style="margin: 0 0 0.5rem 0;">Even (though) the gift appears like it was lost, (but) it was kept.</p>
    <p style="margin: 0 0 0.5rem 0;">Forever my partner is a supporter. My ex was a leaver.</p>
    <p style="margin: 0;"> Don't take what it not yours!</p>
    </div>
    

    
=== "Vocabulary"

    ## NO Subclusters
    
    Let's take a deeper look at the **NO** Cluster! 
    
    | Oravia | English |
    |--------|---------|
    | nomie | seems |
    | norven | already |
    | noniu | some |
    | noli | now |
    | none | have |
    | noder | even |
    | noi | here |
    | norfih | enough |
    | nordau | far |
    | norocu | almost |
    
    We only have one subcluster here: **NOR**. It indicates **proximity to a reference point**:  
    *nordau* (far) is not close at all,  
    *norocu* (almost) is just below the threshold,  
    *norfih* (enough) is exactly there,
    *norven* (already) is past it.  
    
    !!! info "🌍 Sound Connections"
        Nor comes from Latin norma (standard, reference point), which is the origin of the English word "norm".  
    
    We also have an interesting word here, *noder* (even). We can pair it with *mai* to express concessions. For example:
    
    ```
    Nim i none e beivu, mai i dai i vanvu.  
    I have a car, but I like to walk.  
    
    Noder nim i none e beivu, mai i dai i vanvu.  
    Even (though) I have a car, (but) I like to walk. 
    ```
    
    ```
    Nim i eodya hue, mai anvum.  
    I was invited, but I am not going.
    
    Noder nim i eodya hue, mai anvum  
    Even (though) I was invited, (but) I am not going.
     ```
    
    Now try to create a sentence using *NO* words, or 3 if you're up for a challenge!
    
    <textarea style="width: 100%; min-height: 80px; padding: 1rem; border: 2px solid #4a9cd6; border-radius: 8px; font-family: inherit;" placeholder="Write your sentences in Oravia here..."></textarea>
    <div style="text-align: right; margin-top: 0.5rem;">
    <button onclick="(function(btn){
        const prev = btn.parentElement.previousElementSibling; const ta = prev && prev.tagName === 'TEXTAREA' ? prev : prev ? prev.querySelector('textarea') : null;
        const text = ta ? ta.value.trim() : '';
        if (!text) { btn.textContent = 'Nothing to save!'; btn.style.background='#f57c00'; setTimeout(()=>{btn.textContent='Save My Answer';btn.style.background='#4a9cd6';},1500); return; }
        const log = JSON.parse(localStorage.getItem('oravia_log') || '[]');
        const lessonId = window.location.pathname.split('/').filter(Boolean).pop().replace('.html','');
        const promptNum = Array.from(document.querySelectorAll('.save-writing-btn')).indexOf(btn) + 1;
        log.push({ timestamp: new Date().toISOString(), lesson: lessonId, word_id: 'writing_' + promptNum, oravia: text, english: '', type: 'writing', correct: null });
        localStorage.setItem('oravia_log', JSON.stringify(log));
        btn.textContent = 'Saved! ✓'; btn.style.background='#43a047';
        setTimeout(()=>{btn.textContent='Save My Answer';btn.style.background='#4a9cd6';},2000);
    })(this)" class="save-writing-btn" style="background:#4a9cd6 !important; color:white !important; border:none; padding:0.5rem 1.5rem; border-radius:4px; cursor:pointer; font-size:1rem; font-weight:500;"><span>Save My Answer</span></button>
    </div>
    
=== "Practice"

    ## Matching Games

    Time to practice! Match the Oravia words with their English meanings. **Use sound-meaning associations as clues**. For example, the subcluster sound tells you the category, even for words you haven't seen before.  
    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.  
    Click one word from each column to match them. The game will check automatically when you select both words.
    ---

    ### Round 1

    <div id="matching-game-1" data-lesson="cc26_lesson25" data-round="1"></div>

    ---

    ### Round 2

    <div id="matching-game-2" data-lesson="cc26_lesson25" data-round="2"></div>

    ---

    ### Round 3

    <div id="matching-game-3" data-lesson="cc26_lesson25" data-round="3"></div>

    ---

    ### Round 4

    <div id="matching-game-4" data-lesson="cc26_lesson25" data-round="4"></div>

=== "Flashcards"

    <div id="flashcard-container" data-lesson="25"></div>

<script>
    function initWarmup() {
        const warmupWords = [
    {id: "wu_litam_1", oravia: "litam", english: "day"},
    {id: "wu_liyar_2", oravia: "liyar", english: "morning"},
    {id: "wu_eomsu_3", oravia: "eomsu", english: "party"},
    {id: "wu_eodani_4", oravia: "eodani", english: "meet"}
    ];

    function renderSelfAssessment() {
        const container = document.getElementById('self-assessment-container');
        if (!container) return;
        let html = '<table style="width:100%; border-collapse:collapse; margin-bottom: 1rem;">';
        html += '<thead><tr>';
        html += '<th style="text-align:center; padding:0.5rem; border-bottom:2px solid #4a9cd6;">✓</th>';
        html += '<th style="text-align:left; padding:0.5rem; border-bottom:2px solid #4a9cd6;">Oravia</th>';
        html += '<th class="answer-col" style="display:none; text-align:left; padding:0.5rem; border-bottom:2px solid #4a9cd6;">English</th>';
        html += '</tr></thead><tbody>';
        warmupWords.forEach((word, i) => {
            const bg = i % 2 === 0 ? '#f9f9f9' : 'white';
            html += `<tr style="background:${bg};"><td style="text-align:center; padding:0.4rem;"><input type="checkbox" id="check-${word.id}" data-id="${word.id}" style="width:1.1rem; height:1.1rem; cursor:pointer;"></td><td style="font-weight:bold; padding:0.4rem 0.5rem;">${word.oravia}</td><td class="answer-col" style="display:none; padding:0.4rem 0.5rem; color:#43a047;">${word.english}</td></tr>`;
        });
        html += '</tbody></table>';
        html += '<div style="text-align:center; margin-top:1.5rem;">';
        html += '<button id="show-answers-btn" style="background:#4a9cd6; color:white; border:none; padding:0.75rem 2rem; border-radius:4px; cursor:pointer; font-size:1rem;">Show Answers</button>';
        html += '</div>';
        container.innerHTML = html;
        document.getElementById('show-answers-btn').addEventListener('click', function() {
            document.querySelectorAll('.answer-col').forEach(col => col.style.display = 'table-cell');
            this.style.display = 'none';
            // Log warm-up self-assessment
            const log = JSON.parse(localStorage.getItem('oravia_log') || '[]');
            const lessonId = window.location.pathname.split('/').filter(Boolean).pop().replace('.html','');
            warmupWords.forEach(function(word) {
                const checked = document.getElementById('check-' + word.id);
                log.push({
                    timestamp: new Date().toISOString(),
                    lesson: lessonId,
                    word_id: word.id,
                    oravia: word.oravia,
                    english: word.english,
                    type: 'warmup',
                    correct: checked ? checked.checked : false
                });
            });
            localStorage.setItem('oravia_log', JSON.stringify(log));
        });
}
    renderSelfAssessment();
}
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', initWarmup);
} else {
initWarmup();
}
</script>




<div style="text-align: center; padding: 2rem 0; background: #e0f2f1; border-radius: 8px; margin-top: 3rem;">
        <p style="font-size: 1.2rem; color: #4a9cd6; margin-bottom: 1rem;">
            🎉 <strong>Lesson 25 Complete!</strong>
        </p>
        <p style="color: #5a8bb8; margin-bottom: 1.5rem;">
            Come back tomorrow for Lesson 26.
        </p>
</div>

<script>
(function() {
    var ENDPOINT = 'https://script.google.com/macros/s/AKfycbyK1kWJRcXZ9tHqLGYZP8ZG90OcMj8ld3zUSNjvyOhHiSJyr5GIep0tdCxF9xMBamia/exec';
    function sendData() {
        var userId = localStorage.getItem('oravia_user_id') || 'anonymous';
        var log = JSON.parse(localStorage.getItem('oravia_log') || '[]');
        var wrongIds = JSON.parse(localStorage.getItem('wrong_ids') || '[]');
        if (log.length === 0 && wrongIds.length === 0) return;
        var lessonId = window.location.pathname.split('/').filter(Boolean).pop().replace('.html', '');
        navigator.sendBeacon(ENDPOINT, JSON.stringify({
            tester_id: userId,
            lesson: lessonId,
            log: log,
            wrong_ids: wrongIds
        }));
    }
    window.addEventListener('pagehide', sendData);
    window.addEventListener('beforeunload', sendData);
})();
</script>
