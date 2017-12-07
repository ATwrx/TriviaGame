var trivia = [{
    question: "What does the acronym USB stand for when referring to a computer port?",
    answerSet: {
        A: "User Should Buy",
        B: "Universal Serial Bus",
        C: "Uber Stretch Bus",
        D: "United States Baseball"
    },
    correctAnswer: "Universal Serial Bus"
},
{
    question: "What do you call the small image icons used to express emotions or ideas in digital communication?",
    answerSet: {
        A: "Emojis",
        B: "GIF's",
        C: "JPEG's",
        D: "Texts from Mom"
    },
    correctAnswer: "Emojis"
},
{
    question: "When referring to a computer monitor, what does the acronym LCD stand for?",
    answerSet: {
        "A": "Limited Cypher Ducks",
        "B": "Light Collision Detector",
        "C": "Laser Color Display",
        "D": "Liquid Crystal Display"
    },
    correctAnswer: "Liquid Crystal Display"
},
{
    question: "Which of these is NOT a operating system?",
    answerSet: {
        A: "Windows",
        B: "Android",
        C: "Linux",
        D: "Ledges"
    },
    correctAnswer: "Ledges"
},
{
    question: "When referring to computer memory, what does that acronym RAM stand for?",
    answerSet: {
        A: "Real Awesome Memory",
        B: "Random Access Memory",
        C: "Razor Alignment Memory",
        D: "Reacting Automitic Memory"
    },
    correctAnswer: "Random Access Memory"
},
{
    question: "In computer science, what does \"GUI\" stand for?",
    answerSet: {
        A: "Graphical User Interface",
        B: "Gooey Ugly Invention",
        C: "GUI Ducks",
        D: "Green Umpire Instincts"
    },
    correctAnswer: "Graphical User Interface"
},
{
    question: "Steve Jobs, Steve Wozniak, and Ronald Wayne founded what company in 1976?",
    answerSet: {
        A: "BMW",
        B: "Apple",
        C: "The Linux Foundation",
        D: "Microsoft"
    },
    correctAnswer: "Microsoft"
},
{
    question: "In a website browser address bar what does \"www\" stand for?",
    answerSet: {
        A: "We Will Win",
        B: "Wompa Wompa Wompa",
        C: "World Wide Web",
        D: "Walter Went Wild"
    },
    correctAnswer: "World Wide Web"
},
{
    question: "HTML and CSS are computer languages used to create what?",
    answerSet: {
        A: "Operating Systems",
        B: "Keyboards",
        C: "Web Pages",
        D: "Machine Learning Algorithims"
    },
    correctAnswer: "Web Pages"
},
{
    question: "In a photo editing program, what do the letters RGB stand for?",
    answerSet: {
        A: "Red, Green, Blue",
        B: "Remove Giant Background",
        C: "Ready, Go, Begin",
        D: "Rare Gem Broker"
    },
    correctAnswer: "Red, Green, Blue"
}
];

// Starting Countdown Functions
var startTime = 6;
var initialCounter = setInterval(initialCountdown, 1000);
function initialCountdown() {
    startTime--;
    if (startTime === 0) {
        clearInterval(initialCounter);
        initGame();
        return;
    }
    $("#initial-countdown").text(startTime);
}

// Game Runtime
// this needs to go in somewhere --> var numCorrect, numIncorrect = 0;
function initGame() {
    $("#welcome").hide();
    var gameTime = 6; //21 for production
    var currentQuestion = 0;
    var gameTimer = setInterval(runTrivia, 1000);
    var totalTime = 0; // Time Test

    function runTrivia() {
        var questionSpace = $("#question");
        var answerChoiceSpace = $("#choices");
        var triviaStr = trivia[currentQuestion];
        var answerSet = triviaStr.answerSet;
        gameTime--; // Keeps time for each interval
        totalTime++; // Time Test
        // Updates the DOM for each question
        $("#game-timer").html(gameTime);
        $("#question-num").html("<h4> Question #" + (currentQuestion + 1) + "</h4>");
        questionSpace.text(triviaStr.question);
        jQuery.each(answerSet, function (i, val) {
            $("#" + i).append($("")
            )).html("<label for='" + i + "'>" + val + " </label>");
    });
    $("#game").show("slow");
    // Reminder: remove test times and console.logs()
    if (currentQuestion === 9 && gameTime === 0) {
        console.log("Game completed in  " + totalTime + " seconds.");
        $("#game").hide();
        $("#result-section").show("slow");
        clearInterval(gameTimer);
        return;
    } else if (gameTime === 0 && currentQuestion !== 9) {
        gameTime += 6; //21 for production
        $("#game").hide("slow");
        console.log("Question " + currentQuestion + " finished in " + totalTime); //Test
        return currentQuestion++;
    };
};
};

// Results Section


// add a button that fires this function in the results div
function restartGame() {
    location.reload();
}