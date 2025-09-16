// Knowledge Check Component Class
class KnowledgeCheckComponent {
    constructor() {
        this.currentExerciseType = null;
        this.currentProblem = null;
        this.score = 0;
        this.totalQuestions = 0;
        this.streak = 0;
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Knowledge Check exercise type buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('knowledge-check-type-btn')) {
                const exerciseType = e.target.dataset.type;
                this.showKnowledgeCheckLearningContent(exerciseType);
            }
        });

        // Knowledge Check exercise type buttons in exercises section
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('knowledge-check-exercise-type-btn')) {
                const exerciseType = e.target.dataset.type;
                this.startKnowledgeCheckExerciseType(exerciseType);
            }
        });

        // Start Knowledge Check exercises button
        const startKnowledgeCheckBtn = document.getElementById('startKnowledgeCheckExercisesBtn');
        if (startKnowledgeCheckBtn) {
            startKnowledgeCheckBtn.addEventListener('click', () => {
                this.startKnowledgeCheckExercises();
            });
        }

        // Back to Knowledge Check selection button
        const backToSelectionBtn = document.getElementById('backToKnowledgeCheckSelectionBtn');
        if (backToSelectionBtn) {
            backToSelectionBtn.addEventListener('click', () => {
                this.showKnowledgeCheckSelection();
            });
        }

        // Check answer button
        const checkAnswerBtn = document.getElementById('knowledgeCheckCheckAnswerBtn');
        if (checkAnswerBtn) {
            checkAnswerBtn.addEventListener('click', () => {
                this.checkKnowledgeCheckAnswer();
            });
        }

        // Next problem button
        const nextProblemBtn = document.getElementById('knowledgeCheckNextProblemBtn');
        if (nextProblemBtn) {
            nextProblemBtn.addEventListener('click', () => {
                this.generateKnowledgeCheckProblem();
            });
        }

        // New exercise type button
        const newTypeBtn = document.getElementById('knowledgeCheckNewExerciseTypeBtn');
        if (newTypeBtn) {
            newTypeBtn.addEventListener('click', () => {
                this.showKnowledgeCheckExerciseTypeSelection();
            });
        }

        // Back to learning button
        const backToLearningBtn = document.getElementById('knowledgeCheckBackToLearningBtn');
        if (backToLearningBtn) {
            backToLearningBtn.addEventListener('click', () => {
                this.showKnowledgeCheckLearning();
            });
        }

        // Home button in Knowledge Check section
        const homeBtn = document.getElementById('knowledgeCheckHomeBtn');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                this.goToHome();
            });
        }

        // Home button in Knowledge Check exercises section
        const exerciseHomeBtn = document.getElementById('knowledgeCheckExerciseHomeBtn');
        if (exerciseHomeBtn) {
            exerciseHomeBtn.addEventListener('click', () => {
                this.goToHome();
            });
        }

        // Enter key support for answer input
        const answerInput = document.getElementById('knowledgeCheckExerciseAnswer');
        if (answerInput) {
            answerInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.checkKnowledgeCheckAnswer();
                }
            });
            
            // Clear error feedback when user starts typing
            answerInput.addEventListener('input', () => {
                const feedback = document.getElementById('knowledgeCheckExerciseFeedback');
                const feedbackMessage = document.getElementById('knowledgeCheckFeedbackMessage');
                
                // Only clear if it's showing an error message
                if (feedback && !feedback.classList.contains('hidden') && 
                    feedbackMessage && feedbackMessage.innerHTML.includes('feedback-error')) {
                    feedback.classList.add('hidden');
                }
            });
        }
    }

    showKnowledgeCheckLearningContent(exerciseType) {
        // Hide exercise type selection
        document.querySelector('.knowledge-check-type-selection').classList.add('hidden');
        
        // Hide all learning content
        const allContents = document.querySelectorAll('.operation-explanation');
        allContents.forEach(content => content.classList.add('hidden'));
        
        // Show specific content
        const contentId = exerciseType + 'Learning';
        const targetContent = document.getElementById(contentId);
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }
        
        // Show learning content container
        document.getElementById('knowledgeCheckLearningContent').classList.remove('hidden');
        
        // Store current exercise type
        this.currentExerciseType = exerciseType;
        
        // Show back to selection button
        document.getElementById('backToKnowledgeCheckSelectionBtn').classList.remove('hidden');
    }

    showKnowledgeCheckSelection() {
        // Show exercise type selection
        document.querySelector('.knowledge-check-type-selection').classList.remove('hidden');
        
        // Hide learning content
        document.getElementById('knowledgeCheckLearningContent').classList.add('hidden');
        
        // Hide back to selection button
        document.getElementById('backToKnowledgeCheckSelectionBtn').classList.add('hidden');
        
        // Clear current exercise type
        this.currentExerciseType = null;
    }

    startKnowledgeCheckExercises() {
        if (!this.currentExerciseType) {
            alert('Please select an exercise type first.');
            return;
        }

        // Hide learning section
        document.getElementById('knowledgeCheckSection').classList.add('hidden');
        
        // Show exercises section
        document.getElementById('knowledgeCheckExercisesSection').classList.remove('hidden');
        
        // Start the specific exercise type
        this.startKnowledgeCheckExerciseType(this.currentExerciseType);
    }

    startKnowledgeCheckExerciseType(exerciseType) {
        this.currentExerciseType = exerciseType;
        
        // Hide exercise type selection
        document.querySelector('.knowledge-check-exercise-type-selection').classList.add('hidden');
        
        // Show exercise content
        document.getElementById('knowledgeCheckExerciseContent').classList.remove('hidden');
        
        // Reset scores
        this.score = 0;
        this.totalQuestions = 0;
        this.streak = 0;
        this.updateKnowledgeCheckScore();
        
        // Generate first problem
        this.generateKnowledgeCheckProblem();
    }

    generateKnowledgeCheckProblem() {
        const titleElement = document.getElementById('knowledgeCheckExerciseTitle');
        const problemDisplay = document.getElementById('knowledgeCheckProblemDisplay');
        const answerInput = document.getElementById('knowledgeCheckExerciseAnswer');
        const feedback = document.getElementById('knowledgeCheckExerciseFeedback');
        const checkAnswerBtn = document.getElementById('knowledgeCheckCheckAnswerBtn');
        
        // Clear previous feedback and input
        feedback.classList.add('hidden');
        answerInput.value = '';
        answerInput.disabled = false; // Re-enable input
        checkAnswerBtn.disabled = false; // Re-enable check button
        answerInput.focus();

        let problem = {};
        
        switch (this.currentExerciseType) {
            case 'terminology':
                problem = this.generateTerminologyProblem();
                titleElement.textContent = 'Math Terminology';
                break;
            case 'fill-in-blank':
                problem = this.generateFillInBlankProblem();
                titleElement.textContent = 'Fill in the Blanks';
                break;
            case 'multiple-choice':
                problem = this.generateMultipleChoiceProblem();
                titleElement.textContent = 'Multiple Choice';
                break;
            case 'true-false':
                problem = this.generateTrueFalseProblem();
                titleElement.textContent = 'True or False';
                break;
            default:
                problem = this.generateTerminologyProblem();
                titleElement.textContent = 'Math Terminology';
        }

        this.currentProblem = problem;
        
        // Apply appropriate CSS class based on problem type
        if (problem.question.includes('word-problem')) {
            problemDisplay.innerHTML = problem.question;
        } else {
            problemDisplay.innerHTML = `<div class="knowledge-check-problem">${problem.question}</div>`;
        }
    }

    generateTerminologyProblem() {
        const terminologyQuestions = [
            { question: "What is a <strong>number</strong>?", answer: "A mathematical object used to count, measure, and label", type: "text" },
            { question: "What is an <strong>integer</strong>?", answer: "A whole number including negatives", type: "text" },
            { question: "What is an <strong>even number</strong>?", answer: "A number divisible by 2", type: "text" },
            { question: "What is an <strong>odd number</strong>?", answer: "A number not divisible by 2", type: "text" },
            { question: "What is a <strong>prime number</strong>?", answer: "A number greater than 1 with exactly two factors: 1 and itself", type: "text" },
            { question: "What is <strong>addition</strong>?", answer: "Combining two or more numbers to get their sum", type: "text" },
            { question: "What is <strong>subtraction</strong>?", answer: "Taking away one number from another to get the difference", type: "text" },
            { question: "What is <strong>multiplication</strong>?", answer: "Repeated addition or finding the product of numbers", type: "text" },
            { question: "What is <strong>division</strong>?", answer: "Splitting a number into equal parts or finding the quotient", type: "text" },
            { question: "What is an <strong>equation</strong>?", answer: "A mathematical statement showing two expressions are equal", type: "text" },
            { question: "What is a <strong>fraction</strong>?", answer: "A number representing part of a whole", type: "text" },
            { question: "What is a <strong>decimal</strong>?", answer: "A number with a decimal point", type: "text" },
            { question: "What is a <strong>percentage</strong>?", answer: "A fraction expressed as parts per hundred", type: "text" },
            { question: "What is <strong>geometry</strong>?", answer: "The branch of mathematics dealing with shapes and space", type: "text" },
            { question: "What is <strong>area</strong>?", answer: "The amount of space inside a shape", type: "text" },
            { question: "What is <strong>perimeter</strong>?", answer: "The distance around the edge of a shape", type: "text" },
            { question: "What is <strong>volume</strong>?", answer: "The amount of space inside a 3D object", type: "text" },
            { question: "What is an <strong>angle</strong>?", answer: "The amount of turn between two lines", type: "text" },
            { question: "What is <strong>algebra</strong>?", answer: "The branch of mathematics using letters to represent numbers", type: "text" },
            { question: "What is a <strong>variable</strong>?", answer: "A letter that represents an unknown number", type: "text" },
            
            // Additional terminology questions
            { question: "What is a <strong>composite number</strong>?", answer: "A number greater than 1 that has more than two factors", type: "text" },
            { question: "What is a <strong>natural number</strong>?", answer: "A positive counting number starting from 1", type: "text" },
            { question: "What is a <strong>whole number</strong>?", answer: "A natural number including zero", type: "text" },
            { question: "What is a <strong>rational number</strong>?", answer: "A number that can be expressed as a fraction", type: "text" },
            { question: "What is an <strong>irrational number</strong>?", answer: "A number that cannot be expressed as a simple fraction", type: "text" },
            { question: "What is <strong>exponentiation</strong>?", answer: "Repeated multiplication of a number by itself", type: "text" },
            { question: "What is a <strong>square root</strong>?", answer: "A number that when multiplied by itself gives the original number", type: "text" },
            { question: "What is the <strong>absolute value</strong>?", answer: "The distance of a number from zero on the number line", type: "text" },
            { question: "What is a <strong>coefficient</strong>?", answer: "A numerical factor in front of a variable", type: "text" },
            { question: "What is a <strong>constant</strong>?", answer: "A fixed value that does not change", type: "text" },
            { question: "What is an <strong>expression</strong>?", answer: "A mathematical phrase with numbers, variables, and operations", type: "text" },
            { question: "What is an <strong>inequality</strong>?", answer: "A mathematical statement comparing two expressions with >, <, ≥, or ≤", type: "text" },
            { question: "What is <strong>factorization</strong>?", answer: "Breaking down a number or expression into its factors", type: "text" },
            { question: "What is the <strong>order of operations</strong>?", answer: "The rules for performing calculations in a specific sequence", type: "text" },
            { question: "What is <strong>PEMDAS</strong>?", answer: "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction", type: "text" },
            { question: "What is a <strong>polygon</strong>?", answer: "A closed figure made of straight line segments", type: "text" },
            { question: "What is <strong>congruent</strong>?", answer: "Having the same size and shape", type: "text" },
            { question: "What is <strong>similar</strong>?", answer: "Having the same shape but different size", type: "text" },
            { question: "What is <strong>symmetry</strong>?", answer: "When one half of a shape is a mirror image of the other half", type: "text" },
            { question: "What is <strong>parallel</strong>?", answer: "Lines that never intersect and are always the same distance apart", type: "text" },
            { question: "What is <strong>perpendicular</strong>?", answer: "Lines that intersect at a right angle (90 degrees)", type: "text" },
            { question: "What is <strong>circumference</strong>?", answer: "The distance around the edge of a circle", type: "text" },
            { question: "What is <strong>diameter</strong>?", answer: "A straight line passing through the center of a circle", type: "text" },
            { question: "What is <strong>radius</strong>?", answer: "The distance from the center of a circle to its edge", type: "text" },
            { question: "What is <strong>statistics</strong>?", answer: "The study of collecting, analyzing, and interpreting data", type: "text" },
            { question: "What is <strong>probability</strong>?", answer: "The likelihood that an event will occur", type: "text" },
            { question: "What is the <strong>mean</strong>?", answer: "The average of a set of numbers", type: "text" },
            { question: "What is the <strong>median</strong>?", answer: "The middle value in an ordered set of numbers", type: "text" },
            { question: "What is the <strong>mode</strong>?", answer: "The number that appears most frequently in a set", type: "text" },
            { question: "What is <strong>range</strong>?", answer: "The difference between the highest and lowest values", type: "text" }
        ];

        const randomIndex = Math.floor(Math.random() * terminologyQuestions.length);
        const selected = terminologyQuestions[randomIndex];
        
        return {
            question: selected.question,
            answer: selected.answer,
            type: selected.type,
            acceptedAnswers: this.generateAcceptedAnswers(selected.answer)
        };
    }

    generateFillInBlankProblem() {
        const fillInBlankQuestions = [
            { question: "A _____ is a number that has exactly two factors: 1 and itself.", answer: "prime number", type: "text" },
            { question: "The result of addition is called a _____.", answer: "sum", type: "text" },
            { question: "The result of subtraction is called the _____.", answer: "difference", type: "text" },
            { question: "The result of multiplication is called a _____.", answer: "product", type: "text" },
            { question: "The result of division is called the _____.", answer: "quotient", type: "text" },
            { question: "5 + 3 = _____", answer: "8", type: "number" },
            { question: "10 - 4 = _____", answer: "6", type: "number" },
            { question: "7 × 8 = _____", answer: "56", type: "number" },
            { question: "36 ÷ 6 = _____", answer: "6", type: "number" },
            { question: "Numbers that end in 0, 2, 4, 6, or 8 are called _____ numbers.", answer: "even", type: "text" },
            { question: "Numbers that end in 1, 3, 5, 7, or 9 are called _____ numbers.", answer: "odd", type: "text" },
            { question: "A _____ is a mathematical statement that shows two expressions are equal.", answer: "equation", type: "text" },
            { question: "The distance around a shape is called its _____.", answer: "perimeter", type: "text" },
            { question: "The space inside a shape is called its _____.", answer: "area", type: "text" },
            { question: "In a fraction, the top number is called the _____.", answer: "numerator", type: "text" },
            { question: "In a fraction, the bottom number is called the _____.", answer: "denominator", type: "text" },
            { question: "100% equals the whole number _____.", answer: "1", type: "number" },
            { question: "50% equals the fraction _____.", answer: "1/2", type: "text" },
            { question: "25% equals the decimal _____.", answer: "0.25", type: "number" },
            { question: "A triangle has _____ sides.", answer: "3", type: "number" },
            
            // Additional fill-in-blank questions
            { question: "12 × 12 = _____", answer: "144", type: "number" },
            { question: "144 ÷ 12 = _____", answer: "12", type: "number" },
            { question: "15 + 27 = _____", answer: "42", type: "number" },
            { question: "100 - 37 = _____", answer: "63", type: "number" },
            { question: "A square has _____ equal sides.", answer: "4", type: "number" },
            { question: "A rectangle has _____ sides.", answer: "4", type: "number" },
            { question: "A pentagon has _____ sides.", answer: "5", type: "number" },
            { question: "A hexagon has _____ sides.", answer: "6", type: "number" },
            { question: "An octagon has _____ sides.", answer: "8", type: "number" },
            { question: "A circle has _____ sides.", answer: "0", type: "number" },
            { question: "75% equals the fraction _____.", answer: "3/4", type: "text" },
            { question: "0.5 equals the fraction _____.", answer: "1/2", type: "text" },
            { question: "0.75 equals the fraction _____.", answer: "3/4", type: "text" },
            { question: "The _____ of a circle is twice the radius.", answer: "diameter", type: "text" },
            { question: "A _____ angle measures exactly 90 degrees.", answer: "right", type: "text" },
            { question: "An _____ angle measures less than 90 degrees.", answer: "acute", type: "text" },
            { question: "An _____ angle measures more than 90 degrees.", answer: "obtuse", type: "text" },
            { question: "A _____ angle measures exactly 180 degrees.", answer: "straight", type: "text" },
            { question: "The number _____ is neither positive nor negative.", answer: "0", type: "number" },
            { question: "2³ = _____", answer: "8", type: "number" },
            { question: "3² = _____", answer: "9", type: "number" },
            { question: "4² = _____", answer: "16", type: "number" },
            { question: "5² = _____", answer: "25", type: "number" },
            { question: "10² = _____", answer: "100", type: "number" },
            { question: "√16 = _____", answer: "4", type: "number" },
            { question: "√25 = _____", answer: "5", type: "number" },
            { question: "√36 = _____", answer: "6", type: "number" },
            { question: "√49 = _____", answer: "7", type: "number" },
            { question: "√64 = _____", answer: "8", type: "number" },
            { question: "The smallest prime number is _____.", answer: "2", type: "number" },
            { question: "The first composite number is _____.", answer: "4", type: "number" },
            { question: "Half of 100 is _____.", answer: "50", type: "number" },
            { question: "Double of 25 is _____.", answer: "50", type: "number" },
            { question: "One dozen equals _____ items.", answer: "12", type: "number" },
            { question: "There are _____ minutes in an hour.", answer: "60", type: "number" },
            { question: "There are _____ hours in a day.", answer: "24", type: "number" },
            { question: "There are _____ days in a week.", answer: "7", type: "number" },
            { question: "The absolute value of -5 is _____.", answer: "5", type: "number" },
            { question: "The absolute value of 8 is _____.", answer: "8", type: "number" },
            { question: "In the number 345, the digit 3 is in the _____ place.", answer: "hundreds", type: "text" },
            { question: "In the number 567, the digit 7 is in the _____ place.", answer: "ones", type: "text" },
            { question: "In the number 789, the digit 8 is in the _____ place.", answer: "tens", type: "text" }
        ];

        const randomIndex = Math.floor(Math.random() * fillInBlankQuestions.length);
        const selected = fillInBlankQuestions[randomIndex];
        
        return {
            question: selected.question,
            answer: selected.answer,
            type: selected.type,
            acceptedAnswers: this.generateAcceptedAnswers(selected.answer)
        };
    }

    generateMultipleChoiceProblem() {
        const multipleChoiceQuestions = [
            {
                question: "What is 7 × 8?",
                options: ["54", "56", "58", "60"],
                answer: "56",
                type: "text"
            },
            {
                question: "Which number is prime?",
                options: ["4", "6", "7", "8"],
                answer: "7",
                type: "text"
            },
            {
                question: "What is 15 ÷ 3?",
                options: ["3", "4", "5", "6"],
                answer: "5",
                type: "text"
            },
            {
                question: "What is the area of a rectangle with length 6 and width 4?",
                options: ["20", "24", "28", "32"],
                answer: "24",
                type: "text"
            },
            {
                question: "What percentage is equivalent to 1/4?",
                options: ["20%", "25%", "30%", "35%"],
                answer: "25%",
                type: "text"
            },
            {
                question: "Which of these is an even number?",
                options: ["13", "15", "17", "18"],
                answer: "18",
                type: "text"
            },
            {
                question: "What is 2³ (2 to the power of 3)?",
                options: ["6", "7", "8", "9"],
                answer: "8",
                type: "text"
            },
            {
                question: "How many sides does a hexagon have?",
                options: ["4", "5", "6", "7"],
                answer: "6",
                type: "text"
            },
            {
                question: "What is the decimal form of 3/4?",
                options: ["0.5", "0.6", "0.75", "0.8"],
                answer: "0.75",
                type: "text"
            },
            {
                question: "In the equation x + 5 = 12, what is x?",
                options: ["5", "6", "7", "8"],
                answer: "7",
                type: "text"
            },
            
            // Additional multiple choice questions
            {
                question: "What is 9 × 9?",
                options: ["72", "81", "90", "99"],
                answer: "81",
                type: "text"
            },
            {
                question: "What is 144 ÷ 12?",
                options: ["10", "11", "12", "13"],
                answer: "12",
                type: "text"
            },
            {
                question: "Which number is composite?",
                options: ["2", "3", "5", "9"],
                answer: "9",
                type: "text"
            },
            {
                question: "What is √64?",
                options: ["6", "7", "8", "9"],
                answer: "8",
                type: "text"
            },
            {
                question: "What is 5²?",
                options: ["10", "20", "25", "30"],
                answer: "25",
                type: "text"
            },
            {
                question: "What is the perimeter of a square with side length 5?",
                options: ["15", "20", "25", "30"],
                answer: "20",
                type: "text"
            },
            {
                question: "Which fraction is equivalent to 0.5?",
                options: ["1/3", "1/2", "2/3", "3/4"],
                answer: "1/2",
                type: "text"
            },
            {
                question: "What percentage is equivalent to 3/4?",
                options: ["60%", "65%", "70%", "75%"],
                answer: "75%",
                type: "text"
            },
            {
                question: "How many degrees are in a right angle?",
                options: ["45", "90", "180", "360"],
                answer: "90",
                type: "text"
            },
            {
                question: "What is the sum of angles in a triangle?",
                options: ["90°", "120°", "180°", "360°"],
                answer: "180°",
                type: "text"
            },
            {
                question: "Which is the largest?",
                options: ["0.7", "0.75", "0.8", "0.85"],
                answer: "0.85",
                type: "text"
            },
            {
                question: "What is 20% of 100?",
                options: ["15", "20", "25", "30"],
                answer: "20",
                type: "text"
            },
            {
                question: "Which number is irrational?",
                options: ["1/2", "0.75", "π", "3"],
                answer: "π",
                type: "text"
            },
            {
                question: "What is the diameter of a circle with radius 5?",
                options: ["5", "10", "15", "25"],
                answer: "10",
                type: "text"
            },
            {
                question: "What is 15 + 28?",
                options: ["41", "42", "43", "44"],
                answer: "43",
                type: "text"
            },
            {
                question: "What is 100 - 37?",
                options: ["61", "62", "63", "64"],
                answer: "63",
                type: "text"
            },
            {
                question: "Which is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                answer: "2",
                type: "text"
            },
            {
                question: "How many sides does an octagon have?",
                options: ["6", "7", "8", "9"],
                answer: "8",
                type: "text"
            },
            {
                question: "What is |−8|? (absolute value)",
                options: ["−8", "0", "8", "16"],
                answer: "8",
                type: "text"
            },
            {
                question: "In PEMDAS, what comes first?",
                options: ["Parentheses", "Exponents", "Multiplication", "Addition"],
                answer: "Parentheses",
                type: "text"
            },
            {
                question: "What is 4! (4 factorial)?",
                options: ["16", "20", "24", "28"],
                answer: "24",
                type: "text"
            },
            {
                question: "Which unit is used to measure angles?",
                options: ["Meters", "Degrees", "Kilograms", "Seconds"],
                answer: "Degrees",
                type: "text"
            }
        ];

        const randomIndex = Math.floor(Math.random() * multipleChoiceQuestions.length);
        const selected = multipleChoiceQuestions[randomIndex];
        
        let optionsHtml = selected.options.map((option, index) => 
            `<div class="multiple-choice-option-display">
                ${String.fromCharCode(65 + index)}) ${option}
            </div>`
        ).join('');

        return {
            question: `${selected.question}<br><div class="multiple-choice-options-display">${optionsHtml}</div>`,
            answer: selected.answer,
            type: "multiple-choice",
            acceptedAnswers: [
                selected.answer,
                selected.answer.toLowerCase(),
                String.fromCharCode(65 + selected.options.indexOf(selected.answer)), // Letter (A, B, C, D)
                String.fromCharCode(65 + selected.options.indexOf(selected.answer)).toLowerCase() // lowercase letter
            ]
        };
    }

    generateTrueFalseProblem() {
        const trueFalseQuestions = [
            { question: "All even numbers are divisible by 2.", answer: "true", type: "text" },
            { question: "7 is a prime number.", answer: "true", type: "text" },
            { question: "The sum of 5 + 3 is 9.", answer: "false", type: "text" },
            { question: "A triangle has 4 sides.", answer: "false", type: "text" },
            { question: "50% is equal to 1/2.", answer: "true", type: "text" },
            { question: "Multiplication and addition are the same operation.", answer: "false", type: "text" },
            { question: "All odd numbers are prime numbers.", answer: "false", type: "text" },
            { question: "The perimeter is the distance around a shape.", answer: "true", type: "text" },
            { question: "0.5 is equal to 50%.", answer: "true", type: "text" },
            { question: "Division is the opposite of multiplication.", answer: "true", type: "text" },
            { question: "A rectangle has all sides equal.", answer: "false", type: "text" },
            { question: "The area of a shape is measured in square units.", answer: "true", type: "text" },
            { question: "9 is divisible by 3.", answer: "true", type: "text" },
            { question: "A right angle measures 180 degrees.", answer: "false", type: "text" },
            { question: "2 × 6 equals 6 + 6.", answer: "true", type: "text" },
            
            // Additional true/false questions
            { question: "The number 1 is considered a prime number.", answer: "false", type: "text" },
            { question: "The number 0 is neither positive nor negative.", answer: "true", type: "text" },
            { question: "All squares are rectangles.", answer: "true", type: "text" },
            { question: "All rectangles are squares.", answer: "false", type: "text" },
            { question: "The sum of angles in a triangle is 180 degrees.", answer: "true", type: "text" },
            { question: "A circle has infinite sides.", answer: "false", type: "text" },
            { question: "The diameter is twice the radius.", answer: "true", type: "text" },
            { question: "π (pi) is approximately equal to 3.14.", answer: "true", type: "text" },
            { question: "An obtuse angle is greater than 90 degrees.", answer: "true", type: "text" },
            { question: "An acute angle is greater than 90 degrees.", answer: "false", type: "text" },
            { question: "The absolute value of -10 is 10.", answer: "true", type: "text" },
            { question: "The absolute value of a number is always positive.", answer: "true", type: "text" },
            { question: "5² equals 2 × 5.", answer: "false", type: "text" },
            { question: "√25 equals 5.", answer: "true", type: "text" },
            { question: "√16 equals 8.", answer: "false", type: "text" },
            { question: "4! (4 factorial) equals 24.", answer: "true", type: "text" },
            { question: "In PEMDAS, multiplication comes before addition.", answer: "true", type: "text" },
            { question: "In PEMDAS, parentheses are evaluated last.", answer: "false", type: "text" },
            { question: "0.25 is equal to 1/4.", answer: "true", type: "text" },
            { question: "0.75 is equal to 2/3.", answer: "false", type: "text" },
            { question: "75% is equal to 3/4.", answer: "true", type: "text" },
            { question: "1/3 is approximately equal to 0.33.", answer: "true", type: "text" },
            { question: "Parallel lines never meet.", answer: "true", type: "text" },
            { question: "Perpendicular lines meet at a 45-degree angle.", answer: "false", type: "text" },
            { question: "A pentagon has 5 sides.", answer: "true", type: "text" },
            { question: "A hexagon has 7 sides.", answer: "false", type: "text" },
            { question: "An octagon has 8 sides.", answer: "true", type: "text" },
            { question: "The volume of a cube is length × width × height.", answer: "true", type: "text" },
            { question: "The area of a rectangle is length + width.", answer: "false", type: "text" },
            { question: "In a fraction, the numerator is the bottom number.", answer: "false", type: "text" },
            { question: "In a fraction, the denominator is the bottom number.", answer: "true", type: "text" },
            { question: "To convert a fraction to a percentage, multiply by 100.", answer: "true", type: "text" },
            { question: "A negative number multiplied by a negative number gives a positive result.", answer: "true", type: "text" },
            { question: "A negative number multiplied by a positive number gives a negative result.", answer: "true", type: "text" },
            { question: "Zero divided by any number equals zero.", answer: "true", type: "text" },
            { question: "Any number divided by zero equals zero.", answer: "false", type: "text" },
            { question: "The mean is the same as the average.", answer: "true", type: "text" },
            { question: "The median is always the largest number in a set.", answer: "false", type: "text" },
            { question: "The mode is the most frequently occurring number in a set.", answer: "true", type: "text" },
            { question: "Probability can be greater than 1.", answer: "false", type: "text" },
            { question: "A probability of 0.5 means a 50% chance.", answer: "true", type: "text" }
        ];

        const randomIndex = Math.floor(Math.random() * trueFalseQuestions.length);
        const selected = trueFalseQuestions[randomIndex];
        
        return {
            question: `${selected.question}<br><div class="true-false-options">
                <label><input type="radio" name="trueFalse" value="true"> True</label>
                <label><input type="radio" name="trueFalse" value="false"> False</label>
            </div>`,
            answer: selected.answer,
            type: "true-false",
            acceptedAnswers: [selected.answer]
        };
    }

    generateAcceptedAnswers(mainAnswer) {
        const answer = mainAnswer.toLowerCase();
        const variations = [
            answer,
            answer.replace(/\s+/g, ''), // Remove spaces
            answer.replace(/[^\w\s]/g, ''), // Remove punctuation
            answer.replace(/[^\w\s]/g, '').replace(/\s+/g, '') // Remove punctuation and spaces
        ];
        
        // Add common variations
        if (answer.includes('number')) {
            variations.push(answer.replace('number', 'num'));
        }
        
        return [...new Set(variations)]; // Remove duplicates
    }

    checkKnowledgeCheckAnswer() {
        const answerInput = document.getElementById('knowledgeCheckExerciseAnswer');
        const feedback = document.getElementById('knowledgeCheckExerciseFeedback');
        const feedbackMessage = document.getElementById('knowledgeCheckFeedbackMessage');
        
        let userAnswer = '';
        
        if (this.currentProblem.type === 'true-false') {
            const selectedOption = document.querySelector('input[name="trueFalse"]:checked');
            userAnswer = selectedOption ? selectedOption.value : '';
        } else {
            userAnswer = answerInput.value.trim();
        }
        
        if (!userAnswer) {
            // Show feedback message instead of alert
            feedback.classList.remove('hidden');
            feedbackMessage.innerHTML = `
                <div class="feedback-error">
                    <span class="feedback-icon">❌</span>
                    <strong>Please provide an answer before checking.</strong>
                    <p>Enter your answer in the input field above.</p>
                </div>
            `;
            return;
        }
        
        const correctAnswer = this.currentProblem.answer;
        let isCorrect = false;
        
        if (this.currentProblem.type === 'number') {
            const userNum = parseFloat(userAnswer);
            const correctNum = parseFloat(correctAnswer);
            isCorrect = Math.abs(userNum - correctNum) < 0.01;
        } else {
            // Text answer - check against multiple accepted formats
            if (this.currentProblem.acceptedAnswers) {
                isCorrect = this.currentProblem.acceptedAnswers.some(accepted => 
                    userAnswer.toLowerCase() === accepted.toLowerCase() || 
                    userAnswer.toLowerCase().replace(/\s/g, '') === accepted.toLowerCase().replace(/\s/g, '')
                );
            } else {
                isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase() || 
                           userAnswer.toLowerCase().replace(/\s/g, '') === correctAnswer.toLowerCase().replace(/\s/g, '');
            }
        }
        
        this.totalQuestions++;
        
        if (isCorrect) {
            this.score++;
            this.streak++;
            feedbackMessage.innerHTML = `
                <div class="correct-answer">
                    <h4>🎉 Correct!</h4>
                    <p>Great job! The answer is <strong>${correctAnswer}</strong></p>
                    ${this.streak > 1 ? `<p>🔥 Amazing streak: ${this.streak} in a row!</p>` : ''}
                </div>
            `;
            feedbackMessage.className = 'feedback-correct';
        } else {
            this.streak = 0;
            feedbackMessage.innerHTML = `
                <div class="incorrect-answer">
                    <h4>❌ Not quite right</h4>
                    <p>Your answer: <strong>${userAnswer}</strong></p>
                    <p>Correct answer: <strong>${correctAnswer}</strong></p>
                    <p>Keep practicing! You're learning! 💪</p>
                </div>
            `;
            feedbackMessage.className = 'feedback-incorrect';
        }
        
        this.updateKnowledgeCheckScore();
        feedback.classList.remove('hidden');
        
        // Disable input and check button
        answerInput.disabled = true;
        document.getElementById('knowledgeCheckCheckAnswerBtn').disabled = true;
        
        // Disable radio buttons if applicable
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => radio.disabled = true);
    }

    updateKnowledgeCheckScore() {
        document.getElementById('knowledgeCheckScoreDisplay').textContent = `${this.score}/${this.totalQuestions}`;
        document.getElementById('knowledgeCheckStreakDisplay').textContent = this.streak;
    }

    showKnowledgeCheckExerciseTypeSelection() {
        // Hide exercise content
        document.getElementById('knowledgeCheckExerciseContent').classList.add('hidden');
        
        // Show exercise type selection
        document.querySelector('.knowledge-check-exercise-type-selection').classList.remove('hidden');
    }

    showKnowledgeCheckLearning() {
        // Hide exercises section
        document.getElementById('knowledgeCheckExercisesSection').classList.add('hidden');
        
        // Show learning section
        document.getElementById('knowledgeCheckSection').classList.remove('hidden');
        
        // Reset to selection view
        this.showKnowledgeCheckSelection();
    }

    goToHome() {
        // Hide all Knowledge Check sections
        document.getElementById('knowledgeCheckSection').classList.add('hidden');
        document.getElementById('knowledgeCheckExercisesSection').classList.add('hidden');
        
        // Show welcome screen using the main app's method
        if (window.mathWizard && typeof window.mathWizard.showWelcomeScreen === 'function') {
            window.mathWizard.showWelcomeScreen();
        } else {
            // Fallback: manually show welcome screen
            const welcomeScreen = document.getElementById('welcomeScreen');
            if (welcomeScreen) {
                welcomeScreen.classList.remove('hidden');
            }
            
            // Hide calculator screen if it exists
            const calculatorScreen = document.getElementById('calculatorScreen');
            if (calculatorScreen) {
                calculatorScreen.classList.add('hidden');
            }
        }
        
        // Reset component state
        this.currentExerciseType = null;
        this.currentProblem = null;
        this.score = 0;
        this.totalQuestions = 0;
        this.streak = 0;
        
        // Reset to initial view
        this.showKnowledgeCheckSelection();
    }
}

// Initialize Knowledge Check Component when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.knowledgeCheckComponent = new KnowledgeCheckComponent();
});
