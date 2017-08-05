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
var mode = ""

$(document).ready(initialize);

function initialize(){
    console.log("APP: Initialized....");
    
    //load options
    loadContent();
}


function loadContent(){
    
    //display loading animation
    myApp.showPreloader();
    
    //Pull in the remote JSON and store it in my global variable content
    $.ajax({
        url: "https://data.cityofnewyork.us/resource/hw9t-9zpc.json",
        type: "GET",
        data: {
          "$limit" : 5000,
          "$$app_token" : "qp1tLQ012yji1coh4y65jg28L"
        }
    }).done(function(data) {
        
        myApp.hidePreloader();
        
        //make our JSON data globally available
        content = data;
        
        displayQuestions();

    });
}


function displayQuestions(){
    console.log("displayQuestions() called...");
    
    //setup our dynamic HTML string
    var displayHTML = "<ul>";
    
    //Loop through the content array
    for(var i=0; i<content.length; i++){
        
        //check if prevalence is equal to "n/a"
        if(content[i].prevalence != "n/a33333"){
            //display the question property of each object inside the content array
            displayHTML += "<li>";
                displayHTML += "<a href='#' class='item-link item-content' data-id='"+i+"'>";
                    displayHTML += "<div class='item-inner'>";
                        displayHTML += "<div class='item-title'>"+content[i].question+"</div>";
                    displayHTML += "</div>";
                displayHTML += "</a>";
            displayHTML += "</li>";
        }
    }
    
    //close the unordered list
    displayHTML += "</ul>";
    
    //Output to the actual HTML element
    $("#talk-container").html(displayHTML);
    
    
    //Add listner to list item
    $(".item-link").on("click", displayAnswer);
    
}


function displayAnswer(){
    console.log("displayAnswer() called");
    
    //grab the data attribute of the <a href> item
    var index = $(this).data("id");
   
    //get the prevalence property of object
    var prevalence = content[index].prevalence;
    
    //have monster say something...
    talk("There is a "+prevalence+ "% prevalence rate for: " + content[index].question);
    
}


function talk(whatToSay){
    $("#monster-bubble").html(whatToSay).fadeIn(400).delay(3000).fadeOut(400);
}



