# Lesson 1: Personal Pronouns

!!! info "How to Use This Lesson"
    Every lesson is divided into four sections: **Grammar**, **Vocabulary**, **Exercise**, and **Review**. Please move through these tabs in order.
    
    **Do not try to memorize!** Just read through the content attentively. We will have plenty of exercises and reviews later! 

---

=== "Grammar"

    ## Personal Pronouns
    
    Let's get started with grammar first!
    
    ### Singular Pronouns
    
    These are the personal pronouns:
    
    | Oravia | English |
    |--------|---------|
    | **nim** | I |
    | **run** | you |
    | **hay** | he/she/they (singular) |
    
    For example, if you want to refer to yourself, you'd say **"nim"**. 
    
    There is **no gender**, so **hay** can be used as he, she, or any other singular third person pronoun. In sum, you can point to anyone and say **"hay"**.
    
    ### Plural Pronouns
    
    Words in Oravia don't generally have plural, but personal pronouns do. Here they are:
    
    | Oravia | English |
    |--------|---------|
    | **nima** | we |
    | **runa** | you (plural) |
    | **haya** | they (plural) |
    
    For example, if you want to refer to just **one person** listening to you, you'd say **"run"**. If you want to refer to **multiple people**, like "y'all", you'd say **"runa"**.
    
    ### All Together
    
    Now let's look at them again, singular and plural:
    
    <audio controls style="width:100%">
      <source src="../audio/1g.mp3" type="audio/wav">
    </audio>
    
    
    | Singular | Plural |
    |----------|--------|
    | **nim** (I) | **nima** (we) |
    | **run** (you) | **runa** (you all) |
    | **hay** (he/she/they) | **haya** (they) |
    
    !!! question "Quick Check"
        - How do you say "he"?
        - How about "they (plural)"?
    
    ---
    
    That's it for grammar today! Let's move on to the next tab: **Vocabulary**.

=== "Vocabulary"

    ## The MO Cluster
    
    We are going to learn our first cluster! Look at the list of words below. 
    
    **Remember, do not try to memorize them.** Just read it through attentively.
    
    <audio controls style="width:100%">
      <source src="../audio/1v.mp3" type="audio/wav">
    </audio>
    
    
    | Oravia | English |
    |--------|---------|
    | mogali | coffee |
    | mocen | chocolate |
    | moyi | sugar, sweet |
    | moval | ice |
    | mouje | drink |
    | moulu | milk |
    
    All these words start with **MO**, being part of the **MO cluster**. 
    
    ### Guess the Cluster
    
    Now, what do you think this cluster is about?
    
    <div style="text-align: center; margin: 2rem 0;">
        <button onclick="document.getElementById('cluster-answer').style.display='block'; this.style.display='none';" style="background: #4a9cd6; color: white; border: none; padding: 0.75rem 2rem; font-size: 1rem; border-radius: 4px; cursor: pointer;">
            Click to Reveal Cluster Meaning
        </button>
    </div>
    
    <div id="cluster-answer" style="display: none; background: #c8e6c9; padding: 1.5rem; border-left: 4px solid #43a047; border-radius: 4px; margin: 2rem 0;">
        <p style="font-size: 1.1rem; margin: 0;"><strong>That's right!</strong> It's about <strong>food: eating and drinking</strong>.</p>
    </div>
        
    !!! info "🌍 Fun Fact"
        Many languages use something similar to "mo" for food because it's a sound of lips together. For example, Hawaiian moku (to eat, archaic); Swahili mlo (meal); Korean 먹다 meokda (to eat); Japanese もぐもぐ mogu-mogu (onomatopoeia for eating/chewing); English yummy.
        
    ---

=== "Exercise"

    ## Matching Games
    
    Time to practice! Match the Oravia words with their English meanings.
    
    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.
    
    Click one word from each column to match them. The game will check automatically when you select both words.
    
    ---
    
    ### Round 1: Singular Pronouns
    
    <div id="matching-game-1" data-lesson="lesson01" data-round="1"></div>
    
    ---
    
    ### Round 2: Plural Pronouns
    
    <div id="matching-game-2" data-lesson="lesson01" data-round="2"></div>
    
    ---
    
    ### Round 3: All Pronouns
    
    <div id="matching-game-3" data-lesson="lesson01" data-round="3"></div>

=== "Review"

    ## Review Missed Words
    
    This section shows only the words you got wrong during practice. If you didn't miss any words, this will be empty - great job! 🎉
    
    ---
    
    <div id="review-game-container"></div>
    

---

<div style="text-align: center; padding: 2rem 0; background: #e0f2f1; border-radius: 8px; margin-top: 3rem;">
    <p style="font-size: 1.2rem; color: #4a9cd6; margin-bottom: 1rem;">
        🎉 <strong>Lesson 1 Complete!</strong>
    </p>
    <p style="color: #5a8bb8; margin-bottom: 0.5rem;">
        If you missed any words, check the <strong>Review</strong> tab to practice them again.
    </p>
    <p style="color: #5a8bb8; margin-bottom: 1.5rem;">
        Come back tomorrow for Lesson 2.
    </p>
</div>

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