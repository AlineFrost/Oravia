# Lesson 44: O Marker 

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
    
=== "Grammar"

    ## O Marker
    
    We already know the markers *a* (subject), *e* (direct object), *i* (verb) and *u* (indirect object). This lesson we will learn our last marker, *o*. 
    
    We use *o* to give emphasis to what comes after it. Here are some examples:
    
    ``` 
    o nim! = it's me!  
    o nima i anvu = WE will go  
    run o faibor = you're the one  
    o faejal = the man  
    i anona o u run = I give it to YOU (and not someone else)
    ```
    
    If we use it before the verb, we emphasize the action. Without a specific subject, it can be read as an order:
    
    ``` 
    o i anona! = give it!
    o yadetu! = stop!
    ```
    
    If we use it before the verb complement, we emphasize the complement and de-emphasize the subject. This is how we build passive voice:
    
    ``` 
    o e leirih i vonlu = the tree was touched
    i yean o e yemiodu = the pillow was sewn
    a eofa i vanpai o e falen = the kid was kicked by the friend
    ```
   
    To sum up:
  
    ```     
    o marker = emphasis
    o i [verb] = imperative, orders (emphasis on the action)
    o e [object] = passive (emphasis on the object)
    ```
    
    Now try to create a sentence using *o*, or 3 if you're up for a challenge!
    
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

    ## EL CLUSTER
    
    Let's dig deeper into this amazing cluster, **EL**:
    
    | Oravia | English |
    |--------|---------|
    | elarih | divine |
    | elaora | religion |
    | eleyel | love |
    | elenon | journey |
    | eleyus | dream |
    | elireva | truth |
    | elirota | moral |
    | elihei | self |
    | elomio | help |
    | elodan | free, freedom |
    | elonor | peace |

    
    I will tell you the meanings of the four subclusters and you will try to match which is which. Ready?

    One is about social virtues: things people do to each other, that depend on a societal structure and social obligation.  
    One is about intrinsic values.  
    One is about self-expansion.  
    One is about religious words.  


    What do you think is the subcluster sound of each?
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('subcluster4-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="subcluster4-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0;"> <strong>ELA</strong> is about <strong>religious words</strong>, <strong>ELE</strong> is about <strong>self-expansion</strong>, <strong>ELI</strong> is about <strong>instrinsic values</strong>, <strong>ELO</strong> is about <strong>social virtues</strong>.</p>
    </div>
    
    If you are not clear which is which, or if you forget the subcluster, remember it's totally okay to not use it! You could say for example *elenon* or *elnon*, they both mean journey! You can also say just *ele* (self-expansion) or *non* (way, path), although the meaning would be a little broader.
    
    !!! info "🌍 Sound Connections"
        Ela is like Aramaic Elah, which means God. It is related to other Semitic words like Arabic Allah and Hebrew El, from which we got names like Gabriel, Michael and Daniel.   
        
        Elo is like Latin eloqui, which means to speak out.
        
        Eli has the same e-i pattern as the Greek ethikos, from which English words like ethical came from.
        
    
    Ce run eleyus?
    
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
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('subcluster5-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal Translation
    </button>
    </div>
    
    <div id="subcluster5-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0;">Possible translation: What is your dream?</p>
    </div>
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('subcluster6-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal Answer
    </button>
    </div>
    
    <div id="subcluster6-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0;">Example answer: A nim eleyus a elomio e neliu ilhei. </p>
    </div>
    
    You are ready for the exercise now!
    
 

=== "Exercise 1"

    ## Matching Games

    Time to practice! Match the Oravia words with their English meanings.

    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.

    Click one word from each column to match them. The game will check automatically when you select both words.

    ---

    ### Round 1

    <div id="matching-game-1" data-lesson="lesson40" data-round="1"></div>

    ---

    ### Round 2

    <div id="matching-game-2" data-lesson="lesson40" data-round="2"></div>

    ---

    ### Round 3

    <div id="matching-game-3" data-lesson="lesson40" data-round="3"></div>



=== "Exercise 2"

    ## Matching Games

    Time to practice! Match the Oravia words with their English meanings.

    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.

    Click one word from each column to match them. The game will check automatically when you select both words.

    After completing the Exercises and Review, try it again to see how much you've improved.

    ---

    ### Round 1

    <div id="matching-game-4" data-lesson="lesson38_exercise2" data-round="1"></div>

    ---

    ### Round 2

    <div id="matching-game-5" data-lesson="lesson38_exercise2" data-round="2"></div>

    ---

    ### Round 3

    <div id="matching-game-6" data-lesson="lesson38_exercise2" data-round="3"></div>

    ---

    ### Round 4

    <div id="matching-game-7" data-lesson="lesson38_exercise2" data-round="4"></div>



=== "Review"

    ## Review Missed Words
    
    This section shows words you got wrong during practice. If you didn't miss any, this will be empty - great job! 🎉
    
    <div id="review-game-container"></div>


<script>
function initWarmup() {
        const warmupWords = [
    {id: "apa_1", oravia: "apasoi",  english: "hurry"},
    {id: "apa_2", oravia: "apanou",  english: "drop"},
    {id: "apa_3", oravia: "aparih",  english: "jump"},
    {id: "apa_4", oravia: "apavu",   english: "run"},
    {id: "apa_5", oravia: "apafene", english: "sit"},
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
        🎉 <strong>Lesson 44 Complete!</strong>
    </p>
    <p style="color: #5a8bb8; margin-bottom: 0.5rem;">
        If you missed any words, check the <strong>Review</strong> tab to practice them again.
    </p>
    <p style="color: #5a8bb8; margin-bottom: 1.5rem;">
        Come back tomorrow for Lesson 45.
    </p>
</div>
