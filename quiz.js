
function generateQuiz(quizNumber) {

};
let quizzes = {
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
