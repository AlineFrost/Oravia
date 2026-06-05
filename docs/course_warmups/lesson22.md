
# Lesson 22: Time Units

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
    
    ## Time Units
    
    We will use numbers to talk about time! The numbers 1–7 are: *tam, tor, par, bale, alui, teva, peri.*
    
    We will use these to say the days of the week. The week starts on Monday, so that's day 1. Then Tuesday is day 2, and so on, like this:
    
    ```
    Tamen liperi = one in week = Monday
    Toren liperi = two in week = Tuesday
    Paren liperi = three in week = Wednesday
    ```

    How would you say *Thursday*, *Friday*, *Saturday*, and *Sunday*?

    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('answer-weekdays').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="answer-weekdays" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0 0 0.5rem 0;">Baleen liperi (Thurs), Aluien liperi (Fri), Tevaen liperi (Sat), Perien liperi (Sunday).</p>
    </div>
    
    In speech, people may drop *liperi* and say just *Tamen*, *Toren*, *Paren*, *Baleen*, *Aluien*, *Tevaen*, and *Perien*. In writing, the full form may be preferred.
    
    For months, we use numbers 8–12: *auta, tenda, das, dastam, dastor.* For dates, we specify the month and day, like this:
    
    ```
    Lipardas tam = month one = January
    Lipardas tor = month two = February
    Litam tam = day one = 1st of...
    Litam tor = day two = 2nd of...
    ```
    
    How would you say *July*, *October*, and *December*? How about *23rd of August*?

    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('answer-months').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="answer-months" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0 0 0.5rem 0;">Lipardas peri. Lipardas das. Lipardas dastor. Lipardas auta su Litam tordas par. / Litam tordas par su Lipardas auta.</p>
    </div>
    
    
    Celi run favi litam?
    
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
    })(this)" class="save-writing-btn" style="background:#4a9cd6; color:white; border:none; padding:0.4rem 1.2rem; border-radius:4px; cursor:pointer; font-size:0.9rem;">Save My Answer</button>
    </div>
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('subcluster5-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="subcluster5-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0 0 0.5rem 0;">When is your birthday? Possible answer: Lipardas par su Litam tam / Litam tam su Lipardas par (March 1st). </p>
    </div>
    
    Finally, there are two more important words when it comes to time. *Lar* is used for a general, unspecified past, and *lis* is used for a general, unspecified future. For example:
    
    ```
    Lar, i dami a falen = once upon a time, there was a child  
    Lis, i ilian = one day, I will know  
    ```
    
    These words can also be used to mean *last* and *next* when followed by a time period, like this:  
        
    ```
    Lar lidastor = the previous year / last year
    Lis lipardas = the following month / next month 
    ```
    
    The reference is usually the present, so when someone says *lis or lar + time*, it usually means last or next year / month / week. But remember, -ar and -is work as relative time, so if the narrative is not in the present, they may mean the previous / the following. 
    
    To sum up:
    ```
    Lipardas tam, lipardas tor... = January, February... 
    Litam tam, litam tor... = day 1, day 2...
    Tamen liperi, toren liperi... = Monday, Tuesday...
    Lar = unspecified past, once
    Lar + time period = the previous year / month / week...
    Lis = unspecific future, one day
    Lis + time period = the following year / month / week...
    ```
   
=== "Vocabulary"

    ## VA Subclusters
    
    Let's take a look at the **VA** Cluster! 
    
    | Oravia | English |
    |--------|---------|
    | vamio | neck, throat |
    | vandi | finger |
    | vanu | arm |
    | vanta | hand |
    | vanpai | foot |
    | vanvu | leg |
    | vardei | eye |
    | varluan | tongue |
    | varodu | head |
    | varsus | ear |
    | varmo | mouth |
    | vardur | tooth |
    | varpu | nose |
    
    What do you think the subcluster **VAN** is about?
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('cluster4-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="cluster4-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0;"><strong>VAN</strong> is for <strong>limbs</strong>.</p></p>
    </div>
    
    How about the subcluster **VAR**?
    
    <div style="text-align: center; margin: 2rem 0;">
    <button onclick="document.getElementById('cluster5-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; border-radius: 4px; cursor: pointer;">
        Click to Reveal the Answer
    </button>
    </div>
    
    <div id="cluster5-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
    <p style="margin: 0;"><strong>VAR</strong> is for body parts in the <strong>head/face</strong>.</p></p>
    </div>
    
    These words can also be verbs or adjectives, for example:
        
    | Oravia | English |
    |--------|---------|
    | vanpai | foot, kick |
    | vanvu | leg, walk |
    | vardei | eye, see, look, watch |
    | varluan | tongue, taste |
    | varsus | ear, hear, listen |
    | vardur | tooth, bite |
    | varpu | nose, smell, prying |
    | vandi | finger, toe, skillful |
    | vanta | hand, hold, manual |
    
    !!! info "🌍 Sound Connections"
        Pai is like Hindi पैर pair (foot) and Tamil பாதம் pādam (foot).
        
        Var comes from Sanskrit वक्त्रम् vaktram (face/mouth).
        
        Van comes from Hindi बाँह (bāṃh = arm/limb); Arabic بَدَن (badan = body/limbs); Indonesian badan (body and its limbs).
        
    We also have:  
    **yespai** = shoe (clothing + feet), just like vanpai = foot, kick (limb body part + foot)  
    
    Now try to create a sentence using **VA** words, or 3 if you're up for a challenge!
    
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
    })(this)" class="save-writing-btn" style="background:#4a9cd6; color:white; border:none; padding:0.4rem 1.2rem; border-radius:4px; cursor:pointer; font-size:0.9rem;">Save My Answer</button>
    </div>
    
    You are ready for the exercise now!

=== "Exercise 1"

    ## Matching Games

    Time to practice! Match the Oravia words with their English meanings. **Use sound-meaning associations as clues**. For example, the subcluster sound tells you the category, even for words you haven't seen before.  
    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.  
    Click one word from each column to match them. The game will check automatically when you select both words.

    ---

    ### Round 1

    <div id="matching-game-1" data-lesson="lesson22" data-round="1"></div>

    ---

    ### Round 2

    <div id="matching-game-2" data-lesson="lesson22" data-round="2"></div>

    ---

    ### Round 3

    <div id="matching-game-3" data-lesson="lesson22" data-round="3"></div>



=== "Exercise 2"

    ## Matching Games

    Time to practice! Match the Oravia words with their English meanings. **Use sound-meaning associations as clues**. For example, the subcluster sound tells you the category, even for words you haven't seen before.  
    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.  
    Click one word from each column to match them. The game will check automatically when you select both words.

    After completing the Exercises and Review, try it again to see how much you've improved.

    ---

    ### Round 1

    <div id="matching-game-4" data-lesson="lesson20" data-round="1"></div>

    ---

    ### Round 2

    <div id="matching-game-5" data-lesson="lesson20" data-round="2"></div>

    ---

    ### Round 3

    <div id="matching-game-6" data-lesson="lesson20" data-round="3"></div>

    ---

    ### Round 4

    <div id="matching-game-7" data-lesson="lesson20" data-round="4"></div>

    ---

    ### Round 5

    <div id="matching-game-8" data-lesson="lesson20" data-round="5"></div>

    ---

    ### Round 6

    <div id="matching-game-9" data-lesson="lesson20" data-round="6"></div>

    ---

    ### Round 7

    <div id="matching-game-10" data-lesson="lesson20" data-round="7"></div>



=== "Review"

    ## Review Missed Words
    
    This section shows words you got wrong during practice. If you didn't miss any, this will be empty - great job! 🎉
    
    <div id="review-game-container"></div>


<script>
function initWarmup() {
        const warmupWords = [
    {id: "wu_eon_1", oravia: "eon", english: "hello"},
    {id: "wu_eori_2", oravia: "eori", english: "please"},
    {id: "wu_eodani_3", oravia: "eodani", english: "meet"},
    {id: "wu_eomsu_4", oravia: "eomsu", english: "party"},
    {id: "wu_eofa_5", oravia: "eofa", english: "friend"},
    ];

    function renderSelfAssessment() {
        const container = document.getElementById('self-assessment-container');
        if (!container) { setTimeout(renderSelfAssessment, 100); return; }
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
        html += `<div id="syllable-reminder" style="display:none; margin-top:1.25rem; padding:1rem; background:#eef7fb; border-left:4px solid #4a9cd6; border-radius:6px;"><p style="margin:0 0 0.5rem 0; font-weight:bold; color:#345;">Syllable reminders</p><p style="margin:0.25rem 0;"><strong>eo</strong> = social connection</p><p style="margin:0.25rem 0;"><strong>eom</strong> = gathering; Korean moim</p><p style="margin:0.25rem 0;"><strong>eod</strong> = meeting; Japanese deau</p><p style="margin:0.25rem 0; "><strong>ani</strong> = approach, movement touwards; Japanese ni, Latin animus</p></div>`;
        container.innerHTML = html;
        document.getElementById('show-answers-btn').addEventListener('click', function() {
            document.querySelectorAll('.answer-col').forEach(col => col.style.display = 'table-cell');
            const reminder = document.getElementById('syllable-reminder');
            if (reminder) reminder.style.display = 'block';
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
        🎉 <strong>Lesson 22 Complete!</strong>
    </p>
    <p style="color: #5a8bb8; margin-bottom: 0.5rem;">
        If you missed any words, check the <strong>Review</strong> tab to practice them again.
    </p>
    <p style="color: #5a8bb8; margin-bottom: 1.5rem;">
        Come back tomorrow for Lesson 23.
    </p>
</div>

