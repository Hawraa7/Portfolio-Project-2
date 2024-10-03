// Wait for the DOM to finish loading before answering
// Get the button elements and add event listeners to them
 
document.addEventListener("DOMContentLoaded", function(){
        let buttons = document.getElementsByTagName("button"); 
        for (let button of buttons) {
            button.addEventListener("click", function() {
               checkAnswer();
            })
        }
    
    })

function checkAnswer () {
    let countryName= 
 
}

function clickSubmit () {

}
/** 
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore () {
    let oldScore = parseInt(document.getElementbyId("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer () {
    let oldScore = parseInt(document.getElementbyId("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

