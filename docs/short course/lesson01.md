# Lesson 1: Personal Pronouns

    <div id="user-id-prompt" style="background:#e8f4fb;border-radius:8px;padding:1.5rem;margin-bottom:1.5rem;border:1px solid #4a9cd6">
        <p style="font-weight:600;color:#2a4a6b;margin-bottom:0.75rem">Before you begin</p>
        <p style="color:#5a8bb8;margin-bottom:1rem;font-size:0.95rem">Please enter your name or email so we can track your progress through the course.</p>
        <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
            <input id="user-id-input" type="text" placeholder="Your name or email"
                style="flex:1;min-width:200px;padding:0.5rem 0.75rem;border:1px solid #4a9cd6;border-radius:6px;font-size:0.95rem">
            <button id="user-id-save" style="padding:0.5rem 1.25rem;background:#4a9cd6;color:white;border:none;border-radius:6px;font-size:0.95rem;cursor:pointer;font-weight:600">
                Save
            </button>
        </div>
        <p id="user-id-saved" style="display:none;color:#43a047;margin-top:0.75rem;font-size:0.9rem">✓ Saved! You're all set.</p>
    </div>

    <script>
    (function() {
        const input = document.getElementById('user-id-input');
        const btn = document.getElementById('user-id-save');
        const saved = document.getElementById('user-id-saved');
        const prompt = document.getElementById('user-id-prompt');

        // If already set, show confirmation and hide input
        const existing = localStorage.getItem('oravia_user_id');
        if (existing) {
            input.value = existing;
            saved.textContent = '✓ Saved as: ' + existing + '. Click Save to change.';
            saved.style.display = 'block';
        }

        btn.addEventListener('click', function() {
            const val = input.value.trim();
            if (!val) return;
            localStorage.setItem('oravia_user_id', val);
            saved.textContent = '✓ Saved as: ' + val;
            saved.style.display = 'block';
            btn.textContent = 'Updated ✓';
            setTimeout(() => { btn.textContent = 'Save'; }, 2000);
        });
    })();
    </script>
    
    ## Personal Pronouns
    
    These are the personal pronouns:
    
    | Oravia | English |
    |--------|---------|
    | **nim** | I |
    | **run** | you |
    | **hay** | he/she/they (singular) |
    
    There is **no gender**, so **hay** can be used as he, she, it, or any other singular third person pronoun. 
    Words in Oravia don't generally have plural, but personal pronouns do. Here they are:
    
    | Oravia | English |
    |--------|---------|
    | **nima** | we |
    | **runa** | you (plural) |
    | **haya** | they (plural) |
    
    For example, if you want to refer to just **one person** listening to you, you'd say **"run"**. If you want to refer to **multiple people**, like "y'all", you'd say **"runa"**.
    
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
    
    
    ## Vocabulary
    
    Each lesson, we will learn some syllables and their meanings. Many syllables will also have a natural language connection, that works as mnemonics to help you remember the meaning. Then, we will see some words that use these syllables. Let's get started!

    **MO** = food, like mmmm!  
    **MOA** = fruit, like MO + apple  
    **LEN** = long, like length  
    **BOE** = house section, like bower (historically means room)  
    **VAR** = face, like   
    
    Words have flexible roles, such that the same word may be used as a noun, adjective, verb. For example, *mo* means both *food* and *to eat*. We differentiate these based on the markers, which we will learn about next lesson. 
    
    The first building block of a word, what we call the cluster, is the semantic category. For example, a word that starts with *var* belongs to the face cluster, and a word that starts with *moa* is a type of fruit.
    
    With these building blocks, we form words, like:  
    **BOEMO** = kitchen; BOE (house section) + MO (food)  
    **MOALEN** = banana; MOA (fruit) + LEN (long)  
    **VARMO** = mouth; VAR (face) + MO (eat)  
      

    <div id="review-game-container"></div>
=== "Flashcards"

    <div id="flashcard-container" data-lesson="1"></div>

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

