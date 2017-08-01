// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


//----------------------


//global variables
var content;
var currentQuestionIndex = 0;

$(document).ready(initialize);


function initialize(){
    console.log("APP: Initialized....");
    
    //load options
    loadContent();
}

function showResponse(index){
    
    var currentQuestionObj = content.questionList[currentQuestionIndex];
    
    //grab the option object from the options array
    var optionsObjSelected = currentQuestionObj.options[index];
    
    //check if correct or not...
    if(optionsObjSelected.correct == true){
        talk("YOU GOT IT!!!!");
    }else{
        talk("OOpsie.....");
    }
    
    moveNextQuestion();
};


function moveNextQuestion(){
    if((currentQuestionIndex+1)<content.questionList.length){
        currentQuestionIndex++;
        displayQuestion();
    }else{
        endQuiz();
    }
}

function endQuiz(){
    $("#talk-container").html("YOUR DONE!!!");
}



function loadContent(){
    console.log("loadContent() called");
        
    //create an array of response items
    content = {
      "title": "Math Quiz",
      "points": 100,
      "questionList": [
        {
          "question": "What is four plus four?",
          "options": [
            {
              "option": "Eight",
              "correct": true
            },
            {
              "option": "Ten",
              "correct": false
            }
          ]
        },
        {
          "question": "What is six divided by 2?",
          "options": [
            {
              "option": "Three",
              "correct": true
            },
            {
              "option": "New York",
              "correct": false
            }
          ]
        }
      ]
    };
    
    displayQuestion();
}



function displayQuestion(){
    
    //Setup the current question object
    var tempCurrentQuestionObj = content.questionList[currentQuestionIndex];

    
    //DISPLAY TITLE OF CURRENT QUESTION    
    var htmlOutput = "<div class='questionLabel'>"+tempCurrentQuestionObj.question+"</div>";
    
    //DISPLAY OPTIONS OF CURRENT QUESTION
    htmlOutput += "<ul>";
    for(var x=0; x<tempCurrentQuestionObj.options.length; x++){
        htmlOutput += "<li>";
            htmlOutput += "<a href='#' class='item-link item-content' data-id='" + x + "'>";
                htmlOutput += "<div class='item-inner'>";
                    htmlOutput += "<div class='item-title'>"+ tempCurrentQuestionObj.options[x].option +"</div>";
                htmlOutput += "</div>";
            htmlOutput += "</a>";
        htmlOutput += "</li>";
    }
    htmlOutput += "</ul>";
    
    
    //OUTPUT HTML
    $("#talk-container").html(htmlOutput);
    
    //Add event listener for clicking...
    $(".item-link").on("click", function(){
        console.log(this);
        var index = $(this).data('id');
        showResponse(index);
    });
}



function talk(whatToSay){
    $("#monster-bubble").html(whatToSay).fadeIn(400).delay(3000).fadeOut(400);
}





/*
    START
    content.questionList[0]
    SELECT AN OPTION FROM WITHIN CURRENT QUESTION [0]
        content.questionList[0].options[x]
    TELL THEM IF RIGHT OR WRONG
        content.questionList[0].options[x].correct (going to be either true/false)
    MOVE ON TO THE NEXT QUESTION
    
    
    content.questionList[1]
    SELECT AN OPTION FROM WITHIN CURRENT QUESTION [1]
        content.questionList[1].options[x]
    TELL THEM IF RIGHT OR WRONG
        content.questionList[1].options[x].correct (going to be either true/false)
    MOVE ON TO THE NEXT QUESTION
    
    DETECT NO MORE QUESTIONS
    
    SHOW FINAL SCORE
    */



/*

    //create an empty string variable
    var listHTML = "";

    //build dynamic HTML for list
    listHTML += "<div>"+content.question+"</div>";
    listHTML += "<ul>";
    
    //loop through array
    for (var i=0; i<content.length; i++){
        listHTML += "<li>";
            listHTML += "<a href='#' class='item-link item-content' data-anything='whatever' data-id='" + i + "'>";
                listHTML += "<div class='item-inner'>";
                    listHTML += "<div class='item-title'>"+content[i].option+"</div>";
                listHTML += "</div>";
            listHTML += "</a>";
        listHTML += "</li>";
    }
    
    listHTML += "</ul>";
    
    //output HTML to talk-container
    $("#talk-container").html(listHTML);

*/

