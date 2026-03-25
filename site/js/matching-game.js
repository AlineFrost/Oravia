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

document.addEventListener('DOMContentLoaded', async () => {
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