/**Eco-Solve: Quizzes
 * by Arnav Bagal
 * 
 * This is the quizzes page, where users can test out how good their knowledge of environmental science is. 
 * There are four quizzes, which are on natural processes, impacts on natural processes, biodiversity, and climate change respectively. 
 * 
 * P.S. The quiz content was inspired by the study design of VCE Environmental Science. 
 */

// Quiz questions and answers
let questionsAndAnswers = {
    "quiz1": {
        "title": "Natural processes",
        questions: {
            1: "Testing...",
            2: "Testing...",
            3: "Testing...",
            4: "Testing...",
            5: "Testing...",
            6: "Testing...",
            7: "Testing...",
            8: "Testing...",
            9: "Testing...",
            10: "Testing..."           
        },
        answers: {
            1: "ok",
            2: "ok",
            3: "ok",
            4: "ok",
            5: "ok",
            6: "ok",
            7: "ok",
            8: "ok",
            9: "ok",
            10: "ok" 
        }
    },
    "quiz2": {
        "title": "",
        questions: {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: ""           
        },
        answers: {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: "" 
        }
    },
    "quiz3": {
        "title": "",
        questions: {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: ""           
        },
        answers: {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: "" 
        }
    },
    "quiz4": {
        "title": "",
        questions: {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: ""           
        },
        answers: {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: "" 
        }
    }    
};

/**Starts the quiz */
function startQuiz(quizNumber) {
    console.log(`${quizNumber} has been started!`)
    welcomeUser(quizNumber)
};

/**Gives a welcome introduction to the user. */
function welcomeUser(quizNumber) {
    let display = document.getElementById(`${quizNumber}container`);
    display.innerHTML = `Welcome to ${quizNumber}! 
    This is a quiz that will test your knowledge of ${questionsAndAnswers[quizNumber["title"]].toLowerCase()}.

    You will be asked five questions in a random order, which will consist of multiple choice questions, true or false questions, 
    and/or short-answer questions.

    After you answer the question, you can check it using the "Check my Answer" button.
    Your total score will be tracked and at the end of the quiz, you will know your total score. 

    Enjoy!
    <button onclick="generateQuestion(quizNumber)">Begin!</button>
    ` 
};

/** Generates and displays a random question using random numbers. */
function generateAndDisplayQuestion(quizNumber) {
    let display = document.getElementById(`${quizNumber}container`);
    let randomNumber = Math.random() * 10;
    let questionNumber = 1;
    display.innerHTML = ``
    display.innerHTML = `Question ${questionNumber}: ${questionsAndAnswers[quizNumber[questions[randomNumber]]]}
    <input type="text"; id="answer">
    <button onlick="checkAnswer(quizNumber, randomNumber, display)">Check my Answer</button>`
};

/** Checks the answer for the specified question. */
function checkAnswer(quizNumber, questionNumber, display) {
    let submittedAnswer = document.getElementById("answer");
    let correctAnswer = questionsAndAnswers[quizNumber[answers[questionNumber]]];
    if (submittedAnswer === correctAnswer) {
        display.innerHTML += `Congratulations! You are correct!
        <button onlick = generateAndDisplayQuestion(quizNumber)>Next question</button>`
    }
};

/**let quizzes = {
quiz1: {
title: "Natural Processes Quiz",
questionsAndAnswers: {
    "What is the process by which water changes from liquid to vapor?": ,
    "What causes the formation of rainbows?",
    "What process describes the breakdown of rocks into smaller particles?",
    "What causes tides in the ocean?",
    "What natural process leads to the formation of caves in limestone rocks?"
}

}
naturalProcesses: {

questions: [
    
],
answers: [
    "evaporation",
    "refraction",
    "weathering",
    "gravity",
    "erosion"
]
},
impactsOnProcesses: {
title: "Impacts on Natural Processes Quiz",
questions: [
    "What human activity contributes to deforestation?",
    "How does air pollution affect natural processes?",
    "What is the primary cause of soil erosion?",
    "How do dams impact river ecosystems?",
    "What is the main consequence of overfishing in marine environments?"
],
answers: [
    "logging",
    "disrupts natural cycles",
    "water runoff",
    "alter flow patterns",
    "decline in fish population"
]
},
biodiversity: {
title: "Biodiversity Quiz",
questions: [
    "What term describes the letiety of life forms on Earth?",
    "Which ecosystem is known for its high biodiversity?",
    "What is the main threat to biodiversity caused by human activity?",
    "What is the process of gradual change in ecosystems over time?",
    "Which species are particularly vulnerable to habitat loss?"
],
answers: [
    "biodiversity",
    "tropical rainforests",
    "habitat destruction",
    "succession",
    "specialist species"
]
},
climateChange: {
title: "Climate Change Quiz",
questions: [
    "What greenhouse gas is primarily responsible for global warming?",
    "How does deforestation contribute to climate change?",
    "What are the effects of melting polar ice caps?",
    "What is the term for the increase in Earth's average temperature over time?",
    "What are some consequences of climate change on ecosystems?"
],
answers: [
    "carbon dioxide",
    "reduces carbon sinks",
    "rising sea levels",
    "global warming",
    "habitat loss and"
]
}
}; 

function loadQuiz(quizName) {
let quiz = quizzes[quizName];
let quizContainer = document.getElementById('quizContainer');
quizContainer.innerHTML = `<h2>${quiz.title}</h2>`;
let form = document.createElement('form');
form.innerHTML = "<ol>" + quiz.questions.map((question, index) => `<li>${question}<br><input type='text' id='q${index + 1}'></li>`).join('') + "</ol>";
let submitButton = document.createElement('button');
submitButton.textContent = "Submit";
submitButton.onclick = () => gradeQuiz(quizName);
form.appendChild(submitButton);
quizContainer.appendChild(form);
}

function gradeQuiz(quizName) {
let quiz = quizzes[quizName];
let answers = quiz.answers;
let form = document.getElementById('quizContainer').querySelector('form');
let score = 0;

for (let i = 0; i < answers.length; i++) {
let userAnswer = form.elements['q' + (i + 1)].value.toLowerCase().trim();
if (userAnswer === answers[i]) {
    score++;
}
}

alert(`Your score: ${score}/${answers.length}`);
}


*/



