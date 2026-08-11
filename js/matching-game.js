class MatchingGame {
    constructor(containerId, allWords, roundNumber, roundConfig, usedWordIds = []) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container ${containerId} not found`);
            return;
        }
        this.containerId = containerId;
        this.allWords = allWords;
        this.roundNumber = roundNumber;
        this.roundConfig = roundConfig;
        this.usedWordIds = usedWordIds;
        this.selectedOravia = null;
        this.selectedEnglish = null;
        this.matchedPairs = 0;

        this.init();
    }

    init() {
        const words = this.getWordsForRound();
        if (words.length === 0) {
            this.container.innerHTML = '<p>No words configured for this round.</p>';
            return;
        }

        this.renderGame(words);
    }

    getWordsForRound() {
        if (!this.roundConfig || !this.roundConfig.buckets) {
            return this.allWords;
        }

        const selectedWords = [];
        const buckets = this.roundConfig.buckets;
        const wordsPerBucket = this.roundConfig.words_per_bucket || 1;

        buckets.forEach(bucketName => {
            // Get all words from this bucket that haven't been used
            const bucketWords = this.allWords.filter(word => {
                if (this.roundConfig.allow_repeats) {
                    return word.bucket === bucketName;
                }
                return word.bucket === bucketName && !this.usedWordIds.includes(word.id);
            });

            // Randomly select words_per_bucket words from this bucket
            const shuffled = this.shuffle([...bucketWords]);
            const selected = shuffled.slice(0, wordsPerBucket);

            selectedWords.push(...selected);

            // Mark these words as used for future rounds
            selected.forEach(word => {
                if (!this.usedWordIds.includes(word.id)) {
                    this.usedWordIds.push(word.id);
                }
            });
        });

        console.log(`Round ${this.roundNumber} selected words:`, selectedWords.map(w => w.oravia));
        return selectedWords;
    }

    renderGame(words) {
        const oraviaWords = this.shuffle([...words]);
        const englishWords = this.shuffle([...words]);
        const statusId = `status-${this.containerId}`;

        const gameHTML = `
            <div class="matching-game">
                <div class="matching-column">
                    <h3>Oravia</h3>
                    ${oraviaWords.map(word => `
                        <div class="matching-item" data-id="${word.id}" data-type="oravia" data-word="${word.oravia}">
                            ${word.oravia}
                        </div>
                    `).join('')}
                </div>
                <div class="matching-column">
                    <h3>English</h3>
                    ${englishWords.map(word => `
                        <div class="matching-item" data-id="${word.id}" data-type="english" data-word="${word.english}">
                            ${word.english}
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="game-status">
                <p id="${statusId}">Click one word from each column to match them.</p>
            </div>
        `;

        this.container.innerHTML = gameHTML;
        this.attachEventListeners();
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    attachEventListeners() {
        const items = this.container.querySelectorAll('.matching-item');
        items.forEach(item => {
            item.addEventListener('click', (e) => this.handleClick(e.target));
        });
    }

    handleClick(item) {
        if (item.classList.contains('correct')) return;

        const type = item.dataset.type;

        if (type === 'oravia') {
            if (this.selectedOravia) {
                this.selectedOravia.classList.remove('selected');
            }
            this.selectedOravia = item;
            item.classList.add('selected');
        } else {
            if (this.selectedEnglish) {
                this.selectedEnglish.classList.remove('selected');
            }
            this.selectedEnglish = item;
            item.classList.add('selected');
        }

        if (this.selectedOravia && this.selectedEnglish) {
            this.checkMatch();
        }
    }

    checkMatch() {
        const oraviaId = this.selectedOravia.dataset.id;
        const englishId = this.selectedEnglish.dataset.id;
        const statusId = `status-${this.containerId}`;
        const statusMessage = document.getElementById(statusId);

        if (oraviaId === englishId) {
            this.selectedOravia.classList.remove('selected');
            this.selectedEnglish.classList.remove('selected');
            this.selectedOravia.classList.add('correct');
            this.selectedEnglish.classList.add('correct');

            this.matchedPairs++;
            if (statusMessage) {
                statusMessage.textContent = 'Correct! ✓';
                statusMessage.style.color = '#43a047';
            }
            // Log correct answer
            (function(word) {
                const log = JSON.parse(localStorage.getItem('oravia_log') || '[]');
                log.push({
                    timestamp: new Date().toISOString(),
                    lesson: word.id.split('_').slice(0,2).join('_'),
                    word_id: word.id,
                    oravia: word.oravia,
                    english: word.english,
                    type: 'matching',
                    correct: true
                });
                localStorage.setItem('oravia_log', JSON.stringify(log));
            })(this.allWords.find(w => w.id === oraviaId));
            // Log correct answer
            (function(word) {
                const log = JSON.parse(localStorage.getItem('oravia_log') || '[]');
                log.push({
                    timestamp: new Date().toISOString(),
                    lesson: word.id.split('_').slice(0,2).join('_'),
                    word_id: word.id,
                    oravia: word.oravia,
                    english: word.english,
                    type: 'matching',
                    correct: true
                });
                localStorage.setItem('oravia_log', JSON.stringify(log));
            })(this.allWords.find(w => w.id === oraviaId));

            const currentWords = this.getWordsForRound();
            if (this.matchedPairs === currentWords.length) {
                setTimeout(() => {
                    if (statusMessage) {
                        statusMessage.textContent = '🎉 Great job! All matched!';
                        statusMessage.style.color = '#4a9cd6';
                    }
                }, 500);
            }

            this.selectedOravia = null;
            this.selectedEnglish = null;
        } else {
            const wrongOravia = this.selectedOravia;
            const wrongEnglish = this.selectedEnglish;

            wrongOravia.classList.add('incorrect');
            wrongEnglish.classList.add('incorrect');

            if (statusMessage) {
                statusMessage.textContent = 'Try again...';
                statusMessage.style.color = '#757575';
            }

            const wrongIds = JSON.parse(localStorage.getItem('wrong_ids') || '[]');
            if (!wrongIds.includes(oraviaId)) {
                wrongIds.push(oraviaId);
            }
            if (!wrongIds.includes(englishId)) {
                wrongIds.push(englishId);
            }
            localStorage.setItem('wrong_ids', JSON.stringify(wrongIds));
            // Log incorrect answer
            (function(word) {
                const log = JSON.parse(localStorage.getItem('oravia_log') || '[]');
                log.push({
                    timestamp: new Date().toISOString(),
                    lesson: word.id.split('_').slice(0,2).join('_'),
                    word_id: word.id,
                    oravia: word.oravia,
                    english: word.english,
                    type: 'matching',
                    correct: false
                });
                localStorage.setItem('oravia_log', JSON.stringify(log));
            })(this.allWords.find(w => w.id === oraviaId));
            // Log incorrect answer
            (function(word) {
                const log = JSON.parse(localStorage.getItem('oravia_log') || '[]');
                log.push({
                    timestamp: new Date().toISOString(),
                    lesson: word.id.split('_').slice(0,2).join('_'),
                    word_id: word.id,
                    oravia: word.oravia,
                    english: word.english,
                    type: 'matching',
                    correct: false
                });
                localStorage.setItem('oravia_log', JSON.stringify(log));
            })(this.allWords.find(w => w.id === oraviaId));
            console.log('Wrong answer recorded. Current wrong_ids:', wrongIds);

            this.selectedOravia = null;
            this.selectedEnglish = null;

            setTimeout(() => {
                wrongOravia.classList.remove('incorrect', 'selected');
                wrongEnglish.classList.remove('incorrect', 'selected');
                if (statusMessage) {
                    statusMessage.textContent = 'Click one word from each column to match them.';
                    statusMessage.style.color = '#5a8bb8';
                }
            }, 800);
        }
    }
}

window.MatchingGame = MatchingGame;

document$.subscribe(async () => {
    console.log('Matching game script loaded');

    const games = [];
    const gameElements = document.querySelectorAll('[id^="matching-game-"]');
    gameElements.forEach(game => {
        const id = parseInt(game.id.replace('matching-game-', ''));
        games.push({
            id: id,
            element: game,
            lesson: game.dataset.lesson,
            round: parseInt(game.dataset.round)
        });
    });
    games.sort((a, b) => a.id - b.id);

    if (games.length === 0) {
        console.log('No game containers found');
        return;
    }

    console.log(`Found ${games.length} games`);

    // Group games by lesson
    const lessonGroups = {};
    games.forEach(game => {
        if (!lessonGroups[game.lesson]) {
            lessonGroups[game.lesson] = [];
        }
        lessonGroups[game.lesson].push(game);
    });

    // Load data for each lesson and initialize games
    try {
        const baseUrl = window.location.origin;

        for (const [lessonId, lessonGames] of Object.entries(lessonGroups)) {
            console.log(`Loading data for ${lessonId}`);

            const response = await fetch(`${baseUrl}/data/${lessonId}_words.json`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();

            const usedWordIds = [];

            lessonGames.forEach(game => {
                const roundConfig = data.rounds?.find(r => r.round === game.round);
                if (roundConfig) {
                    new MatchingGame(`matching-game-${game.id}`, data.words, game.round, roundConfig, usedWordIds);
                }
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
});


// ═══════════════════════════════════════════════════════════════
// ORAVIA FLASHCARD WIDGET
// Appended to matching-game.js so it loads on every lesson page
// ═══════════════════════════════════════════════════════════════

const FC_STORAGE_KEY = 'oravia_fc_schedule';
const FC_GOOD_INTERVALS = [1, 3, 6, 10]; // days
const FC_REVIEW_CAP = 10;
const FC_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyK1kWJRcXZ9tHqLGYZP8ZG90OcMj8ld3zUSNjvyOhHiSJyr5GIep0tdCxF9xMBamia/exec'; // paste your deployed Apps Script URL here

// ─────────────────────────────────────────────
// STORAGE — reads/writes card schedule to localStorage
// Schema per card: { interval_index, due, phase, lastResponse, dueSession }
// phase: 'or_en' | 'en_or' | 'retired'
// ─────────────────────────────────────────────
const FCStorage = {
    _get() {
        try { return JSON.parse(localStorage.getItem(FC_STORAGE_KEY) || '{}'); }
        catch(e) { return {}; }
    },
    _set(data) {
        try { localStorage.setItem(FC_STORAGE_KEY, JSON.stringify(data)); }
        catch(e) { console.error('FC storage write failed', e); }
    },
    getCard(id) { return this._get()[id] || null; },
    setCard(id, state) {
        const data = this._get();
        data[id] = state;
        this._set(data);
    },
    // Cards due today or earlier, excluding given ids
    getDueCards(allCards, excludeIds = new Set()) {
        const schedule = this._get();
        const today = fcTodayStr();
        return allCards.filter(card => {
            if (excludeIds.has(card.id)) return false;
            const state = schedule[card.id];
            if (!state) return false;
            if (state.dueSession) return false;
            if (state.phase === 'retired') return false;
            return state.due <= today;
        });
    },
    // Cards marked for end-of-session review (Hard response)
    getSessionDueCards(allCards) {
        const schedule = this._get();
        return allCards.filter(card => {
            const state = schedule[card.id];
            return state && state.dueSession;
        });
    },
    // Reset dueSession flags at start of new day
    clearSessionFlags() {
        const data = this._get();
        Object.keys(data).forEach(id => { delete data[id].dueSession; });
        this._set(data);
    }
};

// ─────────────────────────────────────────────
// SCHEDULER — computes next due date per response
// ─────────────────────────────────────────────
const FCScheduler = {
    respond(card, response) {
        const existing = FCStorage.getCard(card.id) || {
            interval_index: -1,
            due: fcTodayStr(),
            phase: 'or_en',
            lastResponse: null
        };
        let { interval_index, phase } = existing;

        if (response === 'again') {
            // No interval change, just save lastResponse
            const state = { ...existing, lastResponse: 'again' };
            FCStorage.setCard(card.id, state);
            return state;
        }

        if (response === 'hard') {
            // Reset to interval 0, reappear end of session then 1 day
            const state = {
                interval_index: 0,
                due: fcAddDays(fcTodayStr(), FC_GOOD_INTERVALS[0]),
                phase,
                lastResponse: 'hard',
                dueSession: true
            };
            FCStorage.setCard(card.id, state);
            return state;
        }

        if (response === 'good') {
            // Only advance interval if previous response was also Good
            if (existing.lastResponse === 'good') {
                interval_index = Math.min(interval_index + 1, FC_GOOD_INTERVALS.length - 1);
            } else {
                interval_index = Math.max(interval_index, 0);
            }
            const days = FC_GOOD_INTERVALS[interval_index];

            // At max interval in or_en phase: flip to en_or
            if (interval_index === FC_GOOD_INTERVALS.length - 1 && phase === 'or_en') {
                phase = 'en_or';
                interval_index = -1; // restart intervals for production phase
            }
            // At max interval in en_or phase: retire card
            else if (interval_index === FC_GOOD_INTERVALS.length - 1 && phase === 'en_or') {
                const state = { interval_index, due: fcAddDays(fcTodayStr(), 3650), phase: 'retired', lastResponse: 'good' };
                FCStorage.setCard(card.id, state);
                FCLogger.log(card.id, 'retired', phase);
                return state;
            }

            const state = { interval_index, due: fcAddDays(fcTodayStr(), days), phase, lastResponse: 'good' };
            FCStorage.setCard(card.id, state);
            return state;
        }
    },
    initNew(card) {
        const state = { interval_index: -1, due: fcTodayStr(), phase: 'or_en', lastResponse: null };
        FCStorage.setCard(card.id, state);
        return state;
    }
};

// ─────────────────────────────────────────────
// SESSION MANAGER — builds and manages the card queue
// ─────────────────────────────────────────────
class FCSession {
    constructor(newCards, reviewCards) {
        this.queue = [...newCards, ...reviewCards]; // new cards always first
        this.againBuffer = [];
        this.cardsSinceAgain = 0;
        this.seenIds = new Set();
        this.totalNew = newCards.length;
        this.totalReview = reviewCards.length;
        this.remainingNew = newCards.length;
        this.remainingReview = reviewCards.length;
        this.newIds = new Set(newCards.map(c => c.id));
        this.completed = 0;
        this.total = this.queue.length;
    }

    next() {
        // Reinsert Again cards after every 2 cards
        if (this.againBuffer.length > 0 && this.cardsSinceAgain >= 2) {
            const card = this.againBuffer.shift();
            this.cardsSinceAgain = 0;
            return card;
        }
        if (this.queue.length > 0) {
            const card = this.queue.shift();
            this.seenIds.add(card.id);
            this.cardsSinceAgain++;
            return card;
        }
        // Only Again cards remain
        if (this.againBuffer.length > 0) {
            const card = this.againBuffer.shift();
            this.cardsSinceAgain = 0;
            return card;
        }
        return null;
    }

    respond(card, response) {
        if (response === 'again') {
            this.againBuffer.push(card);
        } else {
            this.completed++;
            if (this.newIds.has(card.id)) {
                this.newIds.delete(card.id);
                this.remainingNew--;
            } else {
                this.remainingReview--;
            }
        }
        FCScheduler.respond(card, response);
    }

    get progress() { return this.total > 0 ? Math.round((this.completed / this.total) * 100) : 100; }
    get queueInfo() { return { new: this.remainingNew, review: this.remainingReview, again: this.againBuffer.length }; }
}

// ─────────────────────────────────────────────
// LOGGER — sends response data to Google Apps Script
// Columns match existing sheet: learner_id, lesson, word, event_type, value, timestamp
// ─────────────────────────────────────────────
const FCLogger = {
    log(cardId, response, phase) {
        if (!FC_APPS_SCRIPT_URL) return;
        const userId = localStorage.getItem('oravia_user_id') || 'anonymous';
        const lessonNum = cardId.split('_')[0]; // e.g. L22 from L22_v1
        fetch(FC_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                learner_id: userId,
                lesson: lessonNum,
                word: cardId,
                event_type: 'flashcard_' + response,
                value: phase,
                timestamp: new Date().toISOString()
            })
        }).catch(e => console.warn('FC log failed', e));
    }
};

// ─────────────────────────────────────────────
// UI — renders and manages the flashcard interface
// ─────────────────────────────────────────────
const FCUI = {
    container: null,
    session: null,
    currentCard: null,
    allCards: null,

    init(container, session, allCards) {
        this.container = container;
        this.session = session;
        this.allCards = allCards;
        this.render();
        this.showNext();
    },

    render() {
        this.container.innerHTML = `
            <style>
                .fc-progress-wrap { margin-bottom: 1.5rem; }
                .fc-progress-label { font-size: 0.9rem; color: #5a8bb8; margin-bottom: 0.4rem; }
                .fc-progress-bar-bg { background: #e0e0e0; border-radius: 4px; height: 8px; }
                .fc-progress-bar { background: #4a9cd6; height: 8px; border-radius: 4px; width: 0%; transition: width 0.3s; }
                .fc-queue-info { display: flex; justify-content: center; gap: 1.5rem; font-size: 0.82rem; color: #888; margin-bottom: 1.5rem; }
                .fc-card-wrap { perspective: 1000px; margin-bottom: 1.5rem; }
                .fc-card { position: relative; width: 100%; min-height: 180px; transform-style: preserve-3d; transition: transform 0.45s ease; cursor: pointer; }
                .fc-card.flipped { transform: rotateY(180deg); }
                .fc-face { position: absolute; width: 100%; min-height: 180px; box-sizing: border-box; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 10px; padding: 1.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
                .fc-front { background: #fff; border: 2px solid #4a9cd6; box-shadow: 0 2px 8px rgba(74,156,214,0.15); }
                .fc-back { background: #eef7fb; border: 2px solid #43a047; transform: rotateY(180deg); box-shadow: 0 2px 8px rgba(67,160,71,0.15); }
                .fc-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; }
                .fc-front .fc-label { color: #4a9cd6; }
                .fc-back .fc-label { color: #43a047; }
                .fc-text { font-size: 1.5rem; font-weight: bold; color: #2a4a6b; line-height: 1.3; }
                .fc-back .fc-text { color: #2d5a30; }
                .fc-flip-hint { font-size: 0.8rem; color: #aaa; margin-top: 1rem; }
                .fc-buttons { display: none; justify-content: center; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
                .fc-btn { padding: 0.6rem 1.6rem; border: none; border-radius: 6px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: opacity 0.15s; }
                .fc-btn:hover { opacity: 0.85; }
                .fc-btn-again { background: #f44336; color: white; }
                .fc-btn-hard  { background: #f57c00; color: white; }
                .fc-btn-good  { background: #43a047; color: white; }
                .fc-complete { display: none; text-align: center; padding: 2rem 1rem; background: #e0f2f1; border-radius: 10px; }
                .fc-complete h3 { color: #4a9cd6; margin-bottom: 0.5rem; }
                .fc-complete p { color: #5a8bb8; }
                .fc-review-more-btn { display: none; margin-top: 1rem; padding: 0.6rem 1.6rem; background: #4a9cd6; color: white; border: none; border-radius: 6px; font-size: 1rem; font-weight: 600; cursor: pointer; }
                .fc-review-more-btn:hover { opacity: 0.85; }
            </style>

            <div class="fc-progress-wrap">
                <div class="fc-progress-label">0 of ${this.session.total} cards</div>
                <div class="fc-progress-bar-bg"><div class="fc-progress-bar"></div></div>
            </div>

            <div class="fc-queue-info">
                <span>🆕 New: <strong class="fc-count-new">${this.session.totalNew}</strong></span>
                <span>🔁 Review: <strong class="fc-count-review">${this.session.totalReview}</strong></span>
                <span>↩ Again: <strong class="fc-count-again">0</strong></span>
            </div>

            <div class="fc-card-wrap">
                <div class="fc-card">
                    <div class="fc-face fc-front">
                        <div class="fc-label fc-front-label">Oravia</div>
                        <div class="fc-text fc-front-text"></div>
                        <div class="fc-flip-hint">tap to reveal</div>
                    </div>
                    <div class="fc-face fc-back">
                        <div class="fc-label fc-back-label">English</div>
                        <div class="fc-text fc-back-text"></div>
                    </div>
                </div>
            </div>

            <div class="fc-buttons">
                <button class="fc-btn fc-btn-again">↩ Again</button>
                <button class="fc-btn fc-btn-hard">Hard</button>
                <button class="fc-btn fc-btn-good">✓ Good</button>
            </div>

            <div class="fc-complete">
                <h3>🎉 Session complete!</h3>
                <p class="fc-complete-stats"></p>
                <button class="fc-review-more-btn">Review More</button>
            </div>
        `;

        const c = this.container;
        c.querySelector('.fc-card').addEventListener('click', () => this.flip());
        c.querySelector('.fc-btn-again').addEventListener('click', () => this.respond('again'));
        c.querySelector('.fc-btn-hard').addEventListener('click', () => this.respond('hard'));
        c.querySelector('.fc-btn-good').addEventListener('click', () => this.respond('good'));
        c.querySelector('.fc-review-more-btn').addEventListener('click', () => this.reviewMore());
    },

    showNext() {
        const card = this.session.next();
        if (!card) { this.showComplete(); return; }
        this.currentCard = card;

        const state = FCStorage.getCard(card.id) || { phase: 'or_en' };
        const phase = state.phase || 'or_en';
        const c = this.container;

        c.querySelector('.fc-card').classList.remove('flipped');

        if (phase === 'en_or') {
            c.querySelector('.fc-front-label').textContent = 'English';
            c.querySelector('.fc-front-text').textContent = card.back;
            c.querySelector('.fc-back-label').textContent = 'Oravia';
            c.querySelector('.fc-back-text').textContent = card.front;
        } else {
            c.querySelector('.fc-front-label').textContent = 'Oravia';
            c.querySelector('.fc-front-text').textContent = card.front;
            c.querySelector('.fc-back-label').textContent = 'English';
            c.querySelector('.fc-back-text').textContent = card.back;
        }

        c.querySelector('.fc-buttons').style.display = 'none';
        c.querySelector('.fc-flip-hint').style.display = 'block';
        this.updateProgress();
        this.updateQueueInfo();
    },

    flip() {
        const cardEl = this.container.querySelector('.fc-card');
        if (cardEl.classList.contains('flipped')) return;
        cardEl.classList.add('flipped');
        this.container.querySelector('.fc-buttons').style.display = 'flex';
        this.container.querySelector('.fc-flip-hint').style.display = 'none';
    },

    respond(response) {
        if (!this.currentCard) return;
        const state = FCStorage.getCard(this.currentCard.id) || { phase: 'or_en' };
        if (!FCStorage.getCard(this.currentCard.id)) FCScheduler.initNew(this.currentCard);
        FCLogger.log(this.currentCard.id, response, state.phase || 'or_en');
        this.session.respond(this.currentCard, response);
        this.showNext();
    },

    updateProgress() {
        const c = this.container;
        const pct = this.session.progress;
        c.querySelector('.fc-progress-bar').style.width = pct + '%';
        c.querySelector('.fc-progress-label').textContent =
            `${this.session.completed} of ${this.session.total} cards`;
    },

    updateQueueInfo() {
        const info = this.session.queueInfo;
        this.container.querySelector('.fc-count-new').textContent = info.new;
        this.container.querySelector('.fc-count-review').textContent = info.review;
        this.container.querySelector('.fc-count-again').textContent = info.again;
    },

    showComplete() {
        const c = this.container;
        c.querySelector('.fc-card-wrap').style.display = 'none';
        c.querySelector('.fc-buttons').style.display = 'none';
        c.querySelector('.fc-queue-info').style.display = 'none';
        c.querySelector('.fc-progress-wrap').style.display = 'none';
        c.querySelector('.fc-complete').style.display = 'block';
        c.querySelector('.fc-complete-stats').textContent =
            `${this.session.completed} cards reviewed · ${this.session.totalNew} new · ${this.session.totalReview} review`;

        const moreDue = FCStorage.getDueCards(this.allCards, this.session.seenIds);
        if (moreDue.length > 0) {
            const btn = c.querySelector('.fc-review-more-btn');
            btn.style.display = 'inline-block';
            const displayCount = moreDue.length >= 30 ? '30+' : moreDue.length;
            btn.textContent = `Review More (${displayCount} cards due)`;
        }
    },

    reviewMore() {
        const moreDue = FCStorage.getDueCards(this.allCards, this.session.seenIds);
        const capped = moreDue.slice(0, FC_REVIEW_CAP);
        if (capped.length === 0) return;

        const newSession = new FCSession([], capped);
        capped.forEach(c => newSession.seenIds.add(c.id));
        this.session.seenIds.forEach(id => newSession.seenIds.add(id));
        this.session = newSession;

        const c = this.container;
        c.querySelector('.fc-card-wrap').style.display = 'block';
        c.querySelector('.fc-queue-info').style.display = 'flex';
        c.querySelector('.fc-progress-wrap').style.display = 'block';
        c.querySelector('.fc-complete').style.display = 'none';
        this.showNext();
    }
};

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
function fcTodayStr() { return new Date().toISOString().slice(0, 10); }
function fcAddDays(dateStr, n) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
}

// ─────────────────────────────────────────────
// INIT — runs on every page via document$.subscribe
// Looks for a div with id="flashcard-container" and data-lesson attribute
// Each lesson tab just needs:
//   <div id="flashcard-container" data-lesson="22"></div>
// ─────────────────────────────────────────────
async function initFlashcards(lessonNumber) {
    const container = document.getElementById('flashcard-container');
    if (!container) return;

    container.innerHTML = '<p style="color:#5a8bb8">Loading flashcards...</p>';

    try {
        const baseUrl = window.location.origin;
        const allCards = await fetch(`${baseUrl}/data/flashcards_all.json`).then(r => r.json());

        // Clear end-of-session flags once per day
        const today = fcTodayStr();
        const lastSession = localStorage.getItem('oravia_fc_last_session');
        if (lastSession !== today) {
            FCStorage.clearSessionFlags();
            localStorage.setItem('oravia_fc_last_session', today);
        }

        // New cards: belong to this lesson and have never been seen
        const newCards = allCards.filter(card =>
            card.lesson === lessonNumber && !FCStorage.getCard(card.id)
        );

        // Review cards: due today from any lesson
        const sessionDue = FCStorage.getSessionDueCards(allCards);
        const allDue = FCStorage.getDueCards(allCards, new Set(newCards.map(c => c.id)));
        const reviewCards = [...sessionDue, ...allDue].slice(0, FC_REVIEW_CAP);

        // Initialize new cards in storage when first seen
        newCards.forEach(card => {
            if (!FCStorage.getCard(card.id)) FCScheduler.initNew(card);
        });

        const session = new FCSession(newCards, reviewCards);
        FCUI.init(container, session, allCards);

    } catch(e) {
        container.innerHTML = '<p style="color:#f44336">Could not load flashcards. Please refresh.</p>';
        console.error('Flashcard init failed', e);
    }
}

// Hook into MkDocs Material page navigation (same pattern as matching game)
document$.subscribe(() => {
    const container = document.getElementById('flashcard-container');
    if (!container) return;

    const lessonNumber = parseInt(container.dataset.lesson);

    // Remove this attribute after reading it so Review does not
    // mistake the flashcard container for a matching-game source.
    container.removeAttribute('data-lesson');

    if (!isNaN(lessonNumber)) initFlashcards(lessonNumber);
});

// ═══════════════════════════════════════════════════════════════
// STANDALONE VOCABULARY DECK (flashcards.md page)
// Uses same storage/scheduler/session as lesson flashcards
// but with deck-specific config and breakdown display
// ═══════════════════════════════════════════════════════════════

const FC_NEW_BATCH = 5;
const FC_DECK_CONFIGS = {
    1: { url: window.location.origin + '/data/flashcards_deck1.json',             storageKey: 'oravia_fc_deck1', sessionKey: 'oravia_fc_deck1_session' },
    2: { url: window.location.origin + '/data/flashcards_deck2.json', storageKey: 'oravia_fc_deck2', sessionKey: 'oravia_fc_deck2_session' },
    3: { url: window.location.origin + '/data/flashcards_deck3.json', storageKey: 'oravia_fc_deck3', sessionKey: 'oravia_fc_deck3_session' },
};

function renderBreakdown(breakdown) {
    if (!breakdown || breakdown.length === 0) return '';
    const parts = breakdown.map(p =>
        `<code style="background:#d8eedd;border-radius:3px;padding:0.1rem 0.35rem;font-family:monospace;font-size:0.85rem;color:#2d5a30">${p.sound}</code> <span style="color:#888">(${p.meaning})</span>`
    );
    return `<div style="margin-top:0.75rem;font-size:0.88rem;color:#5a7a6b;line-height:1.6">${parts.join(' + ')}</div>`;
}

async function initDeck(deckNum) {
    const config = FC_DECK_CONFIGS[deckNum];
    if (!config) return;
    const container = document.getElementById(`fc-deck-container-${deckNum}`);
    if (!container) return;

    container.innerHTML = '<p style="color:#5a8bb8;text-align:center;padding:2rem">Loading flashcards...</p>';

    try {
        // Shuffle helper
        const shuffle = arr => {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        };

        const allCards = shuffle(await fetch(config.url).then(r => r.json()));

        // Use deck-specific storage key
        const deckStorage = {
            _key: config.storageKey,
            _get() { try { return JSON.parse(localStorage.getItem(this._key) || '{}'); } catch(e) { return {}; } },
            _set(d) { try { localStorage.setItem(this._key, JSON.stringify(d)); } catch(e) {} },
            getCard(id) { return this._get()[id] || null; },
            setCard(id, state) { const d = this._get(); d[id] = state; this._set(d); },
            getDueCards(allCards, excludeIds = new Set()) {
                const schedule = this._get();
                const today = fcTodayStr();
                return allCards.filter(card => {
                    if (excludeIds.has(card.id)) return false;
                    const state = schedule[card.id];
                    if (!state || state.dueSession || state.phase === 'retired') return false;
                    return state.due <= today;
                });
            },
            getSessionDueCards(allCards) {
                const schedule = this._get();
                return allCards.filter(card => schedule[card.id]?.dueSession);
            },
            getUnseenCards(allCards) {
                const schedule = this._get();
                return allCards.filter(card => !schedule[card.id]);
            },
            clearSessionFlags() {
                const data = this._get();
                Object.keys(data).forEach(id => { delete data[id].dueSession; });
                this._set(data);
            }
        };

        // Clear session flags once per day
        const today = fcTodayStr();
        if (localStorage.getItem(config.sessionKey) !== today) {
            deckStorage.clearSessionFlags();
            localStorage.setItem(config.sessionKey, today);
        }

        // First 5 unseen cards
        const newCards = deckStorage.getUnseenCards(allCards).slice(0, FC_NEW_BATCH);
        newCards.forEach(card => {
            deckStorage.setCard(card.id, { interval_index: -1, due: fcTodayStr(), phase: 'or_en', lastResponse: null });
        });

        // Due reviews
        const sessionDue = deckStorage.getSessionDueCards(allCards);
        const allDue = deckStorage.getDueCards(allCards, new Set(newCards.map(c => c.id)));
        const reviewCards = [...sessionDue, ...allDue].slice(0, FC_REVIEW_CAP);

        // Build session queue
        let queue = [...newCards, ...reviewCards];
        let againBuffer = [];
        let cardsSinceAgain = 0;
        let seenIds = new Set(queue.map(c => c.id));
        let completed = 0;
        let total = queue.length;
        let currentCard = null;

        function nextCard() {
            if (againBuffer.length > 0 && cardsSinceAgain >= 2) {
                cardsSinceAgain = 0;
                return againBuffer.shift();
            }
            if (queue.length > 0) {
                cardsSinceAgain++;
                return queue.shift();
            }
            if (againBuffer.length > 0) {
                cardsSinceAgain = 0;
                return againBuffer.shift();
            }
            return null;
        }

        function respond(card, response) {
            if (response === 'again') {
                againBuffer.push(card);
            } else {
                completed++;
            }
            // Use deck storage for scheduling
            const existing = deckStorage.getCard(card.id) || { interval_index: -1, due: fcTodayStr(), phase: 'or_en', lastResponse: null };
            let { interval_index, phase } = existing;

            if (response === 'again') {
                deckStorage.setCard(card.id, { ...existing, lastResponse: 'again' });
            } else if (response === 'hard') {
                deckStorage.setCard(card.id, { interval_index: 0, due: fcAddDays(fcTodayStr(), 1), phase, lastResponse: 'hard', dueSession: true });
            } else if (response === 'good') {
                if (existing.lastResponse === 'good') {
                    interval_index = Math.min(interval_index + 1, FC_GOOD_INTERVALS.length - 1);
                } else {
                    interval_index = Math.max(interval_index, 0);
                }
                if (interval_index === FC_GOOD_INTERVALS.length - 1) {
                    // Retire card — no phase flip for deck
                    deckStorage.setCard(card.id, { interval_index, due: fcAddDays(fcTodayStr(), 3650), phase: 'retired', lastResponse: 'good' });
                    return;
                }
                deckStorage.setCard(card.id, { interval_index, due: fcAddDays(fcTodayStr(), FC_GOOD_INTERVALS[Math.max(interval_index, 0)]), phase, lastResponse: 'good' });
            }
            FCLogger.log(card.id, response, 'deck' + deckNum);
        }

        function showCard(card) {
            currentCard = card;
            const pct = total > 0 ? Math.round((completed / total) * 100) : 100;

            container.querySelector('.fc-progress-bar').style.width = pct + '%';
            container.querySelector('.fc-progress-label').textContent = `${completed} of ${total} cards`;
            container.querySelector('.fc-count-again').textContent = againBuffer.length;

            const cardEl = container.querySelector('.fc-card');
            cardEl.classList.remove('flipped');
            cardEl.style.transform = '';

            // Always Oravia front, English + breakdown back
            container.querySelector('.fc-front-label').textContent = 'Oravia';
            container.querySelector('.fc-front-text').textContent = card.front;
            container.querySelector('.fc-back-label').textContent = 'English';
            container.querySelector('.fc-back-text').textContent = card.back;
            container.querySelector('.fc-back-breakdown').innerHTML = renderBreakdown(card.breakdown);

            container.querySelector('.fc-buttons').style.display = 'none';
            container.querySelector('.fc-flip-hint').style.display = 'block';
        }

        function showComplete() {
            container.querySelector('.fc-card-wrap').style.display = 'none';
            container.querySelector('.fc-buttons').style.display = 'none';
            container.querySelector('.fc-queue-info').style.display = 'none';
            container.querySelector('.fc-progress-wrap').style.display = 'none';
            container.querySelector('.fc-complete').style.display = 'block';
            container.querySelector('.fc-complete-stats').textContent =
                `${completed} cards · ${newCards.length} new · ${reviewCards.length} review`;

            const unseen = deckStorage.getUnseenCards(allCards).filter(c => !seenIds.has(c.id));
            if (unseen.length > 0) {
                const btn = container.querySelector('.fc-more-new-btn');
                btn.style.display = 'inline-block';
                btn.textContent = `Learn 5 more new words (${unseen.length} remaining)`;
            }
            const moreDue = deckStorage.getDueCards(allCards, seenIds);
            if (moreDue.length > 0) {
                const btn = container.querySelector('.fc-more-review-btn');
                btn.style.display = 'inline-block';
                const count = moreDue.length >= 30 ? '30+' : moreDue.length;
                btn.textContent = `Review more (${count} due)`;
            }
        }

        function advance() {
            const card = nextCard();
            if (!card) { showComplete(); return; }
            showCard(card);
        }

        // Render UI
        container.innerHTML = `
            <div class="fc-progress-wrap" style="margin-bottom:1.5rem">
                <div class="fc-progress-label" style="font-size:0.85rem;color:#5a8bb8;margin-bottom:0.4rem">${completed} of ${total} cards</div>
                <div style="background:#e0e0e0;border-radius:4px;height:6px">
                    <div class="fc-progress-bar" style="background:#4a9cd6;height:6px;border-radius:4px;width:0%;transition:width 0.3s"></div>
                </div>
            </div>
            <div class="fc-queue-info" style="display:flex;gap:1.5rem;font-size:0.82rem;color:#888;margin-bottom:1.5rem">
                <span>🆕 New: <strong>${newCards.length}</strong></span>
                <span>🔁 Review: <strong>${reviewCards.length}</strong></span>
                <span>↩ Again: <strong class="fc-count-again">0</strong></span>
            </div>
            <div class="fc-card-wrap" style="perspective:1000px;margin-bottom:1.5rem">
                <div class="fc-card" style="position:relative;width:100%;min-height:220px;transform-style:preserve-3d;transition:transform 0.45s ease;cursor:pointer">
                    <div class="fc-face fc-front" style="position:absolute;width:100%;min-height:220px;box-sizing:border-box;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:12px;padding:2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#fff;border:2px solid #4a9cd6;box-shadow:0 2px 12px rgba(74,156,214,0.12)">
                        <div class="fc-front-label" style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.08em;color:#4a9cd6;margin-bottom:0.75rem">Oravia</div>
                        <div class="fc-front-text" style="font-size:1.8rem;font-weight:bold;color:#2a4a6b;line-height:1.2"></div>
                        <div class="fc-flip-hint" style="font-size:0.78rem;color:#bbb;margin-top:1rem">tap to reveal</div>
                    </div>
                    <div class="fc-face fc-back" style="position:absolute;width:100%;min-height:220px;box-sizing:border-box;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:12px;padding:2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#eef7fb;border:2px solid #43a047;box-shadow:0 2px 12px rgba(67,160,71,0.12);transform:rotateY(180deg)">
                        <div class="fc-back-label" style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.08em;color:#43a047;margin-bottom:0.75rem">English</div>
                        <div class="fc-back-text" style="font-size:1.4rem;font-weight:bold;color:#2d5a30;line-height:1.2"></div>
                        <div class="fc-back-breakdown"></div>
                    </div>
                </div>
            </div>
            <div class="fc-buttons" style="display:none;justify-content:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap">
                <button class="fc-btn-again" style="padding:0.65rem 1.8rem;border:none;border-radius:6px;font-size:1rem;font-weight:600;cursor:pointer;background:#f44336;color:white">↩ Again</button>
                <button class="fc-btn-hard" style="padding:0.65rem 1.8rem;border:none;border-radius:6px;font-size:1rem;font-weight:600;cursor:pointer;background:#f57c00;color:white">Hard</button>
                <button class="fc-btn-good" style="padding:0.65rem 1.8rem;border:none;border-radius:6px;font-size:1rem;font-weight:600;cursor:pointer;background:#43a047;color:white">✓ Good</button>
            </div>
            <div class="fc-complete" style="display:none;text-align:center;padding:2.5rem 1rem;background:#e8f5e9;border-radius:12px">
                <h3 style="color:#4a9cd6;margin-bottom:0.5rem;font-size:1.3rem">🎉 Session complete!</h3>
                <p class="fc-complete-stats" style="color:#5a8bb8;margin:0.3rem 0"></p>
                <div style="margin-top:1rem">
                    <button class="fc-more-new-btn" style="display:none;margin-right:0.5rem;padding:0.65rem 1.8rem;border:none;border-radius:6px;font-size:1rem;font-weight:600;cursor:pointer;background:#4a9cd6;color:white"></button>
                    <button class="fc-more-review-btn" style="display:none;padding:0.65rem 1.8rem;border:none;border-radius:6px;font-size:1rem;font-weight:600;cursor:pointer;background:#757575;color:white"></button>
                </div>
            </div>
        `;

        // Event listeners
        container.querySelector('.fc-card').addEventListener('click', () => {
            const cardEl = container.querySelector('.fc-card');
            if (cardEl.classList.contains('flipped')) return;
            cardEl.classList.add('flipped');
            container.querySelector('.fc-buttons').style.display = 'flex';
            container.querySelector('.fc-flip-hint').style.display = 'none';
        });

        container.querySelector('.fc-btn-again').addEventListener('click', () => {
            if (!currentCard) return;
            respond(currentCard, 'again');
            advance();
        });
        container.querySelector('.fc-btn-hard').addEventListener('click', () => {
            if (!currentCard) return;
            respond(currentCard, 'hard');
            advance();
        });
        container.querySelector('.fc-btn-good').addEventListener('click', () => {
            if (!currentCard) return;
            respond(currentCard, 'good');
            advance();
        });

        container.querySelector('.fc-more-new-btn').addEventListener('click', () => {
            const unseen = deckStorage.getUnseenCards(allCards).filter(c => !seenIds.has(c.id)).slice(0, FC_NEW_BATCH);
            if (unseen.length === 0) return;
            unseen.forEach(card => {
                deckStorage.setCard(card.id, { interval_index: -1, due: fcTodayStr(), phase: 'or_en', lastResponse: null });
                queue.push(card);
                seenIds.add(card.id);
                total++;
            });
            container.querySelector('.fc-card-wrap').style.display = 'block';
            container.querySelector('.fc-queue-info').style.display = 'flex';
            container.querySelector('.fc-progress-wrap').style.display = 'block';
            container.querySelector('.fc-complete').style.display = 'none';
            advance();
        });

        container.querySelector('.fc-more-review-btn').addEventListener('click', () => {
            const moreDue = deckStorage.getDueCards(allCards, seenIds).slice(0, FC_REVIEW_CAP);
            if (moreDue.length === 0) return;
            moreDue.forEach(card => { queue.push(card); seenIds.add(card.id); total++; });
            container.querySelector('.fc-card-wrap').style.display = 'block';
            container.querySelector('.fc-queue-info').style.display = 'flex';
            container.querySelector('.fc-progress-wrap').style.display = 'block';
            container.querySelector('.fc-complete').style.display = 'none';
            advance();
        });

        advance();

    } catch(e) {
        container.innerHTML = '<p style="color:#f44336;text-align:center">Could not load flashcards. Please refresh.</p>';
        console.error('Deck init failed', e);
    }
}

document$.subscribe(() => {
    [1, 2, 3].forEach(n => {
        if (document.getElementById(`fc-deck-container-${n}`)) initDeck(n);
    });
});
