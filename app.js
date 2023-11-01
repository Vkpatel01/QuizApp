const quizData = [
        {
            question: "What is the capital city of India?",
            options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
            correctAnswer: "New Delhi"
        },
        {
            question: "Which river is considered the holiest in Hinduism and plays a central role in Indian culture and mythology?",
            options: ["Ganges", "Yamuna", "Brahmaputra", "Godavari"],
            correctAnswer: "Ganges"
        },
        {
            question: "India gained independence from British rule on which date?",
            options: ["August 15, 1945", "August 15, 1947", "August 15, 1950", "August 15, 1952"],
            correctAnswer: "August 15, 1947"
        },
        {
            question: "Who was the first Prime Minister of India?",
            options: ["Jawaharlal Nehru", "Indira Gandhi", "Rajiv Gandhi", "Sardar Patel"],
            correctAnswer: "Jawaharlal Nehru"
        },
        {
            question: "The Taj Mahal, one of the Seven Wonders of the World, is located in which Indian city?",
            options: ["Jaipur", "Agra", "Delhi", "Mumbai"],
            correctAnswer: "Agra"
        },
        {
            question: "Which mountain range separates the Indian subcontinent from the Tibetan Plateau?",
            options: ["Vindhya Range", "Aravalli Range", "Western Ghats", "Himalayas"],
            correctAnswer: "Himalayas"
        },
        {
            question: "The official currency of India is:",
            options: ["Rupiah", "Ringgit", "Rupee", "Baht"],
            correctAnswer: "Rupee"
        },
        {
            question: "Who is known as the 'Father of the Nation' in India for his role in the country's nonviolent independence movement?",
            options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh"],
            correctAnswer: "Mahatma Gandhi"
        },
        {
            question: "What is the national animal of India?",
            options: ["Lion", "Elephant", "Tiger", "Leopard"],
            correctAnswer: "Tiger"
        },
        {
            question: "In which year did India become a republic and adopt its constitution?",
            options: ["1947", "1950", "1962", "1971"],
            correctAnswer: "1950"
        },
        {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
        },
            {
                question: "Which famous Indian leader was also known as the 'Iron Man of India'?",
                options: ["Jawaharlal Nehru", "Sardar Patel", "Indira Gandhi", "Subhas Chandra Bose"],
                correctAnswer: "Sardar Patel"
            },
            {
                question: "What is the largest state in India by area?",
                options: ["Uttar Pradesh", "Rajasthan", "Madhya Pradesh", "Maharashtra"],
                correctAnswer: "Rajasthan"
            },
            {
                question: "Which Indian festival is known as the Festival of Lights?",
                options: ["Diwali", "Holi", "Eid", "Navratri"],
                correctAnswer: "Diwali"
            },
            {
                question: "What is the national flower of India?",
                options: ["Lotus", "Rose", "Sunflower", "Jasmine"],
                correctAnswer: "Lotus"
            },
            {
                question: "Which Indian state is known as the 'Land of Five Rivers'?",
                options: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"],
                correctAnswer: "Punjab"
            },
            {
                question: "Who composed the Indian national anthem, 'Jana Gana Mana'?",
                options: ["Rabindranath Tagore", "M.K. Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
                correctAnswer: "Rabindranath Tagore"
            },
            {
                question: "Which Indian cricketer is known as the 'Master Blaster'?",
                options: ["Sachin Tendulkar", "Virat Kohli", "Rahul Dravid", "Virender Sehwag"],
                correctAnswer: "Sachin Tendulkar"
            },
            {
                question: "What is the official language of the Indian state of Karnataka?",
                options: ["Hindi", "Kannada", "Telugu", "Marathi"],
                correctAnswer: "Kannada"
            },
            {
                question: "Which Indian city is famous for its tea gardens and is known as the 'Tea Capital of India'?",
                options: ["Darjeeling", "Kolkata", "Chennai", "Mumbai"],
                correctAnswer: "Darjeeling"
            },
            {
                question: "Who was the first woman Prime Minister of India?",
                options: ["Sonia Gandhi", "Indira Gandhi", "Mamata Banerjee", "Mayawati"],
                correctAnswer: "Indira Gandhi"
            }
        

];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(question) {
    document.getElementById('question-container').textContent = question;
}


function showOptions(options) {
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', function() {
            checkAnswer(option, button);
        });
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption, button) {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;

        button.style.backgroundColor = '#4CAF50';
    } else {
        button.style.backgroundColor = '#BC544B';
    }

 
    const allOptions = document.querySelectorAll('#options-container button');
    allOptions.forEach(optionButton => {
        optionButton.disabled = true;
    });

  
    setTimeout(showNextQuestion, 900);
}


function showNextQuestion() {
    
    const allOptions = document.querySelectorAll('#options-container button');
    allOptions.forEach(optionButton => {
        optionButton.style.backgroundColor = '';
        optionButton.disabled = false;
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex].question);
        showOptions(quizData[currentQuestionIndex].options);
    } else {
        showResult();
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(quizData[currentQuestionIndex].question);
        showOptions(quizData[currentQuestionIndex].options);
    }
}

function resetQuiz() {
  
    const allOptions = document.querySelectorAll('#options-container button');
    allOptions.forEach(optionButton => {
        optionButton.style.backgroundColor = '';
        optionButton.disabled = false;
    });

    currentQuestionIndex = 0;
    score = 0;
    showQuestion(quizData[currentQuestionIndex].question);
    showOptions(quizData[currentQuestionIndex].options);
    document.getElementById('result-container').textContent = '';
}


function showResult() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
}
showQuestion(quizData[currentQuestionIndex].question);
showOptions(quizData[currentQuestionIndex].options);
