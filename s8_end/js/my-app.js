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
    
    $("#monster-body").on("click",tickleMonster);
}

function tickleMonster(){
    console.log("APP: tickleMonster() called");
    
    //alert("HEE HEE HEE!!");
    myApp.alert('Hee Hee! I like tickling! Soooo fun!', 'Albert says....');
}