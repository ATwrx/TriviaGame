var trivia = [{
        question: "What does the acronym USB stand for when referring to a computer port?",
        answerSet: [
            "User Should Buy",
            "Universal Serial Bus",
            "Uber Stretch Bus",
            "United States Baseball"
        ],
        correctAnswer: "Universal Serial Bus"
    },
    {
        question: "What do you call the small image icons used to express emotions or ideas in digital communication?",
        answerSet: [
            "Emojis",
            "GIF's",
            "JPEG's",
            "Texts from Mom"
        ],
        correctAnswer: "Emojis"
    },
    {
        question: "When referring to a computer monitor, what does the acronym LCD stand for?",
        answerSet: [
            "Limited Cypher Ducks",
            "Light Collision Detector",
            "Laser Color Display",
            "Liquid Crystal Display"
        ],
        correctAnswer: "Liquid Crystal Display"
    },
    {
        question: "Which of these is NOT a operating system?",
        answerSet: [
            "Windows",
            "Android",
            "Linux",
            "Ledges"
        ],
        correctAnswer: "Ledges"
    },
    {
        question: "When referring to computer memory, what does that acronym RAM stand for?",
        answerSet: [
            "Real Awesome Memory",
            "Random Access Memory",
            "Razor Alignment Memory",
            "Reacting Automitic Memory"
        ],
        correctAnswer: "Random Access Memory"
    },
    {
        question: "In computer science, what does \"GUI\" stand for?",
        answerSet: [
            "Graphical User Interface",
            "Gooey Ugly Invention",
            "GUI Ducks",
            "Green Umpire Instincts"
        ],
        correctAnswer: "Graphical User Interface"
    },
    {
        question: "Steve Jobs, Steve Wozniak, and Ronald Wayne founded what company in 1976?",
        answerSet: [
            "BMW",
            "Apple",
            "The Linux Foundation",
            "Microsoft"
        ],
        correctAnswer: "Microsoft"
    },
    {
        question: "In a website browser address bar what does \"www\" stand for?",
        answerSet: [
            "We Will Win",
            "Wuhwuhwuh",
            "World Wide Web",
            "Walter Went Wild"
        ],
        correctAnswer: "World Wide Web"
    },
    {
        question: "HTML and CSS are computer languages used to create what?",
        answerSet: [
            "Operating Systems",
            "Keyboards",
            "Web Pages",
            "Machine Learning Algorithims"
        ],
        correctAnswer: "Web Pages"
    },
    {
        question: "In a photo editing program, what do the letters RGB stand for?",
        answerSet: [
            "Red, Green, Blue",
            "Remove Giant Background",
            "Ready, Go, Begin",
            "Rare Gem Broker"
        ],
        correctAnswer: "Red, Green, Blue"
    },
    {
        question: "When talking about computer memory, what does the acronym ROM stand for?",
        answerSet: [
            "Remote Operated Monkeys",
            "Rigid Operator Mistakes",
            "Run of mistakes",
            "Read Only Memory"
        ],
        correctAnswer: "Read Only Memory"
    }
];

// Starting Countdown Functions
var time = 6;
var initialCounter = setInterval(initialCountdown, 1000);
function initialCountdown() {
    time--;
    if (time<=0){
        clearInterval(initialCountdown);
        initGame();
        return;
    } 
    $("#initial-countdown").text(time);
}


// Game Runtime
var numCorrect, numIncorrect = 0;
function initGame() {
    $("#welcome").hide();
    var questionSpace = $("#question");
    var answerChoiceSpace = $("#choices");
    var gameTimer = setInterval(runTrivia, 10000);
    var currentQuestion = 0
    var t = trivia[currentQuestion];
    questionSpace.text(t.question);

    // Add Answer Space HTML element for each t.answerSet
    // Create event listener for clicking t.answerSet element
    // Finish runTrivia()
    
    function runTrivia(){
            if (currentQuestion <= 9){
            
            currentQuestion++;
        } else {
            clearInterval(runTrivia);
            return;
        }
    } 
}

// add a button that fires this function in the results div
function restartGame(){
    setInterval(initialCountdown,1000);
}