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
    
    $("#monster-bubble").hide();
    
    $(".eyes").on("click", touchEyes);
    
    $(".mbody").on("click", touchBody);
    
    $(".leg").on("click", touchLeg);
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