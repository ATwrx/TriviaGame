var trivia = [{
    question: "What does the acronym USB stand for when referring to a computer port?",
    answerSet: {
        "A": "User Should Buy",
        "B": "Universal Serial Bus",
        "C": "Uber Stretch Bus",
        "D": "United States Baseball"
    },
    correctAnswer: "B"
},
{
    question: "What do you call the small image icons used to express emotions or ideas in digital communication?",
    answerSet: {
        "A": "Emojis",
        "B": "GIF's",
        "C": "JPEG's",
        "D": "Texts from Mom"
    },
    correctAnswer: "A"
},
{
    question: "When referring to a computer monitor, what does the acronym LCD stand for?",
    answerSet: {
        "A": "Limited Cypher Ducks",
        "B": "Light Collision Detector",
        "C": "Laser Color Display",
        "D": "Liquid Crystal Display"
    },
    correctAnswer: "D"
},
{
    question: "Which of these is NOT a operating system?",
    answerSet: {
        "A": "Windows",
        "B": "Android",
        "C": "Linux",
        "D": "Ledges"
    },
    correctAnswer: "D"
},
{
    question: "When referring to computer memory, what does that acronym RAM stand for?",
    answerSet: {
        "A": "Real Awesome Memory",
        "B": "Random Access Memory",
        "C": "Razor Alignment Memory",
        "D": "Reacting Automitic Memory"
    },
    correctAnswer: "B"
},
{
    question: "In computer science, what does \"GUI\" stand for?",
    answerSet: {
        "A": "Graphical User Interface",
        "B": "Gooey Ugly Invention",
        "C": "GUI Ducks",
        "D": "Green Umpire Instincts"
    },
    correctAnswer: "A"
},
{
    question: "Steve Jobs, Steve Wozniak, and Ronald Wayne founded what company in 1976?",
    answerSet: {
        "A": "BMW",
        "B": "Apple",
        "C": "The Linux Foundation",
        "D": "Microsoft"
    },
    correctAnswer: "D"
},
{
    question: "In a website browser address bar what does \"www\" stand for?",
    answerSet: {
        "A": "We Will Win",
        "B": "Wompa Wompa Wompa",
        "C": "World Wide Web",
        "D": "Walter Went Wild"
    },
    correctAnswer: "C"
},
{
    question: "HTML and CSS are computer languages used to create what?",
    answerSet: {
        "A": "Operating Systems",
        "B": "Keyboards",
        "C": "Web Pages",
        "D": "Machine Learning Algorithims"
    },
    correctAnswer: "C"
},
{
    question: "In a photo editing program, what do the letters RGB stand for?",
    answerSet: {
        "A": "Red, Green, Blue",
        "B": "Remove Giant Background",
        "C": "Ready, Go, Begin",
        "D": "Rare Gem Broker"
    },
    correctAnswer: "A"
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

// Answer toggle 
$(".answer").click(function () {
    $(".answer").removeClass("selected");
    $(this).addClass("selected");
})


// Game Runtime

function initGame() {
    $("#welcome").hide();
    var gameTime = 6; //21 for production
    var currentQuestion = 0;
    var numIncorrect = 0;
    var numCorrect = 0;
    var gameTimer = setInterval(runTrivia, 1000);
    var totalTime = 0; // Time Test





    function runTrivia() {

        var triviaStr = trivia[currentQuestion];
        var answers = triviaStr.answerSet;
        var correctAnswer = triviaStr.correctAnswer;
        var questionArea = $("#question");
        var answerChoices = $("#choices");
        gameTime--; // Keeps time for each interval
        totalTime++; // Time Test -- remove later
        // Updates the DOM for each question
        $("#game-timer").html(gameTime);
        $("#question-num").html("<h4> Question #" + (currentQuestion + 1) + "</h4>");
        questionArea.text(triviaStr.question);
        $.each(answers, function (i, val) {
            $("#" + i).text(i + " : " + val);
        })
        $("#game").show("slow");


        // Right - Wrong Logic
        // Reminder: remove test times and console.logs()
        var selected = $(".selected").val();
        console.log(selected + correctAnswer);

        if (currentQuestion === 9 && gameTime === 0) {
            console.log("Game completed in  " + totalTime + " seconds.");
            $("#game").hide();

            console.log(numCorrect + " Correct.");
            console.log(numIncorrect + " Incorrect.");
            $("#result-section").show("slow");
            clearInterval(gameTimer);
            if (selected == correctAnswer) {
                return numCorrect++;
            } else {
                return numIncorrect++;
            };
        } else if (gameTime === 0 && currentQuestion !== 9) {
            gameTime += 6; //21 for finished
            console.log(numCorrect + " Correct.");
            console.log(numIncorrect + " Incorrect.");
            $("#game").hide("slow");
            $(".answer").removeClass("selected");
            console.log("Question " + currentQuestion + " finished in " + totalTime); //Test
            if (selected == correctAnswer) {
                return numCorrect++ , currentQuestion++;
            } else {
                return numIncorrect++ , currentQuestion++;
            };

        };
    };
    var score = Math.floor(numCorrect / 100);
    $("#number-correct").html("<h3>You got " + numCorrect + " answers correct.</h3>");
    $("#number-wrong").html("<h3>You got " + numIncorrect + " answers wrong.</h3>");
    $("#score").text(score);
};


// add a button that fires this function in the results div
function restartGame() {
    location.reload();
}