# Lesson 52: VE / SI Clusters

!!! info "How to Use This Lesson"
    Every lesson is divided into five sections. Please move through them in this order: **Warm-Up**, **Vocabulary**, **Reading**, **Exercise**, **Review**, and then **Exercise** and **Review** once more to see how much you've improved.
    
    **Do not try to memorize!** Just read through the content attentively. We will have plenty of exercises and reviews later!

---

=== "Warm-Up"

    ## How much do you remember?
    
    Check the boxes for words you think you know. Then click **Show Answers** to reveal the meanings.
    
    <div id="self-assessment-section">
    
    <div id="self-assessment-container"></div>
    
    </div>
    
    <div id="matching-section" style="display: none; margin-top: 3rem;">
    
    <h3>Practice Missed Words</h3>
    <p style="color: #5a8bb8;">Let's practice the <span id="missed-count"></span> word(s) you're still learning. Give it a try!</p>
    
    <div id="warmup-game-1"></div>
    
    <div style="margin-top: 2rem;">
    <div id="warmup-game-2"></div>
    </div>
    
    <div style="text-align: center; margin-top: 2rem;">
        <button id="back-to-assessment-btn" style="background: #757575; color: white; border: none; padding: 0.5rem 1.5rem; border-radius: 4px; cursor: pointer; font-size: 0.95rem;">↩ Back to Assessment</button>
    </div>
    
    </div>
    
=== "Vocabulary"
    
    ## VE CLUSTER
    
    Our first cluster today is **VE**! 
    
    | Oravia | English |
    |--------|---------|
    | veito | wound |
    | velan | therapy, treatment |
    | veimigai | bacteria |
    | veluo | exercise |
    | velmo | pill |
    
    What do you think **VE** words are about?
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('subcluster4-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="subcluster4-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0;"> <strong>VE</strong> words are related to <strong>health</strong>.</p>
    </div>
    
    Ce lirul run i veluo en liperi?
        
    <textarea style="width: 100%; min-height: 80px; padding: 1rem; border: 2px solid #4a9cd6; border-radius: 8px; font-family: inherit;" placeholder="Write your sentences in Oravia here..."></textarea>
    <div style="text-align: right; margin-top: 0.5rem;">
    <button onclick="(function(btn){
        const ta = btn.parentElement.previousElementSibling;
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
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('subcluster5-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal Translation
    </button>
    </div>
    
    <div id="subcluster5-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0;">Possible translation: How often do you exercise in a week?</p>
    </div>
    
    <div id="subcluster6-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0;">Example answers: Lirul, i veluo en Tamen, Balen, su Tevaen. En liperi yadetu, i iran i apavu en lu.  </p>
    </div>
    
    ## SI CLUSTER
    
    Our second cluster today is **SI**! 
    
    | Oravia | English |
    |--------|---------|
    | sirosa | computer, virtual |
    | siyal | detect, notice |
    | sioer | game, play |
    | sioce | puzzle |
    | simir | complex, complicated |
    | sihei | robot, android |
    
    **SI** words are related to computer-like processes.  
    Words that start with *sio*, like sioce and sioer, are related to *games*. 
    Two very useful compounds here: bontame-sioer (boardgames) and sirosa-sioer (video games). 
    
    You are ready for the reading now!
    
=== "Reading"
    
    This lesson, we will read a fable.   
    There will be some things you do not know in the readings to mirror real language encounter. Read it once and see if you can get the gist of it, and then try it again checking the tips below. 
    
    Before you dive in, here are a few key words:
    
    tinen  = break, crack  
    wimlua = river  
    anise = carry, bring  
    neiden = grow, develop  
  
  
    Tinen Hue Molbo: Joniu Tam 
    
    Lar, i dami a yamirli faejal caei i elemi en wilgai. Nehen liyar, hay i anise e tor wa molbo. Notor, i vanvu en yalen jenon sora i anise e wa de wimlua u fa. 
    Mai, a tor wa molbo a gavio. En tam wa molbo, i dami a yalgai tinen. Eta, wa i apanou de noi molbo.
    A yamirli faejal i yaldih e wa molbo en wimlua. Mai cali i anivari-anifi en bo, a tinen molbo a nealui jenya. Caora lilon a faejal i vanvu, a wa i apanou.
    A tinen molbo a tilira-neiden.



    **Tips**

    anise = carry  
    anivari-anifi = return, get back  
    apanou = leak, fall, drop  
    bo = home, house  
    caei = who  
    cali = when  
    caora = because  
    dami = exist, there is  
    de = of, from  
    elemi = live  
    en = in, at  
    eta = so, therefore  
    fa = family  
    faejal = man  
    gavio = different  
    hay = he  
    jenon = path  
    jenya = empty  
    lar = once  
    lilon = while, during  
    liyar = morning  
    mai = but  
    molbo = pot  
    nealui = half  
    nehen = every  
    neiden = increasingly, growing  
    noi = this  
    notor = then  
    sora = in order to  
    tam = one  
    tinen = break, crack  
    tilira = shame, ashamed  
    tor = two  
    vanvu = walk  
    wa = water  
    wilgai = village  
    wimlua = river  
    yalgai = small  
    yaldih = fill  
    yalen = long  
    yamirli = old  
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('tinen-molbo1-translation').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal Translation
    </button>
    </div>
    <div id="tinen-molbo1-translation" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0 0 0.5rem 0;">English translation:</p>
    <p style="margin: 0 0 0.5rem 0;">Once upon a time, there was an old man who lived in a village.</p>
    <p style="margin: 0 0 0.5rem 0;">Each morning, he would carry two water pots. Then, he would walk a long path to carry water from the river to his family.</p>
    <p style="margin: 0 0 0.5rem 0;">But the two water pots were different.</p>
    <p style="margin: 0 0 0.5rem 0;">In one pot, there was a crack.</p>
    <p style="margin: 0 0 0.5rem 0;">So, water would fall from that pot.</p>
    <p style="margin: 0 0 0.5rem 0;">The old man would fill the pots at the river. But when he got returns home, the cracked pot would be part empty. That's because while the man walked, water would leak.</p>
    <p style="margin: 0;">The cracked pot grew increasingly ashamed.</p>
    </div>
    
    Now in 1 or 2 sentences, try to write what the story is about:
    
    <textarea style="width: 100%; min-height: 80px; padding: 1rem; border: 2px solid #4a9cd6; border-radius: 8px; font-family: inherit;" placeholder="Write your sentences in Oravia here..."></textarea>
    <div style="text-align: right; margin-top: 0.5rem;">
    <button onclick="(function(btn){
        const ta = btn.parentElement.previousElementSibling;
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
 

=== "Exercise 1"

    ## Matching Games

    Time to practice! Match the Oravia words with their English meanings.

    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.

    Click one word from each column to match them. The game will check automatically when you select both words.

    ---

    ### Round 1

    <div id="matching-game-1" data-lesson="lesson38_b" data-round="1"></div>

    ---

    ### Round 2

    <div id="matching-game-2" data-lesson="lesson38_b" data-round="2"></div>

    ---

    ### Round 3

    <div id="matching-game-3" data-lesson="lesson38_b" data-round="3"></div>



=== "Exercise 2"

    ## Matching Games

    Time to practice! Match the Oravia words with their English meanings.

    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.

    Click one word from each column to match them. The game will check automatically when you select both words.

    After completing the Exercises and Review, try it again to see how much you've improved.

    ---

    ### Round 1

    <div id="matching-game-4" data-lesson="lesson36_exercise2" data-round="1"></div>

    ---

    ### Round 2

    <div id="matching-game-5" data-lesson="lesson36_exercise2" data-round="2"></div>

    ---

    ### Round 3

    <div id="matching-game-6" data-lesson="lesson36_exercise2" data-round="3"></div>

    ---

    ### Round 4

    <div id="matching-game-7" data-lesson="lesson36_exercise2" data-round="4"></div>



=== "Review"

    ## Review Missed Words
    
    This section shows words you got wrong during practice. If you didn't miss any, this will be empty - great job! 🎉
    
    <div id="review-game-container"></div>


<script>
function initWarmup() {
        const warmupWords = [
    {id: "lu_1", oravia: "lufiva", english: "cold"},
    {id: "lu_2", oravia: "luyar",  english: "light"},
    {id: "lu_3", oravia: "lupupi", english: "rain"},
    {id: "lu_4", oravia: "luyol",  english: "sky"},
    {id: "lu_5", oravia: "lusari", english: "sun"},
    {id: "lu_6", oravia: "lunhem", english: "summer"},
    {id: "lu_7", oravia: "lunu",   english: "winter"},
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
    const backBtn = document.getElementById('back-to-assessment-btn');
    if (backBtn) backBtn.addEventListener('click', function() {
        document.getElementById('matching-section').style.display = 'none';
        document.getElementById('self-assessment-section').style.display = 'block';
    });
    renderSelfAssessment();
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWarmup);
} else {
    initWarmup();
}
</script>


<script>
async function initReview() {
    const wrongIds = JSON.parse(localStorage.getItem('wrong_ids') || '[]');
    const container = document.getElementById('review-game-container');
    if (!container) return;
    if (wrongIds.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem; background: #e0f2f1; border-radius: 8px;"><p style="font-size: 1.2rem; color: #4a9cd6; margin: 0;">🎉 No words to review!</p><p style="color: #5a8bb8; margin-top: 0.5rem;">You did not miss any words. Excellent work!</p></div>';
        return;
    }
    try {
        const lessonIds = [...new Set(
            [...document.querySelectorAll('[data-lesson]')]
                .map(el => el.dataset.lesson)
        )];
        const baseUrl = window.location.origin;
        const responses = await Promise.all(
            lessonIds.map(id => fetch(baseUrl + '/data/' + id + '_words.json').then(r => r.json()))
        );
        const allWords = responses.flatMap(data => data.words);
        const seen = new Set();
        const uniqueWords = allWords.filter(w => {
            if (seen.has(w.id)) return false;
            seen.add(w.id);
            return true;
        });
        const wrongWords = uniqueWords.filter(word => wrongIds.includes(word.id));
        if (wrongWords.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 3rem; background: #e0f2f1; border-radius: 8px;"><p style="font-size: 1.2rem; color: #4a9cd6; margin: 0;">🎉 No words to review!</p></div>';
            return;
        }
        container.innerHTML = '<p style="text-align: center; margin-bottom: 2rem; color: #5a8bb8;">Practice these ' + wrongWords.length + ' word(s) you found challenging:</p><div id="review-game-wrapper"></div><div style="text-align: center; margin-top: 2rem;"><button id="clear-review" style="padding: 0.5rem 1.5rem; background: #f57c00; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.95rem;">Clear Review List</button></div>';
        new MatchingGame('review-game-wrapper', wrongWords, 'review', null, []);
        document.getElementById('clear-review').addEventListener('click', function() {
            if (confirm('Clear all review words? This will reset your wrong words list for this lesson.')) {
                const allWrongIds = JSON.parse(localStorage.getItem('wrong_ids') || '[]');
                const lessonWordIds = uniqueWords.map(w => w.id);
                const remainingWrongIds = allWrongIds.filter(id => !lessonWordIds.includes(id));
                localStorage.setItem('wrong_ids', JSON.stringify(remainingWrongIds));
                location.reload();
            }
        });
    } catch (error) {
        console.error('Error loading words:', error);
        container.innerHTML = '<p style="color: #f44336;">Error loading review words. Please refresh the page.</p>';
    }
}
document.addEventListener('DOMContentLoaded', initReview);
document.querySelectorAll('.tabbed-labels label').forEach(label => {
    if (label.textContent.trim() === 'Review') {
        label.addEventListener('click', function() {
            setTimeout(initReview, 50);
        });
    }
});
</script>

<div style="text-align: center; padding: 2rem 0; background: #e0f2f1; border-radius: 8px; margin-top: 3rem;">
    <p style="font-size: 1.2rem; color: #4a9cd6; margin-bottom: 1rem;">
        🎉 <strong>Lesson 47 Complete!</strong>
    </p>
    <p style="color: #5a8bb8; margin-bottom: 0.5rem;">
        If you missed any words, check the <strong>Review</strong> tab to practice them again.
    </p>
    <p style="color: #5a8bb8; margin-bottom: 1.5rem;">
        Come back tomorrow for Lesson 48.
    </p>
</div>
