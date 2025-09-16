// Math Operations App
class MathCalculator {
    constructor() {
        this.history = JSON.parse(localStorage.getItem('mathHistory')) || [];
        this.currentDifficulty = localStorage.getItem('currentDifficulty') || null;
        this.initializeElements();
        this.bindEvents();
        this.showInitialScreen();
    }

    initializeElements() {
        // Screen elements
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.calculatorScreen = document.getElementById('calculatorScreen');
        this.learningSection = document.getElementById('learningSection');
        this.exercisesSection = document.getElementById('exercisesSection');
        this.intermediateLearningSection = document.getElementById('intermediateLearningSection');
        this.intermediateExercisesSection = document.getElementById('intermediateExercisesSection');
        this.advancedLearningSection = document.getElementById('advancedLearningSection');
        this.advancedExercisesSection = document.getElementById('advancedExercisesSection');
        this.geometricLearningSection = document.getElementById('geometricLearningSection');
        this.geometricExercisesSection = document.getElementById('geometricExercisesSection');
        this.advancedGeometricLearningSection = document.getElementById('advancedGeometricLearningSection');
        this.advancedGeometricExercisesSection = document.getElementById('advancedGeometricExercisesSection');
        this.algebraLearningSection = document.getElementById('algebraLearningSection');
        this.algebraExercisesSection = document.getElementById('algebraExercisesSection');
        this.trigonometryLearningSection = document.getElementById('trigonometryLearningSection');
        this.trigonometryExercisesSection = document.getElementById('trigonometryExercisesSection');
        this.trigonometryExerciseContent = document.getElementById('trigonometryExerciseContent');
        this.dictionarySection = document.getElementById('dictionarySection');
        
        // Difficulty elements
        this.difficultyCards = document.querySelectorAll('.difficulty-card');
        this.currentDifficultyDisplay = document.getElementById('currentDifficulty');
        this.changeDifficultyBtn = document.getElementById('changeDifficultyBtn');
        
        // Learning elements
        this.startExercisesBtn = document.getElementById('startExercisesBtn');
        this.goToCalculatorBtn = document.getElementById('goToCalculatorBtn');
        this.startIntermediateExercisesBtn = document.getElementById('startIntermediateExercisesBtn');
        this.goToIntermediateCalculatorBtn = document.getElementById('goToIntermediateCalculatorBtn');
        this.startAdvancedExercisesBtn = document.getElementById('startAdvancedExercisesBtn');
        this.goToAdvancedCalculatorBtn = document.getElementById('goToAdvancedCalculatorBtn');
        
        // Exercise elements
        this.exerciseTypeButtons = document.querySelectorAll('.exercise-type-btn');
        this.exerciseContent = document.getElementById('exerciseContent');
        this.exerciseTitle = document.getElementById('exerciseTitle');
        this.problemDisplay = document.getElementById('problemDisplay');
        this.exerciseAnswer = document.getElementById('exerciseAnswer');
        this.checkAnswerBtn = document.getElementById('checkAnswerBtn');
        this.exerciseFeedback = document.getElementById('exerciseFeedback');
        this.feedbackMessage = document.getElementById('feedbackMessage');
        this.nextProblemBtn = document.getElementById('nextProblemBtn');
        this.newExerciseTypeBtn = document.getElementById('newExerciseTypeBtn');
        this.backToLearningBtn = document.getElementById('backToLearningBtn');
        this.scoreDisplay = document.getElementById('scoreDisplay');
        this.streakDisplay = document.getElementById('streakDisplay');
        
        // Intermediate exercise elements
        this.intermediateExerciseTypeButtons = document.querySelectorAll('.intermediate-exercise-type-btn');
        this.intermediateExerciseContent = document.getElementById('intermediateExerciseContent');
        this.intermediateExerciseTitle = document.getElementById('intermediateExerciseTitle');
        this.intermediateProblemDisplay = document.getElementById('intermediateProblemDisplay');
        this.intermediateExerciseAnswer = document.getElementById('intermediateExerciseAnswer');
        this.intermediateCheckAnswerBtn = document.getElementById('intermediateCheckAnswerBtn');
        this.intermediateExerciseFeedback = document.getElementById('intermediateExerciseFeedback');
        this.intermediateFeedbackMessage = document.getElementById('intermediateFeedbackMessage');
        this.intermediateNextProblemBtn = document.getElementById('intermediateNextProblemBtn');
        this.intermediateNewExerciseTypeBtn = document.getElementById('intermediateNewExerciseTypeBtn');
        this.intermediateBackToLearningBtn = document.getElementById('intermediateBackToLearningBtn');
        this.intermediateScoreDisplay = document.getElementById('intermediateScoreDisplay');
        this.intermediateStreakDisplay = document.getElementById('intermediateStreakDisplay');
        
        // Advanced exercise elements
        this.advancedExerciseTypeButtons = document.querySelectorAll('.advanced-exercise-type-btn');
        this.advancedExerciseContent = document.getElementById('advancedExerciseContent');
        this.advancedExerciseTitle = document.getElementById('advancedExerciseTitle');
        this.advancedProblemDisplay = document.getElementById('advancedProblemDisplay');
        this.advancedExerciseAnswer = document.getElementById('advancedExerciseAnswer');
        this.advancedCheckAnswerBtn = document.getElementById('advancedCheckAnswerBtn');
        this.advancedExerciseFeedback = document.getElementById('advancedExerciseFeedback');
        this.advancedFeedbackMessage = document.getElementById('advancedFeedbackMessage');
        this.advancedNextProblemBtn = document.getElementById('advancedNextProblemBtn');
        this.advancedNewExerciseTypeBtn = document.getElementById('advancedNewExerciseTypeBtn');
        this.advancedBackToLearningBtn = document.getElementById('advancedBackToLearningBtn');
        this.advancedScoreDisplay = document.getElementById('advancedScoreDisplay');
        this.advancedStreakDisplay = document.getElementById('advancedStreakDisplay');
        
        // Geometric learning and exercise elements
        this.geometricExerciseTypeButtons = document.querySelectorAll('.geometric-exercise-type-btn');
        this.geometricLearningContent = document.getElementById('geometricLearningContent');
        this.startGeometricExercisesBtn = document.getElementById('startGeometricExercisesBtn');
        this.backToGeometricSelectionBtn = document.getElementById('backToGeometricSelectionBtn');
        this.geometricExerciseContent = document.getElementById('geometricExerciseContent');
        this.geometricExercisesSection = document.getElementById('geometricExercisesSection');
        this.geometricExerciseTitle = document.getElementById('geometricExerciseTitle');
        this.geometricProblemDisplay = document.getElementById('geometricProblemDisplay');
        this.geometricExerciseAnswer = document.getElementById('geometricExerciseAnswer');
        this.geometricCheckAnswerBtn = document.getElementById('geometricCheckAnswerBtn');
        this.geometricExerciseFeedback = document.getElementById('geometricExerciseFeedback');
        this.geometricFeedbackMessage = document.getElementById('geometricFeedbackMessage');
        this.geometricNextProblemBtn = document.getElementById('geometricNextProblemBtn');
        this.geometricNewExerciseTypeBtn = document.getElementById('geometricNewExerciseTypeBtn');
        this.geometricBackToLearningBtn = document.getElementById('geometricBackToLearningBtn');
        this.geometricScoreDisplay = document.getElementById('geometricScoreDisplay');
        this.geometricStreakDisplay = document.getElementById('geometricStreakDisplay');
        
        // Advanced Geometric learning and exercise elements
        this.advancedGeometricExerciseTypeButtons = document.querySelectorAll('.advanced-geometric-exercise-type-btn');
        this.advancedGeometricLearningContent = document.getElementById('advancedGeometricLearningContent');
        this.startAdvancedGeometricExercisesBtn = document.getElementById('startAdvancedGeometricExercisesBtn');
        this.backToAdvancedGeometricSelectionBtn = document.getElementById('backToAdvancedGeometricSelectionBtn');
        this.advancedGeometricExerciseContent = document.getElementById('advancedGeometricExerciseContent');
        this.advancedGeometricExerciseTitle = document.getElementById('advancedGeometricExerciseTitle');
        this.advancedGeometricProblemDisplay = document.getElementById('advancedGeometricProblemDisplay');
        this.advancedGeometricExerciseAnswer = document.getElementById('advancedGeometricExerciseAnswer');
        this.advancedGeometricCheckAnswerBtn = document.getElementById('advancedGeometricCheckAnswerBtn');
        this.advancedGeometricExerciseFeedback = document.getElementById('advancedGeometricExerciseFeedback');
        this.advancedGeometricFeedbackMessage = document.getElementById('advancedGeometricFeedbackMessage');
        this.advancedGeometricNextProblemBtn = document.getElementById('advancedGeometricNextProblemBtn');
        this.advancedGeometricNewExerciseTypeBtn = document.getElementById('advancedGeometricNewExerciseTypeBtn');
        this.advancedGeometricBackToLearningBtn = document.getElementById('advancedGeometricBackToLearningBtn');
        this.advancedGeometricScoreDisplay = document.getElementById('advancedGeometricScoreDisplay');
        this.advancedGeometricStreakDisplay = document.getElementById('advancedGeometricStreakDisplay');
        
        // Algebra exercise elements
        this.algebraScoreDisplay = document.getElementById('algebraScoreDisplay');
        this.algebraStreakDisplay = document.getElementById('algebraStreakDisplay');
        
        // Rebind geometric exercise type buttons after DOM is fully loaded
        this.rebindGeometricButtons();
        this.rebindAdvancedGeometricButtons();
        this.rebindAdvancedGeometricButtons();
        
        // Calculator elements
        this.num1Input = document.getElementById('num1');
        this.num2Input = document.getElementById('num2');
        this.resultDisplay = document.getElementById('result');
        this.operationsContainer = document.getElementById('operationsContainer');
        this.historySection = document.getElementById('history');
        this.historyList = document.getElementById('historyList');
        
        // Button elements
        this.clearBtn = document.getElementById('clearBtn');
        this.historyBtn = document.getElementById('historyBtn');
        this.clearHistoryBtn = document.getElementById('clearHistoryBtn');
        this.hintBtn = document.getElementById('hintBtn');
        this.hintSection = document.getElementById('hintSection');
        this.hintText = document.getElementById('hintText');
        
        // Exercise tracking
        this.currentExerciseType = null;
        this.currentProblem = null;
        this.correctAnswer = null;
        this.score = { correct: 0, total: 0 };
        this.streak = 0;
        
        // Intermediate exercise tracking
        this.currentIntermediateExerciseType = null;
        this.currentIntermediateProblem = null;
        this.correctIntermediateAnswer = null;
        this.intermediateScore = { correct: 0, total: 0 };
        this.intermediateStreak = 0;
        
        // Advanced exercise tracking
        this.currentAdvancedExerciseType = null;
        this.currentAdvancedProblem = null;
        this.correctAdvancedAnswer = null;
        this.advancedScore = { correct: 0, total: 0 };
        this.advancedStreak = 0;
        
        // Geometric exercise tracking
        this.currentGeometricExerciseType = null;
        this.currentGeometricProblem = null;
        this.correctGeometricAnswer = null;
        this.geometricScore = { correct: 0, total: 0 };
        this.geometricStreak = 0;
        
        // Advanced Geometric exercise tracking
        this.currentAdvancedGeometricExerciseType = null;
        this.currentAdvancedGeometricProblem = null;
        this.correctAdvancedGeometricAnswer = null;
        this.advancedGeometricScore = { correct: 0, total: 0 };
        this.advancedGeometricStreak = 0;
    }

    bindEvents() {
        // App title click to go home
        const appTitle = document.getElementById('appTitle');
        if (appTitle) {
            appTitle.addEventListener('click', () => {
                this.showWelcomeScreen();
            });
        }

        // Difficulty card selection
        this.difficultyCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const difficulty = card.dataset.difficulty;
                this.selectDifficulty(difficulty);
            });
        });

        // Change difficulty button
        this.changeDifficultyBtn?.addEventListener('click', () => {
            // Clear localStorage completely
            localStorage.removeItem('currentDifficulty');
            localStorage.removeItem('mathHistory');
            
            // Reset all DOM elements to their initial state
            this.resetDOMToInitialState();
            
            // Force page reload for complete reset
            window.location.reload();
        });

        // Clear button event
        this.clearBtn?.addEventListener('click', () => {
            this.clearInputs();
        });

        // History button event
        this.historyBtn?.addEventListener('click', () => {
            this.toggleHistory();
        });

        // Clear history button event
        this.clearHistoryBtn?.addEventListener('click', () => {
            this.clearHistory();
        });

        // Hint button event
        this.hintBtn?.addEventListener('click', () => {
            this.showHint();
        });

        // Learning section events
        this.startExercisesBtn?.addEventListener('click', () => {
            this.showExercisesSection();
        });

        this.goToCalculatorBtn?.addEventListener('click', () => {
            this.showCalculatorSection();
        });

        // Intermediate learning section events
        this.startIntermediateExercisesBtn?.addEventListener('click', () => {
            this.showIntermediateExercisesSection();
        });

        this.goToIntermediateCalculatorBtn?.addEventListener('click', () => {
            this.showCalculatorSection();
        });

        // Advanced learning section events
        this.startAdvancedExercisesBtn?.addEventListener('click', () => {
            this.showAdvancedExercisesSection();
        });

        this.goToAdvancedCalculatorBtn?.addEventListener('click', () => {
            this.showCalculatorSection();
        });

        // Exercise events
        this.exerciseTypeButtons?.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const exerciseType = e.target.dataset.type;
                this.startExerciseType(exerciseType);
            });
        });

        this.checkAnswerBtn?.addEventListener('click', () => {
            this.checkAnswer();
        });

        this.nextProblemBtn?.addEventListener('click', () => {
            this.generateNewProblem();
        });

        this.newExerciseTypeBtn?.addEventListener('click', () => {
            this.showExerciseTypeSelection();
        });

        this.backToLearningBtn?.addEventListener('click', () => {
            this.showLearningSection();
        });

        // Intermediate exercise events
        this.intermediateExerciseTypeButtons?.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const exerciseType = e.target.dataset.type;
                this.startIntermediateExerciseType(exerciseType);
            });
        });

        this.intermediateCheckAnswerBtn?.addEventListener('click', () => {
            this.checkIntermediateAnswer();
        });

        this.intermediateNextProblemBtn?.addEventListener('click', () => {
            this.generateNewIntermediateProblem();
        });

        this.intermediateNewExerciseTypeBtn?.addEventListener('click', () => {
            this.showIntermediateExerciseTypeSelection();
        });

        this.intermediateBackToLearningBtn?.addEventListener('click', () => {
            this.showIntermediateLearningSection();
        });

        // Advanced exercise events
        this.advancedExerciseTypeButtons?.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const exerciseType = e.target.dataset.type;
                this.startAdvancedExerciseType(exerciseType);
            });
        });

        this.advancedCheckAnswerBtn?.addEventListener('click', () => {
            this.checkAdvancedAnswer();
        });

        this.advancedNextProblemBtn?.addEventListener('click', () => {
            this.generateNewAdvancedProblem();
        });

        this.advancedNewExerciseTypeBtn?.addEventListener('click', () => {
            this.showAdvancedExerciseTypeSelection();
        });

        this.advancedBackToLearningBtn?.addEventListener('click', () => {
            this.showAdvancedLearningSection();
        });

        // Geometric exercise events - handled by rebindGeometricButtons method

        this.startGeometricExercisesBtn?.addEventListener('click', () => {
            this.startGeometricExerciseType(this.currentGeometricExerciseType);
        });

        this.backToGeometricSelectionBtn?.addEventListener('click', () => {
            this.showGeometricSelection();
        });

        this.geometricCheckAnswerBtn?.addEventListener('click', () => {
            this.checkGeometricAnswer();
        });

        this.geometricNextProblemBtn?.addEventListener('click', () => {
            this.generateNewGeometricProblem();
        });

        this.geometricNewExerciseTypeBtn?.addEventListener('click', () => {
            this.showGeometricExerciseTypeSelection();
        });

        this.geometricBackToLearningBtn?.addEventListener('click', () => {
            this.showGeometricLearningWithCurrentType();
        });

        // Advanced Geometric exercise events - handled by rebindAdvancedGeometricButtons method

        this.startAdvancedGeometricExercisesBtn?.addEventListener('click', () => {
            this.startAdvancedGeometricExerciseType(this.currentAdvancedGeometricExerciseType);
        });

        this.backToAdvancedGeometricSelectionBtn?.addEventListener('click', () => {
            this.showAdvancedGeometricSelection();
        });

        this.advancedGeometricCheckAnswerBtn?.addEventListener('click', () => {
            this.checkAdvancedGeometricAnswer();
        });

        this.advancedGeometricNextProblemBtn?.addEventListener('click', () => {
            this.generateNewAdvancedGeometricProblem();
        });

        this.advancedGeometricNewExerciseTypeBtn?.addEventListener('click', () => {
            this.showAdvancedGeometricExerciseTypeSelection();
        });

        this.advancedGeometricBackToLearningBtn?.addEventListener('click', () => {
            this.showAdvancedGeometricLearningWithCurrentType();
        });

        // Exercise answer input events
        this.exerciseAnswer?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer();
            }
        });

        // Intermediate exercise answer input events
        this.intermediateExerciseAnswer?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkIntermediateAnswer();
            }
        });

        // Advanced exercise answer input events
        this.advancedExerciseAnswer?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAdvancedAnswer();
            }
        });

        // Geometric exercise answer input events
        this.geometricExerciseAnswer?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkGeometricAnswer();
            }
        });

        // Advanced Geometric exercise answer input events
        this.advancedGeometricExerciseAnswer?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAdvancedGeometricAnswer();
            }
        });

        // Enter key support
        this.num1Input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.num2Input.focus();
            }
        });

        this.num2Input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performOperation('add');
            }
        });

        // Input validation
        [this.num1Input, this.num2Input].forEach(input => {
            if (input) {
                input.addEventListener('input', () => {
                    this.removeError(input);
                });
            }
        });
    }

    showInitialScreen() {
        if (this.currentDifficulty) {
            this.showCalculatorScreen(this.currentDifficulty);
        } else {
            this.showWelcomeScreen();
        }
    }

    resetDOMToInitialState() {
        // Reset all screens to initial state
        this.welcomeScreen?.classList.remove('hidden');
        this.calculatorScreen?.classList.add('hidden');
        
        // Reset all learning sections to hidden
        this.learningSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.advancedGeometricLearningSection?.classList.add('hidden');
        this.algebraLearningSection?.classList.add('hidden');
        this.trigonometryLearningSection?.classList.add('hidden');
        
        // Reset all exercise sections to hidden
        this.exercisesSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        this.advancedGeometricExercisesSection?.classList.add('hidden');
        this.algebraExercisesSection?.classList.add('hidden');
        this.trigonometryExercisesSection?.classList.add('hidden');
        
        // Reset all exercise content areas to hidden
        this.exerciseContent?.classList.add('hidden');
        this.intermediateExerciseContent?.classList.add('hidden');
        this.advancedExerciseContent?.classList.add('hidden');
        this.geometricExerciseContent?.classList.add('hidden');
        this.advancedGeometricExerciseContent?.classList.add('hidden');
        this.trigonometryExerciseContent?.classList.add('hidden');
        
        // Reset all feedback sections to hidden
        this.exerciseFeedback?.classList.add('hidden');
        this.intermediateExerciseFeedback?.classList.add('hidden');
        this.advancedExerciseFeedback?.classList.add('hidden');
        this.geometricExerciseFeedback?.classList.add('hidden');
        this.advancedGeometricExerciseFeedback?.classList.add('hidden');
        
        // Reset Knowledge Check sections to hidden
        const knowledgeCheckSection = document.getElementById('knowledgeCheckSection');
        knowledgeCheckSection?.classList.add('hidden');
        
        const knowledgeCheckExercisesSection = document.getElementById('knowledgeCheckExercisesSection');
        knowledgeCheckExercisesSection?.classList.add('hidden');
        
        // Reset Dictionary section to hidden
        this.dictionarySection?.classList.add('hidden');
        
        // Reset all learning content areas to hidden
        this.geometricLearningContent?.classList.add('hidden');
        this.advancedGeometricLearningContent?.classList.add('hidden');
        
        // Reset all operation explanations to hidden
        document.querySelectorAll('.operation-explanation').forEach(el => {
            el.classList.add('hidden');
        });
        
        // Reset all exercise type selections to visible
        document.querySelectorAll('.exercise-type-selection, .intermediate-exercise-type-selection, .advanced-exercise-type-selection, .geometric-exercise-type-selection, .advanced-geometric-exercise-type-selection').forEach(selection => {
            selection.classList.remove('hidden');
        });
        
        // Reset calculator section to hidden
        document.querySelector('.calculator-section')?.classList.add('hidden');
        
        // Reset history section to hidden
        this.historySection?.classList.add('hidden');
        
        // Reset hint section to hidden
        this.hintSection?.classList.add('hidden');
        
        // Clear all input fields
        if (this.num1Input) this.num1Input.value = '';
        if (this.num2Input) this.num2Input.value = '';
        if (this.exerciseAnswer) this.exerciseAnswer.value = '';
        if (this.intermediateExerciseAnswer) this.intermediateExerciseAnswer.value = '';
        if (this.advancedExerciseAnswer) this.advancedExerciseAnswer.value = '';
        if (this.geometricExerciseAnswer) this.geometricExerciseAnswer.value = '';
        if (this.advancedGeometricExerciseAnswer) this.advancedGeometricExerciseAnswer.value = '';
        
        // Clear all display areas
        if (this.resultDisplay) this.resultDisplay.textContent = '0';
        if (this.problemDisplay) this.problemDisplay.innerHTML = '';
        if (this.intermediateProblemDisplay) this.intermediateProblemDisplay.innerHTML = '';
        if (this.advancedProblemDisplay) this.advancedProblemDisplay.innerHTML = '';
        if (this.geometricProblemDisplay) this.geometricProblemDisplay.innerHTML = '';
        if (this.advancedGeometricProblemDisplay) this.advancedGeometricProblemDisplay.innerHTML = '';
        
        // Clear all feedback messages
        if (this.feedbackMessage) this.feedbackMessage.innerHTML = '';
        if (this.intermediateFeedbackMessage) this.intermediateFeedbackMessage.innerHTML = '';
        if (this.advancedFeedbackMessage) this.advancedFeedbackMessage.innerHTML = '';
        if (this.geometricFeedbackMessage) this.geometricFeedbackMessage.innerHTML = '';
        if (this.advancedGeometricFeedbackMessage) this.advancedGeometricFeedbackMessage.innerHTML = '';
        
        // Reset all score displays
        if (this.scoreDisplay) this.scoreDisplay.textContent = '0/0';
        if (this.streakDisplay) this.streakDisplay.textContent = '0';
        if (this.intermediateScoreDisplay) this.intermediateScoreDisplay.textContent = '0/0';
        if (this.intermediateStreakDisplay) this.intermediateStreakDisplay.textContent = '0';
        if (this.advancedScoreDisplay) this.advancedScoreDisplay.textContent = '0/0';
        if (this.advancedStreakDisplay) this.advancedStreakDisplay.textContent = '0';
        if (this.geometricScoreDisplay) this.geometricScoreDisplay.textContent = '0/0';
        if (this.geometricStreakDisplay) this.geometricStreakDisplay.textContent = '0';
        if (this.advancedGeometricScoreDisplay) this.advancedGeometricScoreDisplay.textContent = '0/0';
        if (this.advancedGeometricStreakDisplay) this.advancedGeometricStreakDisplay.textContent = '0';
        if (this.algebraScoreDisplay) this.algebraScoreDisplay.textContent = '0/0';
        if (this.algebraStreakDisplay) this.algebraStreakDisplay.textContent = '0';
        
        // Reset exercise titles to default
        if (this.exerciseTitle) this.exerciseTitle.textContent = 'Exercise';
        if (this.intermediateExerciseTitle) this.intermediateExerciseTitle.textContent = 'Exercise';
        if (this.advancedExerciseTitle) this.advancedExerciseTitle.textContent = 'Exercise';
        if (this.geometricExerciseTitle) this.geometricExerciseTitle.textContent = 'Exercise';
        if (this.advancedGeometricExerciseTitle) this.advancedGeometricExerciseTitle.textContent = '3D Exercise';
        
        // Reset current difficulty display
        if (this.currentDifficultyDisplay) this.currentDifficultyDisplay.textContent = 'Beginner';
        
        // Clear operations container
        if (this.operationsContainer) this.operationsContainer.innerHTML = '';
        
        // Clear history list
        if (this.historyList) this.historyList.innerHTML = '';
        
        // Clear hint text
        if (this.hintText) this.hintText.textContent = '';
        
        // Reset difficulty cards visibility and styles
        this.difficultyCards?.forEach(card => {
            card.classList.remove('hidden');
            card.style.display = '';
            card.style.visibility = '';
            card.style.opacity = '';
        });
        
        // Reset all button states by removing any active/selected classes
        document.querySelectorAll('.exercise-type-btn, .intermediate-exercise-type-btn, .advanced-exercise-type-btn, .geometric-exercise-type-btn, .advanced-geometric-exercise-type-btn').forEach(btn => {
            btn.classList.remove('active', 'selected');
        });
        
        // Reset any custom styles that might have been applied
        document.querySelectorAll('[style]').forEach(element => {
            // Only reset non-essential inline styles, preserve critical ones
            const style = element.getAttribute('style');
            if (style && !style.includes('display: none') && !style.includes('visibility: hidden')) {
                element.removeAttribute('style');
            }
        });
    }

    resetAllState() {
        // Reset all exercise type states
        this.currentExerciseType = null;
        this.currentAdvancedExerciseType = null;
        this.currentGeometricExerciseType = null;
        this.currentAdvancedGeometricExerciseType = null;
        this.currentAlgebraExerciseType = null;
        
        // Reset all scores and streaks
        this.score = { correct: 0, total: 0 };
        this.streak = 0;
        this.intermediateScore = { correct: 0, total: 0 };
        this.intermediateStreak = 0;
        this.advancedScore = { correct: 0, total: 0 };
        this.advancedStreak = 0;
        this.geometricScore = { correct: 0, total: 0 };
        this.geometricStreak = 0;
        this.advancedGeometricScore = { correct: 0, total: 0 };
        this.advancedGeometricStreak = 0;
        this.algebraScore = { correct: 0, total: 0 };
        this.algebraStreak = 0;
        
        // Clear all input fields
        this.clearInputs();
        
        // Reset all feedback and content areas
        const feedbackElements = document.querySelectorAll('.exercise-feedback');
        feedbackElements.forEach(feedback => feedback.classList.add('hidden'));
        
        const contentElements = document.querySelectorAll('.exercise-content');
        contentElements.forEach(content => content.classList.add('hidden'));
        
        const learningContentElements = document.querySelectorAll('.geometric-learning-content, .advanced-geometric-learning-content');
        learningContentElements.forEach(content => content.classList.add('hidden'));
        
        const specificLearningElements = document.querySelectorAll('[id$="Learning"]');
        specificLearningElements.forEach(element => element.classList.add('hidden'));
        
        // Reset difficulty cards visibility
        this.difficultyCards.forEach(card => {
            card.classList.remove('hidden');
            card.style.display = '';
        });
        
        // Clear problem displays
        const problemDisplays = document.querySelectorAll('.problem-display');
        problemDisplays.forEach(display => display.innerHTML = '');
        
        // Clear answer inputs
        const answerInputs = document.querySelectorAll('[id$="Answer"]');
        answerInputs.forEach(input => input.value = '');
        
        // Update all score displays
        this.updateScoreDisplay();
        this.updateIntermediateScoreDisplay();
        this.updateAdvancedScoreDisplay();
        this.updateGeometricScoreDisplay();
        this.updateAdvancedGeometricScoreDisplay();
        this.updateAlgebraScoreDisplay();
    }

    showWelcomeScreen() {
        // Complete app refresh - clear all localStorage and state
        this.currentDifficulty = null;
        localStorage.removeItem('currentDifficulty');
        localStorage.removeItem('mathHistory');
        
        // Reset all application state
        this.resetAllState();
        
        // Clear history completely
        this.history = [];
        
        // Reset current difficulty display to default
        if (this.currentDifficultyDisplay) {
            this.currentDifficultyDisplay.textContent = 'Beginner';
        }
        
        // Show welcome screen and hide calculator
        this.welcomeScreen.classList.remove('hidden');
        this.calculatorScreen.classList.add('hidden');
    }

    showCalculatorScreen(difficulty) {
        this.hideAllScreens();
        this.calculatorScreen.classList.remove('hidden');
        this.setupDifficulty(difficulty);
        
        if (difficulty === 'beginner') {
            this.showLearningSection();
        } else if (difficulty === 'intermediate') {
            this.showIntermediateLearningSection();
        } else if (difficulty === 'advanced') {
            this.showAdvancedLearningSection();
        } else if (difficulty === 'geometric') {
            this.showGeometricLearningSection();
        } else if (difficulty === 'advanced-geometric') {
            this.showAdvancedGeometricLearningSection();
        } else if (difficulty === 'algebra') {
            this.showAlgebraLearningSection();
        } else if (difficulty === 'trigonometry') {
            this.showTrigonometryLearningSection();
        } else {
            this.showCalculatorSection();
        }
        
        this.updateHistoryDisplay();
    }

    hideAllScreens() {
        this.welcomeScreen.classList.add('hidden');
        this.calculatorScreen.classList.add('hidden');
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        this.advancedGeometricLearningSection?.classList.add('hidden');
        this.advancedGeometricExercisesSection?.classList.add('hidden');
        this.algebraLearningSection?.classList.add('hidden');
        this.algebraExercisesSection?.classList.add('hidden');
        this.trigonometryLearningSection?.classList.add('hidden');
        this.trigonometryExercisesSection?.classList.add('hidden');
    }

    showLearningSection() {
        this.learningSection?.classList.remove('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        
        // Show operation explanations for beginner level
        this.learningSection?.querySelectorAll('.operation-explanation').forEach(el => {
            el.classList.remove('hidden');
        });
    }

    showIntermediateLearningSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.remove('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        
        // Show operation explanations for intermediate level
        this.intermediateLearningSection?.querySelectorAll('.operation-explanation').forEach(el => {
            el.classList.remove('hidden');
        });
    }

    showAdvancedLearningSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.remove('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        
        // Show operation explanations for advanced level
        this.advancedLearningSection?.querySelectorAll('.operation-explanation').forEach(el => {
            el.classList.remove('hidden');
        });
    }

    showGeometricLearningSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.remove('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        this.advancedGeometricLearningSection?.classList.add('hidden');
        this.advancedGeometricExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        
        // Show operation explanations for geometric level
        this.geometricLearningSection?.querySelectorAll('.operation-explanation').forEach(el => {
            el.classList.remove('hidden');
        });
    }

    showAdvancedGeometricLearningSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        this.advancedGeometricLearningSection?.classList.remove('hidden');
        this.advancedGeometricExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        
        // Show operation explanations for advanced geometric level
        this.advancedGeometricLearningSection?.querySelectorAll('.operation-explanation').forEach(el => {
            el.classList.remove('hidden');
        });
        
        // Reset the advanced geometric learning section state
        this.showAdvancedGeometricSelection();
    }

    showAlgebraLearningSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        this.advancedGeometricLearningSection?.classList.add('hidden');
        this.advancedGeometricExercisesSection?.classList.add('hidden');
        this.algebraLearningSection?.classList.remove('hidden');
        this.algebraExercisesSection?.classList.add('hidden');
        this.trigonometryLearningSection?.classList.add('hidden');
        this.trigonometryExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        
        // Show operation explanations for algebra level
        this.algebraLearningSection?.querySelectorAll('.operation-explanation').forEach(el => {
            el.classList.remove('hidden');
        });
    }

    showTrigonometryLearningSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        this.advancedGeometricLearningSection?.classList.add('hidden');
        this.advancedGeometricExercisesSection?.classList.add('hidden');
        this.algebraLearningSection?.classList.add('hidden');
        this.algebraExercisesSection?.classList.add('hidden');
        this.trigonometryLearningSection?.classList.remove('hidden');
        this.trigonometryExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        
        // Show operation explanations for trigonometry level
        this.trigonometryLearningSection?.querySelectorAll('.operation-explanation').forEach(el => {
            el.classList.remove('hidden');
        });
    }

    showExercisesSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.remove('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        this.showExerciseTypeSelection();
    }

    showIntermediateExercisesSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.remove('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        this.showIntermediateExerciseTypeSelection();
    }

    showAdvancedExercisesSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.remove('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        this.showAdvancedExerciseTypeSelection();
    }

    showGeometricExercisesSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.remove('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        
        // If we already have a selected exercise type, show the exercise content
        // Otherwise, show the type selection
        if (this.currentGeometricExerciseType) {
            this.showGeometricExerciseContent();
        } else {
            this.showGeometricExerciseTypeSelection();
        }
    }

    showTrigonometryExercisesSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        this.advancedGeometricLearningSection?.classList.add('hidden');
        this.advancedGeometricExercisesSection?.classList.add('hidden');
        this.algebraLearningSection?.classList.add('hidden');
        this.algebraExercisesSection?.classList.add('hidden');
        this.trigonometryLearningSection?.classList.add('hidden');
        this.trigonometryExercisesSection?.classList.remove('hidden');
        this.trigonometryExerciseContent?.classList.remove('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
    }

    showCalculatorSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        document.querySelector('.calculator-section')?.classList.remove('hidden');
    }

    showExerciseTypeSelection() {
        if (this.exerciseContent) {
            this.exerciseContent.classList.add('hidden');
        }
        document.querySelector('.exercise-type-selection')?.classList.remove('hidden');
    }

    showIntermediateExerciseTypeSelection() {
        if (this.intermediateExerciseContent) {
            this.intermediateExerciseContent.classList.add('hidden');
        }
        document.querySelector('.intermediate-exercise-type-selection')?.classList.remove('hidden');
    }

    showAdvancedExerciseTypeSelection() {
        if (this.advancedExerciseContent) {
            this.advancedExerciseContent.classList.add('hidden');
        }
        document.querySelector('.advanced-exercise-type-selection')?.classList.remove('hidden');
    }

    showGeometricExerciseTypeSelection() {
        // Hide the exercise content
        if (this.geometricExerciseContent) {
            this.geometricExerciseContent.classList.add('hidden');
        }

        // hide the exercise section
        if (this.geometricExercisesSection) {
            this.geometricExercisesSection.classList.add('hidden');
        }
        
        // Show the exercise type selection within exercises section
        const exerciseTypeSelection = document.querySelector('#geometricLearningSection');
        if (exerciseTypeSelection) {
            exerciseTypeSelection.classList.remove('hidden');
        }
        
        // Hide the learning content if it exists
        if (this.geometricLearningContent) {
            this.geometricLearningContent.classList.add('hidden');
        }

        this.showGeometricSelection();
    }

    showGeometricSelection() {
        document.querySelector('.geometric-exercise-type-selection')?.classList.remove('hidden');
        this.geometricLearningContent?.classList.add('hidden');
        // Hide all learning explanations
        document.querySelectorAll('.operation-explanation').forEach(el => el.classList.add('hidden'));
    }

    showGeometricLearning(exerciseType) {
        this.currentGeometricExerciseType = exerciseType;
        
        // Hide exercise type selection
        document.querySelector('.geometric-exercise-type-selection')?.classList.add('hidden');
        
        // Show learning content
        this.geometricLearningContent?.classList.remove('hidden');
        
        // Hide all operation explanations first
        document.querySelectorAll('.operation-explanation').forEach(el => el.classList.add('hidden'));
        
        // Show the specific learning content based on exercise type
        switch (exerciseType) {
            case 'rectangle-area':
                document.getElementById('rectangleAreaLearning')?.classList.remove('hidden');
                break;
            case 'circle-calculations':
                document.getElementById('circleCalculationsLearning')?.classList.remove('hidden');
                break;
            case 'triangle-properties':
                document.getElementById('trianglePropertiesLearning')?.classList.remove('hidden');
                break;
            case 'perimeter-calculations':
                document.getElementById('perimeterCalculationsLearning')?.classList.remove('hidden');
                break;
        }
    }

    startGeometricExerciseType(exerciseType) {
        this.currentGeometricExerciseType = exerciseType;
        this.resetGeometricScore();
        this.showGeometricExercisesSection();
        this.showGeometricExerciseContent();
        this.generateNewGeometricProblem();
    }

    showGeometricExerciseContent() {
        // Hide the learning content
        this.geometricLearningContent?.classList.add('hidden');
        
        // Hide all exercise type selections
        document.querySelectorAll('.geometric-exercise-type-selection').forEach(selection => {
            selection.classList.add('hidden');
        });
        
        // Show exercise content
        this.geometricExerciseContent?.classList.remove('hidden');
        this.geometricExerciseFeedback?.classList.add('hidden');
        this.geometricExerciseAnswer.value = '';
        this.geometricExerciseAnswer.focus();
    }

    generateNewGeometricProblem() {
        if (!this.currentGeometricExerciseType) return;

        let problem, answer, title;
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const isProblemSolving = Math.random() < 0.7; // 70% chance for problem-solving format

        switch (this.currentGeometricExerciseType) {
            case 'rectangle-area':
                const length = Math.floor(Math.random() * 16) + 5; // 5-20
                const width = Math.floor(Math.random() * 13) + 3; // 3-15
                
                if (isProblemSolving) {
                    const contexts = [
                        { item: 'garden', unit: 'meters', verb: 'plant' },
                        { item: 'room', unit: 'feet', verb: 'carpet' },
                        { item: 'poster', unit: 'inches', verb: 'design' },
                        { item: 'playground', unit: 'meters', verb: 'fence' },
                        { item: 'painting', unit: 'centimeters', verb: 'frame' },
                        { item: 'field', unit: 'yards', verb: 'seed' }
                    ];
                    const context = contexts[Math.floor(Math.random() * contexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    problem = `${name} needs to ${context.verb} a rectangular ${context.item} that is ${length} ${context.unit} long and ${width} ${context.unit} wide. What is the area of the ${context.item} in square ${context.unit}?`;
                    title = `Rectangle Area Problem`;
                } else {
                    problem = `Calculate the area of a rectangle with length ${length} units and width ${width} units.`;
                    title = "Rectangle Area Calculation";
                }
                answer = length * width;
                break;

            case 'circle-calculations':
                const radius = Math.floor(Math.random() * 10) + 3; // 3-12
                const isArea = Math.random() < 0.5;
                
                if (isProblemSolving) {
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    if (isArea) {
                        const areaContexts = [
                            { item: 'circular pool', action: 'cover with a tarp', unit: 'meters' },
                            { item: 'round pizza', action: 'calculate the size', unit: 'inches' },
                            { item: 'circular rug', action: 'buy floor space', unit: 'feet' },
                            { item: 'round table', action: 'find the surface area', unit: 'feet' },
                            { item: 'circular flower bed', action: 'plant flowers in', unit: 'meters' },
                            { item: 'round trampoline', action: 'determine the jumping area', unit: 'feet' }
                        ];
                        const context = areaContexts[Math.floor(Math.random() * areaContexts.length)];
                        
                        problem = `${name} wants to ${context.action} for a ${context.item} with a radius of ${radius} ${context.unit}. What is the area? (Use π ≈ 3.14, round to 2 decimal places)`;
                        answer = Math.round(Math.PI * radius * radius * 100) / 100;
                        title = "Circle Area Problem";
                    } else {
                        const circumContexts = [
                            { item: 'circular garden', action: 'put a fence around', unit: 'meters' },
                            { item: 'round cake', action: 'put frosting around the edge', unit: 'inches' },
                            { item: 'circular track', action: 'measure the running distance', unit: 'meters' },
                            { item: 'round pool', action: 'install edging around', unit: 'feet' },
                            { item: 'circular fountain', action: 'place stones around', unit: 'feet' },
                            { item: 'round clock', action: 'measure the rim', unit: 'inches' }
                        ];
                        const context = circumContexts[Math.floor(Math.random() * circumContexts.length)];
                        
                        problem = `${name} needs to ${context.action} a ${context.item} with a radius of ${radius} ${context.unit}. What is the circumference? (Use π ≈ 3.14, round to 2 decimal places)`;
                        answer = Math.round(2 * Math.PI * radius * 100) / 100;
                        title = "Circle Circumference Problem";
                    }
                } else {
                    if (isArea) {
                        problem = `Calculate the area of a circle with radius ${radius} units. (Use π ≈ 3.14, round to 2 decimal places)`;
                        answer = Math.round(Math.PI * radius * radius * 100) / 100;
                        title = "Circle Area Calculation";
                    } else {
                        problem = `Calculate the circumference of a circle with radius ${radius} units. (Use π ≈ 3.14, round to 2 decimal places)`;
                        answer = Math.round(2 * Math.PI * radius * 100) / 100;
                        title = "Circle Circumference Calculation";
                    }
                }
                break;

            case 'triangle-properties':
                const base = Math.floor(Math.random() * 13) + 6; // 6-18
                const height = Math.floor(Math.random() * 11) + 4; // 4-14
                
                if (isProblemSolving) {
                    const triangleContexts = [
                        { item: 'triangular sail', action: 'calculate fabric needed for', unit: 'meters' },
                        { item: 'triangular garden bed', action: 'plant flowers in', unit: 'feet' },
                        { item: 'triangular flag', action: 'design material for', unit: 'inches' },
                        { item: 'triangular roof section', action: 'calculate shingles for', unit: 'feet' },
                        { item: 'triangular pizza slice', action: 'measure the area of', unit: 'inches' },
                        { item: 'triangular parking lot', action: 'pave', unit: 'meters' }
                    ];
                    const context = triangleContexts[Math.floor(Math.random() * triangleContexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    problem = `${name} needs to ${context.action} a ${context.item} with a base of ${base} ${context.unit} and height of ${height} ${context.unit}. What is the area?`;
                    title = "Triangle Area Problem";
                } else {
                    problem = `Calculate the area of a triangle with base ${base} units and height ${height} units.`;
                    title = "Triangle Area Calculation";
                }
                answer = (base * height) / 2;
                break;

            case 'perimeter-calculations':
                const shapes = ['rectangle', 'square', 'triangle'];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                
                if (shape === 'rectangle') {
                    const l = Math.floor(Math.random() * 11) + 5; // 5-15
                    const w = Math.floor(Math.random() * 10) + 3; // 3-12
                    
                    if (isProblemSolving) {
                        const rectPerimeterContexts = [
                            { item: 'rectangular yard', action: 'put a fence around', unit: 'meters' },
                            { item: 'rectangular picture frame', action: 'add trim around', unit: 'inches' },
                            { item: 'rectangular pool', action: 'install edging around', unit: 'feet' },
                            { item: 'rectangular garden', action: 'build a border for', unit: 'feet' },
                            { item: 'rectangular room', action: 'install baseboards in', unit: 'feet' },
                            { item: 'rectangular field', action: 'measure the boundary of', unit: 'yards' }
                        ];
                        const context = rectPerimeterContexts[Math.floor(Math.random() * rectPerimeterContexts.length)];
                        const name = names[Math.floor(Math.random() * names.length)];
                        
                        problem = `${name} wants to ${context.action} a ${context.item} that is ${l} ${context.unit} long and ${w} ${context.unit} wide. How many ${context.unit} of material are needed for the perimeter?`;
                        title = "Rectangle Perimeter Problem";
                    } else {
                        problem = `Calculate the perimeter of a rectangle with length ${l} units and width ${w} units.`;
                        title = "Rectangle Perimeter Calculation";
                    }
                    answer = 2 * (l + w);
                } else if (shape === 'square') {
                    const side = Math.floor(Math.random() * 12) + 4; // 4-15
                    
                    if (isProblemSolving) {
                        const squarePerimeterContexts = [
                            { item: 'square patio', action: 'put decorative stones around', unit: 'feet' },
                            { item: 'square quilt', action: 'add binding around', unit: 'inches' },
                            { item: 'square playground', action: 'install fencing around', unit: 'meters' },
                            { item: 'square tile', action: 'put trim around', unit: 'centimeters' },
                            { item: 'square window', action: 'install weather stripping around', unit: 'inches' },
                            { item: 'square garden plot', action: 'build a border for', unit: 'feet' }
                        ];
                        const context = squarePerimeterContexts[Math.floor(Math.random() * squarePerimeterContexts.length)];
                        const name = names[Math.floor(Math.random() * names.length)];
                        
                        problem = `${name} needs to ${context.action} a ${context.item} with sides of ${side} ${context.unit} each. How many ${context.unit} of material are needed for the perimeter?`;
                        title = "Square Perimeter Problem";
                    } else {
                        problem = `Calculate the perimeter of a square with side length ${side} units.`;
                        title = "Square Perimeter Calculation";
                    }
                    answer = 4 * side;
                } else {
                    const a = Math.floor(Math.random() * 8) + 5; // 5-12
                    const b = Math.floor(Math.random() * 9) + 6; // 6-14
                    const c = Math.floor(Math.random() * 10) + 7; // 7-16
                    
                    if (isProblemSolving) {
                        const trianglePerimeterContexts = [
                            { item: 'triangular sign', action: 'put trim around', unit: 'inches' },
                            { item: 'triangular garden', action: 'install edging around', unit: 'feet' },
                            { item: 'triangular sail', action: 'sew binding around', unit: 'meters' },
                            { item: 'triangular deck', action: 'install railing around', unit: 'feet' },
                            { item: 'triangular art piece', action: 'frame', unit: 'centimeters' },
                            { item: 'triangular plot of land', action: 'survey the boundary of', unit: 'yards' }
                        ];
                        const context = trianglePerimeterContexts[Math.floor(Math.random() * trianglePerimeterContexts.length)];
                        const name = names[Math.floor(Math.random() * names.length)];
                        
                        problem = `${name} wants to ${context.action} a ${context.item} with sides measuring ${a}, ${b}, and ${c} ${context.unit}. What is the total perimeter?`;
                        title = "Triangle Perimeter Problem";
                    } else {
                        problem = `Calculate the perimeter of a triangle with sides ${a}, ${b}, and ${c} units.`;
                        title = "Triangle Perimeter Calculation";
                    }
                    answer = a + b + c;
                }
                break;

            default:
                problem = "Invalid exercise type";
                answer = 0;
                title = "Error";
        }

        this.currentProblem = { problem, answer, title };
        this.geometricProblemDisplay.innerHTML = `<div class="problem-display word-problem">${problem}</div>`;
        this.geometricExerciseTitle.textContent = title;
        this.geometricExerciseFeedback.classList.add('hidden');
        
        // Ensure exercise content is visible
        this.geometricExerciseContent?.classList.remove('hidden');
        
        this.geometricExerciseAnswer.focus();
    }

    checkGeometricAnswer() {
        const userAnswer = parseFloat(this.geometricExerciseAnswer.value);
        const correctAnswer = this.currentProblem.answer;
        const tolerance = 0.01; // Allow small rounding differences

        if (isNaN(userAnswer)) {
            this.showGeometricFeedback(false, "Please enter a valid number.");
            return;
        }

        const isCorrect = Math.abs(userAnswer - correctAnswer) <= tolerance;
        
        if (isCorrect) {
            this.geometricScore.correct++;
            this.geometricStreak++;
            this.showGeometricFeedback(true, `🎉 Correct! The answer is ${correctAnswer}.`);
        } else {
            this.geometricStreak = 0;
            this.showGeometricFeedback(false, `❌ Incorrect. The correct answer is ${correctAnswer}.`);
        }

        this.geometricScore.total++;
        this.updateGeometricScoreDisplay();
    }

    showGeometricFeedback(isCorrect, message) {
        this.geometricFeedbackMessage.innerHTML = message;
        this.geometricFeedbackMessage.className = isCorrect ? 'feedback-correct' : 'feedback-incorrect';
        this.geometricExerciseFeedback.classList.remove('hidden');
    }

    resetGeometricScore() {
        this.geometricScore = { correct: 0, total: 0 };
        this.geometricStreak = 0;
        this.updateGeometricScoreDisplay();
    }

    updateGeometricScoreDisplay() {
        if (this.geometricScoreDisplay) {
            this.geometricScoreDisplay.textContent = `${this.geometricScore.correct}/${this.geometricScore.total}`;
        }
        if (this.geometricStreakDisplay) {
            this.geometricStreakDisplay.textContent = this.geometricStreak;
        }
    }

    // Advanced Geometric Exercise System
    showAdvancedGeometricExercisesSection() {
        this.learningSection?.classList.add('hidden');
        this.exercisesSection?.classList.add('hidden');
        this.intermediateLearningSection?.classList.add('hidden');
        this.intermediateExercisesSection?.classList.add('hidden');
        this.advancedLearningSection?.classList.add('hidden');
        this.advancedExercisesSection?.classList.add('hidden');
        this.geometricLearningSection?.classList.add('hidden');
        this.geometricExercisesSection?.classList.add('hidden');
        this.advancedGeometricLearningSection?.classList.add('hidden');
        this.advancedGeometricExercisesSection?.classList.remove('hidden');
        document.querySelector('.calculator-section')?.classList.add('hidden');
        
        // If we already have a selected exercise type, show the exercise content
        // Otherwise, show the type selection
        if (this.currentAdvancedGeometricExerciseType) {
            this.showAdvancedGeometricExerciseContent();
        } else {
            this.showAdvancedGeometricExerciseTypeSelection();
        }
    }

    showAdvancedGeometricExerciseTypeSelection() {
        // Hide the exercise content
        if (this.advancedGeometricExerciseContent) {
            this.advancedGeometricExerciseContent.classList.add('hidden');
        }
        
        // Show the exercise type selection buttons within exercises section
        document.querySelector('#advancedGeometricExercisesSection .advanced-geometric-exercise-type-selection')?.classList.remove('hidden');
        
        // Hide the learning content if it exists
        if (this.advancedGeometricLearningContent) {
            this.advancedGeometricLearningContent.classList.add('hidden');
        }
    }

    showAdvancedGeometricSelection() {
        document.querySelector('.advanced-geometric-exercise-type-selection')?.classList.remove('hidden');
        this.advancedGeometricLearningContent?.classList.add('hidden');
        // Hide all learning explanations
        document.querySelectorAll('.operation-explanation').forEach(el => el.classList.add('hidden'));
    }

    showAdvancedGeometricLearning(exerciseType) {
        this.currentAdvancedGeometricExerciseType = exerciseType;
        
        // Hide exercise type selection
        document.querySelector('.advanced-geometric-exercise-type-selection')?.classList.add('hidden');
        
        // Show learning content
        this.advancedGeometricLearningContent?.classList.remove('hidden');
        
        // Hide all operation explanations first
        document.querySelectorAll('.operation-explanation').forEach(el => el.classList.add('hidden'));
        
        // Show the specific learning content based on exercise type
        switch (exerciseType) {
            case 'cube-rectangular-volumes':
                document.getElementById('cubeRectangularVolumesLearning')?.classList.remove('hidden');
                break;
            case 'sphere-calculations':
                document.getElementById('sphereCalculationsLearning')?.classList.remove('hidden');
                break;
            case 'cylinder-cone-properties':
                document.getElementById('cylinderConePropertiesLearning')?.classList.remove('hidden');
                break;
            case 'surface-area-calculations':
                document.getElementById('surfaceAreaCalculationsLearning')?.classList.remove('hidden');
                break;
        }
    }

    startAdvancedGeometricExerciseType(exerciseType) {
        this.currentAdvancedGeometricExerciseType = exerciseType;
        this.resetAdvancedGeometricScore();
        this.showAdvancedGeometricExercisesSection();
        this.generateNewAdvancedGeometricProblem();
    }

    showAdvancedGeometricExerciseContent() {
        // Hide the learning content
        this.advancedGeometricLearningContent?.classList.add('hidden');
        
        // Hide the exercise type selection within exercises section
        const exerciseTypeSelection = document.querySelector('#advancedGeometricExercisesSection .advanced-geometric-exercise-type-selection');
        if (exerciseTypeSelection) {
            exerciseTypeSelection.classList.add('hidden');
        }
        
        // Show exercise content
        this.advancedGeometricExerciseContent?.classList.remove('hidden');
        this.advancedGeometricExerciseFeedback?.classList.add('hidden');
        this.advancedGeometricExerciseAnswer.value = '';
        this.advancedGeometricExerciseAnswer.focus();
    }

    generateNewAdvancedGeometricProblem() {
        if (!this.currentAdvancedGeometricExerciseType) return;

        let problem, answer, title;
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const isProblemSolving = Math.random() < 0.7; // 70% chance for problem-solving format

        switch (this.currentAdvancedGeometricExerciseType) {
            case 'cube-rectangular-volumes':
                const isCube = Math.random() < 0.5;
                if (isCube) {
                    const side = Math.floor(Math.random() * 8) + 3; // 3-10
                    
                    if (isProblemSolving) {
                        const cubeContexts = [
                            { item: 'storage box', action: 'calculate how much fits in', unit: 'inches' },
                            { item: 'aquarium', action: 'determine the water volume for', unit: 'feet' },
                            { item: 'shipping container', action: 'find the capacity of', unit: 'meters' },
                            { item: 'ice cube tray compartment', action: 'measure the volume of', unit: 'centimeters' },
                            { item: 'gift box', action: 'calculate the space inside', unit: 'inches' },
                            { item: 'concrete block', action: 'determine the material volume of', unit: 'feet' }
                        ];
                        const context = cubeContexts[Math.floor(Math.random() * cubeContexts.length)];
                        const name = names[Math.floor(Math.random() * names.length)];
                        
                        problem = `${name} needs to ${context.action} a cube-shaped ${context.item} with sides of ${side} ${context.unit} each. What is the volume in cubic ${context.unit}?`;
                        title = "Cube Volume Problem";
                    } else {
                        problem = `Calculate the volume of a cube with side length ${side} units.`;
                        title = "Cube Volume Calculation";
                    }
                    answer = Math.pow(side, 3);
                } else {
                    const length = Math.floor(Math.random() * 8) + 4; // 4-11
                    const width = Math.floor(Math.random() * 6) + 3; // 3-8
                    const height = Math.floor(Math.random() * 7) + 2; // 2-8
                    
                    if (isProblemSolving) {
                        const prismContexts = [
                            { item: 'swimming pool', action: 'calculate the water capacity of', unit: 'feet' },
                            { item: 'shipping crate', action: 'determine the cargo space in', unit: 'meters' },
                            { item: 'fish tank', action: 'find the water volume for', unit: 'inches' },
                            { item: 'concrete foundation', action: 'calculate the concrete needed for', unit: 'feet' },
                            { item: 'storage shed', action: 'measure the interior space of', unit: 'feet' },
                            { item: 'rectangular planter box', action: 'determine the soil capacity of', unit: 'inches' }
                        ];
                        const context = prismContexts[Math.floor(Math.random() * prismContexts.length)];
                        const name = names[Math.floor(Math.random() * names.length)];
                        
                        problem = `${name} wants to ${context.action} a rectangular ${context.item} that is ${length} ${context.unit} long, ${width} ${context.unit} wide, and ${height} ${context.unit} tall. What is the volume?`;
                        title = "Rectangular Prism Volume Problem";
                    } else {
                        problem = `Calculate the volume of a rectangular prism with length ${length}, width ${width}, and height ${height} units.`;
                        title = "Rectangular Prism Volume Calculation";
                    }
                    answer = length * width * height;
                }
                break;

            case 'sphere-calculations':
                const radius = Math.floor(Math.random() * 6) + 2; // 2-7
                const isVolume = Math.random() < 0.5;
                
                if (isProblemSolving) {
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    if (isVolume) {
                        const sphereVolumeContexts = [
                            { item: 'basketball', action: 'calculate the air volume in', unit: 'inches' },
                            { item: 'spherical water tank', action: 'determine the water capacity of', unit: 'feet' },
                            { item: 'globe ornament', action: 'find the material volume of', unit: 'centimeters' },
                            { item: 'soap bubble', action: 'measure the air volume in', unit: 'millimeters' },
                            { item: 'marble', action: 'calculate the glass volume of', unit: 'centimeters' },
                            { item: 'exercise ball', action: 'determine the air capacity of', unit: 'inches' }
                        ];
                        const context = sphereVolumeContexts[Math.floor(Math.random() * sphereVolumeContexts.length)];
                        
                        problem = `${name} needs to ${context.action} a spherical ${context.item} with a radius of ${radius} ${context.unit}. What is the volume? (Use π ≈ 3.14, round to 2 decimal places)`;
                        title = "Sphere Volume Problem";
                        answer = Math.round((4/3) * Math.PI * Math.pow(radius, 3) * 100) / 100;
                    } else {
                        const sphereSurfaceContexts = [
                            { item: 'planet model', action: 'calculate the surface area of', unit: 'inches' },
                            { item: 'dome structure', action: 'determine the covering material for', unit: 'feet' },
                            { item: 'ball', action: 'find the surface area of', unit: 'centimeters' },
                            { item: 'spherical balloon', action: 'calculate the material needed for', unit: 'inches' },
                            { item: 'snow globe', action: 'measure the glass surface of', unit: 'centimeters' },
                            { item: 'spherical tank', action: 'determine paint area for', unit: 'meters' }
                        ];
                        const context = sphereSurfaceContexts[Math.floor(Math.random() * sphereSurfaceContexts.length)];
                        
                        problem = `${name} wants to ${context.action} a spherical ${context.item} with a radius of ${radius} ${context.unit}. What is the surface area? (Use π ≈ 3.14, round to 2 decimal places)`;
                        title = "Sphere Surface Area Problem";
                        answer = Math.round(4 * Math.PI * Math.pow(radius, 2) * 100) / 100;
                    }
                } else {
                    if (isVolume) {
                        problem = `Calculate the volume of a sphere with radius ${radius} units. (Use π ≈ 3.14, round to 2 decimal places)`;
                        answer = Math.round((4/3) * Math.PI * Math.pow(radius, 3) * 100) / 100;
                        title = "Sphere Volume Calculation";
                    } else {
                        problem = `Calculate the surface area of a sphere with radius ${radius} units. (Use π ≈ 3.14, round to 2 decimal places)`;
                        answer = Math.round(4 * Math.PI * Math.pow(radius, 2) * 100) / 100;
                        title = "Sphere Surface Area Calculation";
                    }
                }
                break;

            case 'cylinder-cone-properties':
                const r = Math.floor(Math.random() * 5) + 2; // 2-6
                const h = Math.floor(Math.random() * 8) + 3; // 3-10
                const isCylinder = Math.random() < 0.5;
                
                if (isProblemSolving) {
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    if (isCylinder) {
                        const cylinderContexts = [
                            { item: 'water tank', action: 'calculate the water capacity of', unit: 'feet' },
                            { item: 'soup can', action: 'determine the volume of', unit: 'inches' },
                            { item: 'concrete column', action: 'find the concrete volume for', unit: 'feet' },
                            { item: 'storage silo', action: 'measure the grain capacity of', unit: 'meters' },
                            { item: 'cylindrical planter', action: 'calculate the soil volume for', unit: 'inches' },
                            { item: 'oil drum', action: 'determine the liquid capacity of', unit: 'feet' }
                        ];
                        const context = cylinderContexts[Math.floor(Math.random() * cylinderContexts.length)];
                        
                        problem = `${name} needs to ${context.action} a cylindrical ${context.item} with a radius of ${r} ${context.unit} and height of ${h} ${context.unit}. What is the volume? (Use π ≈ 3.14, round to 2 decimal places)`;
                        title = "Cylinder Volume Problem";
                        answer = Math.round(Math.PI * Math.pow(r, 2) * h * 100) / 100;
                    } else {
                        const coneContexts = [
                            { item: 'ice cream cone', action: 'calculate the capacity of', unit: 'inches' },
                            { item: 'traffic cone', action: 'determine the plastic volume of', unit: 'inches' },
                            { item: 'party hat', action: 'find the paper volume of', unit: 'centimeters' },
                            { item: 'funnel', action: 'measure the liquid capacity of', unit: 'inches' },
                            { item: 'cone-shaped planter', action: 'calculate the soil volume for', unit: 'feet' },
                            { item: 'volcano model', action: 'determine the interior volume of', unit: 'inches' }
                        ];
                        const context = coneContexts[Math.floor(Math.random() * coneContexts.length)];
                        
                        problem = `${name} wants to ${context.action} a cone-shaped ${context.item} with a radius of ${r} ${context.unit} and height of ${h} ${context.unit}. What is the volume? (Use π ≈ 3.14, round to 2 decimal places)`;
                        title = "Cone Volume Problem";
                        answer = Math.round((1/3) * Math.PI * Math.pow(r, 2) * h * 100) / 100;
                    }
                } else {
                    if (isCylinder) {
                        problem = `Calculate the volume of a cylinder with radius ${r} units and height ${h} units. (Use π ≈ 3.14, round to 2 decimal places)`;
                        answer = Math.round(Math.PI * Math.pow(r, 2) * h * 100) / 100;
                        title = "Cylinder Volume Calculation";
                    } else {
                        problem = `Calculate the volume of a cone with radius ${r} units and height ${h} units. (Use π ≈ 3.14, round to 2 decimal places)`;
                        answer = Math.round((1/3) * Math.PI * Math.pow(r, 2) * h * 100) / 100;
                        title = "Cone Volume Calculation";
                    }
                }
                break;

            case 'surface-area-calculations':
                const shapes = ['cube', 'rectangular-prism'];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                
                if (shape === 'cube') {
                    const s = Math.floor(Math.random() * 6) + 3; // 3-8
                    
                    if (isProblemSolving) {
                        const cubeSurfaceContexts = [
                            { item: 'gift box', action: 'calculate wrapping paper needed for', unit: 'inches' },
                            { item: 'dice', action: 'determine the surface area of', unit: 'centimeters' },
                            { item: 'storage cube', action: 'find paint coverage for', unit: 'feet' },
                            { item: 'building block', action: 'measure the surface area of', unit: 'inches' },
                            { item: 'cubic container', action: 'calculate label area for', unit: 'centimeters' },
                            { item: 'ice cube', action: 'determine the surface area of', unit: 'millimeters' }
                        ];
                        const context = cubeSurfaceContexts[Math.floor(Math.random() * cubeSurfaceContexts.length)];
                        const name = names[Math.floor(Math.random() * names.length)];
                        
                        problem = `${name} needs to ${context.action} a cube-shaped ${context.item} with sides of ${s} ${context.unit} each. What is the total surface area?`;
                        title = "Cube Surface Area Problem";
                    } else {
                        problem = `Calculate the surface area of a cube with side length ${s} units.`;
                        title = "Cube Surface Area Calculation";
                    }
                    answer = 6 * Math.pow(s, 2);
                } else {
                    const l = Math.floor(Math.random() * 6) + 3; // 3-8
                    const w = Math.floor(Math.random() * 5) + 2; // 2-6
                    const h = Math.floor(Math.random() * 4) + 2; // 2-5
                    
                    if (isProblemSolving) {
                        const prismSurfaceContexts = [
                            { item: 'jewelry box', action: 'calculate fabric needed to cover', unit: 'inches' },
                            { item: 'small building', action: 'determine paint coverage for', unit: 'feet' },
                            { item: 'rectangular container', action: 'find material needed to wrap', unit: 'centimeters' },
                            { item: 'shipping box', action: 'calculate cardboard area of', unit: 'inches' },
                            { item: 'display case', action: 'measure glass area for', unit: 'feet' },
                            { item: 'rectangular prism', action: 'determine total surface area of', unit: 'units' }
                        ];
                        const context = prismSurfaceContexts[Math.floor(Math.random() * prismSurfaceContexts.length)];
                        const name = names[Math.floor(Math.random() * names.length)];
                        
                        problem = `${name} wants to ${context.action} a rectangular ${context.item} that is ${l} ${context.unit} long, ${w} ${context.unit} wide, and ${h} ${context.unit} tall. What is the total surface area?`;
                        title = "Rectangular Prism Surface Area Problem";
                    } else {
                        problem = `Calculate the surface area of a rectangular prism with length ${l}, width ${w}, and height ${h} units.`;
                        title = "Rectangular Prism Surface Area Calculation";
                    }
                    answer = 2 * (l * w + l * h + w * h);
                }
                break;

            default:
                problem = "Invalid exercise type";
                answer = 0;
                title = "Error";
        }

        this.currentAdvancedGeometricProblem = { problem, answer, title };
        this.advancedGeometricProblemDisplay.innerHTML = `<div class="problem-display word-problem">${problem}</div>`;
        this.advancedGeometricExerciseTitle.textContent = title;
        this.advancedGeometricExerciseFeedback.classList.add('hidden');
        this.advancedGeometricExerciseAnswer.focus();
    }

    checkAdvancedGeometricAnswer() {
        const userAnswer = parseFloat(this.advancedGeometricExerciseAnswer.value);
        const correctAnswer = this.currentAdvancedGeometricProblem.answer;
        const tolerance = 0.01; // Allow small rounding differences

        if (isNaN(userAnswer)) {
            this.showAdvancedGeometricFeedback(false, "Please enter a valid number.");
            return;
        }

        const isCorrect = Math.abs(userAnswer - correctAnswer) <= tolerance;
        
        if (isCorrect) {
            this.advancedGeometricScore.correct++;
            this.advancedGeometricStreak++;
            this.showAdvancedGeometricFeedback(true, `🎉 Correct! The answer is ${correctAnswer}.`);
        } else {
            this.advancedGeometricStreak = 0;
            this.showAdvancedGeometricFeedback(false, `❌ Incorrect. The correct answer is ${correctAnswer}.`);
        }

        this.advancedGeometricScore.total++;
        this.updateAdvancedGeometricScoreDisplay();
    }

    showAdvancedGeometricFeedback(isCorrect, message) {
        this.advancedGeometricFeedbackMessage.innerHTML = message;
        this.advancedGeometricFeedbackMessage.className = isCorrect ? 'feedback-correct' : 'feedback-incorrect';
        this.advancedGeometricExerciseFeedback.classList.remove('hidden');
    }

    resetAdvancedGeometricScore() {
        this.advancedGeometricScore = { correct: 0, total: 0 };
        this.advancedGeometricStreak = 0;
        this.updateAdvancedGeometricScoreDisplay();
    }

    updateAdvancedGeometricScoreDisplay() {
        if (this.advancedGeometricScoreDisplay) {
            this.advancedGeometricScoreDisplay.textContent = `${this.advancedGeometricScore.correct}/${this.advancedGeometricScore.total}`;
        }
        if (this.advancedGeometricStreakDisplay) {
            this.advancedGeometricStreakDisplay.textContent = this.advancedGeometricStreak;
        }
    }

    updateAlgebraScoreDisplay() {
        if (this.algebraScoreDisplay) {
            this.algebraScoreDisplay.textContent = `${this.algebraScore.correct}/${this.algebraScore.total}`;
        }
        if (this.algebraStreakDisplay) {
            this.algebraStreakDisplay.textContent = this.algebraStreak;
        }
    }

    selectDifficulty(difficulty) {
        if (difficulty === 'dictionary') {
            this.showDictionarySection();
            return;
        }
        
        if (difficulty === 'knowledge-check') {
            this.showKnowledgeCheckSection();
            return;
        }
        
        this.currentDifficulty = difficulty;
        localStorage.setItem('currentDifficulty', difficulty);
        this.showCalculatorScreen(difficulty);
    }

    setupDifficulty(difficulty) {
        // Update difficulty display
        if (this.currentDifficultyDisplay) {
            this.currentDifficultyDisplay.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
        }

        // Set up operations based on difficulty
        this.setupOperations(difficulty);
        
        // Set up input constraints
        this.setupInputConstraints(difficulty);
    }

    setupOperations(difficulty) {
        const operations = this.getOperationsForDifficulty(difficulty);
        this.operationsContainer.innerHTML = '';

        operations.forEach(op => {
            const button = document.createElement('button');
            button.className = 'operation-btn';
            button.dataset.operation = op.operation;
            button.textContent = op.label;
            
            button.addEventListener('click', (e) => {
                const operation = e.target.dataset.operation;
                this.performOperation(operation);
            });

            this.operationsContainer.appendChild(button);
        });
    }

    getOperationsForDifficulty(difficulty) {
        const operations = {
            beginner: [
                { operation: 'add', label: 'Addition (+)' },
                { operation: 'subtract', label: 'Subtraction (-)' }
            ],
            intermediate: [
                { operation: 'add', label: 'Addition (+)' },
                { operation: 'subtract', label: 'Subtraction (-)' },
                { operation: 'multiply', label: 'Multiplication (×)' },
                { operation: 'divide', label: 'Division (÷)' },
                { operation: 'percentage', label: 'Percentage (%)' }
            ],
            advanced: [
                { operation: 'multiply', label: 'Multiplication (×)' },
                { operation: 'divide', label: 'Division (÷)' },
                { operation: 'power', label: 'Power (^)' },
                { operation: 'sqrt', label: 'Square Root (√)' },
                { operation: 'percentage', label: 'Percentage (%)' }
            ]
        };

        return operations[difficulty] || operations.beginner;
    }

    setupInputConstraints(difficulty) {
      // Exclude geometric difficulty from constraints setup
      if (difficulty === 'geometric') return;

      const constraints = {
        beginner: { min: 1, max: 50 },
        intermediate: { min: 1, max: 1000 },
        advanced: { min: -Infinity, max: Infinity }
      };

      const constraint = constraints[difficulty];

      if (this.num1Input && constraint && constraint.min !== -Infinity) {
        this.num1Input.min = constraint.min;
        this.num1Input.max = constraint.max;
      }

      if (this.num2Input && constraint && constraint.min !== -Infinity) {
        this.num2Input.min = constraint.min;
        this.num2Input.max = constraint.max;
      }
    }

    showHint() {
        const num1 = parseFloat(this.num1Input?.value || 0);
        const num2 = parseFloat(this.num2Input?.value || 0);
        
        let hint = this.generateHint(num1, num2);
        
        if (this.hintText) {
            this.hintText.textContent = hint;
        }
        
        if (this.hintSection) {
            this.hintSection.classList.remove('hidden');
            
            // Hide hint after 5 seconds
            setTimeout(() => {
                this.hintSection.classList.add('hidden');
            }, 5000);
        }
    }

    generateHint(num1, num2) {
        const hints = [
            `Try adding ${num1} and ${num2} step by step: ${num1} + ${num2}`,
            `For subtraction, think: ${num1} - ${num2} means taking away ${num2} from ${num1}`,
            `For multiplication, you can add ${num1} to itself ${num2} times`,
            `When dividing, think about how many times ${num2} goes into ${num1}`,
            `Remember: any number to the power of 1 equals itself`,
            `Square root asks: what number times itself equals the given number?`
        ];
        
        return hints[Math.floor(Math.random() * hints.length)];
    }

    // Exercise System
    startExerciseType(exerciseType) {
        this.currentExerciseType = exerciseType;
        this.score = { correct: 0, total: 0 };
        this.streak = 0;
        this.updateScoreDisplay();
        
        document.querySelector('.exercise-type-selection')?.classList.add('hidden');
        this.exerciseContent?.classList.remove('hidden');
        
        this.setExerciseTitle(exerciseType);
        this.generateNewProblem();
    }

    setExerciseTitle(exerciseType) {
        const titles = {
            'single-digit-add': '🔢 Single Digit Addition',
            'two-digit-add': '🔢 Two Digit Addition',
            'three-digit-add': '🔢 Three Digit Addition',
            'four-digit-add': '🔢 Four Digit Addition',
            'three-numbers-add': '🔢 Three Numbers Addition',
            'four-numbers-add': '🔢 Four Numbers Addition',
            'five-numbers-add': '🔢 Five Numbers Addition',
            'single-digit-sub': '➖ Single Digit Subtraction',
            'two-digit-sub': '➖ Two Digit Subtraction',
            'three-digit-sub': '➖ Three Digit Subtraction',
            'four-digit-sub': '➖ Four Digit Subtraction',
            'mixed': '🔀 Mixed Operations',
            'word-problems-easy': '📖 Easy Word Problems',
            'shopping-problems': '🛒 Shopping Scenarios',
            'time-problems': '🕐 Time & Calendar',
            'counting-problems': '🔢 Counting & Groups',
            'comparison-problems': '⚖️ Comparing Numbers',
            'pattern-problems': '🔍 Simple Patterns'
        };
        
        if (this.exerciseTitle) {
            this.exerciseTitle.textContent = titles[exerciseType] || 'Exercise';
        }
    }

    generateNewProblem() {
        this.exerciseFeedback?.classList.add('hidden');
        this.exerciseAnswer.value = '';
        this.exerciseAnswer.focus();
        
        switch (this.currentExerciseType) {
            case 'single-digit-add':
                this.generateSingleDigitAddition();
                break;
            case 'two-digit-add':
                this.generateTwoDigitAddition();
                break;
            case 'three-digit-add':
                this.generateThreeDigitAddition();
                break;
            case 'four-digit-add':
                this.generateFourDigitAddition();
                break;
            case 'three-numbers-add':
                this.generateThreeNumbersAddition();
                break;
            case 'four-numbers-add':
                this.generateFourNumbersAddition();
                break;
            case 'five-numbers-add':
                this.generateFiveNumbersAddition();
                break;
            case 'single-digit-sub':
                this.generateSingleDigitSubtraction();
                break;
            case 'two-digit-sub':
                this.generateTwoDigitSubtraction();
                break;
            case 'three-digit-sub':
                this.generateThreeDigitSubtraction();
                break;
            case 'four-digit-sub':
                this.generateFourDigitSubtraction();
                break;
            case 'mixed':
                this.generateMixedOperation();
                break;
            case 'word-problems-easy':
                this.generateEasyWordProblem();
                break;
            case 'shopping-problems':
                this.generateShoppingProblem();
                break;
            case 'time-problems':
                this.generateTimeProblem();
                break;
            case 'counting-problems':
                this.generateCountingProblem();
                break;
            case 'comparison-problems':
                this.generateComparisonProblem();
                break;
            case 'pattern-problems':
                this.generatePatternProblem();
                break;
        }
    }

    generateSingleDigitAddition() {
        const num1 = Math.floor(Math.random() * 9) + 1;
        const num2 = Math.floor(Math.random() * 9) + 1;
        this.currentProblem = `${num1} + ${num2}`;
        this.correctAnswer = num1 + num2;
        this.problemDisplay.textContent = `${num1} + ${num2} = ?`;
    }

    generateTwoDigitAddition() {
        const num1 = Math.floor(Math.random() * 90) + 10;
        const num2 = Math.floor(Math.random() * 90) + 10;
        this.currentProblem = `${num1} + ${num2}`;
        this.correctAnswer = num1 + num2;
        this.problemDisplay.textContent = `${num1} + ${num2} = ?`;
    }

    generateThreeDigitAddition() {
        const num1 = Math.floor(Math.random() * 900) + 100; // 100-999
        const num2 = Math.floor(Math.random() * 900) + 100; // 100-999
        this.currentProblem = `${num1} + ${num2}`;
        this.correctAnswer = num1 + num2;
        this.problemDisplay.textContent = `${num1} + ${num2} = ?`;
    }

    generateFourDigitAddition() {
        const num1 = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
        const num2 = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
        this.currentProblem = `${num1} + ${num2}`;
        this.correctAnswer = num1 + num2;
        this.problemDisplay.textContent = `${num1} + ${num2} = ?`;
    }

    generateThreeNumbersAddition() {
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;
        const num3 = Math.floor(Math.random() * 20) + 1;
        this.currentProblem = `${num1} + ${num2} + ${num3}`;
        this.correctAnswer = num1 + num2 + num3;
        this.problemDisplay.textContent = `${num1} + ${num2} + ${num3} = ?`;
    }

    generateFourNumbersAddition() {
        const numbers = [];
        for (let i = 0; i < 4; i++) {
            numbers.push(Math.floor(Math.random() * 15) + 1);
        }
        this.currentProblem = numbers.join(' + ');
        this.correctAnswer = numbers.reduce((sum, num) => sum + num, 0);
        this.problemDisplay.textContent = `${numbers.join(' + ')} = ?`;
    }

    generateFiveNumbersAddition() {
        const numbers = [];
        for (let i = 0; i < 5; i++) {
            numbers.push(Math.floor(Math.random() * 15) + 1);
        }
        this.currentProblem = numbers.join(' + ');
        this.correctAnswer = numbers.reduce((sum, num) => sum + num, 0);
        this.problemDisplay.textContent = `${numbers.join(' + ')} = ?`;
    }

    generateFourDigitAddition() {
        const num1 = Math.floor(Math.random() * 9000) + 1000;
        const num2 = Math.floor(Math.random() * 9000) + 1000;
        this.currentProblem = `${num1} + ${num2}`;
        this.correctAnswer = num1 + num2;
        this.problemDisplay.textContent = `${num1} + ${num2} = ?`;
    }

    generateSingleDigitSubtraction() {
        const num1 = Math.floor(Math.random() * 9) + 2; // 2-10
        const num2 = Math.floor(Math.random() * (num1 - 1)) + 1; // 1 to num1-1
        this.currentProblem = `${num1} - ${num2}`;
        this.correctAnswer = num1 - num2;
        this.problemDisplay.textContent = `${num1} - ${num2} = ?`;
    }

    generateTwoDigitSubtraction() {
        const num1 = Math.floor(Math.random() * 90) + 10; // 10-99
        const num2 = Math.floor(Math.random() * num1) + 1; // 1 to num1
        this.currentProblem = `${num1} - ${num2}`;
        this.correctAnswer = num1 - num2;
        this.problemDisplay.textContent = `${num1} - ${num2} = ?`;
    }

    generateThreeDigitSubtraction() {
        const num1 = Math.floor(Math.random() * 900) + 100; // 100-999
        const num2 = Math.floor(Math.random() * num1) + 1; // 1 to num1
        this.currentProblem = `${num1} - ${num2}`;
        this.correctAnswer = num1 - num2;
        this.problemDisplay.textContent = `${num1} - ${num2} = ?`;
    }

    generateFourDigitSubtraction() {
        const num1 = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
        const num2 = Math.floor(Math.random() * num1) + 1; // 1 to num1
        this.currentProblem = `${num1} - ${num2}`;
        this.correctAnswer = num1 - num2;
        this.problemDisplay.textContent = `${num1} - ${num2} = ?`;
    }

    generateMixedOperation() {
        const operations = ['add', 'subtract'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        
        if (operation === 'add') {
            this.generateSingleDigitAddition();
        } else {
            this.generateSingleDigitSubtraction();
        }
    }

    // Problem-Solving Exercise Methods
    generateEasyWordProblem() {
        // Random names
        const names = ['Alex', 'Emma', 'Maya', 'Tom', 'Sarah', 'Ben', 'Luna', 'Jack', 'Zoe', 'Sam', 'Lily', 'Max', 'Ava', 'Leo', 'Mia', 'Noah', 'Ella', 'Ryan', 'Grace', 'Owen'];
        
        // Problem scenarios with items and actions
        const scenarios = [
            {
                item: 'apples',
                emoji: '🍎',
                actions: ['gives', 'finds', 'buys', 'picks up']
            },
            {
                item: 'toy cars',
                emoji: '🚗',
                actions: ['buys', 'finds', 'gets as a gift', 'receives']
            },
            {
                item: 'marbles',
                emoji: '⚽',
                actions: ['finds', 'gets from a friend', 'buys', 'discovers']
            },
            {
                item: 'stickers',
                emoji: '⭐',
                actions: ['gets', 'finds', 'receives', 'collects']
            },
            {
                item: 'cookies',
                emoji: '🍪',
                actions: ['bakes', 'finds', 'gets', 'receives']
            },
            {
                item: 'seashells',
                emoji: '🐚',
                actions: ['finds', 'collects', 'discovers', 'picks up']
            },
            {
                item: 'books',
                emoji: '📚',
                actions: ['buys', 'gets', 'receives', 'finds']
            },
            {
                item: 'balloons',
                emoji: '🎈',
                actions: ['gets', 'finds', 'receives', 'buys']
            },
            {
                item: 'pencils',
                emoji: '✏️',
                actions: ['buys', 'gets', 'finds', 'receives']
            },
            {
                item: 'candies',
                emoji: '🍬',
                actions: ['gets', 'finds', 'buys', 'receives']
            }
        ];

        // Subtraction scenarios
        const subtractionScenarios = [
            { action: 'eats', items: ['cookies', 'apples', 'candies'] },
            { action: 'loses', items: ['marbles', 'toy cars', 'stickers', 'pencils'] },
            { action: 'gives away', items: ['stickers', 'books', 'toys', 'apples'] },
            { action: 'uses', items: ['pencils', 'stickers', 'sheets of paper'] },
            { action: 'breaks', items: ['toy cars', 'crayons', 'toys'] },
            { action: 'pops', items: ['balloons'] },
            { action: 'drops', items: ['marbles', 'balls', 'toys'] }
        ];

        // Choose operation type
        const operationType = Math.random() < 0.6 ? 'addition' : 'subtraction';
        
        const name1 = names[Math.floor(Math.random() * names.length)];
        let name2 = names[Math.floor(Math.random() * names.length)];
        // Ensure different names
        while (name2 === name1) {
            name2 = names[Math.floor(Math.random() * names.length)];
        }

        let text, answer;

        if (operationType === 'addition') {
            const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
            const action = scenario.actions[Math.floor(Math.random() * scenario.actions.length)];
            
            const initialAmount = Math.floor(Math.random() * 15) + 3; // 3-17
            const addedAmount = Math.floor(Math.random() * 10) + 1; // 1-10
            
            const problemTypes = [
                `${name1} has ${initialAmount} ${scenario.item} ${scenario.emoji}. ${name1}'s friend ${action} ${name1} ${addedAmount} more ${scenario.item}. How many ${scenario.item} does ${name1} have now?`,
                `${name1} collected ${initialAmount} ${scenario.item} ${scenario.emoji}. Later, ${name1} ${action} ${addedAmount} more ${scenario.item}. How many ${scenario.item} does ${name1} have in total?`,
                `There are ${initialAmount} ${scenario.item} ${scenario.emoji} on the table. ${name1} ${action} ${addedAmount} more ${scenario.item} and puts them on the table. How many ${scenario.item} are on the table now?`,
                `${name1} started with ${initialAmount} ${scenario.item} ${scenario.emoji}. ${name2} ${action} ${name1} ${addedAmount} more ${scenario.item}. How many ${scenario.item} does ${name1} have altogether?`
            ];
            
            text = problemTypes[Math.floor(Math.random() * problemTypes.length)];
            answer = initialAmount + addedAmount;
            
        } else {
            // Subtraction problems
            const subScenario = subtractionScenarios[Math.floor(Math.random() * subtractionScenarios.length)];
            const item = subScenario.items[Math.floor(Math.random() * subScenario.items.length)];
            const emoji = scenarios.find(s => s.item === item)?.emoji || '🔸';
            
            const initialAmount = Math.floor(Math.random() * 15) + 8; // 8-22 (ensure enough to subtract)
            const subtractedAmount = Math.floor(Math.random() * (initialAmount - 2)) + 1; // 1 to (initialAmount-2)
            
            const problemTypes = [
                `${name1} had ${initialAmount} ${item} ${emoji}. ${name1} ${subScenario.action} ${subtractedAmount} ${item}. How many ${item} does ${name1} have left?`,
                `There were ${initialAmount} ${item} ${emoji} in a container. ${name1} ${subScenario.action} ${subtractedAmount} ${item}. How many ${item} are left in the container?`,
                `${name1} started with ${initialAmount} ${item} ${emoji}. After ${name1} ${subScenario.action} ${subtractedAmount} ${item}, how many ${item} remain?`,
                `A box contained ${initialAmount} ${item} ${emoji}. ${name2} ${subScenario.action} ${subtractedAmount} ${item} from the box. How many ${item} are still in the box?`
            ];
            
            text = problemTypes[Math.floor(Math.random() * problemTypes.length)];
            answer = initialAmount - subtractedAmount;
        }

        this.currentProblem = text;
        this.correctAnswer = answer;
        this.problemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateShoppingProblem() {
        // Random names
        const names = ['Alex', 'Emma', 'Maya', 'Tom', 'Sarah', 'Ben', 'Luna', 'Jack', 'Zoe', 'Sam', 'Lily', 'Max', 'Ava', 'Leo', 'Mia', 'Noah', 'Ella', 'Ryan', 'Grace', 'Owen'];
        
        // Store items with price ranges and emojis
        const storeItems = [
            { item: 'apple', emoji: '🍎', minPrice: 1, maxPrice: 3 },
            { item: 'banana', emoji: '🍌', minPrice: 1, maxPrice: 2 },
            { item: 'orange', emoji: '🍊', minPrice: 1, maxPrice: 3 },
            { item: 'toy', emoji: '🧸', minPrice: 5, maxPrice: 15 },
            { item: 'book', emoji: '📚', minPrice: 3, maxPrice: 8 },
            { item: 'pencil', emoji: '✏️', minPrice: 1, maxPrice: 2 },
            { item: 'notebook', emoji: '📓', minPrice: 3, maxPrice: 7 },
            { item: 'candy bar', emoji: '🍫', minPrice: 1, maxPrice: 3 },
            { item: 'lollipop', emoji: '🍭', minPrice: 1, maxPrice: 2 },
            { item: 'cookie', emoji: '🍪', minPrice: 1, maxPrice: 4 },
            { item: 'muffin', emoji: '🧁', minPrice: 2, maxPrice: 5 },
            { item: 'donut', emoji: '🍩', minPrice: 2, maxPrice: 4 },
            { item: 'sticker pack', emoji: '⭐', minPrice: 2, maxPrice: 5 },
            { item: 'crayon box', emoji: '🖍️', minPrice: 3, maxPrice: 6 },
            { item: 'juice box', emoji: '🧃', minPrice: 1, maxPrice: 3 }
        ];

        // Store types with emojis
        const storeTypes = [
            { store: 'grocery store', emoji: '🏪' },
            { store: 'candy store', emoji: '🍬' },
            { store: 'toy store', emoji: '🧸' },
            { store: 'bookstore', emoji: '📚' },
            { store: 'school supply store', emoji: '📝' },
            { store: 'corner shop', emoji: '🏪' },
            { store: 'market', emoji: '🛒' }
        ];

        const name = names[Math.floor(Math.random() * names.length)];
        const storeType = storeTypes[Math.floor(Math.random() * storeTypes.length)];
        
        // Choose number of different items to buy (2-4 items)
        const numItems = Math.floor(Math.random() * 3) + 2; // 2-4 different items
        const selectedItems = [];
        const usedItems = new Set();
        
        // Select unique items
        for (let i = 0; i < numItems; i++) {
            let item;
            do {
                item = storeItems[Math.floor(Math.random() * storeItems.length)];
            } while (usedItems.has(item.item));
            
            usedItems.add(item.item);
            
            // Generate random price within item's range
            const price = Math.floor(Math.random() * (item.maxPrice - item.minPrice + 1)) + item.minPrice;
            // Generate random quantity (1-4)
            const quantity = Math.floor(Math.random() * 4) + 1;
            
            selectedItems.push({
                ...item,
                price: price,
                quantity: quantity,
                total: price * quantity
            });
        }

        // Calculate total cost
        const totalCost = selectedItems.reduce((sum, item) => sum + item.total, 0);

        // Create the problem text
        let scenarioText = selectedItems.map(item => {
            const quantityText = item.quantity === 1 ? `A ${item.item}` : `Each ${item.item}`;
            return `• ${quantityText} costs $${item.price} ${item.emoji}`;
        }).join('<br>');

        let purchaseText = selectedItems.map(item => {
            return `${item.quantity} ${item.item}${item.quantity > 1 ? 's' : ''}`;
        }).join(' and ');

        const problemVariations = [
            `🛒 At the ${storeType.store} ${storeType.emoji}:<br><div class='problem-scenario'>${scenarioText}<br>• ${name} buys ${purchaseText}</div><div class='problem-question'>How much money does ${name} spend in total?</div>`,
            `🛒 Shopping trip to the ${storeType.store} ${storeType.emoji}:<br><div class='problem-scenario'>${scenarioText}<br>• ${name} purchases ${purchaseText}</div><div class='problem-question'>What is the total cost?</div>`,
            `🛒 ${name} goes to the ${storeType.store} ${storeType.emoji}:<br><div class='problem-scenario'>${scenarioText}<br>• ${name} decides to buy ${purchaseText}</div><div class='problem-question'>How much does ${name} pay altogether?</div>`
        ];

        const text = problemVariations[Math.floor(Math.random() * problemVariations.length)];
        
        this.currentProblem = text;
        this.correctAnswer = totalCost;
        this.problemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateTimeProblem() {
        // Random names
        const names = ['Alex', 'Emma', 'Maya', 'Tom', 'Sarah', 'Ben', 'Luna', 'Jack', 'Zoe', 'Sam', 'Lily', 'Max', 'Ava', 'Leo', 'Mia', 'Noah', 'Ella', 'Ryan', 'Grace', 'Owen'];
        
        // Random activities with emojis
        const activities = [
            { activity: 'meet a friend', emoji: '👫' },
            { activity: 'go to the park', emoji: '🌳' },
            { activity: 'have lunch', emoji: '🍽️' },
            { activity: 'go to practice', emoji: '⚽' },
            { activity: 'visit grandma', emoji: '👵' },
            { activity: 'go shopping', emoji: '🛒' },
            { activity: 'have a playdate', emoji: '🎮' },
            { activity: 'go to the library', emoji: '📚' },
            { activity: 'attend a party', emoji: '🎉' },
            { activity: 'go swimming', emoji: '🏊' }
        ];

        // Random movies/shows/events
        const events = [
            { event: 'movie', emoji: '🎬' },
            { event: 'TV show', emoji: '📺' },
            { event: 'concert', emoji: '🎵' },
            { event: 'play', emoji: '🎭' },
            { event: 'game', emoji: '🎮' },
            { event: 'class', emoji: '📖' },
            { event: 'meeting', emoji: '👥' },
            { event: 'lesson', emoji: '🎓' }
        ];

        // Random special events
        const specialEvents = [
            { event: 'birthday party', emoji: '🎂' },
            { event: 'wedding', emoji: '💒' },
            { event: 'graduation', emoji: '🎓' },
            { event: 'family reunion', emoji: '👨‍👩‍👧‍👦' },
            { event: 'picnic', emoji: '🧺' },
            { event: 'sleepover', emoji: '🛏️' }
        ];

        // Choose random scenario type
        const scenarioTypes = ['meeting', 'duration', 'calendar', 'school_hours', 'weekly_schedule', 'clock_reading'];
        const scenarioType = scenarioTypes[Math.floor(Math.random() * scenarioTypes.length)];
        
        let text, answer, name, selectedActivity, selectedEvent, selectedSpecialEvent;
        
        switch (scenarioType) {
            case 'meeting':
                name = names[Math.floor(Math.random() * names.length)];
                selectedActivity = activities[Math.floor(Math.random() * activities.length)];
                const currentHour = Math.floor(Math.random() * 12) + 1; // 1-12
                const hoursLater = Math.floor(Math.random() * 6) + 1; // 1-6 hours
                const meetingTime = currentHour + hoursLater;
                const displayTime = meetingTime > 12 ? meetingTime : meetingTime;
                
                text = `🕐 Time question:<br><div class='problem-scenario'>It's ${currentHour} o'clock now. ${name} will ${selectedActivity.activity} ${selectedActivity.emoji} in ${hoursLater} hours.</div><div class='problem-question'>What time will ${name} ${selectedActivity.activity}? (Answer in 24-hour format)</div>`;
                answer = currentHour + hoursLater;
                break;
                
            case 'duration':
                selectedEvent = events[Math.floor(Math.random() * events.length)];
                const startTime = Math.floor(Math.random() * 8) + 14; // 2 PM to 9 PM (14-21)
                const duration = Math.floor(Math.random() * 4) + 1; // 1-4 hours
                const endTime = startTime + duration;
                
                text = `🕐 Duration calculation:<br><div class='problem-scenario'>The ${selectedEvent.event} ${selectedEvent.emoji} starts at ${startTime > 12 ? startTime - 12 : startTime} ${startTime > 12 ? 'PM' : 'AM'} and lasts for ${duration} hour${duration > 1 ? 's' : ''}.</div><div class='problem-question'>What time does the ${selectedEvent.event} end? (Answer in 24-hour format)</div>`;
                answer = endTime;
                break;
                
            case 'calendar':
                const todayDate = Math.floor(Math.random() * 20) + 5; // 5th to 24th
                const daysUntilEvent = Math.floor(Math.random() * 10) + 3; // 3-12 days
                const eventDate = todayDate + daysUntilEvent;
                selectedSpecialEvent = specialEvents[Math.floor(Math.random() * specialEvents.length)];
                
                text = `📅 Calendar math:<br><div class='problem-scenario'>Today is the ${todayDate}${getOrdinalSuffix(todayDate)} of the month. The ${selectedSpecialEvent.event} ${selectedSpecialEvent.emoji} is in ${daysUntilEvent} days.</div><div class='problem-question'>What date is the ${selectedSpecialEvent.event}?</div>`;
                answer = eventDate;
                break;
                
            case 'school_hours':
                const schoolActivities = [
                    { activity: 'school day', start: 8, end: 15, emoji: '🏫' },
                    { activity: 'art class', start: 10, end: 12, emoji: '🎨' },
                    { activity: 'lunch break', start: 12, end: 13, emoji: '🍕' },
                    { activity: 'sports practice', start: 15, end: 17, emoji: '⚽' },
                    { activity: 'study hall', start: 14, end: 16, emoji: '📚' },
                    { activity: 'music lesson', start: 9, end: 11, emoji: '🎵' }
                ];
                const schoolActivity = schoolActivities[Math.floor(Math.random() * schoolActivities.length)];
                const activityDuration = schoolActivity.end - schoolActivity.start;
                
                text = `🕐 Duration problem:<br><div class='problem-scenario'>${schoolActivity.activity.charAt(0).toUpperCase() + schoolActivity.activity.slice(1)} ${schoolActivity.emoji} starts at ${schoolActivity.start} ${schoolActivity.start < 12 ? 'AM' : 'PM'} and ends at ${schoolActivity.end} ${schoolActivity.end < 12 ? 'AM' : 'PM'}.</div><div class='problem-question'>How many hours long is the ${schoolActivity.activity}?</div>`;
                answer = activityDuration;
                break;
                
            case 'weekly_schedule':
                const weeklyActivities = [
                    { days: 5, total: 7, activity: 'go to school', emoji: '🎒' },
                    { days: 3, total: 7, activity: 'play soccer', emoji: '⚽' },
                    { days: 2, total: 7, activity: 'have piano lessons', emoji: '🎹' },
                    { days: 4, total: 7, activity: 'do homework', emoji: '📝' },
                    { days: 6, total: 7, activity: 'eat breakfast', emoji: '🥞' },
                    { days: 1, total: 7, activity: 'visit the zoo', emoji: '🦁' }
                ];
                const weeklyActivity = weeklyActivities[Math.floor(Math.random() * weeklyActivities.length)];
                const freeDays = weeklyActivity.total - weeklyActivity.days;
                name = names[Math.floor(Math.random() * names.length)];
                
                text = `📅 Weekly schedule:<br><div class='problem-scenario'>There are ${weeklyActivity.total} days in a week. ${name} ${weeklyActivity.activity} ${weeklyActivity.days} days a week ${weeklyActivity.emoji}.</div><div class='problem-question'>How many days does ${name} NOT ${weeklyActivity.activity} each week?</div>`;
                answer = freeDays;
                break;
                
            case 'clock_reading':
                const clockHours = [
                    { time: 'quarter past', minutes: 15, display: ':15' },
                    { time: 'half past', minutes: 30, display: ':30' },
                    { time: 'quarter to', minutes: 45, display: ':45' },
                    { time: 'ten past', minutes: 10, display: ':10' },
                    { time: 'twenty past', minutes: 20, display: ':20' }
                ];
                const clockTime = clockHours[Math.floor(Math.random() * clockHours.length)];
                const hourTime = Math.floor(Math.random() * 11) + 1; // 1-11
                const totalMinutes = hourTime * 60 + clockTime.minutes;
                
                if (clockTime.time === 'quarter to') {
                    text = `🕐 Clock reading:<br><div class='problem-scenario'>The clock shows quarter to ${hourTime + 1} 🕐.</div><div class='problem-question'>How many minutes past ${hourTime} is this? (Hint: quarter to means 15 minutes before the next hour)</div>`;
                    answer = 45;
                } else {
                    text = `🕐 Clock reading:<br><div class='problem-scenario'>The clock shows ${clockTime.time} ${hourTime} 🕐.</div><div class='problem-question'>How many minutes past ${hourTime} is this?</div>`;
                    answer = clockTime.minutes;
                }
                break;
        }
        
        // Helper function for ordinal suffixes
        function getOrdinalSuffix(number) {
            const lastDigit = number % 10;
            const lastTwoDigits = number % 100;
            
            if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
                return 'th';
            }
            
            switch (lastDigit) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        }
        
        this.currentProblem = text;
        this.correctAnswer = answer;
        this.problemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateCountingProblem() {
        // Random names
        const names = ['Alex', 'Emma', 'Maya', 'Tom', 'Sarah', 'Ben', 'Luna', 'Jack', 'Zoe', 'Sam', 'Lily', 'Max', 'Ava', 'Leo', 'Mia', 'Noah', 'Ella', 'Ryan', 'Grace', 'Owen'];
        
        // Random items with their containers and emojis
        const items = [
            { item: 'balls', container: 'boxes', emoji: '⚽' },
            { item: 'books', container: 'shelves', emoji: '�' },
            { item: 'flowers', container: 'rows', emoji: '🌸' },
            { item: 'stickers', container: 'sheets', emoji: '⭐' },
            { item: 'cookies', container: 'jars', emoji: '🍪' },
            { item: 'toys', container: 'boxes', emoji: '🧸' },
            { item: 'pencils', container: 'packs', emoji: '✏️' },
            { item: 'marbles', container: 'bags', emoji: '🔮' },
            { item: 'candies', container: 'bowls', emoji: '🍬' },
            { item: 'stamps', container: 'pages', emoji: '📮' },
            { item: 'coins', container: 'piggy banks', emoji: '🪙' },
            { item: 'crayons', container: 'boxes', emoji: '🖍️' },
            { item: 'stickers', container: 'albums', emoji: '✨' },
            { item: 'cards', container: 'decks', emoji: '🃏' },
            { item: 'shells', container: 'buckets', emoji: '🐚' }
        ];
        
        // Random animals with their homes
        const animals = [
            { animal: 'monkeys', home: 'cages', emoji: '🐒' },
            { animal: 'birds', home: 'nests', emoji: '🐦' },
            { animal: 'fish', home: 'tanks', emoji: '🐠' },
            { animal: 'rabbits', home: 'hutches', emoji: '🐰' },
            { animal: 'cats', home: 'houses', emoji: '🐱' },
            { animal: 'dogs', home: 'kennels', emoji: '🐕' },
            { animal: 'hamsters', home: 'cages', emoji: '🐹' },
            { animal: 'turtles', home: 'tanks', emoji: '🐢' }
        ];

        // Generate random numbers (keeping them reasonable for beginners)
        const containers = Math.floor(Math.random() * 6) + 2; // 2-7 containers
        const itemsPerContainer = Math.floor(Math.random() * 6) + 2; // 2-7 items per container
        const totalItems = containers * itemsPerContainer;

        // Choose random scenario type
        const scenarioTypes = ['items', 'animals', 'garden', 'classroom', 'store'];
        const scenarioType = scenarioTypes[Math.floor(Math.random() * scenarioTypes.length)];
        
        let text, name, selectedItem;
        
        switch (scenarioType) {
            case 'items':
                selectedItem = items[Math.floor(Math.random() * items.length)];
                name = names[Math.floor(Math.random() * names.length)];
                text = `🔢 Counting groups:<br><div class='problem-scenario'>${name} has ${containers} ${selectedItem.container}. Each ${selectedItem.container.slice(0, -1)} has ${itemsPerContainer} ${selectedItem.item} ${selectedItem.emoji}.</div><div class='problem-question'>How many ${selectedItem.item} does ${name} have in total?</div>`;
                break;
                
            case 'animals':
                const selectedAnimal = animals[Math.floor(Math.random() * animals.length)];
                text = `🔢 Animal counting:<br><div class='problem-scenario'>At the zoo, there are ${containers} ${selectedAnimal.home}. Each ${selectedAnimal.home.slice(0, -1)} has ${itemsPerContainer} ${selectedAnimal.animal} ${selectedAnimal.emoji}.</div><div class='problem-question'>How many ${selectedAnimal.animal} are there altogether?</div>`;
                break;
                
            case 'garden':
                const gardenItems = [
                    { item: 'flowers', emoji: '🌻' },
                    { item: 'vegetables', emoji: '🥕' },
                    { item: 'trees', emoji: '🌳' },
                    { item: 'bushes', emoji: '🌿' }
                ];
                const gardenItem = gardenItems[Math.floor(Math.random() * gardenItems.length)];
                name = names[Math.floor(Math.random() * names.length)];
                text = `🔢 Garden counting:<br><div class='problem-scenario'>${name} planted ${containers} rows of ${gardenItem.item}. Each row has ${itemsPerContainer} ${gardenItem.item} ${gardenItem.emoji}.</div><div class='problem-question'>How many ${gardenItem.item} did ${name} plant?</div>`;
                break;
                
            case 'classroom':
                const schoolItems = [
                    { item: 'desks', emoji: '🪑' },
                    { item: 'computers', emoji: '💻' },
                    { item: 'whiteboards', emoji: '📋' },
                    { item: 'lockers', emoji: '🗄️' }
                ];
                const schoolItem = schoolItems[Math.floor(Math.random() * schoolItems.length)];
                text = `🔢 School counting:<br><div class='problem-scenario'>The school has ${containers} classrooms. Each classroom has ${itemsPerContainer} ${schoolItem.item} ${schoolItem.emoji}.</div><div class='problem-question'>How many ${schoolItem.item} are there in the school?</div>`;
                break;
                
            case 'store':
                const storeItems = [
                    { item: 'apples', emoji: '🍎' },
                    { item: 'oranges', emoji: '🍊' },
                    { item: 'bananas', emoji: '🍌' },
                    { item: 'donuts', emoji: '🍩' },
                    { item: 'muffins', emoji: '🧁' }
                ];
                const storeItem = storeItems[Math.floor(Math.random() * storeItems.length)];
                text = `🔢 Store counting:<br><div class='problem-scenario'>The store has ${containers} baskets. Each basket contains ${itemsPerContainer} ${storeItem.item} ${storeItem.emoji}.</div><div class='problem-question'>How many ${storeItem.item} are there in total?</div>`;
                break;
        }
        
        this.currentProblem = text;
        this.correctAnswer = totalItems;
        this.problemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateComparisonProblem() {
        const num1 = Math.floor(Math.random() * 20) + 5;
        const num2 = Math.floor(Math.random() * 20) + 5;
        
        const problems = [
            {
                text: `⚖️ Number comparison:<br><div class='problem-scenario'>Alex has ${num1} stickers.<br>Ben has ${num2} stickers.</div><div class='problem-question'>Who has more stickers? If Alex, answer 1. If Ben, answer 2. If same, answer 0.</div>`,
                answer: num1 > num2 ? 1 : (num2 > num1 ? 2 : 0)
            },
            {
                text: `⚖️ Comparing amounts:<br><div class='problem-scenario'>Group A has ${num1} students.<br>Group B has ${num2} students.</div><div class='problem-question'>How many more students does the larger group have?</div>`,
                answer: Math.abs(num1 - num2)
            },
            {
                text: `⚖️ Finding difference:<br><div class='problem-scenario'>Sara scored ${num1} points.<br>Mike scored ${num2} points.</div><div class='problem-question'>What is the difference between their scores?</div>`,
                answer: Math.abs(num1 - num2)
            }
        ];
        
        const problem = problems[Math.floor(Math.random() * problems.length)];
        this.currentProblem = problem.text;
        this.correctAnswer = problem.answer;
        this.problemDisplay.innerHTML = `<div class="problem-display word-problem">${problem.text}</div>`;
    }

    generatePatternProblem() {
        const patternTypes = ['sequence', 'repeat', 'growing'];
        const patternType = patternTypes[Math.floor(Math.random() * patternTypes.length)];
        
        switch (patternType) {
            case 'sequence':
                const start = Math.floor(Math.random() * 10) + 1;
                const step = Math.floor(Math.random() * 3) + 1;
                const sequence = [start, start + step, start + 2*step, start + 3*step, '?'];
                this.correctAnswer = start + 4*step;
                this.currentProblem = `Pattern sequence: ${sequence.join(', ')}`;
                this.problemDisplay.innerHTML = `<div class="problem-display word-problem">🔍 Pattern problem:<br><div class='problem-scenario'>Look at this number pattern: <strong>${sequence.join(', ')}</strong></div><div class='problem-question'>What number should replace the ?</div></div>`;
                break;
                
            case 'repeat':
                const pattern = [1, 2, 3];
                const extended = [...pattern, ...pattern, ...pattern.slice(0, 2)];
                extended.push('?');
                this.correctAnswer = pattern[2];
                this.currentProblem = `Repeating pattern: ${extended.join(', ')}`;
                this.problemDisplay.innerHTML = `<div class="problem-display word-problem">🔍 Repeating pattern:<br><div class='problem-scenario'>The pattern 1, 2, 3 repeats: <strong>${extended.join(', ')}</strong></div><div class='problem-question'>What number should replace the ?</div></div>`;
                break;
                
            case 'growing':
                const growthPattern = [2, 4, 6, 8, '?'];
                this.correctAnswer = 10;
                this.currentProblem = `Growing pattern: ${growthPattern.join(', ')}`;
                this.problemDisplay.innerHTML = `<div class="problem-display word-problem">🔍 Growing pattern:<br><div class='problem-scenario'>Even numbers pattern: <strong>${growthPattern.join(', ')}</strong></div><div class='problem-question'>What number should replace the ?</div></div>`;
                break;
        }
    }

    checkAnswer() {
        const userAnswer = parseInt(this.exerciseAnswer.value);
        
        if (isNaN(userAnswer)) {
            this.showFeedback('Please enter a valid number!', false);
            return;
        }

        this.score.total++;
        
        if (userAnswer === this.correctAnswer) {
            this.score.correct++;
            this.streak++;
            this.showFeedback(`🎉 Correct! ${this.currentProblem} = ${this.correctAnswer}`, true);
        } else {
            this.streak = 0;
            this.showFeedback(`❌ Not quite right. ${this.currentProblem} = ${this.correctAnswer}. You answered ${userAnswer}.`, false);
        }
        
        this.updateScoreDisplay();
    }

    // Intermediate Exercise System
    startIntermediateExerciseType(exerciseType) {
        this.currentIntermediateExerciseType = exerciseType;
        this.intermediateScore = { correct: 0, total: 0 };
        this.intermediateStreak = 0;
        this.updateIntermediateScoreDisplay();
        
        document.querySelector('.intermediate-exercise-type-selection')?.classList.add('hidden');
        this.intermediateExerciseContent?.classList.remove('hidden');
        
        this.setIntermediateExerciseTitle(exerciseType);
        this.generateNewIntermediateProblem();
    }

    setIntermediateExerciseTitle(exerciseType) {
        const titles = {
            'single-digit-mult': '✖️ Single Digit Multiplication',
            'two-digit-mult': '✖️ Two Digit Multiplication',
            'three-digit-mult': '✖️ Three Digit Multiplication',
            'four-digit-mult': '✖️ Four Digit Multiplication',
            'single-digit-div': '➗ Single Digit Division',
            'two-digit-div': '➗ Two Digit Division',
            'three-digit-div': '➗ Three Digit Division',
            'four-digit-div': '➗ Four Digit Division',
            'three-numbers-mult': '✖️ Three Numbers Multiplication',
            'four-numbers-mult': '✖️ Four Numbers Multiplication',
            'basic-percentage': '📊 Basic Percentage',
            'advanced-percentage': '📊 Advanced Percentage',
            'mixed-basic': '🔀 Mixed Basic Operations',
            'mixed-all': '🔀 Mixed All Operations',
            // Problem Solving Types
            'business-problems': '💼 Business & Finance',
            'measurement-problems': '📏 Measurement & Units',
            'ratio-problems': '⚖️ Ratios & Proportions',
            'percentage-word-problems': '📊 Percentage Word Problems',
            'area-perimeter-problems': '📐 Area & Perimeter',
            'multi-step-problems': '🔢 Multi-Step Problems'
        };
        
        if (this.intermediateExerciseTitle) {
            this.intermediateExerciseTitle.textContent = titles[exerciseType] || 'Exercise';
        }
    }

    generateNewIntermediateProblem() {
        this.intermediateExerciseFeedback?.classList.add('hidden');
        this.intermediateExerciseAnswer.value = '';
        this.intermediateExerciseAnswer.focus();
        
        switch (this.currentIntermediateExerciseType) {
            case 'single-digit-mult':
                this.generateSingleDigitMultiplication();
                break;
            case 'two-digit-mult':
                this.generateTwoDigitMultiplication();
                break;
            case 'three-digit-mult':
                this.generateThreeDigitMultiplication();
                break;
            case 'four-digit-mult':
                this.generateFourDigitMultiplication();
                break;
            case 'single-digit-div':
                this.generateSingleDigitDivision();
                break;
            case 'two-digit-div':
                this.generateTwoDigitDivision();
                break;
            case 'three-digit-div':
                this.generateThreeDigitDivision();
                break;
            case 'four-digit-div':
                this.generateFourDigitDivision();
                break;
            case 'three-numbers-mult':
                this.generateThreeNumbersMultiplication();
                break;
            case 'four-numbers-mult':
                this.generateFourNumbersMultiplication();
                break;
            case 'basic-percentage':
                this.generateBasicPercentage();
                break;
            case 'advanced-percentage':
                this.generateAdvancedPercentage();
                break;
            case 'mixed-basic':
                this.generateMixedBasicOperations();
                break;
            case 'mixed-all':
                this.generateMixedAllOperations();
                break;
            // Problem Solving Cases
            case 'business-problems':
                this.generateBusinessProblem();
                break;
            case 'measurement-problems':
                this.generateMeasurementProblem();
                break;
            case 'ratio-problems':
                this.generateRatioProblem();
                break;
            case 'percentage-word-problems':
                this.generatePercentageWordProblem();
                break;
            case 'area-perimeter-problems':
                this.generateAreaPerimeterProblem();
                break;
            case 'multi-step-problems':
                this.generateMultiStepProblem();
                break;
        }
    }

    generateSingleDigitMultiplication() {
        const num1 = Math.floor(Math.random() * 9) + 1;
        const num2 = Math.floor(Math.random() * 9) + 1;
        this.currentIntermediateProblem = `${num1} × ${num2}`;
        this.correctIntermediateAnswer = num1 * num2;
        this.intermediateProblemDisplay.textContent = `${num1} × ${num2} = ?`;
    }

    generateTwoDigitMultiplication() {
        const num1 = Math.floor(Math.random() * 90) + 10;
        const num2 = Math.floor(Math.random() * 9) + 1; // Single digit for simplicity
        this.currentIntermediateProblem = `${num1} × ${num2}`;
        this.correctIntermediateAnswer = num1 * num2;
        this.intermediateProblemDisplay.textContent = `${num1} × ${num2} = ?`;
    }

    generateSingleDigitDivision() {
        // Generate division that results in whole numbers
        const num2 = Math.floor(Math.random() * 9) + 1;
        const quotient = Math.floor(Math.random() * 9) + 1;
        const num1 = num2 * quotient;
        this.currentIntermediateProblem = `${num1} ÷ ${num2}`;
        this.correctIntermediateAnswer = quotient;
        this.intermediateProblemDisplay.textContent = `${num1} ÷ ${num2} = ?`;
    }

    generateTwoDigitDivision() {
        // Generate division that results in whole numbers
        const num2 = Math.floor(Math.random() * 9) + 2;
        const quotient = Math.floor(Math.random() * 20) + 5;
        const num1 = num2 * quotient;
        this.currentIntermediateProblem = `${num1} ÷ ${num2}`;
        this.correctIntermediateAnswer = quotient;
        this.intermediateProblemDisplay.textContent = `${num1} ÷ ${num2} = ?`;
    }

    generateBasicPercentage() {
        const percentages = [10, 20, 25, 50, 75];
        const percentage = percentages[Math.floor(Math.random() * percentages.length)];
        const number = (Math.floor(Math.random() * 10) + 1) * 10; // 10, 20, 30, etc.
        this.currentIntermediateProblem = `${percentage}% of ${number}`;
        this.correctIntermediateAnswer = (percentage / 100) * number;
        this.intermediateProblemDisplay.textContent = `${percentage}% of ${number} = ?`;
    }

    generateAdvancedPercentage() {
        const percentage = Math.floor(Math.random() * 95) + 5; // 5-99%
        const number = Math.floor(Math.random() * 200) + 50; // 50-249
        this.currentIntermediateProblem = `${percentage}% of ${number}`;
        this.correctIntermediateAnswer = Math.round((percentage / 100) * number * 100) / 100; // Round to 2 decimal places
        this.intermediateProblemDisplay.textContent = `${percentage}% of ${number} = ?`;
    }

    generateThreeDigitMultiplication() {
        const num1 = Math.floor(Math.random() * 900) + 100; // 100-999
        const num2 = Math.floor(Math.random() * 9) + 1; // 1-9
        this.currentIntermediateProblem = `${num1} × ${num2}`;
        this.correctIntermediateAnswer = num1 * num2;
        this.intermediateProblemDisplay.textContent = `${num1} × ${num2} = ?`;
    }

    generateFourDigitMultiplication() {
        const num1 = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
        const num2 = Math.floor(Math.random() * 9) + 1; // 1-9
        this.currentIntermediateProblem = `${num1} × ${num2}`;
        this.correctIntermediateAnswer = num1 * num2;
        this.intermediateProblemDisplay.textContent = `${num1} × ${num2} = ?`;
    }

    generateThreeDigitDivision() {
        const num2 = Math.floor(Math.random() * 9) + 2; // 2-10
        const quotient = Math.floor(Math.random() * 900) + 100; // 100-999
        const num1 = num2 * quotient;
        this.currentIntermediateProblem = `${num1} ÷ ${num2}`;
        this.correctIntermediateAnswer = quotient;
        this.intermediateProblemDisplay.textContent = `${num1} ÷ ${num2} = ?`;
    }

    generateFourDigitDivision() {
        const num2 = Math.floor(Math.random() * 9) + 2; // 2-10
        const quotient = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
        const num1 = num2 * quotient;
        this.currentIntermediateProblem = `${num1} ÷ ${num2}`;
        this.correctIntermediateAnswer = quotient;
        this.intermediateProblemDisplay.textContent = `${num1} ÷ ${num2} = ?`;
    }

    generateThreeNumbersMultiplication() {
        const num1 = Math.floor(Math.random() * 9) + 1; // 1-9
        const num2 = Math.floor(Math.random() * 9) + 1; // 1-9
        const num3 = Math.floor(Math.random() * 9) + 1; // 1-9
        this.currentIntermediateProblem = `${num1} × ${num2} × ${num3}`;
        this.correctIntermediateAnswer = num1 * num2 * num3;
        this.intermediateProblemDisplay.textContent = `${num1} × ${num2} × ${num3} = ?`;
    }

    generateFourNumbersMultiplication() {
        const num1 = Math.floor(Math.random() * 5) + 1; // 1-5 (keep smaller for manageable results)
        const num2 = Math.floor(Math.random() * 5) + 1; // 1-5
        const num3 = Math.floor(Math.random() * 5) + 1; // 1-5
        const num4 = Math.floor(Math.random() * 5) + 1; // 1-5
        this.currentIntermediateProblem = `${num1} × ${num2} × ${num3} × ${num4}`;
        this.correctIntermediateAnswer = num1 * num2 * num3 * num4;
        this.intermediateProblemDisplay.textContent = `${num1} × ${num2} × ${num3} × ${num4} = ?`;
    }

    generateMixedBasicOperations() {
        const operations = ['add', 'subtract', 'multiply', 'divide'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        
        switch (operation) {
            case 'add':
                this.generateTwoDigitAddition();
                break;
            case 'subtract':
                this.generateTwoDigitSubtraction();
                break;
            case 'multiply':
                this.generateSingleDigitMultiplication();
                break;
            case 'divide':
                this.generateSingleDigitDivision();
                break;
        }
    }

    generateMixedAllOperations() {
        const operations = ['add', 'subtract', 'multiply', 'divide', 'percentage'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        
        switch (operation) {
            case 'add':
                this.generateTwoDigitAddition();
                break;
            case 'subtract':
                this.generateTwoDigitSubtraction();
                break;
            case 'multiply':
                this.generateSingleDigitMultiplication();
                break;
            case 'divide':
                this.generateSingleDigitDivision();
                break;
            case 'percentage':
                this.generateBasicPercentage();
                break;
        }
    }

    // Intermediate Problem-Solving Methods
    generateBusinessProblem() {
        // Random names and businesses
        const names = ['Alex', 'Emma', 'Maya', 'Jordan', 'Casey', 'Taylor', 'Riley', 'Morgan', 'Avery', 'Quinn', 'Sage', 'Dakota', 'Rowan', 'River', 'Phoenix'];
        const businesses = [
            { name: 'coffee shop', emoji: '☕', items: ['lattes', 'cappuccinos', 'pastries', 'sandwiches', 'muffins'] },
            { name: 'restaurant', emoji: '🍽️', items: ['meals', 'appetizers', 'desserts', 'drinks', 'specials'] },
            { name: 'bookstore', emoji: '📚', items: ['books', 'magazines', 'notebooks', 'pens', 'calendars'] },
            { name: 'bakery', emoji: '🍰', items: ['cakes', 'cookies', 'bread loaves', 'cupcakes', 'pies'] },
            { name: 'flower shop', emoji: '🌸', items: ['bouquets', 'roses', 'tulips', 'arrangements', 'plants'] },
            { name: 'tech store', emoji: '💻', items: ['laptops', 'phones', 'tablets', 'accessories', 'chargers'] },
            { name: 'clothing store', emoji: '👕', items: ['shirts', 'pants', 'dresses', 'shoes', 'jackets'] },
            { name: 'grocery store', emoji: '🛒', items: ['apples', 'bananas', 'milk cartons', 'bread loaves', 'eggs'] }
        ];

        const scenarioTypes = ['profit', 'discount', 'bulk_pricing', 'revenue', 'change_calculation', 'cost_per_unit'];
        const scenarioType = scenarioTypes[Math.floor(Math.random() * scenarioTypes.length)];
        
        const name = names[Math.floor(Math.random() * names.length)];
        const business = businesses[Math.floor(Math.random() * businesses.length)];
        const item = business.items[Math.floor(Math.random() * business.items.length)];
        
        let text, answer;

        switch (scenarioType) {
            case 'profit':
                const buyPrice = Math.floor(Math.random() * 25) + 5; // $5-$30
                const sellPrice = buyPrice + Math.floor(Math.random() * 20) + 5; // $10-$50
                const quantity = Math.floor(Math.random() * 15) + 5; // 5-20 items
                const totalCost = buyPrice * quantity;
                const totalRevenue = sellPrice * quantity;
                const profit = totalRevenue - totalCost;
                
                text = `${name} owns a ${business.name} ${business.emoji}. ${name} buys ${quantity} ${item} for $${buyPrice} each and sells them for $${sellPrice} each. What is the total profit?`;
                answer = profit;
                break;

            case 'discount':
                const originalPrice = Math.floor(Math.random() * 80) + 20; // $20-$100
                const discountPercent = [10, 15, 20, 25, 30][Math.floor(Math.random() * 5)];
                const discountAmount = (originalPrice * discountPercent) / 100;
                const finalPrice = originalPrice - discountAmount;
                
                text = `At ${name}'s ${business.name} ${business.emoji}, ${item} originally cost $${originalPrice}. During a sale, ${name} offers a ${discountPercent}% discount. What is the sale price?`;
                answer = Math.round(finalPrice * 100) / 100; // Round to 2 decimal places
                break;

            case 'bulk_pricing':
                const unitPrice = Math.floor(Math.random() * 8) + 2; // $2-$10
                const bulkQuantity = Math.floor(Math.random() * 25) + 15; // 15-40 items
                const totalCost2 = unitPrice * bulkQuantity;
                
                text = `${name} runs a ${business.name} ${business.emoji}. A customer wants to buy ${bulkQuantity} ${item} at $${unitPrice} each. What is the total cost?`;
                answer = totalCost2;
                break;

            case 'revenue':
                const pricePerItem = Math.floor(Math.random() * 12) + 3; // $3-$15
                const itemsSold = Math.floor(Math.random() * 40) + 20; // 20-60 items
                const dailyRevenue = pricePerItem * itemsSold;
                
                text = `${name}'s ${business.name} ${business.emoji} sells ${item} for $${pricePerItem} each. Yesterday, they sold ${itemsSold} ${item}. What was the total revenue for the day?`;
                answer = dailyRevenue;
                break;

            case 'change_calculation':
                const itemCost = Math.floor(Math.random() * 45) + 15; // $15-$60
                const moneyGiven = itemCost + Math.floor(Math.random() * 30) + 5; // $5-$35 more than cost
                const change = moneyGiven - itemCost;
                
                text = `At ${name}'s ${business.name} ${business.emoji}, a customer buys ${item} that costs $${itemCost}. The customer pays with $${moneyGiven}. How much change should ${name} give back?`;
                answer = change;
                break;

            case 'cost_per_unit':
                const totalPackageCost = Math.floor(Math.random() * 60) + 20; // $20-$80
                const unitsInPackage = Math.floor(Math.random() * 15) + 5; // 5-20 units
                const costPerUnit = totalPackageCost / unitsInPackage;
                
                text = `${name} buys a package of ${unitsInPackage} ${item} for their ${business.name} ${business.emoji}. The package costs $${totalPackageCost}. What is the cost per ${item.slice(0, -1)}? (Round to nearest cent)`;
                answer = Math.round(costPerUnit * 100) / 100;
                break;
        }

        this.currentIntermediateProblem = text;
        this.correctIntermediateAnswer = answer;
        this.intermediateProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateMeasurementProblem() {
        const names = ['Alex', 'Sam', 'Jordan', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Avery', 'Taylor', 'Dakota'];
        const measurementTypes = ['length', 'weight', 'volume', 'time', 'temperature'];
        const measurementType = measurementTypes[Math.floor(Math.random() * measurementTypes.length)];
        
        let text, answer;

        switch (measurementType) {
            case 'length':
                const conversionTypes = ['feet_to_inches', 'yards_to_feet', 'meters_to_centimeters'];
                const convType = conversionTypes[Math.floor(Math.random() * conversionTypes.length)];
                const name = names[Math.floor(Math.random() * names.length)];
                
                if (convType === 'feet_to_inches') {
                    const feet = Math.floor(Math.random() * 12) + 3; // 3-15 feet
                    text = `${name} measures a room that is ${feet} feet long. How many inches is this? (1 foot = 12 inches)`;
                    answer = feet * 12;
                } else if (convType === 'yards_to_feet') {
                    const yards = Math.floor(Math.random() * 8) + 2; // 2-10 yards
                    text = `${name} buys ${yards} yards of fabric. How many feet of fabric is this? (1 yard = 3 feet)`;
                    answer = yards * 3;
                } else {
                    const meters = Math.floor(Math.random() * 8) + 2; // 2-10 meters
                    text = `${name} runs ${meters} meters. How many centimeters is this? (1 meter = 100 centimeters)`;
                    answer = meters * 100;
                }
                break;

            case 'weight':
                const weightConversions = ['pounds_to_ounces', 'kilograms_to_grams'];
                const weightConv = weightConversions[Math.floor(Math.random() * weightConversions.length)];
                const name2 = names[Math.floor(Math.random() * names.length)];
                
                if (weightConv === 'pounds_to_ounces') {
                    const pounds = Math.floor(Math.random() * 8) + 2; // 2-10 pounds
                    text = `${name2} weighs ${pounds} pounds of apples. How many ounces is this? (1 pound = 16 ounces)`;
                    answer = pounds * 16;
                } else {
                    const kilograms = Math.floor(Math.random() * 6) + 2; // 2-8 kg
                    text = `${name2} has a ${kilograms} kilogram bag of flour. How many grams is this? (1 kilogram = 1000 grams)`;
                    answer = kilograms * 1000;
                }
                break;

            case 'volume':
                const volumeConversions = ['gallons_to_quarts', 'liters_to_milliliters'];
                const volConv = volumeConversions[Math.floor(Math.random() * volumeConversions.length)];
                const name3 = names[Math.floor(Math.random() * names.length)];
                
                if (volConv === 'gallons_to_quarts') {
                    const gallons = Math.floor(Math.random() * 6) + 2; // 2-8 gallons
                    text = `${name3} has ${gallons} gallons of water. How many quarts is this? (1 gallon = 4 quarts)`;
                    answer = gallons * 4;
                } else {
                    const liters = Math.floor(Math.random() * 8) + 2; // 2-10 liters
                    text = `${name3} drinks ${liters} liters of water daily. How many milliliters is this? (1 liter = 1000 milliliters)`;
                    answer = liters * 1000;
                }
                break;

            case 'time':
                const timeConversions = ['hours_to_minutes', 'days_to_hours', 'weeks_to_days'];
                const timeConv = timeConversions[Math.floor(Math.random() * timeConversions.length)];
                const name4 = names[Math.floor(Math.random() * names.length)];
                
                if (timeConv === 'hours_to_minutes') {
                    const hours = Math.floor(Math.random() * 6) + 2; // 2-8 hours
                    text = `${name4} studies for ${hours} hours. How many minutes is this? (1 hour = 60 minutes)`;
                    answer = hours * 60;
                } else if (timeConv === 'days_to_hours') {
                    const days = Math.floor(Math.random() * 5) + 2; // 2-7 days
                    text = `${name4} goes on vacation for ${days} days. How many hours is this? (1 day = 24 hours)`;
                    answer = days * 24;
                } else {
                    const weeks = Math.floor(Math.random() * 6) + 2; // 2-8 weeks
                    text = `${name4} attends a ${weeks}-week course. How many days is this? (1 week = 7 days)`;
                    answer = weeks * 7;
                }
                break;

            case 'temperature':
                // Simple Fahrenheit to Celsius or vice versa with easy numbers
                const tempType = Math.random() < 0.5 ? 'f_to_c' : 'c_to_f';
                const name5 = names[Math.floor(Math.random() * names.length)];
                
                if (tempType === 'f_to_c') {
                    const fahrenheit = [32, 50, 68, 86, 104][Math.floor(Math.random() * 5)]; // Easy conversion temperatures
                    const celsius = (fahrenheit - 32) * 5 / 9;
                    text = `The temperature in ${name5}'s city is ${fahrenheit}°F. What is this temperature in Celsius? (Formula: C = (F - 32) × 5/9)`;
                    answer = Math.round(celsius * 10) / 10; // Round to 1 decimal place
                } else {
                    const celsius2 = [0, 10, 20, 30, 40][Math.floor(Math.random() * 5)]; // Easy conversion temperatures
                    const fahrenheit2 = celsius2 * 9 / 5 + 32;
                    text = `${name5} visits a country where the temperature is ${celsius2}°C. What is this temperature in Fahrenheit? (Formula: F = C × 9/5 + 32)`;
                    answer = fahrenheit2;
                }
                break;
        }

        this.currentIntermediateProblem = text;
        this.correctIntermediateAnswer = answer;
        this.intermediateProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateRatioProblem() {
        const names = ['Alex', 'Emma', 'Maya', 'Jordan', 'Sam', 'Riley', 'Casey', 'Morgan', 'Quinn', 'Avery'];
        const ratioTypes = ['simple_ratio', 'recipe_scaling', 'speed_ratio', 'mixture_ratio', 'proportion'];
        const ratioType = ratioTypes[Math.floor(Math.random() * ratioTypes.length)];
        
        let text, answer;

        switch (ratioType) {
            case 'simple_ratio':
                const totalItems = Math.floor(Math.random() * 20) + 20; // 20-40 items
                const ratio1 = Math.floor(Math.random() * 4) + 2; // 2-6
                const ratio2 = Math.floor(Math.random() * 4) + 2; // 2-6
                const parts = ratio1 + ratio2;
                const itemsPerPart = totalItems / parts;
                const group1Items = itemsPerPart * ratio1;
                const group2Items = itemsPerPart * ratio2;
                
                const items = ['marbles', 'stickers', 'books', 'toys', 'candies', 'cards', 'coins'];
                const item = items[Math.floor(Math.random() * items.length)];
                const name = names[Math.floor(Math.random() * names.length)];
                
                text = `${name} has ${totalItems} ${item}. The ratio of red to blue ${item} is ${ratio1}:${ratio2}. How many red ${item} does ${name} have?`;
                answer = group1Items;
                break;

            case 'recipe_scaling':
                const recipes = [
                    { name: 'cookies', ingredient: 'cups of flour' },
                    { name: 'pancakes', ingredient: 'cups of milk' },
                    { name: 'cake', ingredient: 'cups of sugar' },
                    { name: 'muffins', ingredient: 'eggs' },
                    { name: 'bread', ingredient: 'teaspoons of yeast' }
                ];
                const recipe = recipes[Math.floor(Math.random() * recipes.length)];
                const originalServes = Math.floor(Math.random() * 6) + 4; // 4-10 people
                const newServes = originalServes * (Math.floor(Math.random() * 3) + 2); // 2-4 times more
                const originalAmount = Math.floor(Math.random() * 4) + 2; // 2-6 units
                const newAmount = (originalAmount * newServes) / originalServes;
                
                const name2 = names[Math.floor(Math.random() * names.length)];
                text = `${name2} has a ${recipe.name} recipe that serves ${originalServes} people and requires ${originalAmount} ${recipe.ingredient}. ${name2} wants to make enough ${recipe.name} for ${newServes} people. How many ${recipe.ingredient} will be needed?`;
                answer = newAmount;
                break;

            case 'speed_ratio':
                const vehicle1 = ['car', 'bicycle', 'motorcycle', 'truck', 'bus'][Math.floor(Math.random() * 5)];
                const vehicle2 = ['car', 'bicycle', 'motorcycle', 'truck', 'bus'][Math.floor(Math.random() * 5)];
                const speed1 = Math.floor(Math.random() * 40) + 20; // 20-60 mph
                const speed2 = Math.floor(Math.random() * 40) + 20; // 20-60 mph
                const time = Math.floor(Math.random() * 4) + 2; // 2-6 hours
                
                const distance1 = speed1 * time;
                const distance2 = speed2 * time;
                
                const name3 = names[Math.floor(Math.random() * names.length)];
                let name4 = names[Math.floor(Math.random() * names.length)];
                while (name4 === name3) name4 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name3} travels by ${vehicle1} at ${speed1} mph, while ${name4} travels by ${vehicle2} at ${speed2} mph. If they both travel for ${time} hours, how much farther does the faster person travel?`;
                answer = Math.abs(distance1 - distance2);
                break;

            case 'mixture_ratio':
                const mixtures = [
                    { name: 'paint', color1: 'red', color2: 'blue' },
                    { name: 'juice', color1: 'orange', color2: 'apple' },
                    { name: 'soil', color1: 'sand', color2: 'clay' },
                    { name: 'cement', color1: 'cement', color2: 'water' }
                ];
                const mixture = mixtures[Math.floor(Math.random() * mixtures.length)];
                const mixRatio1 = Math.floor(Math.random() * 4) + 2; // 2-6
                const mixRatio2 = Math.floor(Math.random() * 4) + 2; // 2-6
                const totalMixture = Math.floor(Math.random() * 30) + 20; // 20-50 units
                const mixParts = mixRatio1 + mixRatio2;
                const part1Amount = (totalMixture * mixRatio1) / mixParts;
                
                const name5 = names[Math.floor(Math.random() * names.length)];
                text = `${name5} needs to make ${totalMixture} liters of ${mixture.name} using a ${mixRatio1}:${mixRatio2} ratio of ${mixture.color1} to ${mixture.color2}. How many liters of ${mixture.color1} are needed?`;
                answer = part1Amount;
                break;

            case 'proportion':
                const proportionScenarios = [
                    { context: 'pages', activity: 'reading' },
                    { context: 'miles', activity: 'walking' },
                    { context: 'problems', activity: 'solving' },
                    { context: 'items', activity: 'making' }
                ];
                const scenario = proportionScenarios[Math.floor(Math.random() * proportionScenarios.length)];
                
                const time1 = Math.floor(Math.random() * 8) + 2; // 2-10 units
                const amount1 = Math.floor(Math.random() * 15) + 5; // 5-20 units
                const time2 = time1 * (Math.floor(Math.random() * 4) + 2); // 2-5 times more
                const amount2 = (amount1 * time2) / time1;
                
                const name6 = names[Math.floor(Math.random() * names.length)];
                text = `If ${name6} can complete ${amount1} ${scenario.context} in ${time1} hours, how many ${scenario.context} can ${name6} complete in ${time2} hours at the same rate?`;
                answer = amount2;
                break;
        }

        this.currentIntermediateProblem = text;
        this.correctIntermediateAnswer = answer;
        this.intermediateProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generatePercentageWordProblem() {
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const percentageTypes = ['discount', 'tip', 'tax', 'increase', 'decrease', 'interest'];
        const percentageType = percentageTypes[Math.floor(Math.random() * percentageTypes.length)];
        
        let text, answer;

        switch (percentageType) {
            case 'discount':
                const originalPrice = Math.floor(Math.random() * 200) + 50; // $50-$250
                const discountPercent = [10, 15, 20, 25, 30, 40, 50][Math.floor(Math.random() * 7)];
                const discountAmount = (originalPrice * discountPercent) / 100;
                const salePrice = originalPrice - discountAmount;
                
                const items = ['laptop', 'jacket', 'shoes', 'watch', 'backpack', 'headphones', 'tablet'];
                const item = items[Math.floor(Math.random() * items.length)];
                const name = names[Math.floor(Math.random() * names.length)];
                
                text = `${name} wants to buy a ${item} that costs $${originalPrice}. The store offers a ${discountPercent}% discount. What is the sale price after the discount?`;
                answer = Math.round(salePrice * 100) / 100;
                break;

            case 'tip':
                const billAmount = Math.floor(Math.random() * 80) + 20; // $20-$100
                const tipPercent = [15, 18, 20, 22, 25][Math.floor(Math.random() * 5)];
                const tipAmount = (billAmount * tipPercent) / 100;
                
                const restaurants = ['restaurant', 'café', 'diner', 'bistro', 'pizza place'];
                const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
                const name2 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name2} has dinner at a ${restaurant}. The bill is $${billAmount}. ${name2} wants to leave a ${tipPercent}% tip. How much is the tip?`;
                answer = Math.round(tipAmount * 100) / 100;
                break;

            case 'tax':
                const preTaxPrice = Math.floor(Math.random() * 150) + 25; // $25-$175
                const taxRate = [6, 7, 8, 8.5, 9, 10][Math.floor(Math.random() * 6)];
                const taxAmount = (preTaxPrice * taxRate) / 100;
                const totalPrice = preTaxPrice + taxAmount;
                
                const taxItems = ['electronics', 'clothing', 'furniture', 'appliances', 'toys'];
                const taxItem = taxItems[Math.floor(Math.random() * taxItems.length)];
                const name3 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name3} buys ${taxItem} for $${preTaxPrice}. The sales tax rate is ${taxRate}%. What is the total amount ${name3} pays including tax?`;
                answer = Math.round(totalPrice * 100) / 100;
                break;

            case 'increase':
                const originalValue = Math.floor(Math.random() * 500) + 100; // $100-$600
                const increasePercent = [5, 10, 15, 20, 25, 30][Math.floor(Math.random() * 6)];
                const increaseAmount = (originalValue * increasePercent) / 100;
                const newValue = originalValue + increaseAmount;
                
                const increaseContexts = [
                    { item: 'salary', unit: '$' },
                    { item: 'rent', unit: '$' },
                    { item: 'membership fee', unit: '$' },
                    { item: 'tuition', unit: '$' }
                ];
                const increaseContext = increaseContexts[Math.floor(Math.random() * increaseContexts.length)];
                const name4 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name4}'s ${increaseContext.item} was ${increaseContext.unit}${originalValue} last year. This year it increased by ${increasePercent}%. What is ${name4}'s new ${increaseContext.item}?`;
                answer = newValue;
                break;

            case 'decrease':
                const originalAmount = Math.floor(Math.random() * 300) + 50; // $50-$350
                const decreasePercent = [10, 15, 20, 25, 30][Math.floor(Math.random() * 5)];
                const decreaseAmount = (originalAmount * decreasePercent) / 100;
                const finalAmount = originalAmount - decreaseAmount;
                
                const decreaseContexts = [
                    { item: 'phone bill', unit: '$' },
                    { item: 'electric bill', unit: '$' },
                    { item: 'insurance premium', unit: '$' },
                    { item: 'subscription cost', unit: '$' }
                ];
                const decreaseContext = decreaseContexts[Math.floor(Math.random() * decreaseContexts.length)];
                const name5 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name5}'s ${decreaseContext.item} was ${decreaseContext.unit}${originalAmount} per month. Due to a promotion, it decreased by ${decreasePercent}%. What is the new monthly ${decreaseContext.item}?`;
                answer = Math.round(finalAmount * 100) / 100;
                break;

            case 'interest':
                const principal = Math.floor(Math.random() * 2000) + 500; // $500-$2500
                const interestRate = [2, 3, 4, 5, 6][Math.floor(Math.random() * 5)];
                const time = Math.floor(Math.random() * 3) + 1; // 1-4 years
                const simpleInterest = (principal * interestRate * time) / 100;
                
                const name6 = names[Math.floor(Math.random() * names.length)];
                text = `${name6} deposits $${principal} in a savings account that earns ${interestRate}% simple interest per year. How much interest will ${name6} earn after ${time} year${time > 1 ? 's' : ''}?`;
                answer = simpleInterest;
                break;
        }

        this.currentIntermediateProblem = text;
        this.correctIntermediateAnswer = answer;
        this.intermediateProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateAreaPerimeterProblem() {
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const shapeTypes = ['rectangle', 'square', 'triangle', 'circle'];
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        const problemTypes = ['area', 'perimeter'];
        const problemType = problemTypes[Math.floor(Math.random() * problemTypes.length)];
        
        let text, answer;
        const name = names[Math.floor(Math.random() * names.length)];

        switch (shapeType) {
            case 'rectangle':
                const length = Math.floor(Math.random() * 12) + 3; // 3-15
                const width = Math.floor(Math.random() * 8) + 2; // 2-10
                
                const contexts = ['room', 'garden', 'pool', 'parking lot', 'field', 'yard'];
                const context = contexts[Math.floor(Math.random() * contexts.length)];
                
                if (problemType === 'area') {
                    answer = length * width;
                    text = `${name} has a rectangular ${context} that is ${length} meters long and ${width} meters wide. What is the area of the ${context}? (Area = length × width)`;
                } else {
                    answer = 2 * (length + width);
                    text = `${name} wants to put a fence around a rectangular ${context} that is ${length} meters long and ${width} meters wide. How many meters of fencing are needed? (Perimeter = 2 × (length + width))`;
                }
                break;

            case 'square':
                const side = Math.floor(Math.random() * 10) + 4; // 4-14
                
                const squareContexts = ['room', 'tile', 'window', 'picture frame', 'garden plot'];
                const squareContext = squareContexts[Math.floor(Math.random() * squareContexts.length)];
                
                if (problemType === 'area') {
                    answer = side * side;
                    text = `${name} has a square ${squareContext} with sides of ${side} feet each. What is the area of the ${squareContext}? (Area = side × side)`;
                } else {
                    answer = 4 * side;
                    text = `${name} wants to put trim around a square ${squareContext} with sides of ${side} feet each. How many feet of trim are needed? (Perimeter = 4 × side length)`;
                }
                break;

            case 'triangle':
                if (problemType === 'area') {
                    const base = Math.floor(Math.random() * 10) + 4; // 4-14
                    const height = Math.floor(Math.random() * 8) + 3; // 3-11
                    answer = (base * height) / 2;
                    
                    const triangleContexts = ['triangular garden', 'sail', 'flag', 'roof section'];
                    const triangleContext = triangleContexts[Math.floor(Math.random() * triangleContexts.length)];
                    
                    text = `${name} has a ${triangleContext} with a base of ${base} meters and a height of ${height} meters. What is the area? (Area = (base × height) ÷ 2)`;
                } else {
                    // For perimeter, use an equilateral triangle for simplicity
                    const triangleSide = Math.floor(Math.random() * 8) + 3; // 3-11
                    answer = 3 * triangleSide;
                    
                    text = `${name} has an equilateral triangle with each side measuring ${triangleSide} feet. What is the perimeter? (Perimeter = side + side + side)`;
                }
                break;

            case 'circle':
                const radius = Math.floor(Math.random() * 6) + 2; // 2-8
                
                const circleContexts = ['circular garden', 'round table', 'pizza', 'clock face', 'pond'];
                const circleContext = circleContexts[Math.floor(Math.random() * circleContexts.length)];
                
                if (problemType === 'area') {
                    answer = Math.round(Math.PI * radius * radius * 100) / 100; // π * r²
                    text = `${name} has a ${circleContext} with a radius of ${radius} meters. What is the area? (Use π ≈ 3.14, Area = π × radius²)`;
                } else {
                    answer = Math.round(2 * Math.PI * radius * 100) / 100; // 2πr
                    text = `${name} wants to put a border around a ${circleContext} with a radius of ${radius} meters. What is the circumference? (Use π ≈ 3.14, Circumference = 2 × π × radius)`;
                }
                break;
        }

        this.currentIntermediateProblem = text;
        this.correctIntermediateAnswer = answer;
        this.intermediateProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateMultiStepProblem() {
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const multiStepTypes = ['shopping_budget', 'event_planning', 'travel_cost', 'project_materials', 'cooking_scaling'];
        const multiStepType = multiStepTypes[Math.floor(Math.random() * multiStepTypes.length)];
        
        let text, answer;

        switch (multiStepType) {
            case 'shopping_budget':
                const budget = Math.floor(Math.random() * 200) + 100; // $100-$300
                const item1Price = Math.floor(Math.random() * 40) + 20; // $20-$60
                const item2Price = Math.floor(Math.random() * 35) + 15; // $15-$50
                const item3Price = Math.floor(Math.random() * 25) + 10; // $10-$35
                const totalSpent = item1Price + item2Price + item3Price;
                const remaining = budget - totalSpent;
                
                const items = [
                    ['shirt', 'pants', 'shoes'],
                    ['book', 'notebook', 'pen set'],
                    ['game', 'controller', 'headset'],
                    ['phone case', 'charger', 'screen protector']
                ];
                const itemSet = items[Math.floor(Math.random() * items.length)];
                const name = names[Math.floor(Math.random() * names.length)];
                
                text = `${name} has a budget of $${budget} for shopping. ${name} buys a ${itemSet[0]} for $${item1Price}, a ${itemSet[1]} for $${item2Price}, and ${itemSet[2]} for $${item3Price}. How much money does ${name} have left from the budget?`;
                answer = remaining;
                break;

            case 'event_planning':
                const guests = Math.floor(Math.random() * 30) + 20; // 20-50 guests
                const costPerPerson = Math.floor(Math.random() * 15) + 10; // $10-$25
                const decorationCost = Math.floor(Math.random() * 80) + 40; // $40-$120
                const totalFoodCost = guests * costPerPerson;
                const totalEventCost = totalFoodCost + decorationCost;
                
                const events = ['birthday party', 'graduation party', 'family reunion', 'wedding reception'];
                const event = events[Math.floor(Math.random() * events.length)];
                const name2 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name2} is planning a ${event} for ${guests} people. The food costs $${costPerPerson} per person, and decorations cost $${decorationCost}. What is the total cost for the event?`;
                answer = totalEventCost;
                break;

            case 'travel_cost':
                const gasPricePerGallon = [3.25, 3.50, 3.75, 4.00][Math.floor(Math.random() * 4)];
                const miles = Math.floor(Math.random() * 300) + 150; // 150-450 miles
                const milesPerGallon = [25, 28, 30, 32, 35][Math.floor(Math.random() * 5)];
                const gallonsNeeded = miles / milesPerGallon;
                const gasCost = gallonsNeeded * gasPricePerGallon;
                
                const destinations = ['beach', 'mountains', 'city', 'national park', 'lake'];
                const destination = destinations[Math.floor(Math.random() * destinations.length)];
                const name3 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name3} drives ${miles} miles to the ${destination}. The car gets ${milesPerGallon} miles per gallon, and gas costs $${gasPricePerGallon} per gallon. How much will ${name3} spend on gas for the trip? (Round to nearest cent)`;
                answer = Math.round(gasCost * 100) / 100;
                break;

            case 'project_materials':
                const materialCount = Math.floor(Math.random() * 3) + 3; // 3-6 different materials
                const materials = [
                    { name: 'wood boards', price: 12, emoji: '🪵' },
                    { name: 'screws', price: 8, emoji: '🔩' },
                    { name: 'paint cans', price: 15, emoji: '🎨' },
                    { name: 'brushes', price: 6, emoji: '🖌️' },
                    { name: 'sandpaper sheets', price: 4, emoji: '📜' },
                    { name: 'metal brackets', price: 10, emoji: '🔧' },
                    { name: 'hinges', price: 7, emoji: '🚪' }
                ];
                
                const selectedMaterials = [];
                const usedMaterials = new Set();
                let totalCost = 0;
                
                for (let i = 0; i < materialCount; i++) {
                    let material;
                    do {
                        material = materials[Math.floor(Math.random() * materials.length)];
                    } while (usedMaterials.has(material.name));
                    
                    usedMaterials.add(material.name);
                    const quantity = Math.floor(Math.random() * 4) + 2; // 2-6 items
                    const itemTotal = material.price * quantity;
                    totalCost += itemTotal;
                    
                    selectedMaterials.push({ ...material, quantity, itemTotal });
                }
                
                const projects = ['bookshelf', 'garden fence', 'toy box', 'picture frame', 'bird house'];
                const project = projects[Math.floor(Math.random() * projects.length)];
                const name4 = names[Math.floor(Math.random() * names.length)];
                
                let materialsList = selectedMaterials.map(m => 
                    `${m.quantity} ${m.name} at $${m.price} each`
                ).join(', ');
                
                text = `${name4} is building a ${project}. ${name4} needs: ${materialsList}. What is the total cost of all materials?`;
                answer = totalCost;
                break;

            case 'cooking_scaling':
                const recipes = [
                    { name: 'cookies', serves: 12, ingredients: [{ name: 'cups of flour', amount: 2 }, { name: 'cups of sugar', amount: 1 }, { name: 'eggs', amount: 3 }] },
                    { name: 'pancakes', serves: 8, ingredients: [{ name: 'cups of flour', amount: 3 }, { name: 'cups of milk', amount: 2 }, { name: 'eggs', amount: 2 }] },
                    { name: 'muffins', serves: 15, ingredients: [{ name: 'cups of flour', amount: 2 }, { name: 'cups of blueberries', amount: 1 }, { name: 'eggs', amount: 2 }] }
                ];
                
                const recipe = recipes[Math.floor(Math.random() * recipes.length)];
                const targetServing = recipe.serves * (Math.floor(Math.random() * 3) + 2); // 2-4 times bigger
                const scaleFactor = targetServing / recipe.serves;
                
                const ingredient = recipe.ingredients[Math.floor(Math.random() * recipe.ingredients.length)];
                const scaledAmount = ingredient.amount * scaleFactor;
                
                const name5 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name5} has a ${recipe.name} recipe that serves ${recipe.serves} people and uses ${ingredient.amount} ${ingredient.name}. ${name5} wants to make enough ${recipe.name} for ${targetServing} people. How many ${ingredient.name} will be needed?`;
                answer = scaledAmount;
                break;
        }

        this.currentIntermediateProblem = text;
        this.correctIntermediateAnswer = answer;
        this.intermediateProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    checkIntermediateAnswer() {
        const userAnswer = parseFloat(this.intermediateExerciseAnswer.value);
        
        if (isNaN(userAnswer)) {
            this.showIntermediateFeedback('Please enter a valid number!', false);
            return;
        }

        this.intermediateScore.total++;
        
        // Allow for small rounding errors in percentage calculations
        const tolerance = 0.01;
        const isCorrect = Math.abs(userAnswer - this.correctIntermediateAnswer) < tolerance;
        
        if (isCorrect) {
            this.intermediateScore.correct++;
            this.intermediateStreak++;
            this.showIntermediateFeedback(`🎉 Correct! ${this.currentIntermediateProblem} = ${this.correctIntermediateAnswer}`, true);
        } else {
            this.intermediateStreak = 0;
            this.showIntermediateFeedback(`❌ Not quite right. ${this.currentIntermediateProblem} = ${this.correctIntermediateAnswer}. You answered ${userAnswer}.`, false);
        }
        
        this.updateIntermediateScoreDisplay();
    }

    showIntermediateFeedback(message, isCorrect) {
        if (this.intermediateExerciseFeedback && this.intermediateFeedbackMessage) {
            this.intermediateFeedbackMessage.innerHTML = `<h4>${message}</h4>`;
            this.intermediateExerciseFeedback.className = `exercise-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
            this.intermediateExerciseFeedback.classList.remove('hidden');
        }
    }

    updateIntermediateScoreDisplay() {
        if (this.intermediateScoreDisplay) {
            this.intermediateScoreDisplay.textContent = `${this.intermediateScore.correct}/${this.intermediateScore.total}`;
        }
        if (this.intermediateStreakDisplay) {
            this.intermediateStreakDisplay.textContent = this.intermediateStreak;
        }
    }

    // Advanced Exercise System
    startAdvancedExerciseType(exerciseType) {
        this.currentAdvancedExerciseType = exerciseType;
        this.advancedScore = { correct: 0, total: 0 };
        this.advancedStreak = 0;
        this.updateAdvancedScoreDisplay();
        
        document.querySelector('.advanced-exercise-type-selection')?.classList.add('hidden');
        this.advancedExerciseContent?.classList.remove('hidden');
        
        this.setAdvancedExerciseTitle(exerciseType);
        this.generateNewAdvancedProblem();
    }

    setAdvancedExerciseTitle(exerciseType) {
        const titles = {
            'single-digit-power': '🔧 Single Digit Powers',
            'two-digit-power': '🔧 Two Digit Powers',
            'three-digit-power': '🔧 Three Digit Powers',
            'four-digit-power': '🔧 Four Digit Powers',
            'single-digit-sqrt': '√ Single Digit Square Root',
            'two-digit-sqrt': '√ Two Digit Square Root',
            'three-digit-sqrt': '√ Three Digit Square Root',
            'four-digit-sqrt': '√ Four Digit Square Root',
            'complex-percentage': '📊 Complex Percentage',
            'mixed-advanced': '🔀 Mixed Advanced Operations',
            // Advanced Problem Solving Types
            'scientific-problems': '🔬 Scientific Applications',
            'engineering-problems': '⚙️ Engineering & Physics',
            'financial-problems': '💰 Advanced Finance',
            'statistical-problems': '📊 Statistics & Data',
            'optimization-problems': '🎯 Optimization',
            'exponential-problems': '📈 Exponential Growth'
        };
        
        if (this.advancedExerciseTitle) {
            this.advancedExerciseTitle.textContent = titles[exerciseType] || 'Exercise';
        }
    }

    generateNewAdvancedProblem() {
        this.advancedExerciseFeedback?.classList.add('hidden');
        this.advancedExerciseAnswer.value = '';
        this.advancedExerciseAnswer.focus();
        
        switch (this.currentAdvancedExerciseType) {
            case 'single-digit-power':
                this.generateSingleDigitPower();
                break;
            case 'two-digit-power':
                this.generateTwoDigitPower();
                break;
            case 'three-digit-power':
                this.generateThreeDigitPower();
                break;
            case 'four-digit-power':
                this.generateFourDigitPower();
                break;
            case 'single-digit-sqrt':
                this.generateSingleDigitSquareRoot();
                break;
            case 'two-digit-sqrt':
                this.generateTwoDigitSquareRoot();
                break;
            case 'three-digit-sqrt':
                this.generateThreeDigitSquareRoot();
                break;
            case 'four-digit-sqrt':
                this.generateFourDigitSquareRoot();
                break;
            case 'complex-percentage':
                this.generateComplexPercentage();
                break;
            case 'mixed-advanced':
                this.generateMixedAdvancedOperations();
                break;
            // Advanced Problem Solving Cases
            case 'scientific-problems':
                this.generateScientificProblem();
                break;
            case 'engineering-problems':
                this.generateEngineeringProblem();
                break;
            case 'financial-problems':
                this.generateFinancialProblem();
                break;
            case 'statistical-problems':
                this.generateStatisticalProblem();
                break;
            case 'optimization-problems':
                this.generateOptimizationProblem();
                break;
            case 'exponential-problems':
                this.generateExponentialProblem();
                break;
        }
    }

    generateSingleDigitPower() {
        const base = Math.floor(Math.random() * 9) + 1; // 1-9
        const exponent = Math.floor(Math.random() * 4) + 2; // 2-5
        this.currentAdvancedProblem = `${base}^${exponent}`;
        this.correctAdvancedAnswer = Math.pow(base, exponent);
        this.advancedProblemDisplay.textContent = `${base}^${exponent} = ?`;
    }

    generateTwoDigitPower() {
        const base = Math.floor(Math.random() * 90) + 10; // 10-99
        const exponent = Math.floor(Math.random() * 3) + 2; // 2-4
        this.currentAdvancedProblem = `${base}^${exponent}`;
        this.correctAdvancedAnswer = Math.pow(base, exponent);
        this.advancedProblemDisplay.textContent = `${base}^${exponent} = ?`;
    }

    generateThreeDigitPower() {
        const base = Math.floor(Math.random() * 900) + 100; // 100-999
        const exponent = 2; // Only square for three digits to keep numbers manageable
        this.currentAdvancedProblem = `${base}^${exponent}`;
        this.correctAdvancedAnswer = Math.pow(base, exponent);
        this.advancedProblemDisplay.textContent = `${base}^${exponent} = ?`;
    }

    generateFourDigitPower() {
        const base = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
        const exponent = 2; // Only square for four digits
        this.currentAdvancedProblem = `${base}^${exponent}`;
        this.correctAdvancedAnswer = Math.pow(base, exponent);
        this.advancedProblemDisplay.textContent = `${base}^${exponent} = ?`;
    }

    generateSingleDigitSquareRoot() {
        const perfectSquares = [1, 4, 9, 16, 25, 36, 49, 64, 81];
        const number = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
        this.currentAdvancedProblem = `√${number}`;
        this.correctAdvancedAnswer = Math.sqrt(number);
        this.advancedProblemDisplay.textContent = `√${number} = ?`;
    }

    generateTwoDigitSquareRoot() {
        const perfectSquares = [100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900];
        const number = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
        this.currentAdvancedProblem = `√${number}`;
        this.correctAdvancedAnswer = Math.sqrt(number);
        this.advancedProblemDisplay.textContent = `√${number} = ?`;
    }

    generateThreeDigitSquareRoot() {
        const perfectSquares = [1024, 1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936, 2025, 2116, 2209, 2304, 2401, 2500, 2601, 2704, 2809, 2916, 3025, 3136, 3249, 3364, 3481, 3600, 3721, 3844, 3969, 4096, 4225, 4356, 4489, 4624, 4761, 4900, 5041, 5184, 5329, 5476, 5625, 5776, 5929, 6084, 6241, 6400, 6561, 6724, 6889, 7056, 7225, 7396, 7569, 7744, 7921, 8100, 8281, 8464, 8649, 8836, 9025, 9216, 9409, 9604, 9801];
        const number = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
        this.currentAdvancedProblem = `√${number}`;
        this.correctAdvancedAnswer = Math.sqrt(number);
        this.advancedProblemDisplay.textContent = `√${number} = ?`;
    }

    generateFourDigitSquareRoot() {
        const bases = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
        const base = bases[Math.floor(Math.random() * bases.length)];
        const number = base * base;
        this.currentAdvancedProblem = `√${number}`;
        this.correctAdvancedAnswer = base;
        this.advancedProblemDisplay.textContent = `√${number} = ?`;
    }

    generateComplexPercentage() {
        const percentage = Math.floor(Math.random() * 95) + 5; // 5-99%
        const number = Math.floor(Math.random() * 500) + 100; // 100-599
        this.currentAdvancedProblem = `${percentage}% of ${number}`;
        this.correctAdvancedAnswer = Math.round((percentage / 100) * number * 100) / 100;
        this.advancedProblemDisplay.textContent = `${percentage}% of ${number} = ?`;
    }

    generateMixedAdvancedOperations() {
        const operations = ['power', 'sqrt', 'percentage'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        
        switch (operation) {
            case 'power':
                this.generateSingleDigitPower();
                break;
            case 'sqrt':
                this.generateSingleDigitSquareRoot();
                break;
            case 'percentage':
                this.generateComplexPercentage();
                break;
        }
    }

    // Advanced Problem-Solving Methods
    generateScientificProblem() {
        const names = ['Dr. Smith', 'Prof. Johnson', 'Dr. Chen', 'Dr. Rodriguez', 'Prof. Anderson', 'Dr. Thompson', 'Dr. Williams', 'Prof. Davis'];
        const scientificTypes = ['chemistry', 'physics', 'biology', 'astronomy', 'geology', 'environmental'];
        const scientificType = scientificTypes[Math.floor(Math.random() * scientificTypes.length)];
        
        let text, answer;

        switch (scientificType) {
            case 'chemistry':
                const chemistryScenarios = ['concentration', 'molarity', 'ph_calculation', 'reaction_rate', 'gas_law'];
                const chemScenario = chemistryScenarios[Math.floor(Math.random() * chemistryScenarios.length)];
                const scientist = names[Math.floor(Math.random() * names.length)];
                
                if (chemScenario === 'concentration') {
                    const soluteMass = Math.floor(Math.random() * 50) + 10; // 10-60g
                    const solutionVolume = Math.floor(Math.random() * 400) + 100; // 100-500mL
                    const concentration = (soluteMass / solutionVolume) * 1000; // mg/L
                    
                    text = `${scientist} dissolves ${soluteMass}g of salt in ${solutionVolume}mL of water. What is the concentration in mg/L?`;
                    answer = Math.round(concentration);
                } else if (chemScenario === 'molarity') {
                    const moles = Math.floor(Math.random() * 5) + 1; // 1-6 moles
                    const volume = (Math.floor(Math.random() * 8) + 2) / 10; // 0.2-1.0 L
                    const molarity = moles / volume;
                    
                    text = `${scientist} has ${moles} moles of NaCl dissolved in ${volume}L of solution. Calculate the molarity (M = moles/volume).`;
                    answer = Math.round(molarity * 100) / 100;
                } else if (chemScenario === 'ph_calculation') {
                    const hydrogenConcentration = [0.001, 0.01, 0.1, 0.0001][Math.floor(Math.random() * 4)];
                    const ph = -Math.log10(hydrogenConcentration);
                    
                    text = `${scientist} measures a hydrogen ion concentration of ${hydrogenConcentration} M. What is the pH? (pH = -log₁₀[H⁺])`;
                    answer = Math.round(ph * 10) / 10;
                } else if (chemScenario === 'reaction_rate') {
                    const initialConc = Math.floor(Math.random() * 20) + 10; // 10-30 mol/L
                    const finalConc = Math.floor(Math.random() * initialConc/2) + 2; // 2 to half of initial
                    const time = Math.floor(Math.random() * 30) + 10; // 10-40 seconds
                    const rate = (initialConc - finalConc) / time;
                    
                    text = `${scientist} observes a reaction where concentration decreases from ${initialConc} mol/L to ${finalConc} mol/L in ${time} seconds. What is the average reaction rate in mol/L·s?`;
                    answer = Math.round(rate * 1000) / 1000;
                } else {
                    // Gas law: PV = nRT, solve for different variables
                    const pressure = Math.floor(Math.random() * 5) + 1; // 1-6 atm
                    const volume = Math.floor(Math.random() * 20) + 5; // 5-25 L
                    const gasConstant = 0.082; // L·atm/(mol·K)
                    const temperature = Math.floor(Math.random() * 200) + 273; // 273-473 K
                    const moles2 = (pressure * volume) / (gasConstant * temperature);
                    
                    text = `${scientist} has a gas at ${pressure} atm pressure, ${volume}L volume, and ${temperature}K temperature. How many moles of gas are present? (PV = nRT, R = 0.082 L·atm/(mol·K))`;
                    answer = Math.round(moles2 * 100) / 100;
                }
                break;

            case 'physics':
                const physicsScenarios = ['velocity', 'acceleration', 'force', 'energy', 'power', 'wave_frequency'];
                const physScenario = physicsScenarios[Math.floor(Math.random() * physicsScenarios.length)];
                const physicist = names[Math.floor(Math.random() * names.length)];
                
                if (physScenario === 'velocity') {
                    const distance = Math.floor(Math.random() * 500) + 100; // 100-600 m
                    const time2 = Math.floor(Math.random() * 25) + 5; // 5-30 s
                    const velocity = distance / time2;
                    
                    text = `${physicist} measures an object traveling ${distance} meters in ${time2} seconds. What is the average velocity in m/s?`;
                    answer = Math.round(velocity * 100) / 100;
                } else if (physScenario === 'acceleration') {
                    const initialVel = Math.floor(Math.random() * 20) + 5; // 5-25 m/s
                    const finalVel = initialVel + Math.floor(Math.random() * 30) + 10; // 10-30 m/s more
                    const timeChange = Math.floor(Math.random() * 8) + 2; // 2-10 s
                    const acceleration = (finalVel - initialVel) / timeChange;
                    
                    text = `${physicist} observes an object accelerate from ${initialVel} m/s to ${finalVel} m/s in ${timeChange} seconds. What is the acceleration in m/s²?`;
                    answer = Math.round(acceleration * 100) / 100;
                } else if (physScenario === 'force') {
                    const mass = Math.floor(Math.random() * 50) + 10; // 10-60 kg
                    const accel = Math.floor(Math.random() * 15) + 2; // 2-17 m/s²
                    const force = mass * accel;
                    
                    text = `${physicist} applies a force to a ${mass} kg object, causing it to accelerate at ${accel} m/s². What is the applied force in Newtons? (F = ma)`;
                    answer = force;
                } else if (physScenario === 'energy') {
                    const mass2 = Math.floor(Math.random() * 20) + 5; // 5-25 kg
                    const velocity2 = Math.floor(Math.random() * 30) + 10; // 10-40 m/s
                    const kineticEnergy = 0.5 * mass2 * velocity2 * velocity2;
                    
                    text = `${physicist} calculates the kinetic energy of a ${mass2} kg object moving at ${velocity2} m/s. What is the kinetic energy in Joules? (KE = ½mv²)`;
                    answer = Math.round(kineticEnergy);
                } else if (physScenario === 'power') {
                    const work = Math.floor(Math.random() * 2000) + 500; // 500-2500 J
                    const timeWork = Math.floor(Math.random() * 20) + 5; // 5-25 s
                    const power = work / timeWork;
                    
                    text = `${physicist} measures ${work} Joules of work done in ${timeWork} seconds. What is the power output in Watts? (P = W/t)`;
                    answer = Math.round(power);
                } else {
                    const wavelength = (Math.floor(Math.random() * 8) + 2) / 10; // 0.2-1.0 m
                    const speedOfSound = 343; // m/s
                    const frequency = speedOfSound / wavelength;
                    
                    text = `${physicist} measures sound waves with a wavelength of ${wavelength} m. What is the frequency in Hz? (v = fλ, v = 343 m/s)`;
                    answer = Math.round(frequency);
                }
                break;

            case 'biology':
                const bioScenarios = ['population_growth', 'genetics', 'cell_division', 'enzyme_activity', 'ecosystem'];
                const bioScenario = bioScenarios[Math.floor(Math.random() * bioScenarios.length)];
                const biologist = names[Math.floor(Math.random() * names.length)];
                
                if (bioScenario === 'population_growth') {
                    const initialPop = Math.floor(Math.random() * 500) + 100; // 100-600
                    const growthRate = (Math.floor(Math.random() * 15) + 5) / 100; // 5-20%
                    const timeYears = Math.floor(Math.random() * 5) + 2; // 2-7 years
                    const finalPop = initialPop * Math.pow(1 + growthRate, timeYears);
                    
                    text = `${biologist} studies a population that starts with ${initialPop} individuals and grows at ${(growthRate * 100).toFixed(1)}% per year for ${timeYears} years. What is the final population? (P = P₀(1 + r)ᵗ)`;
                    answer = Math.round(finalPop);
                } else if (bioScenario === 'genetics') {
                    const totalOffspring = Math.floor(Math.random() * 200) + 100; // 100-300
                    const dominantRatio = 0.75; // 3:1 ratio
                    const dominantOffspring = totalOffspring * dominantRatio;
                    
                    text = `${biologist} crosses two heterozygous organisms (Aa × Aa). In ${totalOffspring} offspring, how many would show the dominant phenotype? (Use 3:1 ratio)`;
                    answer = Math.round(dominantOffspring);
                } else if (bioScenario === 'cell_division') {
                    const initialCells = Math.floor(Math.random() * 10) + 2; // 2-12
                    const generations = Math.floor(Math.random() * 6) + 3; // 3-9
                    const finalCells = initialCells * Math.pow(2, generations);
                    
                    text = `${biologist} starts with ${initialCells} cells. After ${generations} generations of binary fission, how many cells will there be? (Each cell divides into 2)`;
                    answer = finalCells;
                } else if (bioScenario === 'enzyme_activity') {
                    const substrateConc = Math.floor(Math.random() * 20) + 5; // 5-25 mM
                    const maxRate = Math.floor(Math.random() * 50) + 20; // 20-70 μmol/min
                    const km = Math.floor(Math.random() * 8) + 2; // 2-10 mM
                    const rate = (maxRate * substrateConc) / (km + substrateConc);
                    
                    text = `${biologist} measures enzyme activity with substrate concentration ${substrateConc} mM, Vmax = ${maxRate} μmol/min, and Km = ${km} mM. What is the reaction rate? (v = Vmax[S]/(Km + [S]))`;
                    answer = Math.round(rate * 10) / 10;
                } else {
                    const producers = Math.floor(Math.random() * 5000) + 2000; // 2000-7000
                    const transferEfficiency = 10; // 10%
                    const primaryConsumers = producers * (transferEfficiency / 100);
                    
                    text = `${biologist} studies an ecosystem with ${producers} units of energy at the producer level. With 10% transfer efficiency, how much energy reaches primary consumers?`;
                    answer = primaryConsumers;
                }
                break;

            case 'astronomy':
                const astroScenarios = ['distance', 'brightness', 'orbital_period', 'escape_velocity', 'redshift'];
                const astroScenario = astroScenarios[Math.floor(Math.random() * astroScenarios.length)];
                const astronomer = names[Math.floor(Math.random() * names.length)];
                
                if (astroScenario === 'distance') {
                    const parallax = (Math.floor(Math.random() * 8) + 2) / 1000; // 0.002-0.010 arcsec
                    const distance = 1 / parallax; // parsecs
                    
                    text = `${astronomer} measures a star's parallax as ${parallax.toFixed(3)} arcseconds. What is the distance in parsecs? (d = 1/p)`;
                    answer = Math.round(distance);
                } else if (astroScenario === 'brightness') {
                    const absoluteMag = Math.floor(Math.random() * 10) + 1; // 1-11
                    const distanceParsecs = Math.floor(Math.random() * 90) + 10; // 10-100 pc
                    const apparentMag = absoluteMag + 5 * Math.log10(distanceParsecs / 10);
                    
                    text = `${astronomer} observes a star with absolute magnitude ${absoluteMag} at distance ${distanceParsecs} parsecs. What is the apparent magnitude? (m = M + 5log₁₀(d/10))`;
                    answer = Math.round(apparentMag * 100) / 100;
                } else if (astroScenario === 'orbital_period') {
                    const semiMajorAxis = Math.floor(Math.random() * 15) + 5; // 5-20 AU
                    const period = Math.pow(semiMajorAxis, 1.5); // Kepler's 3rd law simplified
                    
                    text = `${astronomer} discovers a planet orbiting at ${semiMajorAxis} AU from its star. What is the orbital period in Earth years? (P² = a³, so P = a^1.5)`;
                    answer = Math.round(period * 100) / 100;
                } else if (astroScenario === 'escape_velocity') {
                    const mass = Math.floor(Math.random() * 8) + 2; // 2-10 (in Earth masses)
                    const radius = Math.floor(Math.random() * 6) + 4; // 4-10 (in Earth radii)
                    const escapeVel = Math.sqrt(2 * 9.8 * mass / radius) * 11.2; // Simplified calculation
                    
                    text = `${astronomer} studies a planet with ${mass} Earth masses and ${radius} Earth radii. What is the escape velocity in km/s? (Use simplified: v = 11.2√(M/R) km/s)`;
                    answer = Math.round(escapeVel * 10) / 10;
                } else {
                    const observedWavelength = Math.floor(Math.random() * 100) + 500; // 500-600 nm
                    const restWavelength = 486; // Hydrogen beta line
                    const redshift = (observedWavelength - restWavelength) / restWavelength;
                    
                    text = `${astronomer} observes a hydrogen line at ${observedWavelength} nm (rest wavelength 486 nm). What is the redshift z? (z = (λ_obs - λ_rest)/λ_rest)`;
                    answer = Math.round(redshift * 1000) / 1000;
                }
                break;

            case 'geology':
                const geoScenarios = ['rock_dating', 'seismic_waves', 'mineral_density', 'erosion_rate', 'plate_movement'];
                const geoScenario = geoScenarios[Math.floor(Math.random() * geoScenarios.length)];
                const geologist = names[Math.floor(Math.random() * names.length)];
                
                if (geoScenario === 'rock_dating') {
                    const halfLife = Math.floor(Math.random() * 2000) + 500; // 500-2500 million years
                    const currentRatio = Math.pow(0.5, Math.floor(Math.random() * 4) + 1); // 0.5, 0.25, 0.125, 0.0625
                    const age = halfLife * (-Math.log(currentRatio) / Math.log(2));
                    
                    text = `${geologist} finds a rock where ${(currentRatio * 100).toFixed(1)}% of the original radioactive isotope remains. The half-life is ${halfLife} million years. How old is the rock?`;
                    answer = Math.round(age);
                } else if (geoScenario === 'seismic_waves') {
                    const distance = Math.floor(Math.random() * 300) + 100; // 100-400 km
                    const pWaveSpeed = 6.0; // km/s
                    const sWaveSpeed = 3.5; // km/s
                    const timeDifference = distance / sWaveSpeed - distance / pWaveSpeed;
                    
                    text = `${geologist} records seismic waves from an earthquake ${distance} km away. P-waves travel at 6.0 km/s, S-waves at 3.5 km/s. What is the time difference between arrivals (in seconds)?`;
                    answer = Math.round(timeDifference * 10) / 10;
                } else if (geoScenario === 'mineral_density') {
                    const mass3 = Math.floor(Math.random() * 150) + 50; // 50-200 g
                    const volume3 = Math.floor(Math.random() * 40) + 10; // 10-50 cm³
                    const density = mass3 / volume3;
                    
                    text = `${geologist} has a mineral sample with mass ${mass3}g and volume ${volume3}cm³. What is the density in g/cm³?`;
                    answer = Math.round(density * 100) / 100;
                } else if (geoScenario === 'erosion_rate') {
                    const heightLoss = Math.floor(Math.random() * 20) + 5; // 5-25 mm
                    const timeSpan = Math.floor(Math.random() * 50) + 10; // 10-60 years
                    const erosionRate = heightLoss / timeSpan;
                    
                    text = `${geologist} measures ${heightLoss}mm of rock erosion over ${timeSpan} years. What is the average erosion rate in mm/year?`;
                    answer = Math.round(erosionRate * 1000) / 1000;
                } else {
                    const plateSpeed = (Math.floor(Math.random() * 8) + 2) / 10; // 0.2-1.0 cm/year
                    const timeMillions = Math.floor(Math.random() * 50) + 10; // 10-60 million years
                    const distanceMoved = plateSpeed * timeMillions / 100; // convert to km
                    
                    text = `${geologist} studies a tectonic plate moving at ${plateSpeed} cm/year for ${timeMillions} million years. How far did it move in kilometers?`;
                    answer = Math.round(distanceMoved * 10) / 10;
                }
                break;

            case 'environmental':
                const envScenarios = ['carbon_footprint', 'water_quality', 'biodiversity_index', 'pollution_concentration', 'renewable_energy'];
                const envScenario = envScenarios[Math.floor(Math.random() * envScenarios.length)];
                const environmentalist = names[Math.floor(Math.random() * names.length)];
                
                if (envScenario === 'carbon_footprint') {
                    const gasoline = Math.floor(Math.random() * 500) + 200; // 200-700 gallons
                    const co2PerGallon = 19.6; // pounds CO2 per gallon
                    const totalCO2 = gasoline * co2PerGallon;
                    
                    text = `${environmentalist} calculates that burning ${gasoline} gallons of gasoline produces how many pounds of CO₂? (19.6 lbs CO₂ per gallon)`;
                    answer = Math.round(totalCO2);
                } else if (envScenario === 'water_quality') {
                    const dissolvedOxygen = (Math.floor(Math.random() * 80) + 20) / 10; // 2.0-10.0 mg/L
                    const temperature = Math.floor(Math.random() * 25) + 5; // 5-30°C
                    const saturationLevel = dissolvedOxygen / (14.6 - 0.4 * temperature) * 100; // Simplified
                    
                    text = `${environmentalist} measures dissolved oxygen at ${dissolvedOxygen} mg/L in water at ${temperature}°C. What is the oxygen saturation percentage? (Saturation ≈ 14.6 - 0.4T mg/L)`;
                    answer = Math.round(saturationLevel);
                } else if (envScenario === 'biodiversity_index') {
                    const species1 = Math.floor(Math.random() * 20) + 10; // 10-30
                    const species2 = Math.floor(Math.random() * 15) + 5; // 5-20
                    const species3 = Math.floor(Math.random() * 10) + 3; // 3-13
                    const total = species1 + species2 + species3;
                    const shannon = -((species1/total) * Math.log(species1/total) + (species2/total) * Math.log(species2/total) + (species3/total) * Math.log(species3/total));
                    
                    text = `${environmentalist} counts ${species1}, ${species2}, and ${species3} individuals of three species. What is the Shannon diversity index? (H = -Σ(pi × ln(pi)))`;
                    answer = Math.round(shannon * 1000) / 1000;
                } else if (envScenario === 'pollution_concentration') {
                    const pollutantMass = Math.floor(Math.random() * 50) + 10; // 10-60 kg
                    const airVolume = Math.floor(Math.random() * 5000) + 1000; // 1000-6000 m³
                    const concentration = (pollutantMass * 1000000) / airVolume; // μg/m³
                    
                    text = `${environmentalist} measures ${pollutantMass} kg of pollutant in ${airVolume} m³ of air. What is the concentration in μg/m³?`;
                    answer = Math.round(concentration);
                } else {
                    const solarPanels = Math.floor(Math.random() * 50) + 20; // 20-70 panels
                    const powerPerPanel = Math.floor(Math.random() * 100) + 250; // 250-350 watts
                    const sunHours = Math.floor(Math.random() * 4) + 5; // 5-9 hours
                    const dailyEnergy = solarPanels * powerPerPanel * sunHours / 1000; // kWh
                    
                    text = `${environmentalist} installs ${solarPanels} solar panels (${powerPerPanel}W each) in an area with ${sunHours} hours of sunlight daily. How many kWh of energy per day?`;
                    answer = Math.round(dailyEnergy * 10) / 10;
                }
                break;
        }

        this.currentAdvancedProblem = text;
        this.correctAdvancedAnswer = answer;
        this.advancedProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateEngineeringProblem() {
        const engineers = ['Engineer Wang', 'Dr. Patel', 'Prof. Martinez', 'Engineer Kim', 'Dr. Brown', 'Engineer Taylor', 'Dr. Wilson', 'Prof. Garcia'];
        const engineeringTypes = ['mechanical', 'electrical', 'civil', 'chemical', 'aerospace', 'computer'];
        const engineeringType = engineeringTypes[Math.floor(Math.random() * engineeringTypes.length)];
        
        let text, answer;

        switch (engineeringType) {
            case 'mechanical':
                const mechScenarios = ['torque', 'pressure', 'heat_transfer', 'efficiency', 'stress_strain'];
                const mechScenario = mechScenarios[Math.floor(Math.random() * mechScenarios.length)];
                const mechEngineer = engineers[Math.floor(Math.random() * engineers.length)];
                
                if (mechScenario === 'torque') {
                    const force = Math.floor(Math.random() * 200) + 50; // 50-250 N
                    const radius = (Math.floor(Math.random() * 8) + 2) / 10; // 0.2-1.0 m
                    const torque = force * radius;
                    
                    text = `${mechEngineer} applies a ${force}N force at a distance of ${radius}m from the axis of rotation. What is the torque in N·m? (τ = F × r)`;
                    answer = Math.round(torque * 10) / 10;
                } else if (mechScenario === 'pressure') {
                    const forcePress = Math.floor(Math.random() * 5000) + 1000; // 1000-6000 N
                    const area = (Math.floor(Math.random() * 20) + 5) / 100; // 0.05-0.25 m²
                    const pressure = forcePress / area;
                    
                    text = `${mechEngineer} applies ${forcePress}N of force over an area of ${area}m². What is the pressure in Pa? (P = F/A)`;
                    answer = Math.round(pressure);
                } else if (mechScenario === 'heat_transfer') {
                    const thermalConductivity = (Math.floor(Math.random() * 400) + 100) / 10; // 10-50 W/m·K
                    const area2 = (Math.floor(Math.random() * 15) + 5) / 10; // 0.5-2.0 m²
                    const tempDifference = Math.floor(Math.random() * 80) + 20; // 20-100°C
                    const thickness = (Math.floor(Math.random() * 8) + 2) / 100; // 0.02-0.10 m
                    const heatTransfer = (thermalConductivity * area2 * tempDifference) / thickness;
                    
                    text = `${mechEngineer} calculates heat transfer through a material: k=${thermalConductivity}W/m·K, A=${area2}m², ΔT=${tempDifference}°C, thickness=${thickness}m. What is the heat transfer rate in Watts? (q = kAΔT/L)`;
                    answer = Math.round(heatTransfer);
                } else if (mechScenario === 'efficiency') {
                    const inputPower = Math.floor(Math.random() * 800) + 200; // 200-1000W
                    const outputPower = inputPower * (Math.floor(Math.random() * 30) + 60) / 100; // 60-90% efficiency
                    const efficiency = (outputPower / inputPower) * 100;
                    
                    text = `${mechEngineer} designs a machine with ${inputPower}W input power and ${Math.round(outputPower)}W output power. What is the efficiency percentage?`;
                    answer = Math.round(efficiency * 10) / 10;
                } else {
                    const appliedStress = Math.floor(Math.random() * 300) + 100; // 100-400 MPa
                    const youngsModulus = Math.floor(Math.random() * 150) + 50; // 50-200 GPa
                    const strain = appliedStress / (youngsModulus * 1000); // Convert GPa to MPa
                    
                    text = `${mechEngineer} applies ${appliedStress}MPa stress to a material with Young's modulus ${youngsModulus}GPa. What is the strain? (ε = σ/E)`;
                    answer = Math.round(strain * 100000) / 100000;
                }
                break;

            case 'electrical':
                const elecScenarios = ['ohms_law', 'power', 'capacitance', 'frequency', 'impedance'];
                const elecScenario = elecScenarios[Math.floor(Math.random() * elecScenarios.length)];
                const elecEngineer = engineers[Math.floor(Math.random() * engineers.length)];
                
                if (elecScenario === 'ohms_law') {
                    const voltage = Math.floor(Math.random() * 20) + 5; // 5-25V
                    const resistance = Math.floor(Math.random() * 80) + 20; // 20-100Ω
                    const current = voltage / resistance;
                    
                    text = `${elecEngineer} measures ${voltage}V across a ${resistance}Ω resistor. What is the current in Amperes? (I = V/R)`;
                    answer = Math.round(current * 1000) / 1000;
                } else if (elecScenario === 'power') {
                    const voltage2 = Math.floor(Math.random() * 200) + 100; // 100-300V
                    const current2 = (Math.floor(Math.random() * 15) + 5) / 10; // 0.5-2.0A
                    const power2 = voltage2 * current2;
                    
                    text = `${elecEngineer} has a circuit with ${voltage2}V and ${current2}A. What is the power consumption in Watts? (P = VI)`;
                    answer = Math.round(power2 * 10) / 10;
                } else if (elecScenario === 'capacitance') {
                    const capacitance = Math.floor(Math.random() * 900) + 100; // 100-1000 μF
                    const voltage3 = Math.floor(Math.random() * 15) + 5; // 5-20V
                    const energy = 0.5 * (capacitance / 1000000) * voltage3 * voltage3; // Convert μF to F
                    
                    text = `${elecEngineer} has a ${capacitance}μF capacitor charged to ${voltage3}V. What is the stored energy in Joules? (E = ½CV²)`;
                    answer = Math.round(energy * 10000) / 10000;
                } else if (elecScenario === 'frequency') {
                    const wavelength2 = Math.floor(Math.random() * 8) + 2; // 2-10 m
                    const speedOfLight = 300000000; // m/s
                    const frequency2 = speedOfLight / wavelength2;
                    
                    text = `${elecEngineer} works with electromagnetic waves of ${wavelength2}m wavelength. What is the frequency in MHz? (f = c/λ, c = 3×10⁸ m/s)`;
                    answer = Math.round(frequency2 / 1000000);
                } else {
                    const resistance2 = Math.floor(Math.random() * 80) + 20; // 20-100Ω
                    const reactance = Math.floor(Math.random() * 60) + 10; // 10-70Ω
                    const impedance = Math.sqrt(resistance2 * resistance2 + reactance * reactance);
                    
                    text = `${elecEngineer} has an AC circuit with ${resistance2}Ω resistance and ${reactance}Ω reactance. What is the impedance in Ohms? (Z = √(R² + X²))`;
                    answer = Math.round(impedance * 10) / 10;
                }
                break;

            case 'civil':
                const civilScenarios = ['beam_loading', 'concrete_strength', 'flow_rate', 'settlement', 'load_bearing'];
                const civilScenario = civilScenarios[Math.floor(Math.random() * civilScenarios.length)];
                const civilEngineer = engineers[Math.floor(Math.random() * engineers.length)];
                
                if (civilScenario === 'beam_loading') {
                    const distributedLoad = Math.floor(Math.random() * 15) + 5; // 5-20 kN/m
                    const beamLength = Math.floor(Math.random() * 8) + 4; // 4-12 m
                    const totalLoad = distributedLoad * beamLength;
                    
                    text = `${civilEngineer} designs a beam with ${distributedLoad}kN/m distributed load over ${beamLength}m length. What is the total load in kN?`;
                    answer = totalLoad;
                } else if (civilScenario === 'concrete_strength') {
                    const appliedLoad = Math.floor(Math.random() * 400) + 100; // 100-500 kN
                    const crossSectionalArea = Math.floor(Math.random() * 200) + 100; // 100-300 cm²
                    const stress = (appliedLoad * 1000) / (crossSectionalArea / 10000); // Convert to Pa
                    
                    text = `${civilEngineer} tests concrete with ${appliedLoad}kN load on ${crossSectionalArea}cm² area. What is the compressive stress in MPa? (1 MPa = 1×10⁶ Pa)`;
                    answer = Math.round(stress / 1000000 * 10) / 10;
                } else if (civilScenario === 'flow_rate') {
                    const velocity3 = (Math.floor(Math.random() * 25) + 5) / 10; // 0.5-3.0 m/s
                    const diameter = (Math.floor(Math.random() * 8) + 2) / 10; // 0.2-1.0 m
                    const area3 = Math.PI * (diameter/2) * (diameter/2);
                    const flowRate = velocity3 * area3;
                    
                    text = `${civilEngineer} measures water flowing at ${velocity3}m/s through a ${diameter}m diameter pipe. What is the flow rate in m³/s? (Q = AV, A = πr²)`;
                    answer = Math.round(flowRate * 1000) / 1000;
                } else if (civilScenario === 'settlement') {
                    const buildingLoad = Math.floor(Math.random() * 5000) + 2000; // 2000-7000 kN
                    const foundationArea = Math.floor(Math.random() * 50) + 25; // 25-75 m²
                    const bearingPressure = buildingLoad / foundationArea;
                    
                    text = `${civilEngineer} calculates foundation settlement for a ${buildingLoad}kN building load over ${foundationArea}m² foundation area. What is the bearing pressure in kN/m²?`;
                    answer = Math.round(bearingPressure * 10) / 10;
                } else {
                    const liveLoad = Math.floor(Math.random() * 8) + 2; // 2-10 kN/m²
                    const deadLoad = Math.floor(Math.random() * 6) + 3; // 3-9 kN/m²
                    const safetyFactor = 1.5;
                    const designLoad = (liveLoad + deadLoad) * safetyFactor;
                    
                    text = `${civilEngineer} combines live load (${liveLoad}kN/m²) and dead load (${deadLoad}kN/m²) with safety factor 1.5. What is the design load in kN/m²?`;
                    answer = Math.round(designLoad * 10) / 10;
                }
                break;

            case 'chemical':
                const chemEngScenarios = ['mass_balance', 'reaction_yield', 'heat_exchanger', 'distillation', 'reactor_design'];
                const chemEngScenario = chemEngScenarios[Math.floor(Math.random() * chemEngScenarios.length)];
                const chemEngineer = engineers[Math.floor(Math.random() * engineers.length)];
                
                if (chemEngScenario === 'mass_balance') {
                    const feedRate = Math.floor(Math.random() * 500) + 100; // 100-600 kg/h
                    const concentration = Math.floor(Math.random() * 60) + 20; // 20-80 wt%
                    const productFlow = (feedRate * concentration) / 100;
                    
                    text = `${chemEngineer} processes ${feedRate}kg/h of feed containing ${concentration}wt% desired component. What is the product flow rate in kg/h?`;
                    answer = Math.round(productFlow * 10) / 10;
                } else if (chemEngScenario === 'reaction_yield') {
                    const theoreticalYield = Math.floor(Math.random() * 200) + 100; // 100-300 kg
                    const actualYield = theoreticalYield * (Math.floor(Math.random() * 30) + 60) / 100; // 60-90%
                    const yieldPercentage = (actualYield / theoreticalYield) * 100;
                    
                    text = `${chemEngineer} expects ${theoreticalYield}kg theoretical yield but obtains ${Math.round(actualYield)}kg actual yield. What is the percentage yield?`;
                    answer = Math.round(yieldPercentage * 10) / 10;
                } else if (chemEngScenario === 'heat_exchanger') {
                    const massFlowRate = Math.floor(Math.random() * 20) + 5; // 5-25 kg/s
                    const specificHeat = (Math.floor(Math.random() * 15) + 35) / 10; // 3.5-5.0 kJ/kg·K
                    const tempChange = Math.floor(Math.random() * 40) + 20; // 20-60°C
                    const heatDuty = massFlowRate * specificHeat * tempChange;
                    
                    text = `${chemEngineer} designs a heat exchanger: ${massFlowRate}kg/s flow rate, ${specificHeat}kJ/kg·K specific heat, ${tempChange}°C temperature change. What is the heat duty in kW? (Q = mCpΔT)`;
                    answer = Math.round(heatDuty);
                } else if (chemEngScenario === 'distillation') {
                    const feedConcentration = Math.floor(Math.random() * 40) + 30; // 30-70 mol%
                    const distillateConcentration = Math.floor(Math.random() * 20) + 80; // 80-100 mol%
                    const bottomsConcentration = Math.floor(Math.random() * 15) + 5; // 5-20 mol%
                    
                    // Simplified material balance
                    const feedRate2 = 100; // kg/h basis
                    const distillateRate = (feedConcentration - bottomsConcentration) / (distillateConcentration - bottomsConcentration) * feedRate2;
                    
                    text = `${chemEngineer} separates a ${feedConcentration}mol% feed into ${distillateConcentration}mol% distillate and ${bottomsConcentration}mol% bottoms. For 100kg/h feed, what is the distillate rate in kg/h?`;
                    answer = Math.round(distillateRate * 10) / 10;
                } else {
                    const reactionRate = (Math.floor(Math.random() * 15) + 5) / 10; // 0.5-2.0 mol/L·s
                    const reactorVolume = Math.floor(Math.random() * 50) + 10; // 10-60 L
                    const productionRate = reactionRate * reactorVolume;
                    
                    text = `${chemEngineer} designs a reactor with ${reactionRate}mol/L·s reaction rate in a ${reactorVolume}L reactor. What is the production rate in mol/s?`;
                    answer = Math.round(productionRate * 100) / 100;
                }
                break;

            case 'aerospace':
                const aeroScenarios = ['lift_calculation', 'orbital_velocity', 'thrust_power', 'drag_coefficient', 'rocket_equation'];
                const aeroScenario = aeroScenarios[Math.floor(Math.random() * aeroScenarios.length)];
                const aeroEngineer = engineers[Math.floor(Math.random() * engineers.length)];
                
                if (aeroScenario === 'lift_calculation') {
                    const airDensity = 1.225; // kg/m³ at sea level
                    const velocity4 = Math.floor(Math.random() * 80) + 50; // 50-130 m/s
                    const wingArea = Math.floor(Math.random() * 30) + 20; // 20-50 m²
                    const liftCoefficient = (Math.floor(Math.random() * 8) + 4) / 10; // 0.4-1.2
                    const lift = 0.5 * airDensity * velocity4 * velocity4 * wingArea * liftCoefficient;
                    
                    text = `${aeroEngineer} calculates lift: velocity=${velocity4}m/s, wing area=${wingArea}m², Cl=${liftCoefficient}. What is the lift force in Newtons? (L = ½ρV²ACl, ρ=1.225kg/m³)`;
                    answer = Math.round(lift);
                } else if (aeroScenario === 'orbital_velocity') {
                    const altitude = Math.floor(Math.random() * 500) + 200; // 200-700 km
                    const earthRadius = 6371; // km
                    const gravitationalParameter = 398600; // km³/s²
                    const orbitalRadius = earthRadius + altitude;
                    const orbitalVelocity = Math.sqrt(gravitationalParameter / orbitalRadius);
                    
                    text = `${aeroEngineer} calculates orbital velocity at ${altitude}km altitude. What is the orbital velocity in km/s? (v = √(μ/r), μ=398600km³/s², R_earth=6371km)`;
                    answer = Math.round(orbitalVelocity * 100) / 100;
                } else if (aeroScenario === 'thrust_power') {
                    const thrust = Math.floor(Math.random() * 50000) + 10000; // 10000-60000 N
                    const velocity5 = Math.floor(Math.random() * 300) + 200; // 200-500 m/s
                    const thrustPower = (thrust * velocity5) / 1000000; // Convert to MW
                    
                    text = `${aeroEngineer} calculates thrust power: ${thrust}N thrust at ${velocity5}m/s velocity. What is the thrust power in MW? (P = TV)`;
                    answer = Math.round(thrustPower * 100) / 100;
                } else if (aeroScenario === 'drag_coefficient') {
                    const dragForce = Math.floor(Math.random() * 2000) + 500; // 500-2500 N
                    const airDensity2 = 1.225; // kg/m³
                    const velocity6 = Math.floor(Math.random() * 60) + 40; // 40-100 m/s
                    const frontalArea = Math.floor(Math.random() * 8) + 2; // 2-10 m²
                    const dragCoefficient = (2 * dragForce) / (airDensity2 * velocity6 * velocity6 * frontalArea);
                    
                    text = `${aeroEngineer} measures ${dragForce}N drag force at ${velocity6}m/s with ${frontalArea}m² frontal area. What is the drag coefficient? (Cd = 2D/(ρV²A), ρ=1.225kg/m³)`;
                    answer = Math.round(dragCoefficient * 1000) / 1000;
                } else {
                    const exhaustVelocity = Math.floor(Math.random() * 1000) + 2000; // 2000-3000 m/s
                    const massRatio = (Math.floor(Math.random() * 6) + 2) / 2; // 1-4
                    const deltaV = exhaustVelocity * Math.log(massRatio);
                    
                    text = `${aeroEngineer} designs a rocket with ${exhaustVelocity}m/s exhaust velocity and mass ratio ${massRatio}. What is the delta-v in m/s? (Δv = ve × ln(m0/mf))`;
                    answer = Math.round(deltaV);
                }
                break;

            case 'computer':
                const compScenarios = ['algorithm_complexity', 'data_transfer', 'memory_usage', 'processing_power', 'network_latency'];
                const compScenario = compScenarios[Math.floor(Math.random() * compScenarios.length)];
                const compEngineer = engineers[Math.floor(Math.random() * engineers.length)];
                
                if (compScenario === 'algorithm_complexity') {
                    const inputSize = Math.floor(Math.random() * 500) + 100; // 100-600
                    const operations = inputSize * Math.log2(inputSize); // O(n log n)
                    
                    text = `${compEngineer} analyzes an O(n log n) algorithm with input size ${inputSize}. How many operations are required? (Use log base 2)`;
                    answer = Math.round(operations);
                } else if (compScenario === 'data_transfer') {
                    const fileSize = Math.floor(Math.random() * 800) + 200; // 200-1000 MB
                    const bandwidth = Math.floor(Math.random() * 80) + 20; // 20-100 Mbps
                    const transferTime = (fileSize * 8) / bandwidth; // Convert MB to Mb, divide by Mbps
                    
                    text = `${compEngineer} transfers a ${fileSize}MB file over a ${bandwidth}Mbps connection. How long does it take in seconds? (1 MB = 8 Mb)`;
                    answer = Math.round(transferTime * 10) / 10;
                } else if (compScenario === 'memory_usage') {
                    const arraySize = Math.floor(Math.random() * 5000) + 1000; // 1000-6000 elements
                    const dataTypeSize = [1, 2, 4, 8][Math.floor(Math.random() * 4)]; // bytes per element
                    const memoryUsage = (arraySize * dataTypeSize) / 1024; // KB
                    
                    text = `${compEngineer} creates an array of ${arraySize} elements, each ${dataTypeSize} bytes. What is the memory usage in KB? (1 KB = 1024 bytes)`;
                    answer = Math.round(memoryUsage * 100) / 100;
                } else if (compScenario === 'processing_power') {
                    const clockSpeed = (Math.floor(Math.random() * 25) + 15) / 10; // 1.5-4.0 GHz
                    const coresCount = Math.floor(Math.random() * 12) + 4; // 4-16 cores
                    const instructionsPerCycle = (Math.floor(Math.random() * 3) + 1); // 1-4 IPC
                    const totalInstructions = clockSpeed * 1000000000 * coresCount * instructionsPerCycle; // Instructions per second
                    
                    text = `${compEngineer} specs a ${clockSpeed}GHz processor with ${coresCount} cores, ${instructionsPerCycle} instructions per cycle. What is the peak performance in billion instructions per second?`;
                    answer = Math.round(totalInstructions / 1000000000);
                } else {
                    const distance2 = Math.floor(Math.random() * 5000) + 1000; // 1000-6000 km
                    const speedOfLight2 = 300000; // km/s
                    const latency = (distance2 / speedOfLight2) * 1000; // Convert to ms
                    
                    text = `${compEngineer} calculates network latency over ${distance2}km fiber optic cable. What is the minimum latency in milliseconds? (speed of light ≈ 3×10⁵ km/s)`;
                    answer = Math.round(latency * 100) / 100;
                }
                break;
        }

        this.currentAdvancedProblem = text;
        this.correctAdvancedAnswer = answer;
        this.advancedProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateFinancialProblem() {
        const names = ['Alex Chen', 'Sarah Johnson', 'Michael Rodriguez', 'Emma Davis', 'David Kim', 'Lisa Anderson', 'James Wilson', 'Maria Garcia'];
        const financialTypes = ['compound_interest', 'loan_payment', 'investment_return', 'present_value', 'annuity', 'bond_yield'];
        const financialType = financialTypes[Math.floor(Math.random() * financialTypes.length)];
        
        let text, answer;

        switch (financialType) {
            case 'compound_interest':
                const principal = Math.floor(Math.random() * 40000) + 10000; // $10,000-$50,000
                const interestRate = (Math.floor(Math.random() * 8) + 3) / 100; // 3-11%
                const timePeriod = Math.floor(Math.random() * 15) + 5; // 5-20 years
                const compoundingFreq = [1, 2, 4, 12][Math.floor(Math.random() * 4)]; // annually, semi-annually, quarterly, monthly
                const finalAmount = principal * Math.pow(1 + interestRate/compoundingFreq, compoundingFreq * timePeriod);
                
                const frequencies = {1: 'annually', 2: 'semi-annually', 4: 'quarterly', 12: 'monthly'};
                const name = names[Math.floor(Math.random() * names.length)];
                
                text = `${name} invests $${principal} at ${(interestRate * 100).toFixed(1)}% interest compounded ${frequencies[compoundingFreq]} for ${timePeriod} years. What is the final amount? (A = P(1 + r/n)^(nt))`;
                answer = Math.round(finalAmount * 100) / 100;
                break;

            case 'loan_payment':
                const loanAmount = Math.floor(Math.random() * 200000) + 50000; // $50,000-$250,000
                const annualRate = (Math.floor(Math.random() * 6) + 3) / 100; // 3-9%
                const monthlyRate = annualRate / 12;
                const loanTermYears = Math.floor(Math.random() * 20) + 10; // 10-30 years
                const numPayments = loanTermYears * 12;
                const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
                
                const name2 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name2} takes a $${loanAmount} loan at ${(annualRate * 100).toFixed(1)}% annual interest for ${loanTermYears} years. What is the monthly payment? (PMT = PV × [r(1+r)^n]/[(1+r)^n-1])`;
                answer = Math.round(monthlyPayment * 100) / 100;
                break;

            case 'investment_return':
                const initialInvestment = Math.floor(Math.random() * 30000) + 5000; // $5,000-$35,000
                const finalValue = initialInvestment * (Math.floor(Math.random() * 150) + 120) / 100; // 120-270% of initial
                const investmentYears = Math.floor(Math.random() * 8) + 2; // 2-10 years
                const annualReturn = Math.pow(finalValue / initialInvestment, 1/investmentYears) - 1;
                
                const name3 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name3}'s investment grew from $${initialInvestment} to $${Math.round(finalValue)} over ${investmentYears} years. What was the annual return rate as a percentage? (r = (FV/PV)^(1/n) - 1)`;
                answer = Math.round(annualReturn * 10000) / 100; // Convert to percentage with 2 decimal places
                break;

            case 'present_value':
                const futureValue = Math.floor(Math.random() * 80000) + 20000; // $20,000-$100,000
                const discountRate = (Math.floor(Math.random() * 10) + 4) / 100; // 4-14%
                const yearsToFuture = Math.floor(Math.random() * 12) + 3; // 3-15 years
                const presentValue = futureValue / Math.pow(1 + discountRate, yearsToFuture);
                
                const name4 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name4} expects to receive $${futureValue} in ${yearsToFuture} years. With a ${(discountRate * 100).toFixed(1)}% discount rate, what is the present value? (PV = FV/(1+r)^n)`;
                answer = Math.round(presentValue * 100) / 100;
                break;

            case 'annuity':
                const annualPayment = Math.floor(Math.random() * 8000) + 2000; // $2,000-$10,000
                const annuityRate = (Math.floor(Math.random() * 8) + 4) / 100; // 4-12%
                const annuityYears = Math.floor(Math.random() * 15) + 10; // 10-25 years
                const annuityPV = annualPayment * (1 - Math.pow(1 + annuityRate, -annuityYears)) / annuityRate;
                
                const name5 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name5} receives $${annualPayment} annually for ${annuityYears} years at ${(annuityRate * 100).toFixed(1)}% interest rate. What is the present value of this annuity? (PV = PMT × [1-(1+r)^-n]/r)`;
                answer = Math.round(annuityPV * 100) / 100;
                break;

            case 'bond_yield':
                const faceValue = 1000; // Standard $1,000 bond
                const couponRate = (Math.floor(Math.random() * 8) + 3) / 100; // 3-11%
                const marketPrice = Math.floor(Math.random() * 200) + 900; // $900-$1,100
                const yearsToMaturity = Math.floor(Math.random() * 8) + 2; // 2-10 years
                const annualCoupon = faceValue * couponRate;
                
                // Simplified current yield calculation
                const currentYield = (annualCoupon / marketPrice) * 100;
                
                const name6 = names[Math.floor(Math.random() * names.length)];
                
                text = `${name6} buys a bond with $${faceValue} face value, ${(couponRate * 100).toFixed(1)}% coupon rate, for $${marketPrice}. What is the current yield percentage? (Current Yield = Annual Coupon / Market Price × 100)`;
                answer = Math.round(currentYield * 100) / 100;
                break;
        }

        this.currentAdvancedProblem = text;
        this.correctAdvancedAnswer = answer;
        this.advancedProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateStatisticalProblem() {
        const researchers = ['Dr. Smith', 'Prof. Johnson', 'Dr. Lee', 'Dr. Brown', 'Prof. Davis', 'Dr. Wilson', 'Dr. Martinez', 'Prof. Taylor'];
        const statisticalTypes = ['mean_median', 'standard_deviation', 'correlation', 'probability', 'confidence_interval', 'hypothesis_test'];
        const statisticalType = statisticalTypes[Math.floor(Math.random() * statisticalTypes.length)];
        
        let text, answer;

        switch (statisticalType) {
            case 'mean_median':
                const dataSize = Math.floor(Math.random() * 6) + 5; // 5-10 data points
                const dataset = [];
                for (let i = 0; i < dataSize; i++) {
                    dataset.push(Math.floor(Math.random() * 50) + 10); // 10-60
                }
                dataset.sort((a, b) => a - b);
                
                const calculateMean = Math.random() < 0.5;
                const researcher = researchers[Math.floor(Math.random() * researchers.length)];
                
                if (calculateMean) {
                    const mean = dataset.reduce((sum, val) => sum + val, 0) / dataset.length;
                    text = `${researcher} collects data: [${dataset.join(', ')}]. What is the mean (average)?`;
                    answer = Math.round(mean * 100) / 100;
                } else {
                    let median;
                    if (dataset.length % 2 === 0) {
                        median = (dataset[dataset.length/2 - 1] + dataset[dataset.length/2]) / 2;
                    } else {
                        median = dataset[Math.floor(dataset.length/2)];
                    }
                    text = `${researcher} collects data: [${dataset.join(', ')}]. What is the median?`;
                    answer = median;
                }
                break;

            case 'standard_deviation':
                const sampleSize = Math.floor(Math.random() * 5) + 5; // 5-10 data points
                const sampleData = [];
                for (let i = 0; i < sampleSize; i++) {
                    sampleData.push(Math.floor(Math.random() * 20) + 10); // 10-30
                }
                
                const sampleMean = sampleData.reduce((sum, val) => sum + val, 0) / sampleData.length;
                const variance = sampleData.reduce((sum, val) => sum + Math.pow(val - sampleMean, 2), 0) / (sampleData.length - 1);
                const stdDev = Math.sqrt(variance);
                
                const researcher2 = researchers[Math.floor(Math.random() * researchers.length)];
                
                text = `${researcher2} has sample data: [${sampleData.join(', ')}]. What is the sample standard deviation? (Use n-1 in denominator)`;
                answer = Math.round(stdDev * 100) / 100;
                break;

            case 'correlation':
                // Simplified correlation coefficient calculation
                const n = 5; // 5 data points for simplicity
                const xValues = [1, 2, 3, 4, 5];
                const yValues = [];
                
                // Generate y values with some correlation
                const baseCorrelation = (Math.random() - 0.5) * 1.8; // -0.9 to 0.9
                for (let i = 0; i < n; i++) {
                    yValues.push(Math.floor((xValues[i] * baseCorrelation + Math.random() * 4) * 10) / 10);
                }
                
                const meanX = xValues.reduce((sum, val) => sum + val, 0) / n;
                const meanY = yValues.reduce((sum, val) => sum + val, 0) / n;
                
                let numerator = 0, denomX = 0, denomY = 0;
                for (let i = 0; i < n; i++) {
                    numerator += (xValues[i] - meanX) * (yValues[i] - meanY);
                    denomX += Math.pow(xValues[i] - meanX, 2);
                    denomY += Math.pow(yValues[i] - meanY, 2);
                }
                
                const correlation = numerator / Math.sqrt(denomX * denomY);
                
                const researcher3 = researchers[Math.floor(Math.random() * researchers.length)];
                
                text = `${researcher3} has paired data: X=[${xValues.join(', ')}], Y=[${yValues.join(', ')}]. What is the correlation coefficient r? (Round to 3 decimal places)`;
                answer = Math.round(correlation * 1000) / 1000;
                break;

            case 'probability':
                const probScenarios = ['combination', 'conditional', 'binomial', 'normal_approx'];
                const probScenario = probScenarios[Math.floor(Math.random() * probScenarios.length)];
                const researcher4 = researchers[Math.floor(Math.random() * researchers.length)];
                
                if (probScenario === 'combination') {
                    const totalItems = Math.floor(Math.random() * 8) + 8; // 8-16 items
                    const chooseItems = Math.floor(Math.random() * 4) + 3; // 3-7 items
                    
                    // Calculate combination C(n,r) = n! / (r!(n-r)!)
                    function factorial(num) {
                        if (num <= 1) return 1;
                        return num * factorial(num - 1);
                    }
                    
                    const combinations = factorial(totalItems) / (factorial(chooseItems) * factorial(totalItems - chooseItems));
                    
                    text = `${researcher4} needs to choose ${chooseItems} participants from ${totalItems} volunteers. How many different combinations are possible? C(${totalItems},${chooseItems})`;
                    answer = combinations;
                } else if (probScenario === 'conditional') {
                    const totalPopulation = Math.floor(Math.random() * 200) + 300; // 300-500
                    const eventA = Math.floor(totalPopulation * (Math.random() * 0.3 + 0.4)); // 40-70% of total
                    const bothEvents = Math.floor(eventA * (Math.random() * 0.4 + 0.3)); // 30-70% of A
                    const conditionalProb = (bothEvents / eventA) * 100;
                    
                    text = `${researcher4} studies ${totalPopulation} people. ${eventA} have condition A, ${bothEvents} have both A and B. What is P(B|A) as a percentage? (Round to 1 decimal)`;
                    answer = Math.round(conditionalProb * 10) / 10;
                } else if (probScenario === 'binomial') {
                    const trials = Math.floor(Math.random() * 8) + 8; // 8-16 trials
                    const successProb = (Math.floor(Math.random() * 6) + 2) / 10; // 0.2-0.8
                    const successes = Math.floor(Math.random() * 4) + 2; // 2-6 successes
                    
                    // Simplified binomial calculation for small numbers
                    function combination(n, r) {
                        if (r > n) return 0;
                        let result = 1;
                        for (let i = 0; i < r; i++) {
                            result *= (n - i) / (i + 1);
                        }
                        return result;
                    }
                    
                    const binomialProb = combination(trials, successes) * Math.pow(successProb, successes) * Math.pow(1 - successProb, trials - successes);
                    
                    text = `${researcher4} conducts ${trials} trials with ${(successProb * 100).toFixed(0)}% success probability. What is P(exactly ${successes} successes)? (Round to 4 decimal places)`;
                    answer = Math.round(binomialProb * 10000) / 10000;
                } else {
                    const sampleMean2 = Math.floor(Math.random() * 20) + 40; // 40-60
                    const populationMean = sampleMean2 + (Math.random() - 0.5) * 6; // ±3 from sample mean
                    const standardError = (Math.random() * 2) + 1; // 1-3
                    const zScore = (sampleMean2 - populationMean) / standardError;
                    
                    text = `${researcher4} finds sample mean ${sampleMean2}, population mean ${Math.round(populationMean * 10) / 10}, standard error ${Math.round(standardError * 100) / 100}. What is the z-score? (Round to 2 decimal places)`;
                    answer = Math.round(zScore * 100) / 100;
                }
                break;

            case 'confidence_interval':
                const sampleMean3 = Math.floor(Math.random() * 30) + 50; // 50-80
                const standardDev = (Math.random() * 5) + 3; // 3-8
                const sampleSize2 = Math.floor(Math.random() * 20) + 30; // 30-50
                const confidenceLevel = [90, 95, 99][Math.floor(Math.random() * 3)];
                
                // Z-scores for common confidence levels
                const zScores = {90: 1.645, 95: 1.96, 99: 2.576};
                const zScore2 = zScores[confidenceLevel];
                
                const marginOfError = zScore2 * (standardDev / Math.sqrt(sampleSize2));
                const lowerBound = sampleMean3 - marginOfError;
                const upperBound = sampleMean3 + marginOfError;
                
                const researcher5 = researchers[Math.floor(Math.random() * researchers.length)];
                
                text = `${researcher5} has sample mean ${sampleMean3}, std dev ${Math.round(standardDev * 100) / 100}, n=${sampleSize2}. What is the margin of error for ${confidenceLevel}% confidence? (z=${zScore2})`;
                answer = Math.round(marginOfError * 100) / 100;
                break;

            case 'hypothesis_test':
                const sampleMean4 = Math.floor(Math.random() * 20) + 45; // 45-65
                const hypothesizedMean = Math.floor(Math.random() * 10) + 50; // 50-60
                const sampleStdDev = (Math.random() * 4) + 2; // 2-6
                const sampleSize3 = Math.floor(Math.random() * 15) + 25; // 25-40
                
                const tStatistic = (sampleMean4 - hypothesizedMean) / (sampleStdDev / Math.sqrt(sampleSize3));
                
                const researcher6 = researchers[Math.floor(Math.random() * researchers.length)];
                
                text = `${researcher6} tests H₀: μ = ${hypothesizedMean} vs H₁: μ ≠ ${hypothesizedMean}. Sample: mean=${sampleMean4}, s=${Math.round(sampleStdDev * 100) / 100}, n=${sampleSize3}. What is the t-statistic? (Round to 3 decimal places)`;
                answer = Math.round(tStatistic * 1000) / 1000;
                break;
        }

        this.currentAdvancedProblem = text;
        this.correctAdvancedAnswer = answer;
        this.advancedProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateOptimizationProblem() {
        const managers = ['Manager Chen', 'Director Smith', 'CEO Johnson', 'VP Rodriguez', 'Manager Davis', 'Director Kim', 'CEO Wilson', 'VP Garcia'];
        const optimizationTypes = ['linear_programming', 'cost_minimization', 'profit_maximization', 'resource_allocation', 'inventory_optimization', 'transportation'];
        const optimizationType = optimizationTypes[Math.floor(Math.random() * optimizationTypes.length)];
        
        let text, answer;

        switch (optimizationType) {
            case 'linear_programming':
                const product1Price = Math.floor(Math.random() * 15) + 10; // $10-$25
                const product2Price = Math.floor(Math.random() * 20) + 15; // $15-$35
                const laborConstraint = Math.floor(Math.random() * 200) + 300; // 300-500 hours
                const product1Labor = Math.floor(Math.random() * 4) + 2; // 2-6 hours
                const product2Labor = Math.floor(Math.random() * 6) + 4; // 4-10 hours
                
                // Solve simple 2-variable linear programming graphically
                const maxProduct1 = Math.floor(laborConstraint / product1Labor);
                const maxProduct2 = Math.floor(laborConstraint / product2Labor);
                
                // Check corner points
                const corner1Profit = maxProduct1 * product1Price; // All product 1
                const corner2Profit = maxProduct2 * product2Price; // All product 2
                
                const maxProfit = Math.max(corner1Profit, corner2Profit);
                
                const manager = managers[Math.floor(Math.random() * managers.length)];
                
                text = `${manager} maximizes profit: Product A ($${product1Price}, ${product1Labor}h), Product B ($${product2Price}, ${product2Labor}h). Labor limit: ${laborConstraint}h. What is maximum profit from corner points (all A or all B)?`;
                answer = maxProfit;
                break;

            case 'cost_minimization':
                const supplier1Cost = (Math.floor(Math.random() * 8) + 12) / 10; // $1.2-$2.0 per unit
                const supplier2Cost = (Math.floor(Math.random() * 10) + 15) / 10; // $1.5-$2.5 per unit
                const totalDemandSupplier = Math.floor(Math.random() * 300) + 200; // 200-500 units
                const supplier1Capacity = Math.floor(Math.random() * 200) + 100; // 100-300 units
                
                // Simple cost minimization: use cheaper supplier first
                let totalCost;
                if (supplier1Cost < supplier2Cost) {
                    const fromSupplier1 = Math.min(supplier1Capacity, totalDemandSupplier);
                    const fromSupplier2 = Math.max(0, totalDemandSupplier - supplier1Capacity);
                    totalCost = fromSupplier1 * supplier1Cost + fromSupplier2 * supplier2Cost;
                } else {
                    const fromSupplier2 = Math.min(totalDemandSupplier, 1000); // Assume supplier 2 has large capacity
                    totalCost = fromSupplier2 * supplier2Cost;
                }
                
                const manager2 = managers[Math.floor(Math.random() * managers.length)];
                
                text = `${manager2} needs ${totalDemandSupplier} units. Supplier 1: $${supplier1Cost}/unit (max ${supplier1Capacity}), Supplier 2: $${supplier2Cost}/unit. What is minimum total cost using cheaper supplier first?`;
                answer = Math.round(totalCost * 100) / 100;
                break;

            case 'profit_maximization':
                const sellingPrice = Math.floor(Math.random() * 30) + 20; // $20-$50
                const variableCost = Math.floor(Math.random() * 15) + 5; // $5-$20
                const fixedCosts = Math.floor(Math.random() * 5000) + 2000; // $2000-$7000
                const maxCapacity = Math.floor(Math.random() * 200) + 100; // 100-300 units
                
                const unitProfit = sellingPrice - variableCost;
                const maxTotalProfit = unitProfit * maxCapacity - fixedCosts;
                
                const manager3 = managers[Math.floor(Math.random() * managers.length)];
                
                text = `${manager3} sells products at $${sellingPrice}, variable cost $${variableCost}, fixed costs $${fixedCosts}. Max capacity: ${maxCapacity} units. What is maximum profit at full capacity?`;
                answer = maxTotalProfit;
                break;

            case 'resource_allocation':
                const project1Return = Math.floor(Math.random() * 15) + 10; // 10-25% return
                const project2Return = Math.floor(Math.random() * 12) + 8; // 8-20% return
                const project3Return = Math.floor(Math.random() * 20) + 5; // 5-25% return
                const totalBudget = Math.floor(Math.random() * 500000) + 100000; // $100k-$600k
                
                // Simple allocation: invest in highest return project
                const returns = [
                    {project: 'A', return: project1Return},
                    {project: 'B', return: project2Return},
                    {project: 'C', return: project3Return}
                ];
                returns.sort((a, b) => b.return - a.return);
                
                const bestReturn = returns[0].return;
                const maxExpectedReturn = totalBudget * (bestReturn / 100);
                
                const manager4 = managers[Math.floor(Math.random() * managers.length)];
                
                text = `${manager4} allocates $${totalBudget} budget. Project A: ${project1Return}%, B: ${project2Return}%, C: ${project3Return}% returns. What is maximum expected return investing in best project?`;
                answer = Math.round(maxExpectedReturn);
                break;

            case 'inventory_optimization':
                const annualDemand = Math.floor(Math.random() * 5000) + 2000; // 2000-7000 units
                const orderingCost = Math.floor(Math.random() * 80) + 20; // $20-$100 per order
                const holdingCost = (Math.floor(Math.random() * 8) + 2) / 10; // $0.2-$1.0 per unit per year
                
                // Economic Order Quantity (EOQ) = √(2DS/H)
                const eoq = Math.sqrt((2 * annualDemand * orderingCost) / holdingCost);
                
                const manager5 = managers[Math.floor(Math.random() * managers.length)];
                
                text = `${manager5} optimizes inventory: Annual demand ${annualDemand} units, ordering cost $${orderingCost}, holding cost $${holdingCost}/unit/year. What is the Economic Order Quantity? EOQ = √(2DS/H)`;
                answer = Math.round(eoq);
                break;

            case 'transportation':
                const warehouse1Supply = Math.floor(Math.random() * 200) + 100; // 100-300 units
                const warehouse2Supply = Math.floor(Math.random() * 150) + 100; // 100-250 units
                const store1Demand = Math.floor(Math.random() * 100) + 50; // 50-150 units
                const store2Demand = Math.floor(Math.random() * 100) + 50; // 50-150 units
                const store3Demand = Math.floor(Math.random() * 100) + 50; // 50-150 units
                
                const totalSupply = warehouse1Supply + warehouse2Supply;
                const totalDemandTransport = store1Demand + store2Demand + store3Demand;
                
                // Simple transportation: check if balanced
                const isBalanced = totalSupply === totalDemandTransport;
                const difference = Math.abs(totalSupply - totalDemandTransport);
                
                const manager6 = managers[Math.floor(Math.random() * managers.length)];
                
                if (isBalanced) {
                    text = `${manager6} has balanced transportation: Warehouses supply ${warehouse1Supply}, ${warehouse2Supply} units. Stores demand ${store1Demand}, ${store2Demand}, ${store3Demand} units. What is the total supply (should equal demand)?`;
                    answer = totalSupply;
                } else {
                    text = `${manager6} analyzes transportation: Total supply ${totalSupply} units, total demand ${totalDemandTransport} units. What is the surplus/shortage (positive = surplus)?`;
                    answer = totalSupply - totalDemandTransport;
                }
                break;
        }

        this.currentAdvancedProblem = text;
        this.correctAdvancedAnswer = answer;
        this.advancedProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    generateExponentialProblem() {
        const scientists = ['Dr. Chen', 'Prof. Martinez', 'Dr. Anderson', 'Dr. Kim', 'Prof. Wilson', 'Dr. Taylor', 'Dr. Brown', 'Prof. Davis'];
        const exponentialTypes = ['population_growth', 'radioactive_decay', 'bacterial_growth', 'compound_interest', 'epidemic_spread', 'cooling_heating'];
        const exponentialType = exponentialTypes[Math.floor(Math.random() * exponentialTypes.length)];
        
        let text, answer;

        switch (exponentialType) {
            case 'population_growth':
                const initialPopulation = Math.floor(Math.random() * 5000) + 1000; // 1,000-6,000
                const growthRate = (Math.floor(Math.random() * 8) + 2) / 100; // 2-10% per year
                const timeYears = Math.floor(Math.random() * 8) + 3; // 3-11 years
                const finalPopulation = initialPopulation * Math.pow(Math.E, growthRate * timeYears);
                
                const scientist = scientists[Math.floor(Math.random() * scientists.length)];
                
                text = `${scientist} studies population growth: Initial population ${initialPopulation}, growth rate ${(growthRate * 100).toFixed(1)}% per year. What is the population after ${timeYears} years? (P = P₀e^(rt))`;
                answer = Math.round(finalPopulation);
                break;

            case 'radioactive_decay':
                const initialAmount = Math.floor(Math.random() * 500) + 100; // 100-600 grams
                const halfLife = Math.floor(Math.random() * 15) + 5; // 5-20 years
                const decayTime = Math.floor(Math.random() * 25) + 10; // 10-35 years
                const decayConstant = Math.log(2) / halfLife;
                const remainingAmount = initialAmount * Math.pow(Math.E, -decayConstant * decayTime);
                
                const scientist2 = scientists[Math.floor(Math.random() * scientists.length)];
                
                text = `${scientist2} measures radioactive decay: Initial ${initialAmount}g, half-life ${halfLife} years. How much remains after ${decayTime} years? (N = N₀e^(-λt), λ = ln(2)/t₁/₂)`;
                answer = Math.round(remainingAmount * 100) / 100;
                break;

            case 'bacterial_growth':
                const initialBacteria = Math.floor(Math.random() * 900) + 100; // 100-1,000
                const doublingTime = Math.floor(Math.random() * 4) + 2; // 2-6 hours
                const growthTime = Math.floor(Math.random() * 12) + 6; // 6-18 hours
                const growthConstant = Math.log(2) / doublingTime;
                const finalBacteria = initialBacteria * Math.pow(Math.E, growthConstant * growthTime);
                
                const scientist3 = scientists[Math.floor(Math.random() * scientists.length)];
                
                text = `${scientist3} observes bacterial growth: Initial ${initialBacteria} cells, doubling time ${doublingTime} hours. How many cells after ${growthTime} hours? (N = N₀e^(kt), k = ln(2)/t_double)`;
                answer = Math.round(finalBacteria);
                break;

            case 'compound_interest':
                const principal2 = Math.floor(Math.random() * 40000) + 10000; // $10,000-$50,000
                const interestRate2 = (Math.floor(Math.random() * 8) + 3) / 100; // 3-11%
                const timeYears2 = Math.floor(Math.random() * 12) + 3; // 3-15 years
                const finalAmount2 = principal2 * Math.pow(Math.E, interestRate2 * timeYears2);
                
                const scientist4 = scientists[Math.floor(Math.random() * scientists.length)];
                
                text = `${scientist4} models continuous compound interest: Principal $${principal2}, rate ${(interestRate2 * 100).toFixed(1)}% per year for ${timeYears2} years. What is the final amount? (A = Pe^(rt))`;
                answer = Math.round(finalAmount2 * 100) / 100;
                break;

            case 'epidemic_spread':
                const initialInfected = Math.floor(Math.random() * 50) + 10; // 10-60 people
                const infectionRate = (Math.floor(Math.random() * 15) + 5) / 100; // 5-20% per day
                const timeDays = Math.floor(Math.random() * 8) + 5; // 5-13 days
                const infectedCount = initialInfected * Math.pow(Math.E, infectionRate * timeDays);
                
                const scientist5 = scientists[Math.floor(Math.random() * scientists.length)];
                
                text = `${scientist5} models epidemic spread: Initial ${initialInfected} infected, infection rate ${(infectionRate * 100).toFixed(1)}% per day. How many infected after ${timeDays} days? (I = I₀e^(rt))`;
                answer = Math.round(infectedCount);
                break;

            case 'cooling_heating':
                const initialTemp = Math.floor(Math.random() * 60) + 80; // 80-140°C
                const ambientTemp = Math.floor(Math.random() * 10) + 20; // 20-30°C
                const coolingConstant = (Math.floor(Math.random() * 8) + 2) / 100; // 0.02-0.10 per minute
                const coolingTime = Math.floor(Math.random() * 20) + 10; // 10-30 minutes
                
                // Newton's Law of Cooling: T(t) = Ta + (T0 - Ta)e^(-kt)
                const finalTemp = ambientTemp + (initialTemp - ambientTemp) * Math.pow(Math.E, -coolingConstant * coolingTime);
                
                const scientist6 = scientists[Math.floor(Math.random() * scientists.length)];
                
                text = `${scientist6} measures cooling: Object starts at ${initialTemp}°C, ambient temp ${ambientTemp}°C, cooling constant k=${coolingConstant.toFixed(3)}/min. Temperature after ${coolingTime} minutes? (T = Ta + (T₀-Ta)e^(-kt))`;
                answer = Math.round(finalTemp * 10) / 10;
                break;
        }

        this.currentAdvancedProblem = text;
        this.correctAdvancedAnswer = answer;
        this.advancedProblemDisplay.innerHTML = `<div class="problem-display word-problem">${text}</div>`;
    }

    checkAdvancedAnswer() {
        const userAnswer = parseFloat(this.advancedExerciseAnswer.value);
        
        if (isNaN(userAnswer)) {
            this.showAdvancedFeedback('Please enter a valid number!', false);
            return;
        }

        this.advancedScore.total++;
        
        // Allow for small rounding errors
        const tolerance = 0.01;
        const isCorrect = Math.abs(userAnswer - this.correctAdvancedAnswer) < tolerance;
        
        if (isCorrect) {
            this.advancedScore.correct++;
            this.advancedStreak++;
            this.showAdvancedFeedback(`🎉 Correct! ${this.currentAdvancedProblem} = ${this.correctAdvancedAnswer}`, true);
        } else {
            this.advancedStreak = 0;
            this.showAdvancedFeedback(`❌ Not quite right. ${this.currentAdvancedProblem} = ${this.correctAdvancedAnswer}. You answered ${userAnswer}.`, false);
        }
        
        this.updateAdvancedScoreDisplay();
    }

    showAdvancedFeedback(message, isCorrect) {
        if (this.advancedExerciseFeedback && this.advancedFeedbackMessage) {
            this.advancedFeedbackMessage.innerHTML = `<h4>${message}</h4>`;
            this.advancedExerciseFeedback.className = `exercise-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
            this.advancedExerciseFeedback.classList.remove('hidden');
        }
    }

    updateAdvancedScoreDisplay() {
        if (this.advancedScoreDisplay) {
            this.advancedScoreDisplay.textContent = `${this.advancedScore.correct}/${this.advancedScore.total}`;
        }
        if (this.advancedStreakDisplay) {
            this.advancedStreakDisplay.textContent = this.advancedStreak;
        }
    }

    showFeedback(message, isCorrect) {
        if (this.exerciseFeedback && this.feedbackMessage) {
            this.feedbackMessage.innerHTML = `<h4>${message}</h4>`;
            this.exerciseFeedback.className = `exercise-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
            this.exerciseFeedback.classList.remove('hidden');
        }
    }

    updateScoreDisplay() {
        if (this.scoreDisplay) {
            this.scoreDisplay.textContent = `${this.score.correct}/${this.score.total}`;
        }
        if (this.streakDisplay) {
            this.streakDisplay.textContent = this.streak;
        }
    }

    performOperation(operation) {
        const num1 = parseFloat(this.num1Input.value);
        const num2 = parseFloat(this.num2Input.value);

        // Validation
        if (!this.validateInputs(num1, num2, operation)) {
            return;
        }

        let result;
        let operationString;

        try {
            switch (operation) {
                case 'add':
                    result = this.add(num1, num2);
                    operationString = `${num1} + ${num2} = ${result}`;
                    break;
                case 'subtract':
                    result = this.subtract(num1, num2);
                    operationString = `${num1} - ${num2} = ${result}`;
                    break;
                case 'multiply':
                    result = this.multiply(num1, num2);
                    operationString = `${num1} × ${num2} = ${result}`;
                    break;
                case 'divide':
                    result = this.divide(num1, num2);
                    operationString = `${num1} ÷ ${num2} = ${result}`;
                    break;
                case 'power':
                    result = this.power(num1, num2);
                    operationString = `${num1}^${num2} = ${result}`;
                    break;
                case 'sqrt':
                    result = this.sqrt(num1);
                    operationString = `√${num1} = ${result}`;
                    break;
                case 'percentage':
                    result = this.percentage(num1, num2);
                    operationString = `${num1}% of ${num2} = ${result}`;
                    break;
                default:
                    throw new Error('Invalid operation');
            }

            this.displayResult(result);
            this.addToHistory(operationString);
            this.animateResult();

        } catch (error) {
            this.displayError(error.message);
        }
    }

    // Math operation methods
    add(a, b) {
        return this.roundResult(a + b);
    }

    subtract(a, b) {
        return this.roundResult(a - b);
    }

    multiply(a, b) {
        return this.roundResult(a * b);
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return this.roundResult(a / b);
    }

    power(a, b) {
        const result = Math.pow(a, b);
        if (!isFinite(result)) {
            throw new Error('Result is too large or invalid');
        }
        return this.roundResult(result);
    }

    sqrt(a) {
        if (a < 0) {
            throw new Error('Cannot calculate square root of negative number');
        }
        return this.roundResult(Math.sqrt(a));
    }

    percentage(a, b) {
        return this.roundResult((a / 100) * b);
    }

    roundResult(result) {
        // Round to 10 decimal places to avoid floating point errors
        return Math.round(result * 10000000000) / 10000000000;
    }

    validateInputs(num1, num2, operation) {
        let isValid = true;

        // Check if inputs exist
        if (!this.num1Input || !this.num2Input) {
            console.error('Input elements not found');
            return false;
        }

        // Check first number
        if (isNaN(num1) || this.num1Input.value.trim() === '') {
            this.showError(this.num1Input, 'Please enter a valid number');
            isValid = false;
        }

        // Check difficulty-based constraints
        if (!isNaN(num1) && this.currentDifficulty) {
            const constraints = this.getConstraintsForDifficulty(this.currentDifficulty);
            if (num1 < constraints.min || num1 > constraints.max) {
                this.showError(this.num1Input, `Number must be between ${constraints.min} and ${constraints.max}`);
                isValid = false;
            }
        }

        // Check second number (not needed for square root)
        if (operation !== 'sqrt' && (isNaN(num2) || this.num2Input.value.trim() === '')) {
            this.showError(this.num2Input, 'Please enter a valid number');
            isValid = false;
        }

        // Check second number constraints
        if (operation !== 'sqrt' && !isNaN(num2) && this.currentDifficulty) {
            const constraints = this.getConstraintsForDifficulty(this.currentDifficulty);
            if (num2 < constraints.min || num2 > constraints.max) {
                this.showError(this.num2Input, `Number must be between ${constraints.min} and ${constraints.max}`);
                isValid = false;
            }
        }

        return isValid;
    }

    getConstraintsForDifficulty(difficulty) {
        const constraints = {
            beginner: { min: 1, max: 50 },
            intermediate: { min: 1, max: 1000 },
            advanced: { min: -Infinity, max: Infinity }
        };
        return constraints[difficulty] || constraints.beginner;
    }

    showError(input, message) {
        input.classList.add('error');
        
        // Remove existing error message
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Add new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }

    removeError(input) {
        input.classList.remove('error');
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    displayResult(result) {
        if (this.resultDisplay) {
            this.resultDisplay.textContent = result;
        }
    }

    displayError(message) {
        if (this.resultDisplay) {
            this.resultDisplay.textContent = `Error: ${message}`;
            this.resultDisplay.style.color = '#e74c3c';
            
            setTimeout(() => {
                this.resultDisplay.style.color = 'white';
            }, 3000);
        }
    }

    animateResult() {
        if (this.resultDisplay) {
            this.resultDisplay.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.resultDisplay.style.transform = 'scale(1)';
            }, 200);
        }
    }

    addToHistory(operation) {
        const timestamp = new Date().toLocaleString();
        this.history.unshift({
            operation,
            timestamp,
            id: Date.now()
        });

        // Keep only last 50 operations
        if (this.history.length > 50) {
            this.history = this.history.slice(0, 50);
        }

        this.saveHistory();
        this.updateHistoryDisplay();
    }

    saveHistory() {
        localStorage.setItem('mathHistory', JSON.stringify(this.history));
    }

    updateHistoryDisplay() {
        if (!this.historyList) return;
        
        this.historyList.innerHTML = '';
        
        if (this.history.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'No calculations yet';
            li.style.textAlign = 'center';
            li.style.fontStyle = 'italic';
            li.style.color = '#666';
            this.historyList.appendChild(li);
            return;
        }

        this.history.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div style="font-weight: bold; margin-bottom: 5px;">${item.operation}</div>
                <div style="font-size: 0.9em; color: #666;">${item.timestamp}</div>
            `;

            this.historyList.appendChild(li);
        });
    }

    clearInputs() {
        if (this.num1Input) {
            this.num1Input.value = '';
            this.removeError(this.num1Input);
        }
        if (this.num2Input) {
            this.num2Input.value = '';
            this.removeError(this.num2Input);
        }
        if (this.resultDisplay) {
            this.resultDisplay.textContent = '0';
        }
        if (this.hintSection) {
            this.hintSection.classList.add('hidden');
        }
        if (this.num1Input) {
            this.num1Input.focus();
        }
    }

    toggleHistory() {
        if (!this.historySection || !this.historyBtn) return;
        
        const isVisible = this.historySection.classList.contains('show');
        
        if (isVisible) {
            this.historySection.classList.remove('show');
            this.historyBtn.textContent = 'Show History';
        } else {
            this.historySection.classList.add('show');
            this.historyBtn.textContent = 'Hide History';
            this.updateHistoryDisplay();
        }
    }

    clearHistory() {
        if (confirm('Are you sure you want to clear all calculation history?')) {
            this.history = [];
            this.saveHistory();
            this.updateHistoryDisplay();
        }
    }

    rebindGeometricButtons() {
        // Re-query all geometric exercise type buttons (including newly added ones)
        this.geometricExerciseTypeButtons = document.querySelectorAll('.geometric-exercise-type-btn');
        
        // Clear existing event listeners and re-bind
        this.geometricExerciseTypeButtons.forEach(btn => {
            // Clone the button to remove all event listeners
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            // Add the new event listener
            newBtn.addEventListener('click', (e) => {
                const exerciseType = e.target.dataset.type;
                const isInLearningSection = e.target.closest('#geometricLearningSection');
                
                if (isInLearningSection) {
                    // If clicked in learning section, show learning content
                    this.showGeometricLearning(exerciseType);
                } else {
                    // If clicked in exercises section, start exercises directly
                    this.startGeometricExerciseType(exerciseType);
                }
            });
        });
        
        // Update the reference to the new buttons
        this.geometricExerciseTypeButtons = document.querySelectorAll('.geometric-exercise-type-btn');
    }

    rebindAdvancedGeometricButtons() {
        // Re-query all advanced geometric exercise type buttons (including newly added ones)
        this.advancedGeometricExerciseTypeButtons = document.querySelectorAll('.advanced-geometric-exercise-type-btn');
        
        // Clear existing event listeners and re-bind
        this.advancedGeometricExerciseTypeButtons.forEach(btn => {
            // Clone the button to remove all event listeners
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            // Add the new event listener
            newBtn.addEventListener('click', (e) => {
                const exerciseType = e.target.dataset.type;
                const isInLearningSection = e.target.closest('#advancedGeometricLearningSection');
                
                if (isInLearningSection) {
                    // If clicked in learning section, show learning content
                    this.showAdvancedGeometricLearning(exerciseType);
                } else {
                    // If clicked in exercises section, start exercises directly
                    this.startAdvancedGeometricExerciseType(exerciseType);
                }
            });
        });
        
        // Update the reference to the new buttons
        this.advancedGeometricExerciseTypeButtons = document.querySelectorAll('.advanced-geometric-exercise-type-btn');
    }

    showAdvancedGeometricLearningWithCurrentType() {
        // First show the advanced geometric learning section
        this.showAdvancedGeometricLearningSection();
        
        // If we have a current exercise type, show its learning content
        if (this.currentAdvancedGeometricExerciseType) {
            this.showAdvancedGeometricLearning(this.currentAdvancedGeometricExerciseType);
        }
    }

    showGeometricLearningWithCurrentType() {
        // First show the geometric learning section
        this.showGeometricLearningSection();
        
        // If we have a current exercise type, show its learning content
        if (this.currentGeometricExerciseType) {
            this.showGeometricLearning(this.currentGeometricExerciseType);
        } else {
            // If no current type, just show the type selection
            this.showGeometricSelection();
        }
    }

    // Knowledge Check Functions
    showKnowledgeCheckSection() {
        // Hide welcome screen
        this.welcomeScreen.classList.add('hidden');
        
        // Hide calculator screen
        if (this.calculatorScreen) {
            this.calculatorScreen.classList.add('hidden');
        }
        
        // Show knowledge check section
        const knowledgeCheckSection = document.getElementById('knowledgeCheckSection');
        if (knowledgeCheckSection) {
            knowledgeCheckSection.classList.remove('hidden');
            // Initialize Knowledge Check component if not already done
            if (!window.knowledgeCheckComponent) {
                window.knowledgeCheckComponent = new KnowledgeCheckComponent();
            }
        }
    }

    // Dictionary Functions
    showDictionarySection() {
        // Hide welcome screen
        this.welcomeScreen.classList.add('hidden');
        
        // Hide calculator screen
        if (this.calculatorScreen) {
            this.calculatorScreen.classList.add('hidden');
        }
        
        // Show dictionary section
        if (this.dictionarySection) {
            this.dictionarySection.classList.remove('hidden');
            this.initializeDictionary();
        }
    }
    
    initializeDictionary() {
        // Initialize search functionality
        const searchInput = document.getElementById('dictionarySearch');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const backToHomeBtn = document.getElementById('backToHome');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterDictionaryTerms(e.target.value);
            });
        }
        
        if (categoryBtns) {
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    // Remove active class from all buttons
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    e.target.classList.add('active');
                    
                    const category = e.target.dataset.category;
                    this.filterDictionaryByCategory(category);
                });
            });
        }
        
        if (backToHomeBtn) {
            backToHomeBtn.addEventListener('click', () => {
                this.showWelcomeScreen();
            });
        }
    }
    
    filterDictionaryTerms(searchTerm) {
        const termItems = document.querySelectorAll('.term-item');
        const termGroups = document.querySelectorAll('.term-group');
        
        searchTerm = searchTerm.toLowerCase();
        
        if (!searchTerm) {
            // Show all visible terms based on current category
            const activeCategory = document.querySelector('.category-btn.active').dataset.category;
            this.filterDictionaryByCategory(activeCategory);
            return;
        }
        
        termGroups.forEach(group => {
            let hasVisibleTerms = false;
            const groupTerms = group.querySelectorAll('.term-item');
            
            groupTerms.forEach(item => {
                const title = item.querySelector('h4').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                const example = item.querySelector('.term-example')?.textContent.toLowerCase() || '';
                
                if (title.includes(searchTerm) || description.includes(searchTerm) || example.includes(searchTerm)) {
                    item.style.display = 'block';
                    hasVisibleTerms = true;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide group based on whether it has visible terms
            group.style.display = hasVisibleTerms ? 'block' : 'none';
        });
    }
    
    filterDictionaryByCategory(category) {
        const termGroups = document.querySelectorAll('.term-group');
        const searchInput = document.getElementById('dictionarySearch');
        
        // Clear search when changing categories
        if (searchInput) {
            searchInput.value = '';
        }
        
        termGroups.forEach(group => {
            if (category === 'all' || group.dataset.category === category) {
                group.style.display = 'block';
                // Show all terms within visible groups
                const termItems = group.querySelectorAll('.term-item');
                termItems.forEach(item => item.style.display = 'block');
            } else {
                group.style.display = 'none';
            }
        });
    }
    
    showWelcomeScreen() {
        // Use comprehensive DOM reset to hide all sections
        this.resetDOMToInitialState();
        
        // Reset any stored difficulty
        this.currentDifficulty = null;
        localStorage.removeItem('currentDifficulty');
    }
}

// Utility functions for advanced operations
class AdvancedMath {
    static factorial(n) {
        if (n < 0) return undefined;
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    static fibonacci(n) {
        if (n <= 1) return n;
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            [a, b] = [b, a + b];
        }
        return b;
    }

    static isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }

    static gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return Math.abs(a);
    }

    static lcm(a, b) {
        return Math.abs(a * b) / AdvancedMath.gcd(a, b);
    }
}

window.addEventListener('beforeunload', () => {
  localStorage.removeItem('currentDifficulty');
});

// Initialize the calculator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.mathWizard = new MathCalculator();
    
    // Add some visual feedback
    console.log('🧮 Math Operations App loaded successfully!');
    console.log('✨ Features: Basic operations, history, error handling');
    console.log('📱 Responsive design for all devices');
});

// Service Worker registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(() => console.log('Service Worker registration failed'));
    });
}
