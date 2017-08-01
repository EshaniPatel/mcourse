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

$(document).ready(initialize);


function initialize(){
    console.log("APP: Initialized....");
    
    //Handle events for physical interactions
    $("#monster-bubble").hide();
    $(".eyes").on("click", touchEyes);
    $(".mbody").on("click", touchBody);
    $(".leg").on("click", touchLeg);
    
    //load options
    loadContent();
}


function loadContent(){
    
    //create an array of response items
    var responses = [
        "What is your name?",
        "How are you doing?"
    ];
    
    //create an empty string variable
    var listHTML = "";

    //build dynamic HTML for list
    listHTML = "<ul>";
    
    //loop through array
    for (var i=0; i<responses.length; i++){
        listHTML += "<li>";
            listHTML += "<a href='#' class='item-link item-content'>";
                listHTML += "<div class='item-inner'>";
                    listHTML += "<div class='item-title'>"+responses[i]+"</div>";
                listHTML += "</div>";
            listHTML += "</a>";
        listHTML += "</li>";
    }
    
    listHTML += "</ul>";
    
    //output HTML to talk-container
    $("#talk-container").html(listHTML);
}

function touchEyes(){
    talk("Hey! Don't poke my eyes!");
}

function touchBody(){
    talk("I don't like when you touch me. Please don't. ");
}

function touchLeg(){
    talk("What part of don't touch me, don't you get?");
}

function talk(whatToSay){
    $("#monster-bubble").html(whatToSay).fadeIn(400).delay(3000).fadeOut(400);
}