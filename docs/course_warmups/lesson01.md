# Lesson 1: Personal Pronouns

!!! info "How to Use This Lesson"
    This lesson is divided into four sections. Please move through them in this order: **Grammar**, **Vocabulary**, **Practice**, **Flashcards**.
    
    **Do not try to memorize!** Just read through the content attentively. The warm-ups and flashcards will bring the vocabulary back later!

---

=== "Grammar"

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
    
    Words in Oravia don't generally have plural, but personal pronouns do. Personal pronouns form the plural with **-as**: **nim → nimas**, **run → runas**, **hay → hayas**. Here they are:
    
    | Oravia | English |
    |--------|---------|
    | **nimas** | we |
    | **runas** | you (plural) |
    | **hayas** | they (plural) |
    
    For example, if you want to refer to just **one person** listening to you, you'd say **"run"**. If you want to refer to **multiple people**, like "y'all", you'd say **"runas"**.
    
    ### All Together
    
    Now let's look at them again, singular and plural:
    <!-- Audio temporarily hidden: it contains the previous plural-pronoun forms. Rerecord with nimas/runas/hayas. -->
    | Singular | Plural |
    |----------|--------|
    | **nim** (I) | **nimas** (we) |
    | **run** (you) | **runas** (you all) |
    | **hay** (he/she/they) | **hayas** (they) |
    
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
    | moaria | apple |
    | mocen | chocolate |
    | mogali | coffee |
    | mouje | drink |
    
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
        
    !!! info "🌍 Sound Connections"
        Many languages use something similar to "mo" for food because it's a sound of lips together. For example, Hawaiian moku (to eat, archaic); Swahili mlo (meal); Korean 먹다 meokda (to eat); Japanese もぐもぐ mogu-mogu (onomatopoeia for eating/chewing); English yummy.
        
        
    Sound connections create associations between Oravia's syllable-meanings and real world languages. This is not about strict etymology, its main purpose is helping learning. Read these boxes attentively and think about how the syllables relate in sound and meaning. This may help you remember words.  
    
    ---

=== "Practice"

    ## Matching Games

    Time to practice! Match the Oravia words with their English meanings. **Use sound-meaning associations as clues**. For example, the subcluster sound tells you the category, even for words you haven't seen before.  
    **If you don't remember or make a mistake, that's totally fine!** We will have plenty of opportunities to practice. Right now just give it a try.  
    Click one word from each column to match them. The game will check automatically when you select both words.
    ---

    ### Round 1

    <div id="matching-game-1" data-lesson="cc26_lesson01" data-round="1"></div>

    ---

    ### Round 2

    <div id="matching-game-2" data-lesson="cc26_lesson01" data-round="2"></div>

    ---

    ### Round 3

    <div id="matching-game-3" data-lesson="cc26_lesson01" data-round="3"></div>


=== "Flashcards"

    <div id="flashcard-container" data-lesson="1"></div>

---

<div style="text-align: center; padding: 2rem 0; background: #e0f2f1; border-radius: 8px; margin-top: 3rem;">
<p style="font-size: 1.2rem; color: #4a9cd6; margin-bottom: 1rem;">
        🎉 <strong>Lesson 1 Complete!</strong>
    </p>
<p style="color: #5a8bb8; margin-bottom: 0.5rem;">
        Use the <strong>Flashcards</strong> tab for another quick review.
    </p>
<p style="color: #5a8bb8; margin-bottom: 1.5rem;">
        Come back tomorrow for Lesson 2.
    </p>
</div>



