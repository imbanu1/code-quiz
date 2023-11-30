var questions = [ 
	{ 
		prompt: `Which of these is not a comparison operator in JavaScript?`, 
		answers: [ 
			"==", 
			"!=", 
			"===", 
			"*",
            "!==" 
		], 
		answer: "*", 
	}, 


{ 
    prompt: `Which one of these is a primitive data type?`, 
    answers: [ 
        "Numbers", 
        "strings", 
        "Boolean", 
        "Undefined",
        "Styles", 
    ], 
    answer: "Styles", 
}, 

{ 
    prompt: `Select one of the following components that is not part of a box model.`, 
    answers: [ 
        "Margin", 
        "Padding", 
        "Content", 
        "Element",
        "Border", 
    ], 
    answer: "Element", 
}, 

{ 
    prompt: `Among the following element types commonly used to add content to pages, which one is typically not used for this purpose?`, 
    answers: [
        "Font element", 
        "Text element", 
        "Image element", 
        "Head element",
        "List element",
    ]
        , 
    answer: "Font element", 
}, 

{ 
    prompt: `Which one of these is not part of the Command Line Interface directory?`, 
    answers: [ 
        "Pwd", 
        "Ls", 
        "mkdir", 
        "Cd ..",
        "Shell", 
    ], 
    answer: "Shell", 
}, 
];
// selecting elements 
var[
    questionE1,
    timerE1,
    choicesE1,
    submitBtn,
    startBtn,
    nameE1,
    goback
] =[
    "#questions",
    "#timer",
    "#answers",
    "#submission",
    "#start-quiz",
    "#name",
    "goback-selector"
]
.map(selector => document.querySelector(selector));
let [currentQuestionIndex, time, timerId] = [0, questions.length * 15, null];

// function to start the quiz
function quizStart() {
    timerId = setInterval(clockTick, 1000);
    timerE1.textContent = time;
    var landingScreenE1 = document.getElementById("start-screen");
    landingScreenE1.classList.add("hide");
    questionE1.classList.remove("hide");
    getQuestion();
}

//function to get a question
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var promptE1 = document.getElementById("question-text");
    promptE1.textContent = currentQuestion.prompt;
    choicesE1.innerHTML = "";
    currentQuestion.answers.forEach(function (choice, i) {
            var choiceBtn = document.createElement("button");
            choiceBtn.setAttribute("value", choice);
            choiceBtn.textContent = `${i + 1}. ${choice}`;
            choiceBtn.onclick = questionClick;
            choicesE1.appendChild(choiceBtn);
        }
        );
}
function questionClick() {
    if (
        this.value  !==
        questions[currentQuestionIndex].answer
    ) {
        time -= 10;
        
    }




}