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
    new Question("8. Choose the correct HTML element to define emphasized text", ["<xmp><i></i></xmp>", "<xmp><em></em></xmp>", "<xmp><italic></italic></xmp>", "<xmp><strong></strong></xmp>"], "<xmp><em></em></xmp>"),
    new Question("9. Which tag would you use to create a hyperlink?", ["<xmp><a></a></xmp>", "<xpm><img></xpm>", "<xpm><dl></dl></xpm>"], "<xmp><a></a></xmp>"),
    new Question("10. Which character is used to indicate an end tag?", ["<xmp><</xmp>", "<xmp>^</xmp>", "<xmp>*</xmp>", "<xmp>/</xmp>"], "<xmp>/</xmp>"),
    new Question("11. How can you open a link in a new tab/browser window?", ['<a href="url" target="new">', '<a href="url" new>', '<a href="url" target="_blank">'], '<a href="url " target="_blank ">'),
    new Question("12. Which of these elements are all <table> elements?", ["<xmp><table><tr><tt></xmp>", "<xmp><table><tr><td></xmp>", "<xmp><table><head><tfoot></xmp>", "<xmp><thead><body><tr></xmp>"], "<xmp><table><tr><td></xmp>"), 
    new Question("13. Inline elements are normally displayed without starting a new line.", ["True", "False", "IDK", "Not Enough Info"], "True"),
    new Question("14. How can you make a numbered list?", ["<xmp><dl></dl></xmp>", "<xmp><ul></ul></xmp>", "<xmp><ol></ol></xmp>", "<xmp><list></list></xmp>"], "<xmp><ol></ol></xmp>"),
    new Question("15. How can you make a bulleted list?", ["<xmp><ol></ol></xmp>", "<xmp><list></list></xmp>", "<xmp><dl></dl></xmp>", "<xmp><ul></ul></xmp>"], "<xmp><ul></ul></xmp>"),
    new Question("16. What is the correct HTML for making a checkbox?", ["", "", "", ""], ""),
    new Question("17. ", ["<xmp><check></check></xmp>", '<xmp><input type="checkbox"></xmp>', "<xmp><checkbox></checkbox></xmp>", '<xmp><input type="check"></xmp>'], '<xmp><input type="checkbox"></xmp>'),
    new Question('18. What is the correct HTML for making a text input field?', ['<xmp><textinput type="text"></xmp>', '<xmp><input type="text"></xmp>', '<xmp><textfield></xmp>', '<xmp><input type="textfield"></xmp>'], '<xmp><input type="text"></xmp>'),
    new Question("19. What is the correct HTML for making a drop-down list?", ['<xmp><input type="dropdown"></xmp>', '<xmp><list></xmp>', '<xmp><input type="list"></xmp>', '<xmp><select></xmp>'], '<xmp><select></xmp>'),
    new Question("20. What is the correct HTML for making a text area?", ['<xmp><input type="textarea"></xmp>', '<xmp><input type="textbox"></xmp>', '<xmp><textarea></xmp>', '<xmp><input type="text"></xmp>'], '<xmp><textarea></xmp>'),
    new Question("21. What is the correct HTML for inserting an image?", ['<xmp><img src="image.gif" alt="MyImage"></xmp>', '<xmp><img alt="MyImage">image.gif</img></xmp>', '<xmp><img href="image.gif" alt="MyImage"></xmp>', '<xmp><image src="image.gif" alt="MyImage"></xmp>'], '<xmp><img href="image.gif" alt="MyImage"></xmp>'),
    new Question("22. What is the correct HTML for inserting a background image?", ['<xmp><body style="background-image:url(background.gif)"></xmp>','<xmp><background img="background.gif"></xmp>', '<xmp><body bg="background.gif"></xmp>', 'None of the above'], '<xmp><body style="background-image:url(background.gif)"></xmp>'),
    new Question("23. An <xmp><iframe></xmp> is used to display a web page within a web page.", ["There is no such thing as an <xmp><iframe></xmp>", "True", "False", "Not Sure"], "True"),
    new Question("24. What do HTML comment Tags look like?", ["<xmp>starts with /*and end with */</xmp>", "<xmp>//single line comments</xmp>", "start with <xmp><!-- and end with --></xmp>", "None of the above"], "start with<xmp><!-- and end with --></xmp>"),
    new Question("25. Block elements are normally displayed without starting a new line.", ["False", "True", "Both", "Not Sure"], "False"),
    new Question("26. Which HTML element defines the title of a document?", ["<xmp><meta></xmp>", "<xmp><title></xmp>", "<xmp><head></xmp>", "None of the above"], "<xmp><title></xmp>"),
    new Question("27. Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", ["src", "alt", "title", "longdesc"], "alt"),
    new Question("28. Which doctype is correct for HTML5?", ["<xmp><!DOCTYPE HTML5></xmp>", "<xmp><!DOCTYPE html></xmp>", '<xmp><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd"></xmp>', "None of the above"], "<xmp><!DOCTYPE html></xmp>"),
    new Question("29. Which HTML element is used to specify a footer for a document or section?", ["<xmp><footer></xmp>", "<xmp><section></xmp>", "<xmp><bottom></xmp>", "<xmp><f></xmp>"], "<xmp><footer></xmp>"),
    new Question("30. In HTML, you can embed SVG elements directly into an HTML page.", ["True", "False", "I don't Know", ""], "True"),
    new Question("31. What is the correct HTML element for playing video files?", ["<xmp><movie></xmp>", "<xmp><media></xmp>", "<xmp><video></xmp>", "<xmp><img></xmp>"], "<xmp><video></xmp>"),
    new Question("32. What is the correct HTML element for playing audio files?", ["", "", "", ""], ""),
    new Question("33. ", ["<xmp><video></xmp>", "<xmp><sound></xmp>", "<xmp><audio></xmp>", "<xmp><mp3></xmp>"], "<xmp><audio></xmp>"),
    new Question('34. The HTML global attribute, "contenteditable " is used to:', ["Specifies a context menu for an element. The menu appears when a user right-clicks on the element", "Specify whether the content of an element should be editable or not", "Return the position of the first found occurrence of content inside a string", "Update content from the server"], "Specify whether the content of an element should be editable or not"),
    new Question("35. In HTML, onblur and onfocus are:", ["Style attributes", "Event attributes", "HTML elements", "None of these above"], "Event attributes"),
    new Question("36. Graphics defined by SVG is in which format?", ["XML", "HTML", "CSS", "JS"], "XML"),
    new Question("37. The HTML <canvas> element is used to:", ["create draggable elements", "draw graphics", "manipulate data in MySQL", "display database records"], "draw graphics"),
    new Question("38. In HTML, which attribute is used to specify that an input field must be filled out?", ["placeholder", "required", "validate", "formvalidate"], "required"),
    new Question("39. Which input type defines a slider control?", ["range", "slider", "search", "controls"], "range"),
    new Question("40. Which HTML element is used to display a scalar measurement within a range?", ["<xmp><range></xmp>", "<xmp><gauge></xmp>", "<xmp><measure></xmp>", "<xmp><meter></xmp>"], "<xmp><meter></xmp>"),
    new Question("41. Which HTML element defines navigation links?", ["<xmp><navigation></xmp>", "<xmp><navigate></xmp>", "<xmp><nav></xmp>", "<xmp><n></xmp>"], "<xmp><nav></xmp>"),
    new Question("42. In HTML, what does the <xmp><aside></xmp> element define?", ["Content aside from the page content", "A navigation list to be shown at the left side of the page", "The ASCII character-set; to send information between computers on the Internet", "None of the above"], "Content aside from the page content"),
    new Question("43. Which HTML element is used to specify a header for a document or section?", ["<xmp><section></xmp>", "<xmp><head></xmp>", "<xmp><top></xmp>", "<xmp><header></xmp>"], "<xmp><header></xmp>"),
];

//create quiz
var quiz = new Quiz(questions);

// display quiz
populate();