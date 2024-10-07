/**
 *  Wait for the DOM to finish loading before answering 
 * Get the button elements and add event listeners to them
 */

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button"); 
    for (let button of buttons) {
        if (button.innerText === "SUBMIT ANSWER"){
            button.addEventListener("click", function(event) {
                event.preventDefault();
                checkAnswer(button);
             });
         }
    }
});
/**
 * Control to check the capital of multiples countries
 */
function checkAnswer (button) {
    let countryName = button.id;
    let selectedbutton = document.querySelector(`input[name="${countryName}"]:checked`);
    if (selectedbutton) {
        let userAnswer = selectedbutton.value;
        let correctAnswer = button.value;
        let evaluation = userAnswer === correctAnswer;
        if (evaluation) {
            selectedbutton.parentElement.parentElement.style.color = "green";
            alert("Hey! Your answer was correct");
            incrementScore();
        } else {
            selectedbutton.parentElement.parentElement.style.color = "red";
            alert(`Ohhhhh.... you answered ${userAnswer} . The correct answer was ${correctAnswer} .`);
            incrementWrongAnswer();
        }
      button.disabled = true;
      button.innerText = "Submitted";
      button.style.backgroundColor = "lightgrey";
      button.style.color = "darkgrey"; 
      button.style.cursor = "not-allowed"; 
        
    } else {
        alert('Select an option!');
    } 
}
/** 
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore () {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer () {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}
/** 
 * Clear all selected radio buttons by resetting the forms
 */
document.getElementById("resetbutton").addEventListener("click", function(event) {
    event.preventDefault();
    let forms = document.getElementsByTagName("form");
    for (let form of forms) {
      form.reset(); 
      form.style.color = "white";
    }
    
    /** 
     * Reset all buttons
     */
    let buttons = document.getElementsByTagName("button"); 
    for (let button of buttons) {
      if (button.innerText != "RESET"){
            button.disabled = false;
            button.innerText = "SUBMIT ANSWER";
            button.style.backgroundColor = "#445361";
            button.style.color = "white"; 
            button.style.cursor = "pointer"; 
        }
    }
    /**
     * Reset the scores
     */
    document.getElementById("incorrect").innerText = 0;
    document.getElementById("correct").innerText = 0;
 
});