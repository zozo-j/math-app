class TrigonometryComponent {
    constructor() {
        this.currentExerciseType = null;
        this.exerciseCount = 0;
        this.correctAnswers = 0;
        this.currentProblem = null;
        this.problems = {
            'basic-trig': [
                { problem: 'Find sin(30°)', answer: '0.5', unit: '' },
                { problem: 'Find cos(60°)', answer: '0.5', unit: '' },
                { problem: 'Find tan(45°)', answer: '1', unit: '' },
                { problem: 'Find sin(45°)', answer: '0.707', unit: '' },
                { problem: 'Find cos(30°)', answer: '0.866', unit: '' },
                { problem: 'Find tan(60°)', answer: '1.732', unit: '' },
                { problem: 'Find sin(90°)', answer: '1', unit: '' },
                { problem: 'Find cos(0°)', answer: '1', unit: '' },
                { problem: 'Find tan(30°)', answer: '0.577', unit: '' },
                { problem: 'Find sin(60°)', answer: '0.866', unit: '' }
            ],
            'inverse-trig': [
                { problem: 'Find arcsin(0.5) in degrees', answer: '30', unit: '°' },
                { problem: 'Find arccos(0.5) in degrees', answer: '60', unit: '°' },
                { problem: 'Find arctan(1) in degrees', answer: '45', unit: '°' },
                { problem: 'Find arcsin(1) in degrees', answer: '90', unit: '°' },
                { problem: 'Find arccos(0) in degrees', answer: '90', unit: '°' },
                { problem: 'Find arctan(0) in degrees', answer: '0', unit: '°' },
                { problem: 'Find arcsin(0.707) in degrees', answer: '45', unit: '°' },
                { problem: 'Find arccos(0.866) in degrees', answer: '30', unit: '°' },
                { problem: 'Find arctan(1.732) in degrees', answer: '60', unit: '°' },
                { problem: 'Find arcsin(0.866) in degrees', answer: '60', unit: '°' }
            ],
            'trig-identities': [
                { problem: 'If sin(θ) = 0.6, find cos²(θ)', answer: '0.64', unit: '' },
                { problem: 'If cos(θ) = 0.8, find sin²(θ)', answer: '0.36', unit: '' },
                { problem: 'Find sin²(30°) + cos²(30°)', answer: '1', unit: '' },
                { problem: 'If tan(θ) = 3/4, find sin(θ) when θ is in quadrant I', answer: '0.6', unit: '' },
                { problem: 'If tan(θ) = 3/4, find cos(θ) when θ is in quadrant I', answer: '0.8', unit: '' },
                { problem: 'Find sin(2×30°)', answer: '0.866', unit: '' },
                { problem: 'Find cos(2×30°)', answer: '0.5', unit: '' },
                { problem: 'If sin(θ) = 0.5, find sin(90° - θ)', answer: '0.866', unit: '' },
                { problem: 'Find tan(45°) + tan(45°)', answer: '2', unit: '' },
                { problem: 'If cos(θ) = 0.6, find sin²(θ)', answer: '0.64', unit: '' }
            ],
            'triangle-solving': [
                { problem: 'In a triangle with sides a=3, b=4, find c (right triangle)', answer: '5', unit: '' },
                { problem: 'In triangle ABC, A=60°, b=10, c=8, find side a', answer: '9.17', unit: '' },
                { problem: 'In triangle ABC, a=7, b=24, c=25, find angle A in degrees', answer: '16.26', unit: '°' },
                { problem: 'In a right triangle, if opposite=3 and hypotenuse=5, find adjacent', answer: '4', unit: '' },
                { problem: 'In triangle ABC, A=45°, B=60°, a=10, find side b', answer: '12.25', unit: '' },
                { problem: 'In a right triangle, if angle A=30° and adjacent=10, find opposite', answer: '5.77', unit: '' },
                { problem: 'In triangle ABC, a=8, b=6, C=60°, find side c', answer: '7.21', unit: '' },
                { problem: 'In a right triangle, if opposite=5 and adjacent=12, find hypotenuse', answer: '13', unit: '' },
                { problem: 'In triangle ABC, a=12, b=16, c=20, find angle C in degrees', answer: '90', unit: '°' },
                { problem: 'In a right triangle, if angle A=45° and hypotenuse=10, find opposite', answer: '7.07', unit: '' }
            ]
        };
    }

    showTrigonometryLearningContent(type) {
        // Hide all learning content sections
        const learningContent = document.querySelector('.trigonometry-learning-content');
        const allLearningDivs = learningContent.querySelectorAll('.operation-explanation');
        allLearningDivs.forEach(div => div.classList.add('hidden'));

        // Show specific learning content based on type
        const typeMap = {
            'basic-trig': 'basicTrigLearning',
            'inverse-trig': 'inverseTrigLearning', 
            'trig-identities': 'trigIdentitiesLearning',
            'triangle-solving': 'triangleSolvingLearning'
        };
        
        const targetDiv = document.getElementById(typeMap[type]);
        if (targetDiv) {
            targetDiv.classList.remove('hidden');
        }

        // Show the learning content container
        learningContent.classList.remove('hidden');

        // Hide exercise type selection
        document.querySelector('.trigonometry-exercise-type-selection').classList.add('hidden');
        
        // Store the current type for exercises
        this.currentExerciseType = type;
    }

    showTrigonometrySelection() {
        // Hide learning content
        document.querySelector('.trigonometry-learning-content').classList.add('hidden');
        
        // Show exercise type selection
        document.querySelector('.trigonometry-exercise-type-selection').classList.remove('hidden');
    }

    startTrigonometryExercises() {
        console.log('startTrigonometryExercises called, currentExerciseType:', this.currentExerciseType);
        
        // Ensure we have a current exercise type
        if (!this.currentExerciseType) {
            console.error('No exercise type selected');
            return;
        }
        
        console.log('Using main app to show exercises section');
        
        // Use the main app's screen management to show trigonometry exercises section
        if (window.mathWizard && typeof window.mathWizard.showTrigonometryExercisesSection === 'function') {
            window.mathWizard.showTrigonometryExercisesSection();
            console.log('Called main app showTrigonometryExercisesSection');
        } else {
            console.log('Main app not available, using fallback');
            // Fallback: manually manage visibility
            document.getElementById('trigonometryLearningSection').classList.add('hidden');
            document.getElementById('trigonometryExercisesSection').classList.remove('hidden');
        }
        
        // Initialize exercises
        this.exerciseCount = 0;
        this.correctAnswers = 0;
        
        // Update header based on exercise type
        const headers = {
            'basic-trig': 'Basic Trigonometry Practice',
            'inverse-trig': 'Inverse Trigonometry Practice',
            'trig-identities': 'Trigonometric Identities Practice',
            'triangle-solving': 'Triangle Solving Practice'
        };
        
        console.log('Updating header to:', headers[this.currentExerciseType]);
        document.querySelector('#trigonometryExercisesSection h2').textContent = headers[this.currentExerciseType];
        
        // Update score and generate first problem
        this.updateScore();
        console.log('Generating new problem...');
        this.generateNewProblem();
        
        // Ensure the back to learning button is visible
        const backLearningBtn = document.getElementById('trigonometryBackLearning');
        if (backLearningBtn) {
            backLearningBtn.classList.remove('hidden');
        }
    }

    showTrigonometryExercises(type) {
        // This method is kept for compatibility but the main flow now uses startTrigonometryExercises
        this.currentExerciseType = type;
        this.startTrigonometryExercises();
    }

    generateNewProblem() {
        const problems = this.problems[this.currentExerciseType];
        if (!problems || problems.length === 0) {
            console.error('No problems found for exercise type:', this.currentExerciseType);
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * problems.length);
        this.currentProblem = problems[randomIndex];
        
        // Create problem display with illustration
        const problemDisplay = document.getElementById('trigonometryProblemDisplay');
        problemDisplay.innerHTML = this.createProblemWithIllustration(this.currentProblem);
        
        document.getElementById('trigonometryAnswerInput').value = '';
        document.getElementById('trigonometryExerciseFeedback').classList.add('hidden');
        document.getElementById('trigonometryAnswerInput').focus();
        
        // Ensure exercise controls are visible
        const backLearningBtn = document.getElementById('trigonometryBackLearning');
        if (backLearningBtn) {
            backLearningBtn.classList.remove('hidden');
        }
    }

    generateRandomProblem() {
        // Generate a random problem based on current exercise type with random values
        switch (this.currentExerciseType) {
            case 'basic-trig':
                this.currentProblem = this.generateRandomBasicTrigProblem();
                break;
            case 'inverse-trig':
                this.currentProblem = this.generateRandomInverseTrigProblem();
                break;
            case 'trig-identities':
                this.currentProblem = this.generateRandomTrigIdentityProblem();
                break;
            case 'triangle-solving':
                this.currentProblem = this.generateRandomTriangleProblem();
                break;
            default:
                console.error('Unknown exercise type:', this.currentExerciseType);
                return;
        }
        
        // Create problem display with illustration
        const problemDisplay = document.getElementById('trigonometryProblemDisplay');
        problemDisplay.innerHTML = this.createProblemWithIllustration(this.currentProblem);
        
        document.getElementById('trigonometryAnswerInput').value = '';
        document.getElementById('trigonometryExerciseFeedback').classList.add('hidden');
        document.getElementById('trigonometryAnswerInput').focus();
    }

    generateRandomBasicTrigProblem() {
        const angles = [30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
        const functions = ['sin', 'cos', 'tan'];
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const isProblemSolving = Math.random() < 0.7; // 70% chance for problem-solving format
        
        const randomAngle = angles[Math.floor(Math.random() * angles.length)];
        const randomFunction = functions[Math.floor(Math.random() * functions.length)];
        
        // Skip tan(90°) and tan(270°) as they're undefined
        if (randomFunction === 'tan' && (randomAngle === 90 || randomAngle === 270)) {
            return this.generateRandomBasicTrigProblem(); // Retry
        }
        
        let answer, problem;
        switch (randomFunction) {
            case 'sin':
                answer = Math.sin(randomAngle * Math.PI / 180);
                break;
            case 'cos':
                answer = Math.cos(randomAngle * Math.PI / 180);
                break;
            case 'tan':
                answer = Math.tan(randomAngle * Math.PI / 180);
                break;
        }
        
        if (isProblemSolving) {
            const basicTrigContexts = [
                { scenario: 'surveying', context: `A surveyor measures an angle of ${randomAngle}° from horizontal when sighting a building top. Calculate the ${randomFunction === 'sin' ? 'vertical component ratio' : randomFunction === 'cos' ? 'horizontal component ratio' : 'slope ratio'}.`, func: randomFunction },
                { scenario: 'navigation', context: `A ship changes course by ${randomAngle}° from its original heading. Find the ${randomFunction === 'sin' ? 'north-south component' : randomFunction === 'cos' ? 'east-west component' : 'direction ratio'}.`, func: randomFunction },
                { scenario: 'architecture', context: `A roof has an incline angle of ${randomAngle}° from horizontal. Calculate the ${randomFunction === 'sin' ? 'rise ratio' : randomFunction === 'cos' ? 'run ratio' : 'slope ratio'}.`, func: randomFunction },
                { scenario: 'physics experiment', context: `A projectile is launched at ${randomAngle}° from horizontal. Determine the ${randomFunction === 'sin' ? 'vertical velocity component' : randomFunction === 'cos' ? 'horizontal velocity component' : 'trajectory ratio'}.`, func: randomFunction },
                { scenario: 'engineering design', context: `A mechanical arm rotates ${randomAngle}° from its reference position. Calculate the ${randomFunction === 'sin' ? 'vertical displacement ratio' : randomFunction === 'cos' ? 'horizontal displacement ratio' : 'angular ratio'}.`, func: randomFunction },
                { scenario: 'astronomy', context: `A telescope is positioned at ${randomAngle}° elevation from horizontal. Find the ${randomFunction === 'sin' ? 'altitude component' : randomFunction === 'cos' ? 'azimuth component' : 'pointing ratio'}.`, func: randomFunction }
            ];
            
            const context = basicTrigContexts[Math.floor(Math.random() * basicTrigContexts.length)];
            const name = names[Math.floor(Math.random() * names.length)];
            
            problem = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Calculate: <strong>${randomFunction}(${randomAngle}°)</strong><br>Round to 3 decimal places.</div>`;
        } else {
            problem = `Find ${randomFunction}(${randomAngle}°)`;
        }
        
        return {
            problem: problem,
            answer: Math.round(answer * 1000) / 1000, // Round to 3 decimal places
            unit: ''
        };
    }

    generateRandomInverseTrigProblem() {
        const functions = ['arcsin', 'arccos', 'arctan'];
        const randomFunction = functions[Math.floor(Math.random() * functions.length)];
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const isProblemSolving = Math.random() < 0.7; // 70% chance for problem-solving format
        
        let value, answer, problem;
        switch (randomFunction) {
            case 'arcsin':
                value = Math.round((Math.random() * 2 - 1) * 1000) / 1000; // -1 to 1
                if (Math.abs(value) > 1) value = Math.sign(value) * 0.9; // Keep within valid range
                answer = Math.asin(value) * 180 / Math.PI;
                break;
            case 'arccos':
                value = Math.round((Math.random() * 2 - 1) * 1000) / 1000; // -1 to 1
                if (Math.abs(value) > 1) value = Math.sign(value) * 0.9; // Keep within valid range
                answer = Math.acos(value) * 180 / Math.PI;
                break;
            case 'arctan':
                value = Math.round((Math.random() * 4 - 2) * 1000) / 1000; // -2 to 2
                answer = Math.atan(value) * 180 / Math.PI;
                break;
        }
        
        if (isProblemSolving) {
            const inverseTrigContexts = [
                { scenario: 'construction', context: `A ramp has a ${randomFunction === 'arcsin' ? 'rise/hypotenuse ratio' : randomFunction === 'arccos' ? 'run/hypotenuse ratio' : 'rise/run ratio'} of ${Math.abs(value) < 0.001 ? 0 : value}. What is the angle of the ramp from horizontal?`, func: randomFunction },
                { scenario: 'optics', context: `Light refracts with a ${randomFunction === 'arcsin' ? 'sine ratio' : randomFunction === 'arccos' ? 'cosine ratio' : 'tangent ratio'} of ${Math.abs(value) < 0.001 ? 0 : value}. Find the angle of refraction.`, func: randomFunction },
                { scenario: 'robotics', context: `A robotic arm has a ${randomFunction === 'arcsin' ? 'vertical displacement ratio' : randomFunction === 'arccos' ? 'horizontal displacement ratio' : 'movement ratio'} of ${Math.abs(value) < 0.001 ? 0 : value}. Calculate the joint angle.`, func: randomFunction },
                { scenario: 'civil engineering', context: `A bridge cable has a ${randomFunction === 'arcsin' ? 'height/length ratio' : randomFunction === 'arccos' ? 'span/length ratio' : 'slope ratio'} of ${Math.abs(value) < 0.001 ? 0 : value}. What angle does it make with horizontal?`, func: randomFunction },
                { scenario: 'aeronautics', context: `An aircraft's ${randomFunction === 'arcsin' ? 'climb ratio' : randomFunction === 'arccos' ? 'ground speed ratio' : 'ascent ratio'} is ${Math.abs(value) < 0.001 ? 0 : value}. Find the flight path angle.`, func: randomFunction },
                { scenario: 'seismology', context: `Seismic waves show a ${randomFunction === 'arcsin' ? 'vertical component ratio' : randomFunction === 'arccos' ? 'horizontal component ratio' : 'directional ratio'} of ${Math.abs(value) < 0.001 ? 0 : value}. Calculate the wave arrival angle.`, func: randomFunction }
            ];
            
            const context = inverseTrigContexts[Math.floor(Math.random() * inverseTrigContexts.length)];
            const name = names[Math.floor(Math.random() * names.length)];
            
            problem = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Calculate: <strong>${randomFunction}(${Math.abs(value) < 0.001 ? 0 : value})</strong> in degrees<br>Round to 2 decimal places.</div>`;
        } else {
            problem = `Find ${randomFunction}(${Math.abs(value) < 0.001 ? 0 : value}) in degrees`;
        }
        
        return {
            problem: problem,
            answer: Math.round(answer * 100) / 100, // Round to 2 decimal places
            unit: '°'
        };
    }

    generateRandomTrigIdentityProblem() {
        const identityTypes = [
            'pythagorean', 'complementary', 'double_angle', 'ratio_given'
        ];
        const randomType = identityTypes[Math.floor(Math.random() * identityTypes.length)];
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const isProblemSolving = Math.random() < 0.7; // 70% chance for problem-solving format
        
        let problem, answer;
        
        switch (randomType) {
            case 'pythagorean':
                const sinValue = Math.round((Math.random() * 0.8 + 0.1) * 1000) / 1000; // 0.1 to 0.9
                const cosSquared = 1 - sinValue * sinValue;
                
                if (isProblemSolving) {
                    const pythagoreanContexts = [
                        { scenario: 'signal analysis', context: `In electrical engineering, a sine wave has amplitude ratio sin(θ) = ${sinValue}. Using the Pythagorean identity, find cos²(θ) for the corresponding cosine component.` },
                        { scenario: 'mechanical vibration', context: `A pendulum's displacement shows sin(θ) = ${sinValue}. Calculate cos²(θ) to find the horizontal position component using trigonometric identities.` },
                        { scenario: 'wave physics', context: `Ocean waves show a vertical component ratio of sin(θ) = ${sinValue}. Use the fundamental trigonometric identity to find cos²(θ) for the horizontal component.` },
                        { scenario: 'structural analysis', context: `A building sway has sin(θ) = ${sinValue} for vertical displacement. Calculate cos²(θ) using the Pythagorean identity for horizontal stability analysis.` },
                        { scenario: 'astronomy', context: `A satellite's orbital position shows sin(θ) = ${sinValue} for one coordinate. Find cos²(θ) using trigonometric identities for the perpendicular coordinate.` }
                    ];
                    
                    const context = pythagoreanContexts[Math.floor(Math.random() * pythagoreanContexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    problem = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Given: sin(θ) = ${sinValue}<br>Find: cos²(θ)<br>Round to 3 decimal places.</div>`;
                } else {
                    problem = `If sin(θ) = ${sinValue}, find cos²(θ)`;
                }
                answer = Math.round(cosSquared * 1000) / 1000;
                break;
                
            case 'complementary':
                const angle = [30, 45, 60][Math.floor(Math.random() * 3)];
                const complementAngle = 90 - angle;
                const sinComp = Math.sin(complementAngle * Math.PI / 180);
                
                if (isProblemSolving) {
                    const complementaryContexts = [
                        { scenario: 'surveying', context: `A surveyor measures a ${angle}° angle from horizontal. Using complementary angle identities, find sin(90° - ${angle}°) to determine the perpendicular sight line component.` },
                        { scenario: 'solar panel design', context: `Solar panels are tilted at ${angle}° from horizontal. Calculate sin(90° - ${angle}°) using complementary identities for optimal sunlight angle analysis.` },
                        { scenario: 'radar systems', context: `A radar dish is positioned ${angle}° from horizontal. Find sin(90° - ${angle}°) using complementary angle relationships for vertical scanning coverage.` },
                        { scenario: 'architectural planning', context: `A staircase rises at ${angle}°. Use complementary angle identities to find sin(90° - ${angle}°) for the corresponding horizontal component analysis.` },
                        { scenario: 'ballistics', context: `A projectile is launched at ${angle}° elevation. Calculate sin(90° - ${angle}°) using complementary relationships for trajectory analysis.` }
                    ];
                    
                    const context = complementaryContexts[Math.floor(Math.random() * complementaryContexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    problem = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Calculate: sin(90° - ${angle}°)<br>Round to 3 decimal places.</div>`;
                } else {
                    problem = `Find sin(90° - ${angle}°)`;
                }
                answer = Math.round(sinComp * 1000) / 1000;
                break;
                
            case 'double_angle':
                const baseAngle = [15, 22.5, 30][Math.floor(Math.random() * 3)];
                const doubleAngle = baseAngle * 2;
                const sinDouble = Math.sin(doubleAngle * Math.PI / 180);
                
                if (isProblemSolving) {
                    const doubleAngleContexts = [
                        { scenario: 'oscillation analysis', context: `A mechanical system oscillates with frequency doubling. If the base angle is ${baseAngle}°, use double angle formulas to find sin(2 × ${baseAngle}°) for the harmonic analysis.` },
                        { scenario: 'wave interference', context: `Two waves create interference patterns. Calculate sin(2 × ${baseAngle}°) using double angle identities to analyze the combined wave amplitude at frequency doubling.` },
                        { scenario: 'gear mechanics', context: `A gear system has rotation doubling. Find sin(2 × ${baseAngle}°) using double angle formulas to determine the mechanical advantage at the doubled rotation angle.` },
                        { scenario: 'optics', context: `Light undergoes polarization rotation. Calculate sin(2 × ${baseAngle}°) using double angle identities for the polarization analysis at twice the base angle.` },
                        { scenario: 'control systems', context: `A servo motor doubles its angular displacement. Find sin(2 × ${baseAngle}°) using double angle relationships for precise positioning control.` }
                    ];
                    
                    const context = doubleAngleContexts[Math.floor(Math.random() * doubleAngleContexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    problem = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Calculate: sin(2 × ${baseAngle}°)<br>Round to 3 decimal places.</div>`;
                } else {
                    problem = `Find sin(2 × ${baseAngle}°)`;
                }
                answer = Math.round(sinDouble * 1000) / 1000;
                break;
                
            case 'ratio_given':
                const numerator = Math.floor(Math.random() * 5) + 3; // 3-7
                const denominator = Math.floor(Math.random() * 3) + numerator + 1; // greater than numerator
                const sinVal = numerator / Math.sqrt(numerator * numerator + denominator * denominator);
                
                if (isProblemSolving) {
                    const ratioContexts = [
                        { scenario: 'construction slope', context: `A construction ramp has rise = ${numerator} units and run = ${denominator} units. In quadrant I, calculate sin(θ) where tan(θ) = ${numerator}/${denominator} for safety compliance.` },
                        { scenario: 'navigation bearing', context: `A ship's course shows displacement ratio ${numerator}:${denominator}. Find sin(θ) when tan(θ) = ${numerator}/${denominator} (θ in quadrant I) for navigation calculations.` },
                        { scenario: 'antenna positioning', context: `An antenna array has directional ratio ${numerator}/${denominator}. Calculate sin(θ) where tan(θ) = ${numerator}/${denominator} (quadrant I) for optimal signal transmission.` },
                        { scenario: 'roof design', context: `A roof pitch is ${numerator}:${denominator}. Find sin(θ) given tan(θ) = ${numerator}/${denominator} (θ in quadrant I) for water drainage analysis.` },
                        { scenario: 'robotic arm', context: `A robotic joint has movement ratio ${numerator}/${denominator}. Calculate sin(θ) where tan(θ) = ${numerator}/${denominator} (quadrant I) for precise positioning.` }
                    ];
                    
                    const context = ratioContexts[Math.floor(Math.random() * ratioContexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    problem = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Given: tan(θ) = ${numerator}/${denominator}<br>Find: sin(θ) when θ is in quadrant I<br>Round to 3 decimal places.</div>`;
                } else {
                    problem = `If tan(θ) = ${numerator}/${denominator}, find sin(θ) when θ is in quadrant I`;
                }
                answer = Math.round(sinVal * 1000) / 1000;
                break;
        }
        
        return {
            problem: problem,
            answer: answer,
            unit: ''
        };
    }

    generateRandomTriangleProblem() {
        const problemTypes = ['right_triangle_sides', 'right_triangle_angle', 'general_triangle'];
        const randomType = problemTypes[Math.floor(Math.random() * problemTypes.length)];
        const names = ['Alex', 'Emma', 'Jordan', 'Sam', 'Casey', 'Riley', 'Morgan', 'Quinn', 'Taylor', 'Avery'];
        const isProblemSolving = Math.random() < 0.7; // 70% chance for problem-solving format
        
        let problem, answer, unit = '';
        
        switch (randomType) {
            case 'right_triangle_sides':
                const side1 = Math.floor(Math.random() * 10) + 3; // 3-12
                const side2 = Math.floor(Math.random() * 10) + 3; // 3-12
                const hypotenuse = Math.sqrt(side1 * side1 + side2 * side2);
                
                if (Math.random() < 0.5) {
                    answer = Math.round(hypotenuse * 100) / 100;
                    
                    if (isProblemSolving) {
                        const hypotenuseContexts = [
                            { scenario: 'ladder safety', context: `A ladder must reach ${side1} feet up a wall and its base is ${side2} feet from the wall. What length ladder is needed for safe access?` },
                            { scenario: 'construction', context: `A diagonal brace connects points ${side1} meters vertically and ${side2} meters horizontally on a building frame. Calculate the brace length.` },
                            { scenario: 'surveying', context: `A surveyor measures ${side1} meters north and ${side2} meters east from a reference point. What is the direct distance to the destination?` },
                            { scenario: 'navigation', context: `A boat travels ${side1} miles north then ${side2} miles east. How far is it from the starting point in a straight line?` },
                            { scenario: 'cable installation', context: `A support cable runs from ${side1} feet up a tower to a point ${side2} feet away on the ground. What length of cable is required?` },
                            { scenario: 'packaging design', context: `A rectangular box has height ${side1} inches and width ${side2} inches. Find the diagonal measurement across the face for fitting constraints.` }
                        ];
                        
                        const context = hypotenuseContexts[Math.floor(Math.random() * hypotenuseContexts.length)];
                        const name = names[Math.floor(Math.random() * names.length)];
                        
                        problem = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Using the Pythagorean theorem with opposite=${side1} and adjacent=${side2}, find the hypotenuse.<br>Round to 2 decimal places.</div>`;
                    } else {
                        problem = `In a right triangle, if opposite=${side1} and adjacent=${side2}, find hypotenuse`;
                    }
                } else {
                    const hypot = Math.round(hypotenuse);
                    answer = Math.round(Math.sqrt(hypot * hypot - side1 * side1) * 100) / 100;
                    
                    if (isProblemSolving) {
                        const adjacentContexts = [
                            { scenario: 'bridge engineering', context: `A bridge support cable is ${hypot} meters long and rises ${side1} meters vertically. Calculate the horizontal span for structural analysis.` },
                            { scenario: 'roof construction', context: `A roof rafter is ${hypot} feet long with a ${side1}-foot vertical rise. Find the horizontal run for the roof design.` },
                            { scenario: 'antenna installation', context: `A guy-wire is ${hypot} meters long, extending ${side1} meters up an antenna tower. What is the horizontal distance from the tower base?` },
                            { scenario: 'playground design', context: `A slide is ${hypot} feet long with a vertical drop of ${side1} feet. Calculate the horizontal base distance for safety clearance.` },
                            { scenario: 'ramp design', context: `A wheelchair ramp has a ${hypot}-foot length and rises ${side1} feet. Find the horizontal distance covered for accessibility compliance.` }
                        ];
                        
                        const context = adjacentContexts[Math.floor(Math.random() * adjacentContexts.length)];
                        const name = names[Math.floor(Math.random() * names.length)];
                        
                        problem = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Given: hypotenuse=${hypot}, opposite=${side1}<br>Find: adjacent side<br>Round to 2 decimal places.</div>`;
                    } else {
                        problem = `In a right triangle, if opposite=${side1} and hypotenuse=${hypot}, find adjacent`;
                    }
                }
                break;
                
            case 'right_triangle_angle':
                const angle = [30, 45, 60][Math.floor(Math.random() * 3)];
                const adjacent = Math.floor(Math.random() * 15) + 5; // 5-19
                const opposite = adjacent * Math.tan(angle * Math.PI / 180);
                answer = Math.round(opposite * 100) / 100;
                
                if (isProblemSolving) {
                    const angleContexts = [
                        { scenario: 'solar panel installation', context: `Solar panels are tilted at ${angle}° from horizontal. If the horizontal base is ${adjacent} feet, calculate the vertical height for optimal sun exposure.` },
                        { scenario: 'stairs construction', context: `A staircase rises at ${angle}° angle with a horizontal run of ${adjacent} inches per step. Find the vertical rise per step for building code compliance.` },
                        { scenario: 'surveying', context: `A surveyor sights up at ${angle}° angle and measures ${adjacent} meters horizontally to a landmark. Calculate the vertical height difference.` },
                        { scenario: 'aircraft approach', context: `An airplane descends at ${angle}° below horizontal, covering ${adjacent} meters horizontally. Find the vertical descent distance for landing calculations.` },
                        { scenario: 'mountaineering', context: `A climbing route ascends at ${angle}° from horizontal. After ${adjacent} meters of horizontal distance, how much vertical elevation is gained?` },
                        { scenario: 'conveyor belt design', context: `A conveyor belt inclines at ${angle}° with ${adjacent} feet horizontal length. Calculate the vertical lift for material handling efficiency.` }
                    ];
                    
                    const context = angleContexts[Math.floor(Math.random() * angleContexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    problem = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Given: angle A = ${angle}°, adjacent = ${adjacent}<br>Find: opposite side<br>Round to 2 decimal places.</div>`;
                } else {
                    problem = `In a right triangle, if angle A=${angle}° and adjacent=${adjacent}, find opposite`;
                }
                break;
                
            case 'general_triangle':
                const a = Math.floor(Math.random() * 10) + 5; // 5-14
                const b = Math.floor(Math.random() * 10) + 5; // 5-14
                const angleC = [45, 60, 90, 120][Math.floor(Math.random() * 4)];
                
                // Use law of cosines: c² = a² + b² - 2ab*cos(C)
                const cosC = Math.cos(angleC * Math.PI / 180);
                const cSquared = a * a + b * b - 2 * a * b * cosC;
                const c = Math.sqrt(cSquared);
                answer = Math.round(c * 100) / 100;
                
                if (isProblemSolving) {
                    const lawOfCosinesContexts = [
                        { scenario: 'land surveying', context: `A triangular property has two boundary lines of ${a} meters and ${b} meters meeting at an angle of ${angleC}°. Find the length of the third boundary line for deed documentation.` },
                        { scenario: 'structural engineering', context: `A triangular truss has two members of ${a} feet and ${b} feet connected at a ${angleC}° angle. Calculate the third member length for structural stability.` },
                        { scenario: 'navigation', context: `A ship travels ${a} miles northeast, then ${b} miles at ${angleC}° from its previous direction. How far is it from the starting point?` },
                        { scenario: 'robotics', context: `A robotic arm has segments of ${a} cm and ${b} cm with a joint angle of ${angleC}°. Find the end-effector distance from the base for path planning.` },
                        { scenario: 'sports field design', context: `A triangular sports facility has sides of ${a} yards and ${b} yards meeting at ${angleC}°. Calculate the third side length for perimeter fencing.` },
                        { scenario: 'astronomy', context: `Two observation points are ${a} km and ${b} km from a reference, with an angular separation of ${angleC}°. Find the distance between observation points.` }
                    ];
                    
                    const context = lawOfCosinesContexts[Math.floor(Math.random() * lawOfCosinesContexts.length)];
                    const name = names[Math.floor(Math.random() * names.length)];
                    
                    problem = `<div class="word-problem">${name}'s ${context.scenario} problem:<br><br>${context.context}<br><br>Using the Law of Cosines: a=${a}, b=${b}, C=${angleC}°<br>Find: side c<br>Round to 2 decimal places.</div>`;
                } else {
                    problem = `In triangle ABC, a=${a}, b=${b}, C=${angleC}°, find side c`;
                }
                break;
        }
        
        return {
            problem: problem,
            answer: answer,
            unit: unit
        };
    }

    createProblemWithIllustration(problem) {
        const problemText = problem.problem;
        let illustration = '';
        
        // Generate appropriate illustration based on problem type
        if (this.currentExerciseType === 'basic-trig') {
            illustration = this.createBasicTrigIllustration(problemText);
        } else if (this.currentExerciseType === 'triangle-solving') {
            illustration = this.createTriangleSolvingIllustration(problemText);
        } else if (this.currentExerciseType === 'inverse-trig') {
            illustration = this.createInverseTrigIllustration(problemText);
        }
        
        return `
            <div class="problem-text">${problemText}</div>
            ${illustration ? `<div class="triangle-illustration">${illustration}</div>` : ''}
        `;
    }

    createBasicTrigIllustration(problemText) {
        // Extract angle from problem text
        const angleMatch = problemText.match(/(\d+)°/);
        if (!angleMatch) return '';
        
        const angle = parseInt(angleMatch[1]);
        const function_name = problemText.match(/(sin|cos|tan)/)[1];
        
        return this.createRightTriangleSVG(angle, function_name);
    }

    createTriangleSolvingIllustration(problemText) {
        // Parse different triangle solving scenarios
        if (problemText.includes('right triangle')) {
            return this.createRightTriangleProblemSVG(problemText);
        } else if (problemText.includes('triangle ABC')) {
            return this.createGeneralTriangleSVG(problemText);
        }
        return '';
    }

    createInverseTrigIllustration(problemText) {
        // Extract value from inverse trig problem
        const valueMatch = problemText.match(/\(([\d.]+)\)/);
        if (!valueMatch) return '';
        
        const value = parseFloat(valueMatch[1]);
        const function_name = problemText.match(/(arcsin|arccos|arctan)/)[1];
        
        return this.createInverseRightTriangleSVG(value, function_name);
    }

    createRightTriangleSVG(angle, trigFunction) {
        const width = 300;
        const height = 220;
        
        // Calculate triangle dimensions with proper scaling to fit within SVG
        const angleRad = (angle * Math.PI) / 180;
        const maxTriangleSize = Math.min(width - 120, height - 100); // Leave more padding for labels
        
        // Scale triangle to fit nicely in container - make it larger
        const baseSize = maxTriangleSize * 0.8; // Increased from 0.6 to 0.8
        const opposite = baseSize * Math.sin(angleRad);
        const adjacent = baseSize * Math.cos(angleRad);
        
        // Center the triangle in the SVG
        const startX = (width - adjacent) / 2;
        const startY = height - 100; // Move triangle up to avoid overlap
        const topY = startY - opposite;
        
        // Highlight relevant sides based on trig function
        let oppColor = '#666', adjColor = '#666', hypColor = '#666';
        if (trigFunction === 'sin') {
            oppColor = '#e74c3c';
            hypColor = '#3498db';
        } else if (trigFunction === 'cos') {
            adjColor = '#e74c3c';
            hypColor = '#3498db';
        } else if (trigFunction === 'tan') {
            oppColor = '#e74c3c';
            adjColor = '#3498db';
        }
        
        return `
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="border: 1px solid #ddd; margin: 10px; background: #f9f9f9;">
                <!-- Triangle -->
                <polygon points="${startX},${startY} ${startX+adjacent},${startY} ${startX+adjacent},${topY}" 
                         fill="rgba(52, 152, 219, 0.1)" stroke="#2c3e50" stroke-width="2"/>
                
                <!-- Sides with labels -->
                <line x1="${startX}" y1="${startY}" x2="${startX+adjacent}" y2="${startY}" 
                      stroke="${adjColor}" stroke-width="3"/>
                <text x="${startX+adjacent/2}" y="${startY+20}" text-anchor="middle" font-size="12" fill="${adjColor}">
                    adjacent
                </text>
                
                <line x1="${startX+adjacent}" y1="${startY}" x2="${startX+adjacent}" y2="${topY}" 
                      stroke="${oppColor}" stroke-width="3"/>
                <text x="${startX+adjacent+30}" y="${startY-opposite/2}" text-anchor="middle" font-size="12" fill="${oppColor}">
                    opposite
                </text>
                
                <line x1="${startX}" y1="${startY}" x2="${startX+adjacent}" y2="${topY}" 
                      stroke="${hypColor}" stroke-width="3"/>
                <text x="${startX+adjacent/2-20}" y="${startY-opposite/2-20}" text-anchor="middle" font-size="12" fill="${hypColor}">
                    hypotenuse
                </text>
                
                <!-- Right angle marker -->
                <rect x="${startX+adjacent-15}" y="${startY-15}" width="15" height="15" 
                      fill="none" stroke="#2c3e50" stroke-width="1"/>
                
                <!-- Angle marker and label -->
                <path d="M ${startX+20} ${startY} A 15 15 0 0 0 ${startX+20+15*Math.cos(angleRad)} ${startY-15*Math.sin(angleRad)}" 
                      fill="none" stroke="#e67e22" stroke-width="2"/>
                <text x="${startX+35}" y="${startY-8}" font-size="14" fill="#e67e22">${angle}°</text>
                
                <!-- Function reminder -->
                <text x="10" y="-30" font-size="12" fill="#34495e">
                    ${trigFunction}(${angle}°) = ${trigFunction === 'sin' ? 'opposite/hypotenuse' : 
                                                   trigFunction === 'cos' ? 'adjacent/hypotenuse' : 
                                                   'opposite/adjacent'}
                </text>
            </svg>
        `;
    }

    createRightTriangleProblemSVG(problemText) {
        const width = 300;
        const height = 220;
        
        // Parse known values from problem
        let opposite = null, adjacent = null, hypotenuse = null, angle = null;
        
        const oppMatch = problemText.match(/opposite[=\s]+(\d+)/);
        const adjMatch = problemText.match(/adjacent[=\s]+(\d+)/);
        const hypMatch = problemText.match(/hypotenuse[=\s]+(\d+)/);
        const angleMatch = problemText.match(/angle[^=]*[=\s]+(\d+)°/);
        
        if (oppMatch) opposite = parseInt(oppMatch[1]);
        if (adjMatch) adjacent = parseInt(adjMatch[1]);
        if (hypMatch) hypotenuse = parseInt(hypMatch[1]);
        if (angleMatch) angle = parseInt(angleMatch[1]);
        
        // Use proportional scaling to fit in container - make triangles larger
        const maxSize = Math.min(width - 120, height - 100);
        const scale = maxSize / 100;
        const opp = opposite ? opposite * scale * 8 : 80; // Increased from 6 to 8
        const adj = adjacent ? adjacent * scale * 8 : 100; // Increased from 6 to 8
        
        // Center the triangle
        const startX = (width - adj) / 2;
        const startY = height - 100; // Move triangle up to avoid overlap
        const topY = startY - opp;
        
        return `
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="border: 1px solid #ddd; margin: 10px; background: #f9f9f9;">
                <!-- Triangle -->
                <polygon points="${startX},${startY} ${startX+adj},${startY} ${startX+adj},${topY}" 
                         fill="rgba(52, 152, 219, 0.1)" stroke="#2c3e50" stroke-width="2"/>
                
                <!-- Labels with known values -->
                <line x1="${startX}" y1="${startY}" x2="${startX+adj}" y2="${startY}" stroke="#3498db" stroke-width="2"/>
                <text x="${startX+adj/2}" y="${startY+20}" text-anchor="middle" font-size="12" fill="#2c3e50">
                    ${adjacent ? `adj = ${adjacent}` : 'adj = ?'}
                </text>
                
                <line x1="${startX+adj}" y1="${startY}" x2="${startX+adj}" y2="${topY}" stroke="#e74c3c" stroke-width="2"/>
                <text x="${startX+adj+30}" y="${startY-opp/2}" text-anchor="middle" font-size="12" fill="#2c3e50">
                    ${opposite ? `opp = ${opposite}` : 'opp = ?'}
                </text>
                
                <line x1="${startX}" y1="${startY}" x2="${startX+adj}" y2="${topY}" stroke="#9b59b6" stroke-width="2"/>
                <text x="${startX+adj/2-30}" y="${startY-opp/2-20}" text-anchor="middle" font-size="12" fill="#2c3e50">
                    ${hypotenuse ? `hyp = ${hypotenuse}` : 'hyp = ?'}
                </text>
                
                <!-- Right angle marker -->
                <rect x="${startX+adj-15}" y="${startY-15}" width="15" height="15" 
                      fill="none" stroke="#2c3e50" stroke-width="1"/>
                
                <!-- Angle if specified -->
                ${angle ? `
                    <path d="M ${startX+20} ${startY} A 15 15 0 0 0 ${startX+25} ${startY-15}" 
                          fill="none" stroke="#e67e22" stroke-width="2"/>
                    <text x="${startX+35}" y="${startY-8}" font-size="12" fill="#e67e22">${angle}°</text>
                ` : ''}
            </svg>
        `;
    }

    createGeneralTriangleSVG(problemText) {
        const width = 220;
        const height = 160;
        
        // Parse triangle information
        const sideA = this.extractValue(problemText, 'a');
        const sideB = this.extractValue(problemText, 'b');
        const sideC = this.extractValue(problemText, 'c');
        const angleA = this.extractAngle(problemText, 'A');
        const angleB = this.extractAngle(problemText, 'B');
        const angleC = this.extractAngle(problemText, 'C');
        
        return `
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="border: 1px solid #ddd; margin: 10px; background: #f9f9f9;">
                <!-- General Triangle -->
                <polygon points="20,140 120,140 80,40" 
                         fill="rgba(52, 152, 219, 0.1)" stroke="#2c3e50" stroke-width="2"/>
                
                <!-- Vertices labels -->
                <circle cx="20" cy="140" r="3" fill="#e74c3c"/>
                <text x="10" y="155" font-size="14" font-weight="bold" fill="#2c3e50">A</text>
                
                <circle cx="120" cy="140" r="3" fill="#e74c3c"/>
                <text x="125" y="155" font-size="14" font-weight="bold" fill="#2c3e50">B</text>
                
                <circle cx="80" cy="40" r="3" fill="#e74c3c"/>
                <text x="85" y="35" font-size="14" font-weight="bold" fill="#2c3e50">C</text>
                
                <!-- Side labels -->
                <text x="70" y="155" text-anchor="middle" font-size="12" fill="#3498db">
                    c${sideC ? ` = ${sideC}` : ' = ?'}
                </text>
                
                <text x="140" y="95" text-anchor="middle" font-size="12" fill="#3498db">
                    a${sideA ? ` = ${sideA}` : ' = ?'}
                </text>
                
                <text x="40" y="95" text-anchor="middle" font-size="12" fill="#3498db">
                    b${sideB ? ` = ${sideB}` : ' = ?'}
                </text>
                
                <!-- Angle labels -->
                <text x="25" y="135" font-size="11" fill="#e67e22">
                    ${angleA ? `${angleA}°` : 'A°'}
                </text>
                
                <text x="110" y="135" font-size="11" fill="#e67e22">
                    ${angleB ? `${angleB}°` : 'B°'}
                </text>
                
                <text x="75" y="55" font-size="11" fill="#e67e22">
                    ${angleC ? `${angleC}°` : 'C°'}
                </text>
            </svg>
        `;
    }

    createInverseRightTriangleSVG(value, invFunction) {
        const width = 300;
        const height = 220;
        
        // Calculate triangle based on inverse function with proper scaling
        let opposite, adjacent, angle;
        const maxSize = Math.min(width - 120, height - 100);
        const scaleFactor = maxSize / 100;
        
        if (invFunction === 'arcsin') {
            // sin^-1(value) means opposite/hypotenuse = value, hypotenuse = 1
            opposite = value * maxSize * 0.9; // Increased scaling
            adjacent = Math.sqrt((maxSize * 0.9) * (maxSize * 0.9) - opposite * opposite);
            angle = Math.asin(value) * 180 / Math.PI;
        } else if (invFunction === 'arccos') {
            // cos^-1(value) means adjacent/hypotenuse = value, hypotenuse = 1
            adjacent = value * maxSize * 0.9; // Increased scaling
            opposite = Math.sqrt((maxSize * 0.9) * (maxSize * 0.9) - adjacent * adjacent);
            angle = Math.acos(value) * 180 / Math.PI;
        } else if (invFunction === 'arctan') {
            // tan^-1(value) means opposite/adjacent = value
            adjacent = maxSize * 0.8; // Increased scaling
            opposite = value * adjacent;
            angle = Math.atan(value) * 180 / Math.PI;
        }
        
        // Center the triangle
        const startX = (width - adjacent) / 2;
        const startY = height - 100; // Move triangle up to avoid overlap
        const topY = startY - opposite;
        
        return `
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="border: 1px solid #ddd; margin: 10px; background: #f9f9f9;">
                <!-- Triangle -->
                <polygon points="${startX},${startY} ${startX+adjacent},${startY} ${startX+adjacent},${topY}" 
                         fill="rgba(52, 152, 219, 0.1)" stroke="#2c3e50" stroke-width="2"/>
                
                <!-- Given ratio highlighted -->
                <text x="10" y="20" font-size="12" fill="#e74c3c" font-weight="bold">
                    Given: ${invFunction.replace('arc', '')} ratio = ${value}
                </text>
                
                <text x="10" y="35" font-size="12" fill="#34495e">
                    Find: angle = ?
                </text>
                
                <!-- Sides -->
                <line x1="${startX}" y1="${startY}" x2="${startX+adjacent}" y2="${startY}" stroke="#3498db" stroke-width="2"/>
                <line x1="${startX+adjacent}" y1="${startY}" x2="${startX+adjacent}" y2="${topY}" stroke="#e74c3c" stroke-width="2"/>
                <line x1="${startX}" y1="${startY}" x2="${startX+adjacent}" y2="${topY}" stroke="#9b59b6" stroke-width="2"/>
                
                <!-- Right angle marker -->
                <rect x="${startX+adjacent-15}" y="${startY-15}" width="15" height="15" 
                      fill="none" stroke="#2c3e50" stroke-width="1"/>
                
                <!-- Angle marker -->
                <path d="M ${startX+20} ${startY} A 15 15 0 0 0 ${startX+20+15*Math.cos(angle*Math.PI/180)} ${startY-15*Math.sin(angle*Math.PI/180)}" 
                      fill="none" stroke="#e67e22" stroke-width="3"/>
                <text x="${startX+35}" y="${startY-8}" font-size="14" fill="#e67e22">θ = ?</text>
            </svg>
        `;
    }

    extractValue(text, variable) {
        const regex = new RegExp(`${variable}[=\\s]+(\\d+(?:\\.\\d+)?)`);
        const match = text.match(regex);
        return match ? parseFloat(match[1]) : null;
    }

    extractAngle(text, angle) {
        const regex = new RegExp(`${angle}[=\\s]+(\\d+)°`);
        const match = text.match(regex);
        return match ? parseInt(match[1]) : null;
    }

    checkTrigonometryAnswer() {
        const userAnswer = document.getElementById('trigonometryAnswerInput').value.trim();
        if (!userAnswer) return;

        const correctAnswer = parseFloat(this.currentProblem.answer);
        const userNumAnswer = parseFloat(userAnswer);
        const tolerance = 0.1; // Allow small rounding differences
        
        const isCorrect = Math.abs(userNumAnswer - correctAnswer) <= tolerance;
        
        this.exerciseCount++;
        if (isCorrect) {
            this.correctAnswers++;
        }
        
        this.updateScore();
        this.showFeedback(isCorrect, this.currentProblem.answer + this.currentProblem.unit);
    }

    showFeedback(isCorrect, correctAnswer) {
        const feedbackDiv = document.getElementById('trigonometryExerciseFeedback');
        feedbackDiv.classList.remove('hidden');
        
        if (isCorrect) {
            feedbackDiv.innerHTML = `
                <div style="color: green; font-size: 1.2rem; font-weight: bold;">
                    ✅ Correct! Well done!
                </div>
                <button class="next-problem-btn" onclick="trigonometry.generateNewProblem()">
                    Next Problem
                </button>
            `;
        } else {
            feedbackDiv.innerHTML = `
                <div style="color: red; font-size: 1.2rem; font-weight: bold;">
                    ❌ Not quite right. The correct answer is: ${correctAnswer}
                </div>
                <button class="next-problem-btn" onclick="trigonometry.generateNewProblem()">
                    Try Another Problem
                </button>
            `;
        }
    }

    updateScore() {
        document.getElementById('trigonometryCorrectCount').textContent = this.correctAnswers;
        document.getElementById('trigonometryTotalCount').textContent = this.exerciseCount;
        
        const percentage = this.exerciseCount > 0 ? Math.round((this.correctAnswers / this.exerciseCount) * 100) : 0;
        document.getElementById('trigonometryPercentage').textContent = percentage;
    }

    selectNewExerciseType() {
        document.getElementById('trigonometryExercisesSection').classList.add('hidden');
        document.getElementById('trigonometryLearningSection').classList.remove('hidden');
        
        // Show the type selection and hide learning content
        this.showTrigonometrySelection();
        
        // Reset scores
        this.exerciseCount = 0;
        this.correctAnswers = 0;
        this.currentExerciseType = null;
        this.currentProblem = null;
    }

    backToLearning() {
        // Hide exercises section and show learning section
        document.getElementById('trigonometryExercisesSection').classList.add('hidden');
        document.getElementById('trigonometryLearningSection').classList.remove('hidden');
        
        // If we have a current exercise type, show its learning content
        if (this.currentExerciseType) {
            this.showTrigonometryLearningContent(this.currentExerciseType);
        } else {
            // If no current type, show the type selection
            this.showTrigonometrySelection();
        }
    }

    initializeEventListeners() {
        // Exercise type buttons - show learning content first
        const exerciseButtons = document.querySelectorAll('.trigonometry-exercise-type-btn');
        exerciseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const type = button.getAttribute('data-type');
                this.showTrigonometryLearningContent(type);
            });
        });

        // Specific event listeners for start exercise buttons
        const startBasicBtn = document.getElementById('startBasicTrigExercisesBtn');
        if (startBasicBtn) {
            startBasicBtn.addEventListener('click', () => {
                console.log('Basic trig exercises button clicked');
                this.startTrigonometryExercises();
            });
        }

        const startInverseBtn = document.getElementById('startInverseTrigExercisesBtn');
        if (startInverseBtn) {
            startInverseBtn.addEventListener('click', () => {
                console.log('Inverse trig exercises button clicked');
                this.startTrigonometryExercises();
            });
        }

        const startIdentitiesBtn = document.getElementById('startTrigIdentitiesExercisesBtn');
        if (startIdentitiesBtn) {
            startIdentitiesBtn.addEventListener('click', () => {
                console.log('Trig identities exercises button clicked');
                this.startTrigonometryExercises();
            });
        }

        const startTriangleBtn = document.getElementById('startTriangleSolvingExercisesBtn');
        if (startTriangleBtn) {
            startTriangleBtn.addEventListener('click', () => {
                console.log('Triangle solving exercises button clicked');
                this.startTrigonometryExercises();
            });
        }

        // Fallback: Use event delegation for all start exercises buttons as backup
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('start-exercises-btn')) {
                console.log('Start exercises button clicked via delegation');
                const trigContent = e.target.closest('.trigonometry-learning-content');
                if (trigContent) {
                    console.log('Button is in trigonometry learning content');
                    this.startTrigonometryExercises();
                }
            }
        });

        // Use event delegation for all back to selection buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('back-to-selection-btn') && 
                e.target.closest('.trigonometry-learning-content')) {
                this.showTrigonometrySelection();
            }
        });

        // Check answer button
        const checkBtn = document.getElementById('checkTrigonometryAnswer');
        if (checkBtn) {
            checkBtn.addEventListener('click', () => this.checkTrigonometryAnswer());
        }

        // Answer input Enter key
        const answerInput = document.getElementById('trigonometryAnswerInput');
        if (answerInput) {
            answerInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.checkTrigonometryAnswer();
                }
            });
        }

        // Control buttons
        const newTypeBtn = document.getElementById('trigonometryNewType');
        if (newTypeBtn) {
            newTypeBtn.addEventListener('click', () => this.selectNewExerciseType());
        }

        const backLearningBtn = document.getElementById('trigonometryBackLearning');
        if (backLearningBtn) {
            backLearningBtn.addEventListener('click', () => this.backToLearning());
        }

        // Random problem button
        const randomProblemBtn = document.getElementById('trigonometryRandomProblem');
        if (randomProblemBtn) {
            randomProblemBtn.addEventListener('click', () => this.generateRandomProblem());
        }
    }
}

// Initialize trigonometry component when DOM is loaded
let trigonometry;

document.addEventListener('DOMContentLoaded', function() {
    trigonometry = new TrigonometryComponent();
    
    // Initialize event listeners after a longer delay to ensure DOM is fully ready
    setTimeout(() => {
        console.log('Initializing trigonometry event listeners...');
        trigonometry.initializeEventListeners();
        
        // Double-check that buttons exist
        const basicBtn = document.getElementById('startBasicTrigExercisesBtn');
        console.log('Basic trig button found:', !!basicBtn);
        if (basicBtn) {
            console.log('Basic button classes:', basicBtn.className);
        }
    }, 500);
});
