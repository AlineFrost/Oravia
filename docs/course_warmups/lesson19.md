# Lesson 19: OI Cluster

!!! info "How to Use This Lesson"
    Every lesson is divided into five sections. Please move through them in this order: **Warm-Up**, **Grammar**, **Vocabulary**, **Exercise**, **Review**, and then **Exercise** and **Review** once more to see how much you've improved. 
    
    **Do not try to memorize!** Just read through the content attentively. We will have plenty of exercises and reviews later!

---

=== "Warm-Up"

    ## How much do you remember?
    
    Check the boxes for words you think you know. Then click **Show Answers** to reveal the meanings.
    
    <div id="self-assessment-section">
    
    <div id="self-assessment-container"></div>
    
    </div>
    
    
=== "Grammar"

    ## CA Connectors
    
    Last lesson, we saw how to connect sentences with **CA**, and saw that we use *ce* (what?), *cedom* (where?), and *cei* (who?) for questions, and *ca* (that/which), *cadom* (where), and *caei* (who) as connectors. 
    
    We also dove deeper into our new cluster: **LI**, which we use to talk about **time**. If *li* means *time*, can you guess how to ask *when*?
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('subcluster1-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="subcluster1-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0;"> *When?* is *celi*, which means ce (what) + li (time). And as a connector in affirmative sentences, *when* is *cali*.</p>
    </div>
    
    
     Now, see if you can understand these sentences. If you scroll bellow, you will see tips, and then answers. 
     
     <audio controls style="width:100%">
      <source src="../audio/19g.m4a" type="audio/mp4">
    </audio>
    
    ```
    nim i dairanum ca hay i anye.
    ```
    
    ```
    nim i anidai ca hay i anocari e anona u nim lili. 
    ```
    
    ```
    fanojor su fanojal i fou i anifi cadom nim.
    ```
    
    ```
    i dairanum cali run i mouje en liyar, mai nim i doum i anepou e run. 
    ```
    
    ```
    i fou e yani faibor caei a nim i do i anelem. 
    ```
    
    ```
    a gedom gelsar a yaltan, eta nim i fou i anepou i gerina. 
    ```
    
    **Tips**
      
    (ani)dai = want  
    (dai)ran= like   
    (an)do = can, capacity  
    (ani)fou = need  
    anye = make, do  
    anepou = stop  
    anelem = keep, stay, remain  
    anocari = leave  
    anona = give, gift  
    anifi = come  
    lili = again  
    liyar = morning  
    fano = offspring  
    mouje = drink  
    gerina = money, spend money  
    gedom = bank  
    gelsar = bill, charge  
    eta = therefore  
    yalnou = deep  
    yani = new  
    faibor = spouse, partner  
    um = negative, no, not    
    a...a... = is/are     
    a [subject] i [verb] e [direct complement] u [indirect complement/to/for]   
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('subcluster3-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="subcluster3-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0 0 0.5rem 0;">Possible translations:</p>
    <p style="margin: 0 0 0.5rem 0;">I don't like what she is doing.</p>
    <p style="margin: 0 0 0.5rem 0;">I want that he leaves a gift for me again / I want him to leave me a gift again.</p>
    <p style="margin: 0 0 0.5rem 0;">My daughter and my son need to come where I am.</p>
    <p style="margin: 0 0 0.5rem 0;">I don't like when you drink in the morning, but I cannot stop you.</p>
    <p style="margin: 0 0 0.5rem 0;">I need a new partner whom I can stay with. </p>
    <p style="margin: 0;">My bank bill is big, so I need to stop spending.</p>
    </div>
    
    From these sentences, we can notice two things:
        
    Stacking: the first verb (in short form) is the operator (need/can/etc.), and it applies to what follows. 
    
    Stop: i anepou i [verb] always means *stop doing [verb]*. English *stop* constructions can have multiple meanings which we will examine later (e.g., stop to do).
    
  
    Now try to create a sentence using *ca* connectors, or 3 if you're up for a challenge!
    
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
    })(this)" class="save-writing-btn" style="background:#4a9cd6 !important; color:white !important; border:none; padding:0.5rem 1.5rem; border-radius:4px; cursor:pointer; font-size:1rem; font-weight:500;">Save My Answer</button>
    </div>

=== "Vocabulary"

    ## OI CLUSTER
    
    Let's take a look at the **OI Cluster**! 
    
    <audio controls style="width:100%">
      <source src="../audio/19v.m4a" type="audio/mp4">
    </audio>
    
    | Oravia | English |
    |--------|---------|
    | oifu | silly, trivial |
    | oines | joke, funny |
    | oimel | story |
    | oihi | interest |
    | oipoh | excite, excitement |
    | oila | happy, joy |
    | oipili | cute |
    
    What do you think the **OI Cluster** is about? 
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('subcluster4-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="subcluster4-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0;">The <strong>OI</strong> words are about <strong>fun!</strong> </p>
    </div>
        
    !!! info "🌍 Sound Connections"
        Poh is like Greek πῦρ (pyr = fire); PIE *péh₂ur (fire).  
        
        Across unrelated languages, "la" is an expression of happiness (Portuguese/Spanish/Italian la in song, Swahili la in joy expressions, English la-la, Hindi lā in lullabies).  
        
    A lot of times people use these words as reactions, like this:
    ```
    Oipili! = cute!
    Oifu run! = silly you!
    ```
    
    We can also use **bi** to mark these reactions. *BI* introduces a chunk that is specifically a *speaker comment*. For example, one may say:
    
    ```
    Bi oila a nim en bo = I am happy that I am home.
    Nim i faigel bi oipoh! = Excitement: I am getting married!
    ```
    
    *Bi* isn't just for *oi* reactions. It also allows you to introduce your subjective experience and view. *Bi* opens up a lot of expressive possibilities in Oravia that we will explore more deeply later.
    
    And finally, *oi* means fun, amuse, entertain.  
    If we want to say a neutral *yes*, we use *ia*. If we want to say an enthusiastic *yay*, we use *oia* = oi + ia!
    
    Now let's see these words in context:

    **6. Kai:** I dai i bevio en yani bedam,<br>a ilhei i ilaluan ca oipili.<br>En limel, i dai i mo.

    **7. Ana:** A bevio a oi!<br>Nim i geldovear nime beivu,<br>eta nim i do i gerina.<br>Mai, i iranum i mo en limel.

    *bevio = shop · bedam = square · beivu = car · geldovear = sold*

    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('l19context').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click for Translation
    </button>
    </div>

    <div id="l19context" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0 0 0.5rem 0;">Kai: I want to shop at the new square. People say it is cute. In the evening, I want to eat.</p>
    <p style="margin: 0;">Ana: Shopping is fun! I sold my car, so I can spend money. But I don't like to eat in the evening.</p>
    </div>

    You are ready for the exercise now!
    
 

=== "Exercise 1"

    ## Matching Games

    Time to practice! Match the Oravia words with their English meanings. **Use sound-meaning associations as clues**. For example, the subcluster sound tells you the category, even for words you haven't seen before.  
    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.  
    Click one word from each column to match them. The game will check automatically when you select both words.

    ---

    ### Round 1

    <div id="matching-game-1" data-lesson="lesson18" data-round="1"></div>

    ---

    ### Round 2

    <div id="matching-game-2" data-lesson="lesson18" data-round="2"></div>

    ---

    ### Round 3

    <div id="matching-game-3" data-lesson="lesson18" data-round="3"></div>



=== "Exercise 2"

    ## Matching Games

    Time to practice! Match the Oravia words with their English meanings. **Use sound-meaning associations as clues**. For example, the subcluster sound tells you the category, even for words you haven't seen before.  
    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.  
    Click one word from each column to match them. The game will check automatically when you select both words.

    After completing the Exercises and Review, try it again to see how much you've improved.

    ---

    ### Round 1

    <div id="matching-game-4" data-lesson="lesson16" data-round="1"></div>

    ---

    ### Round 2

    <div id="matching-game-5" data-lesson="lesson16" data-round="2"></div>

    ---

    ### Round 3

    <div id="matching-game-6" data-lesson="lesson16" data-round="3"></div>

    ---

    ### Round 4

    <div id="matching-game-7" data-lesson="lesson16" data-round="4"></div>



=== "Review"

    ## Review Missed Words
    
    This section shows words you got wrong during practice. If you didn't miss any, this will be empty - great job! 🎉
    
    ---
    
    <div id="review-game-container"></div>

---

<script>
function initWarmup() {
        const warmupWords = [
    {id: "wu_yasoi_1", oravia: "yasoi", english: "fast"},
    {id: "wu_yalgai_2", oravia: "yalgai", english: "small"},
    {id: "wu_yamirli_3", oravia: "yamirli", english: "old"},
    {id: "wu_yaltan_4", oravia: "yaltan", english: "big"},
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
        🎉 <strong>Lesson 19 Complete!</strong>
    </p>
    <p style="color: #5a8bb8; margin-bottom: 0.5rem;">
        If you missed any words, check the <strong>Review</strong> tab to practice them again.
    </p>
    <p style="color: #5a8bb8; margin-bottom: 1.5rem;">
        Come back tomorrow for Lesson 20.
    </p>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const wrongIds = JSON.parse(localStorage.getItem('wrong_ids') || '[]');
    const container = document.getElementById('review-game-container');
    
    if (wrongIds.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem; background: #e0f2f1; border-radius: 8px;"><p style="font-size: 1.2rem; color: #4a9cd6; margin: 0;">🎉 No words to review!</p><p style="color: #5a8bb8; margin-top: 0.5rem;">You did not miss any words. Excellent work!</p></div>';
        return;
    }

    const baseUrl = window.location.origin;
    
    Promise.all([
        fetch(baseUrl + '/data/lesson10_words.json').then(r => r.json()),
        fetch(baseUrl + '/data/lesson09_words.json').then(r => r.json())
    ])
    .then(results => {
        const allWords = [...results[0].words, ...results[1].words];
        const wrongWords = allWords.filter(word => wrongIds.includes(word.id));
        
        if (wrongWords.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 3rem; background: #e0f2f1; border-radius: 8px;"><p style="font-size: 1.2rem; color: #4a9cd6; margin: 0;">🎉 No words to review!</p></div>';
            return;
        }

        container.innerHTML = '<p style="text-align: center; margin-bottom: 2rem; color: #5a8bb8;">Practice these ' + wrongWords.length + ' word(s) you found challenging:</p><div id="review-game-wrapper"></div><div style="text-align: center; margin-top: 2rem;"><button id="clear-review" style="padding: 0.5rem 1.5rem; background: #f57c00; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.95rem;">Clear Review List</button></div>';

        new MatchingGame('review-game-wrapper', wrongWords, 'review', null, []);

        document.getElementById('clear-review').addEventListener('click', function() {
            if (confirm('Clear all review words? This will reset your wrong words list for this lesson.')) {
                const allWrongIds = JSON.parse(localStorage.getItem('wrong_ids') || '[]');
                const lessonWordIds = allWords.map(w => w.id);
                const remainingWrongIds = allWrongIds.filter(id => !lessonWordIds.includes(id));
                localStorage.setItem('wrong_ids', JSON.stringify(remainingWrongIds));
                location.reload();
            }
        });
    })
    .catch(error => {
        console.error('Error loading words:', error);
        container.innerHTML = '<p style="color: #f44336;">Error loading review words. Please refresh the page.</p>';
    });
});
</script>
