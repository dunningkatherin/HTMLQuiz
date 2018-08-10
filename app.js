function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions

var questions = [
    new Question("1. What does HTML stand for?", ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "None of the above"], "Hyper Text Markup Language"), 
    new Question("2. Who is making the Web standards?", ["Moxilla", "Google", "The World Wide Web Consortium", "Microsoft"], "The World Wide Web Consortium"),
    new Question("3. Choose the correct HTML element for the largest heading:", ["<xmp><h1></h1></xmp>", "<xmp><head></head></xmp>", "<xmp><h6></h6></xmp>", "<xmp><heading></heading></xmp>"], "<xmp><h1></h1></xmp>"),
    new Question("4. What is the correct HTML element for inserting a line break?", ["<xmp><break></break></xmp>", "<xmp><lb></lb></xmp>", "<xmp><br></xmp>"], "<xmp><br></xmp>"),
    new Question("5. What is the correct HTML for adding a background color?", ["<xmp><background>yellow</background></xmp>", "<xmp><body style='background-color: yellow;'></xmp>", "<xmp><body bg='yellow'></xmp>", "<xmp>.background-color: yellow</xmp>"], "<xmp><body style='background-color: yellow;'></xmp>"),
    new Question("6. Choose the correct HTML element to define important text", ["<xmp><important></xmp>", "<xmp><i></i></xmp>", "<xmp><b></b></xmp>", "<xmp><strong></strong></xmp>"], "<xmp><strong></strong></xmp>"),
    new Question("7. What is the correct HTML for creating a hyperlink?", ['<xmp><a>http://www.w3schools.com</a></xmp>', '<xmp><a name="http: //www.w3schools.com">W3Schools.com</a></xmp>', '<xmp><a url="http://www.w3schools.com">W3Schools.com</a></xmp>', '<xmp><a href="http://www.w3schools.com">W3Schools</a></xmp>'], '<xmp><a href="http://www.w3schools.com">W3Schools</a></xmp>'),
    new Question("8. Choose the correct HTML element to define emphasized text", ["<xmp><i></i></xmp>", "<xmp><em></em></xmp>", "<xmp><italic></italic></xmp>", "<xmp><strong></strong></xmp>"], "<xmp><em></em></xmp>")

];

//create quiz
var quiz = new Quiz(questions);

// display quiz
populate();