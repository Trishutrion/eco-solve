/** 
 * Eco-Solve: Quizzes
 * @author: Arnav Bagal 
 * 
 * This is the quizzes page, where users can test out how good their knowledge of environmental science is. 
 * There are four quizzes, which are on natural processes, impacts on natural processes, biodiversity, and climate change respectively. 
 * 
 * P.S. The quiz content was inspired by the study design of VCE Environmental Science. 
 */
// Global constants/variables
const questionsAndAnswers = {
    1: {
        "title": "Natural Processes",
        "questions": {
            1: "How are earthquakes measured?",
            2: "Volcanoes can produce lightning - True or False?",
            3: "What is the official name of the northern lights?",
            4: "What is the name for a cloud that touches the ground?",
            5: "What are measured with the Fujita Scale?",
            6: "Which body of water is around 34% salt and virtually impossible to swim in?",
            7: "The Great Barrier Reef can be viewed from the Moon - True or False?",
            8: "What has a nucleus, a coma, a dust tail, and an ion tail?",
            9: "Long periods without rain are called what?",
            10: "What happens when the moon passes between the sun and the Earth?",
            11: "What is the process by which plants make their own food using sunlight?",
            12: "What is the name for the process by which water evaporates from plants?",
            13: "Plants absorb oxygen (O₂) from the atmosphere during photosynthesis - True or False?",
            14: "What is the term for the gradual wearing away of rocks and soil by natural forces?",
            15: "What is the layer of gases surrounding the Earth called?",
            16: "Which natural phenomenon occurs when warm air rises and cooler air sinks?",
            17: "What is the process of converting nitrogen gas from the atmosphere into a form usable by plants?",
            18: "What is the name for the movement of ocean water caused by wind patterns and the rotation of the Earth?",
            19: "Water vapor (H₂O) contributes to the greenhouse effect - True or False?",
            20: "What is the term for the gradual change in species composition in an ecosystem over time?"
        },
        "answers": {
            1: "Richter Scale",
            2: "True",
            3: "Aurora Borealis",
            4: "Fog",
            5: "Tornadoes",
            6: "Dead Sea",
            7: "True",
            8: "Comet",
            9: "Droughts",
            10: "Solar Eclipse",
            11: "Photosynthesis",
            12: "Transpiration",
            13: "False",
            14: "Erosion",
            15: "Atmosphere",
            16: "Convection",
            17: "Nitrogen fixation",
            18: "Ocean currents",
            19: "True",
            20: "Succession"
        }
    },
    2: {
        "title": "Impacts on Natural Processes",
        "questions": {
            1: "Deforestation contributes to what process that leads to soil loss?",
            2: "True or False: Overfishing disrupts food webs in oceans.",
            3: "What gas, produced by human activities, contributes to climate change?",
            4: "Which natural cycles influence Earth's climate?",
            5: "What is the term for the gradual change in species composition over time?",
            6: "Human activities can cause habitat loss through what process?",
            7: "What is the shift in the tilt of Earth's axis called?",
            8: "Which natural phenomenon results from changes in Earth's wobble?",
            9: "Overfishing can lead to the decline of which species?",
            10: "What is the primary driver of climate change due to human activities?",
            11: "True or False: Human actions can cause desertification.",
            12: "Which natural process involves the movement of nutrients and energy?",
            13: "What is the name for the Earth's natural orbital variations?",
            14: "Which gas contributes to the greenhouse effect?",
            15: "What is the change in Earth's orbit around the Sun called?",
            16: "Human activities can lead to soil erosion through what process?",
            17: "What is the variation in solar radiation due to Earth's orbital patterns?",
            18: "What is the shift in the position of Earth's equinoxes and solstices?",
            19: "True or False: Human actions can unbalance flows and cycles in ecosystems.",
            20: "Which natural process affects the availability of groundwater?"
        },
        "answers": {
            1: "Erosion",
            2: "True",
            3: "Carbon dioxide",
            4: "Milankovitch cycles",
            5: "Succession",
            6: "Deforestation",
            7: "Obliquity",
            8: "Precession",
            9: "Threatened species",
            10: "Burning fossil fuels",
            11: "True",
            12: "Ecological processes",
            13: "Milankovitch cycles",
            14: "Water vapor",
            15: "Eccentricity",
            16: "Tree-felling",
            17: "Climate epochs",
            18: "Precession of the Equinoxes",
            19: "True",
            20: "Natural wobble"
        }
    },
    3: {
        "title": "Biodiversity",
        "questions": {
            1: "What does “biodiversity” refer to?",
            2: "Where is species diversity lowest?",
            3: "Which ecosystems are among the planet's richest?",
            4: "How is biodiversity measured?",
            5: "Approximately how many animal and plant species have been documented?",
            6: "What are the world's rarest species?",
            7: "Which habitats are home to the Cuban crocodile?",
            8: "Where is the vaquita porpoise found?",
            9: "What is the presumed status of the baiji or Yangtze River dolphin?",
            10: "How many new species are added to the list each year?",
            11: "Which regions have the greatest diversity of plant life?",
            12: "How many insect species can be found in Yasuní National Park in Ecuador?",
            13: "How many plant species exist in the Amazon basin?",
            14: "What is the primary cause of biodiversity loss?",
            15: "Which gas contributes to the greenhouse effect?",
            16: "What is the term for the variety of ecosystems and regions?",
            17: "Which areas compare favorably in terms of species diversity?",
            18: "How many tree species are native to the United Kingdom?",
            19: "What is the estimated number of undiscovered species?",
            20: "How many species are insects and other small creatures?"
        },
        "answers": {
            1: "Variety of life on Earth",
            2: "At the Poles",
            3: "Tropical rainforests and coral reefs",
            4: "Counting species in an area",
            5: "1.8 million (1800000)",
            6: "Critically endangered Cuban crocodile, vaquita, and baiji",
            7: "Two small areas in Cuba",
            8: "Northern Gulf of California",
            9: "Extinct",
            10: "12000 to 25000",
            11: "Tropical Andes, southeastern Asia, Amazon basin",
            12: "100000",
            13: "40000 (with 30000 unique to the region)",
            14: "Human impact",
            15: "Carbon dioxide (CO₂)",
            16: "Biodiversity",
            17: "Amazon basin, Madagascar, central Africa",
            18: "Around 30",
            19: "Three to seven million",
            20: "Lion's share"
        }
    },
    4: {
        "title": "Climate change",
        "questions": {
            1: "Can we adapt to climate change instead of fighting it?",
            2: "What dietary change can reduce an individual's carbon footprint?",
            3: "What gas is produced by livestock digestion and contributes to climate change?",
            4: "What's a key part of the United Nations' climate strategy?",
            5: "What's the primary cause of biodiversity loss?",
            6: "How can individuals reduce their environmental impact?",
            7: "What's the impact of beef cattle raised on deforested land?",
            8: "What's the main driver of climate change due to human activities?",
            9: "What's the recommended diet's carbon footprint?",
            10: "What's the role of adaptation in the Paris climate agreement?",
            11: "What's the impact of avoiding food waste?",
            12: "What's the effect of air freight versus sea transport on food?",
            13: "What's the impact of deforestation on beef cattle emissions?",
            14: "What's the estimated number of undiscovered species?",
            15: "What's the role of adaptation in dealing with climate change?",
            16: "What's the impact of driving electric cars?",
            17: "What's the impact of overestimating energy-saving potential?",
            18: "What's the impact of importing food by sea?",
            19: "What's the impact of using video-conferencing for business travel?",
            20: "What's the impact of eating locally-sourced seasonal food?"
        },
        "answers": {
            1: "Yes",
            2: "Avoid meat and dairy",
            3: "Methane",
            4: "Adaptation",
            5: "Human impact",
            6: "Buy locally, drive less, insulate homes",
            7: "High emissions",
            8: "Burning fossil fuels",
            9: "Lower",
            10: "Key strategy",
            11: "Reduced environmental impact",
            12: "Different carbon footprints",
            13: "Higher emissions",
            14: "Millions",
            15: "Future-proofing",
            16: "Lower emissions",
            17: "Less effective changes",
            18: "Lower carbon footprint",
            19: "Reduced emissions",
            20: "Lower environmental impact"
        }
    }
};
/** 
 * Starts the quiz. 
 * @param {number} quizNumber - The quiz number.
*/
function startQuiz(quizNumber) {
    console.log(`Quiz started!`)
    document.getElementById(`quiz${quizNumber}`).innerHTML = `Welcome to Quiz ${quizNumber}: ${questionsAndAnswers[quizNumber].title} <br>
        <br>
        You will be asked five questions in a random order, which will consist of multiple choice questions, true or false questions, <br>
        and/or short-answer questions. <br>
        <br>
        After you answer the question, you can check it using the 'Check my Answer' button. <br>
        Your total score will be tracked and at the end of thequiz, you will know your total score. <br>
        <br>
        Enjoy!<br>
        <br>
        <button onclick="generateAndDisplayQuestion('${quizNumber}')">Begin!</button>`
};
/** 
 * Generates and displays a random question for the specified quiz. 
 * @param {number} quizNumber - The quiz number.
*/
function generateAndDisplayQuestion(quizNumber) {
    console.log(`Question displayed!`)
    let display = document.getElementById(`quiz${quizNumber}`);
    let questionNumber = Math.floor(Math.random() * 19 + 1); 
    display.innerHTML = `Question ${questionNumber}: ${questionsAndAnswers[quizNumber].questions[questionNumber]} <br>
    Answer: <input type='text'; id='answer'> <br>
    <br>
    <button onclick="checkAnswer('${quizNumber}', '${questionNumber}')">Check my Answer</button>
    <br>`
};
/** 
 * Checks the answer for the specified question. 
 * @param {number} quizNumber - The quiz number.
 * @param {number} questionNumber - The question number.
*/
function checkAnswer(quizNumber, questionNumber) {
    let submittedAnswer = document.querySelector("#answer");
    let correctAnswer = questionsAndAnswers[quizNumber].answers[questionNumber].toLowerCase();
    const display = document.getElementById(`quiz${quizNumber}`);
    if (submittedAnswer.value.length != 0) {
        if (correctAnswer.toLowerCase().includes(submittedAnswer.value.toLowerCase())) {
            console.log("Answer checked (correct)!")
            display.innerHTML = display.innerHTML.replace(`<button onclick="checkAnswer('${quizNumber}', '${questionNumber}')">Check my Answer</button>`,
            `Congratulations! You are correct! <br> <br> <button onclick="generateAndDisplayQuestion('${quizNumber}')">Next Question</button>`);         
        } else {
            console.log("Answer checked (incorrect)!")
            display.innerHTML = display.innerHTML.replace(
                `<button onclick="checkAnswer('${quizNumber}', '${questionNumber}')">Check my Answer</button>`,
                `Oops! You are incorrect! (Correct answer: ${questionsAndAnswers[quizNumber].answers[questionNumber]}) <br> 
                <br>
                <button onclick="generateAndDisplayQuestion('${quizNumber}')">Next Question</button>`
            );
        };
    } else {
        alert("Please enter an answer before checking!");
    };    
};