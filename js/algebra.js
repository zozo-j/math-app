// Algebra Component Class
class AlgebraComponent {
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
        // Algebra exercise type buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('algebra-exercise-type-btn')) {
                const exerciseType = e.target.dataset.type;
                this.showAlgebraLearningContent(exerciseType);
            }
        });

        // Start algebra exercises button
        const startAlgebraBtn = document.getElementById('startAlgebraExercisesBtn');
        if (startAlgebraBtn) {
            startAlgebraBtn.addEventListener('click', () => {
                this.startAlgebraExercises();
            });
        }

        // Back to algebra selection button
        const backToSelectionBtn = document.getElementById('backToAlgebraSelectionBtn');
        if (backToSelectionBtn) {
            backToSelectionBtn.addEventListener('click', () => {
                this.showAlgebraSelection();
            });
        }

        // Check answer button
        const checkAnswerBtn = document.getElementById('algebraCheckAnswerBtn');
        if (checkAnswerBtn) {
            checkAnswerBtn.addEventListener('click', () => {
                this.checkAlgebraAnswer();
            });
        }

        // Next problem button
        const nextProblemBtn = document.getElementById('algebraNextProblemBtn');
        if (nextProblemBtn) {
            nextProblemBtn.addEventListener('click', () => {
                this.generateAlgebraProblem();
            });
        }

        // New exercise type button
        const newTypeBtn = document.getElementById('algebraNewExerciseTypeBtn');
        if (newTypeBtn) {
            newTypeBtn.addEventListener('click', () => {
                this.showAlgebraExerciseTypeSelection();
            });
        }

        // Back to learning button
        const backToLearningBtn = document.getElementById('algebraBackToLearningBtn');
        if (backToLearningBtn) {
            backToLearningBtn.addEventListener('click', () => {
                this.showAlgebraLearning();
            });
        }

        // Enter key support for answer input
        const answerInput = document.getElementById('algebraExerciseAnswer');
        if (answerInput) {
            answerInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.checkAlgebraAnswer();
                }
            });
        }
    }

    showAlgebraLearningContent(type) {
        // Hide all learning content sections
        const learningContent = document.getElementById('algebraLearningContent');
        const allLearningDivs = learningContent.querySelectorAll('.operation-explanation');
        allLearningDivs.forEach(div => div.classList.add('hidden'));

        // Show specific learning content
        const targetDiv = document.getElementById(`${type.replace(/-/g, '')}Learning`);
        if (targetDiv) {
            targetDiv.classList.remove('hidden');
        }

        // Show the learning content container
        learningContent.classList.remove('hidden');

        // Hide exercise type selection
        document.querySelector('.algebra-exercise-type-selection').style.display = 'none';
    }

    showAlgebraSelection() {
        // Hide learning content
        document.getElementById('algebraLearningContent').classList.add('hidden');
        
        // Show exercise type selection
        document.querySelector('.algebra-exercise-type-selection').style.display = 'block';
    }

    startAlgebraExercises() {
        // Hide learning section
        document.getElementById('algebraLearningSection').classList.add('hidden');
        
        // Show exercises section
        document.getElementById('algebraExercisesSection').classList.remove('hidden');
        
        // Show exercise type selection within exercises
        this.showAlgebraExerciseTypeSelection();
    }

    showAlgebraExerciseTypeSelection() {
        // Hide exercise content
        document.getElementById('algebraExerciseContent').classList.add('hidden');
        
        // Show type selection within exercises section
        const exerciseTypeSelection = document.querySelector('#algebraExercisesSection .algebra-exercise-type-selection');
        if (exerciseTypeSelection) {
            exerciseTypeSelection.style.display = 'block';
        }

        // Set up exercise type button listeners within exercises section
        const exerciseTypeBtns = document.querySelectorAll('#algebraExercisesSection .algebra-exercise-type-btn');
        exerciseTypeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentExerciseType = btn.dataset.type;
                this.startAlgebraExerciseType(this.currentExerciseType);
            });
        });
    }

    startAlgebraExerciseType(type) {
        this.currentExerciseType = type;
        
        // Hide type selection
        const exerciseTypeSelection = document.querySelector('#algebraExercisesSection .algebra-exercise-type-selection');
        if (exerciseTypeSelection) {
            exerciseTypeSelection.style.display = 'none';
        }
        
        // Show exercise content
        document.getElementById('algebraExerciseContent').classList.remove('hidden');
        
        // Reset score for new exercise type
        this.score = 0;
        this.totalQuestions = 0;
        this.streak = 0;
        this.updateAlgebraScore();
        
        // Generate first problem
        this.generateAlgebraProblem();
    }

    generateAlgebraProblem() {
        const titleElement = document.getElementById('algebraExerciseTitle');
        const problemDisplay = document.getElementById('algebraProblemDisplay');
        const answerInput = document.getElementById('algebraExerciseAnswer');
        const feedback = document.getElementById('algebraExerciseFeedback');
        const checkAnswerBtn = document.getElementById('algebraCheckAnswerBtn');
        
        // Clear previous feedback and input
        feedback.classList.add('hidden');
        answerInput.value = '';
        answerInput.disabled = false; // Re-enable input
        checkAnswerBtn.disabled = false; // Re-enable check button
        answerInput.focus();

        let problem = {};
        
        switch (this.currentExerciseType) {
            case 'linear-equations':
                problem = this.generateLinearEquation();
                titleElement.textContent = 'Linear Equation';
                break;
            case 'quadratic-equations':
                problem = this.generateQuadraticEquation();
                titleElement.textContent = 'Quadratic Equation';
                break;
            case 'polynomial-operations':
                problem = this.generatePolynomialOperation();
                titleElement.textContent = 'Polynomial Operation';
                break;
            case 'systems-equations':
                problem = this.generateSystemsEquation();
                titleElement.textContent = 'System of Equations';
                break;
            default:
                problem = this.generateLinearEquation();
                titleElement.textContent = 'Linear Equation';
        }

        this.currentProblem = problem;
        
        // Apply appropriate CSS class based on problem type
        if (problem.question.includes('word-problem')) {
            problemDisplay.innerHTML = problem.question;
        } else {
            problemDisplay.innerHTML = `<div class="calculation-problem">${problem.question}</div>`;
        }
    }

    generateLinearEquation() {
        const types = ['basic', 'variables-both-sides', 'with-fractions'];
        const type = types[Math.floor(Math.random() * types.length)];
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const isProblemSolving = Math.random() < 0.7; // 70% chance for problem-solving format
        
        let a, b, c, solution, question;
        
        switch (type) {
            case 'basic':
                // ax + b = c
                a = Math.floor(Math.random() * 9) + 2; // 2-10
                solution = Math.floor(Math.random() * 19) - 9; // -9 to 9
                c = Math.floor(Math.random() * 20) + 1; // 1-20
                b = c - (a * solution);
                
                if (isProblemSolving) {
                    const linearContexts = [
                        { scenario: 'rental pricing', context: 'A car rental company charges ${a} per day plus a ${Math.abs(b)} ${b >= 0 ? "service fee" : "discount"}. If the total cost is $${c}, how many days was the car rented?', variable: 'days' },
                        { scenario: 'subscription service', context: 'A streaming service costs ${a} per month ${b >= 0 ? `plus a $${b} setup fee` : `with a $${Math.abs(b)} promotional discount`}. If the total bill is $${c}, how many months of service?', variable: 'months' },
                        { scenario: 'phone plan', context: 'A phone plan charges ${a} per gigabyte ${b >= 0 ? `plus $${b} monthly base fee` : `with a $${Math.abs(b)} monthly discount`}. If the bill is $${c}, how many gigabytes were used?', variable: 'gigabytes' },
                        { scenario: 'taxi fare', context: 'A taxi charges ${a} per mile ${b >= 0 ? `plus a $${b} base fare` : `with a $${Math.abs(b)} discount`}. If the total fare is $${c}, how many miles was the trip?', variable: 'miles' },
                        { scenario: 'gym membership', context: 'A gym charges ${a} per visit ${b >= 0 ? `plus a $${b} monthly fee` : `with a $${Math.abs(b)} member discount`}. If the total cost is $${c}, how many visits were made?', variable: 'visits' },
                        { scenario: 'delivery service', context: 'A delivery service charges ${a} per package ${b >= 0 ? `plus a $${b} handling fee` : `with a $${Math.abs(b)} bulk discount`}. If the total cost is $${c}, how many packages were delivered?', variable: 'packages' }
                    ];
                    
                    const context = linearContexts[Math.floor(Math.random() * linearContexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    question = `<div class="word-problem">${name}'s ${context.scenario}: ${context.context}<br><br>Set up and solve the equation: <strong>${a}x ${b >= 0 ? '+' : ''}${b} = ${c}</strong><br>What is x (${context.variable})?</div>`;
                } else {
                    question = `Solve for x:<br><strong>${a}x ${b >= 0 ? '+' : ''}${b} = ${c}</strong>`;
                }
                
                return {
                    question: question,
                    answer: solution,
                    type: 'number'
                };
                
            case 'variables-both-sides':
                // ax + b = cx + d
                a = Math.floor(Math.random() * 5) + 2; // 2-6
                c = Math.floor(Math.random() * 4) + 1; // 1-4
                solution = Math.floor(Math.random() * 10) + 1; // 1-10
                
                const leftSide = a * solution + Math.floor(Math.random() * 10);
                const rightSide = c * solution + Math.floor(Math.random() * 10);
                const d = rightSide - (c * solution);
                b = leftSide - (a * solution);
                
                if (isProblemSolving) {
                    const variableBothSidesContexts = [
                        { scenario: 'competing plans', context: `Plan A: $${a} per unit ${b >= 0 ? `+ $${b} fee` : `- $${Math.abs(b)} discount`}<br>Plan B: $${c} per unit ${d >= 0 ? `+ $${d} fee` : `- $${Math.abs(d)} discount`}<br>At what number of units do both plans cost the same?`, variable: 'units' },
                        { scenario: 'salary comparison', context: `Job A: $${a} per hour ${b >= 0 ? `+ $${b} daily bonus` : `- $${Math.abs(b)} daily deduction`}<br>Job B: $${c} per hour ${d >= 0 ? `+ $${d} daily bonus` : `- $${Math.abs(d)} daily deduction`}<br>After how many hours do both jobs pay the same?`, variable: 'hours' },
                        { scenario: 'investment growth', context: `Investment A grows at $${a} per year ${b >= 0 ? `starting at $${b}` : `starting at -$${Math.abs(b)}`}<br>Investment B grows at $${c} per year ${d >= 0 ? `starting at $${d}` : `starting at -$${Math.abs(d)}`}<br>After how many years will they be equal?`, variable: 'years' },
                        { scenario: 'distance problem', context: `Vehicle A travels ${a} mph ${b >= 0 ? `with a ${b}-mile head start` : `${Math.abs(b)} miles behind`}<br>Vehicle B travels ${c} mph ${d >= 0 ? `with a ${d}-mile head start` : `${Math.abs(d)} miles behind`}<br>After how many hours will they be at the same position?`, variable: 'hours' }
                    ];
                    
                    const context = variableBothSidesContexts[Math.floor(Math.random() * variableBothSidesContexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    question = `<div class="word-problem">${name} is comparing options:<br><br>${context.context}<br><br>Set up and solve: <strong>${a}x ${b >= 0 ? '+' : ''}${b} = ${c}x ${d >= 0 ? '+' : ''}${d}</strong><br>What is x (${context.variable})?</div>`;
                } else {
                    question = `Solve for x:<br><strong>${a}x ${b >= 0 ? '+' : ''}${b} = ${c}x ${d >= 0 ? '+' : ''}${d}</strong>`;
                }
                
                return {
                    question: question,
                    answer: solution,
                    type: 'number'
                };
                
            default:
                return this.generateLinearEquation();
        }
    }

    generateQuadraticEquation() {
        const types = ['factoring', 'quadratic-formula'];
        const type = types[Math.floor(Math.random() * types.length)];
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const isProblemSolving = Math.random() < 0.7; // 70% chance for problem-solving format
        
        if (type === 'factoring') {
            // Generate factorable quadratic
            const root1 = Math.floor(Math.random() * 8) + 1; // 1-8
            const root2 = Math.floor(Math.random() * 8) + 1; // 1-8
            
            // (x - root1)(x - root2) = x² - (root1+root2)x + root1*root2
            const b = -(root1 + root2);
            const c = root1 * root2;
            
            let question;
            if (isProblemSolving) {
                const quadraticContexts = [
                    { scenario: 'projectile motion', context: `A ball is thrown upward. Its height h (in feet) after t seconds is given by h = -16t² + ${Math.abs(b)}t + ${c}. When will the ball hit the ground (h = 0)?`, variable: 'seconds' },
                    { scenario: 'garden design', context: `A rectangular garden has an area of ${c} square meters. If the length is ${Math.abs(b)} meters more than the width, find the dimensions. Width w satisfies: w² + ${Math.abs(b)}w - ${c} = 0`, variable: 'width (meters)' },
                    { scenario: 'business profit', context: `A company's profit P (in thousands) based on price x is: P = -x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}. At what prices will the profit be zero?`, variable: 'price points' },
                    { scenario: 'bridge arch', context: `A parabolic bridge arch follows the equation y = -x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}. Where does the arch touch the ground (y = 0)?`, variable: 'ground points' },
                    { scenario: 'manufacturing', context: `Production cost C based on quantity x follows: C = x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}. When is the cost zero?`, variable: 'quantity levels' }
                ];
                
                const context = quadraticContexts[Math.floor(Math.random() * quadraticContexts.length)];
                const name = names[Math.floor(Math.random() * names.length)];
                
                question = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Solve: <strong>x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = 0</strong><br>Find the values of x (${context.variable}):</div>`;
            } else {
                question = `Solve for x:<br><strong>x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = 0</strong>`;
            }
            
            return {
                question: question,
                answer: `x = ${Math.min(root1, root2)}, x = ${Math.max(root1, root2)}`,
                type: 'text',
                acceptedAnswers: [
                    `x = ${root1}, x = ${root2}`,
                    `x = ${root2}, x = ${root1}`,
                    `${root1}, ${root2}`,
                    `${root2}, ${root1}`,
                    `x=${root1}, x=${root2}`,
                    `x=${root2}, x=${root1}`
                ]
            };
        } else {
            // Simple quadratic formula case
            const a = 1;
            const b = Math.floor(Math.random() * 10) - 5; // -5 to 4
            const c = Math.floor(Math.random() * 6) - 3; // -3 to 2
            
            const discriminant = b * b - 4 * a * c;
            
            if (discriminant >= 0) {
                const sqrtDisc = Math.sqrt(discriminant);
                const x1 = (-b + sqrtDisc) / (2 * a);
                const x2 = (-b - sqrtDisc) / (2 * a);
                
                let question;
                if (isProblemSolving) {
                    const formulaContexts = [
                        { scenario: 'physics experiment', context: `In a physics lab, the position s of an object follows s = t² ${b >= 0 ? '+' : ''}${b}t ${c >= 0 ? '+' : ''}${c}. When is the position zero?`, variable: 'time values' },
                        { scenario: 'economics model', context: `Market demand D follows D = p² ${b >= 0 ? '+' : ''}${b}p ${c >= 0 ? '+' : ''}${c}, where p is price. When is demand zero?`, variable: 'price points' },
                        { scenario: 'engineering design', context: `Stress σ in a beam varies as σ = x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}. Where is stress zero?`, variable: 'positions' },
                        { scenario: 'population study', context: `Population change P = t² ${b >= 0 ? '+' : ''}${b}t ${c >= 0 ? '+' : ''}${c} over time t. When is change zero?`, variable: 'time points' }
                    ];
                    
                    const context = formulaContexts[Math.floor(Math.random() * formulaContexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    question = `<div class="word-problem">${name}'s ${context.scenario}:<br><br>${context.context}<br><br>Use the quadratic formula to solve: <strong>x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = 0</strong><br>Find x (${context.variable}), rounded to 2 decimal places:</div>`;
                } else {
                    question = `Solve for x using any method:<br><strong>x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = 0</strong>`;
                }
                
                return {
                    question: question,
                    answer: `x = ${Math.round(x1 * 100) / 100}, x = ${Math.round(x2 * 100) / 100}`,
                    type: 'text',
                    acceptedAnswers: [
                        `x = ${Math.round(x1 * 100) / 100}, x = ${Math.round(x2 * 100) / 100}`,
                        `x = ${Math.round(x2 * 100) / 100}, x = ${Math.round(x1 * 100) / 100}`,
                        `${Math.round(x1 * 100) / 100}, ${Math.round(x2 * 100) / 100}`,
                        `${Math.round(x2 * 100) / 100}, ${Math.round(x1 * 100) / 100}`
                    ]
                };
            } else {
                return this.generateQuadraticEquation(); // Regenerate if no real solutions
            }
        }
    }

    generatePolynomialOperation() {
        const operations = ['add', 'multiply'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const isProblemSolving = Math.random() < 0.7; // 70% chance for problem-solving format
        
        if (operation === 'add') {
            // (ax² + bx + c) + (dx² + ex + f)
            const a = Math.floor(Math.random() * 5) + 1; // 1-5
            const b = Math.floor(Math.random() * 10) - 5; // -5 to 4
            const c = Math.floor(Math.random() * 10) - 5; // -5 to 4
            const d = Math.floor(Math.random() * 5) + 1; // 1-5
            const e = Math.floor(Math.random() * 10) - 5; // -5 to 4
            const f = Math.floor(Math.random() * 10) - 5; // -5 to 4
            
            const resultA = a + d;
            const resultB = b + e;
            const resultC = c + f;
            
            let question;
            if (isProblemSolving) {
                const additionContexts = [
                    { scenario: 'engineering analysis', context: `Two forces acting on a structure create polynomial expressions for stress:<br>Force 1 stress: ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}<br>Force 2 stress: ${d}x² ${e >= 0 ? '+' : ''}${e}x ${f >= 0 ? '+' : ''}${f}<br>What is the total combined stress?` },
                    { scenario: 'economics modeling', context: `Two market segments have polynomial revenue functions:<br>Segment A: ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}<br>Segment B: ${d}x² ${e >= 0 ? '+' : ''}${e}x ${f >= 0 ? '+' : ''}${f}<br>What is the total revenue function?` },
                    { scenario: 'physics experiment', context: `Two wave functions interfere constructively:<br>Wave 1: ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}<br>Wave 2: ${d}x² ${e >= 0 ? '+' : ''}${e}x ${f >= 0 ? '+' : ''}${f}<br>What is the combined wave function?` },
                    { scenario: 'chemical reaction', context: `Two reaction rates are modeled by polynomials:<br>Reaction A rate: ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}<br>Reaction B rate: ${d}x² ${e >= 0 ? '+' : ''}${e}x ${f >= 0 ? '+' : ''}${f}<br>What is the total reaction rate?` },
                    { scenario: 'population growth', context: `Two species populations grow according to:<br>Species 1: ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}<br>Species 2: ${d}x² ${e >= 0 ? '+' : ''}${e}x ${f >= 0 ? '+' : ''}${f}<br>What is the combined population model?` }
                ];
                
                const context = additionContexts[Math.floor(Math.random() * additionContexts.length)];
                const name = names[Math.floor(Math.random() * names.length)];
                
                question = `<div class="word-problem">${name}'s ${context.scenario}:<br><br>${context.context}<br><br>Add the polynomials: <strong>(${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}) + (${d}x² ${e >= 0 ? '+' : ''}${e}x ${f >= 0 ? '+' : ''}${f})</strong></div>`;
            } else {
                question = `Add the polynomials:<br><strong>(${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}) + (${d}x² ${e >= 0 ? '+' : ''}${e}x ${f >= 0 ? '+' : ''}${f})</strong>`;
            }
            
            let answer = `${resultA}x²`;
            if (resultB !== 0) {
                answer += ` ${resultB >= 0 ? '+' : ''}${resultB}x`;
            }
            if (resultC !== 0) {
                answer += ` ${resultC >= 0 ? '+' : ''}${resultC}`;
            }
            
            return {
                question: question,
                answer: answer.trim(),
                type: 'text'
            };
        } else {
            // (x + a)(x + b) = x² + (a+b)x + ab
            const a = Math.floor(Math.random() * 8) + 1; // 1-8
            const b = Math.floor(Math.random() * 8) + 1; // 1-8
            
            const resultB = a + b;
            const resultC = a * b;
            
            let question;
            if (isProblemSolving) {
                const multiplicationContexts = [
                    { scenario: 'area calculation', context: `A rectangular plot of land has dimensions (x + ${a}) meters by (x + ${b}) meters. What polynomial represents the total area?` },
                    { scenario: 'manufacturing design', context: `A box design has length (x + ${a}) inches and width (x + ${b}) inches. What polynomial gives the base area?` },
                    { scenario: 'garden planning', context: `A garden bed is (x + ${a}) feet long and (x + ${b}) feet wide. What expression represents the planting area?` },
                    { scenario: 'construction project', context: `A foundation measures (x + ${a}) meters by (x + ${b}) meters. What polynomial describes the foundation area?` },
                    { scenario: 'tile installation', context: `A room floor is (x + ${a}) tiles long and (x + ${b}) tiles wide. How many tiles are needed (as a polynomial)?` },
                    { scenario: 'solar panel array', context: `A solar array has (x + ${a}) panels per row and (x + ${b}) rows. What polynomial represents total panels?` }
                ];
                
                const context = multiplicationContexts[Math.floor(Math.random() * multiplicationContexts.length)];
                const name = names[Math.floor(Math.random() * names.length)];
                
                question = `<div class="word-problem">${name}'s ${context.scenario}:<br><br>${context.context}<br><br>Multiply the binomials: <strong>(x + ${a})(x + ${b})</strong></div>`;
            } else {
                question = `Multiply the binomials:<br><strong>(x + ${a})(x + ${b})</strong>`;
            }
            
            const answer = `x² + ${resultB}x + ${resultC}`;
            
            return {
                question: question,
                answer: answer,
                type: 'text'
            };
        }
    }

    generateSystemsEquation() {
        // Simple 2x2 system with integer solutions
        const x = Math.floor(Math.random() * 10) + 1; // 1-10
        const y = Math.floor(Math.random() * 10) + 1; // 1-10
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const isProblemSolving = Math.random() < 0.7; // 70% chance for problem-solving format
        
        // Generate coefficients that will give these solutions
        const a1 = Math.floor(Math.random() * 5) + 1; // 1-5
        const b1 = Math.floor(Math.random() * 5) + 1; // 1-5
        const c1 = a1 * x + b1 * y;
        
        const a2 = Math.floor(Math.random() * 5) + 1; // 1-5
        const b2 = Math.floor(Math.random() * 5) + 1; // 1-5
        const c2 = a2 * x + b2 * y;
        
        let question;
        if (isProblemSolving) {
            const systemsContexts = [
                { scenario: 'ticket sales', context: `Adult tickets cost $${a1} and child tickets cost $${b1}. Total revenue: $${c1}<br>Another day: ${a2} adults and ${b2} children paid $${c2}<br>If x = number of adults and y = number of children on day 1, find x and y.`, variables: 'adults, children' },
                { scenario: 'mixture problem', context: `Mixture A: ${a1} parts substance X, ${b1} parts substance Y = ${c1} total<br>Mixture B: ${a2} parts substance X, ${b2} parts substance Y = ${c2} total<br>If both mixtures use the same amounts of X and Y, find x and y.`, variables: 'substance amounts' },
                { scenario: 'investment portfolio', context: `Portfolio 1: $${a1} per share of stock A, $${b1} per share of stock B = $${c1} total<br>Portfolio 2: $${a2} per share of stock A, $${b2} per share of stock B = $${c2} total<br>Find shares of each stock (x = stock A, y = stock B).`, variables: 'stock shares' },
                { scenario: 'nutrition planning', context: `Meal 1: ${a1}g protein + ${b1}g carbs = ${c1}g total<br>Meal 2: ${a2}g protein + ${b2}g carbs = ${c2}g total<br>If x = protein per unit, y = carbs per unit, find x and y.`, variables: 'nutrient amounts' },
                { scenario: 'production planning', context: `Factory A: ${a1} units of product X + ${b1} units of product Y = ${c1} total<br>Factory B: ${a2} units of product X + ${b2} units of product Y = ${c2} total<br>Find individual production amounts (x, y).`, variables: 'production units' },
                { scenario: 'transportation cost', context: `Route 1: ${a1} miles by car + ${b1} miles by train costs $${c1}<br>Route 2: ${a2} miles by car + ${b2} miles by train costs $${c2}<br>Find cost per mile for each transport type.`, variables: 'cost per mile' }
            ];
            
            const context = systemsContexts[Math.floor(Math.random() * systemsContexts.length)];
            const name = names[Math.floor(Math.random() * names.length)];
            
            question = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Solve the system of equations:<br><strong>${a1}x + ${b1}y = ${c1}<br>${a2}x + ${b2}y = ${c2}</strong><br>Find x and y (${context.variables}):</div>`;
        } else {
            question = `Solve the system of equations:<br><strong>${a1}x + ${b1}y = ${c1}<br>${a2}x + ${b2}y = ${c2}</strong>`;
        }
        
        return {
            question: question,
            answer: `x = ${x}, y = ${y}`,
            type: 'text',
            acceptedAnswers: [
                `x = ${x}, y = ${y}`,
                `y = ${y}, x = ${x}`,
                `x=${x}, y=${y}`,
                `y=${y}, x=${x}`,
                `(${x}, ${y})`,
                `${x}, ${y}`
            ]
        };
    }

    checkAlgebraAnswer() {
        const answerInput = document.getElementById('algebraExerciseAnswer');
        const feedback = document.getElementById('algebraExerciseFeedback');
        const feedbackMessage = document.getElementById('algebraFeedbackMessage');
        
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = this.currentProblem.answer;
        
        let isCorrect = false;
        
        if (this.currentProblem.type === 'number') {
            const userNum = parseFloat(userAnswer);
            const correctNum = parseFloat(correctAnswer);
            isCorrect = Math.abs(userNum - correctNum) < 0.01; // Allow small floating point errors
        } else {
            // Text answer - check against multiple accepted formats
            if (this.currentProblem.acceptedAnswers) {
                isCorrect = this.currentProblem.acceptedAnswers.some(accepted => 
                    userAnswer === accepted.toLowerCase() || 
                    userAnswer.replace(/\s/g, '') === accepted.toLowerCase().replace(/\s/g, '')
                );
            } else {
                isCorrect = userAnswer === correctAnswer.toLowerCase() || 
                           userAnswer.replace(/\s/g, '') === correctAnswer.toLowerCase().replace(/\s/g, '');
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
                    <p>Your answer: <strong>${answerInput.value}</strong></p>
                    <p>Correct answer: <strong>${correctAnswer}</strong></p>
                    <p>Keep practicing! You're learning! 💪</p>
                </div>
            `;
            feedbackMessage.className = 'feedback-incorrect';
        }
        
        this.updateAlgebraScore();
        feedback.classList.remove('hidden');
        
        // Disable input and check button
        answerInput.disabled = true;
        document.getElementById('algebraCheckAnswerBtn').disabled = true;
    }

    updateAlgebraScore() {
        document.getElementById('algebraScoreDisplay').textContent = `${this.score}/${this.totalQuestions}`;
        document.getElementById('algebraStreakDisplay').textContent = this.streak;
    }

    showAlgebraLearning() {
        // Hide exercises section
        document.getElementById('algebraExercisesSection').classList.add('hidden');
        
        // Show learning section
        document.getElementById('algebraLearningSection').classList.remove('hidden');
        
        // Reset to selection view
        this.showAlgebraSelection();
    }
}

// Initialize Algebra Component when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.algebraComponent = new AlgebraComponent();
});
