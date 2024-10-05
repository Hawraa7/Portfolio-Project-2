// Wait for the DOM to finish loading before answering
// Get the button elements and add event listeners to them
 
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button"); 
    for (let button of buttons) {
        button.addEventListener("click", function() {
            checkAnswer(button);
        })
    }
})
/**
 * control to check the capital of multiples countries
 */
function checkAnswer (button) {
    let countryName = button.id;
    let selectedbutton = document.querySelector(`input[name="${countryName}"]:checked`);
    if (selectedbutton) {
        let userAnswer = selectedbutton.value;
        let correctAnswer = button.value;
        let evaluation = userAnswer === correctAnswer;
        if (evaluation) {
            alert("Hey! Your answer was correct");
            incrementScore();
            let image = img.id;
            showImage(selectedbutton,button,image);
        } else {
            alert(`Ohhhhh.... you answered ${userAnswer} . The correct answer was ${correctAnswer} .`);
            incrementWrongAnswer();
            
            
        }
        
    } else {
        alert('Select an option!');
    }
}

function showImage (selectedbutton,submitbutton,image) {
     let correctAnswer = submitbutton.value;
     let userAnswer = selectedbutton.value;
     let evaluation = correctAnswer === userAnswer;
     if (evaluation) {
        image.id.style.display= 'inline-block';
     } else {
        image.id.style.display= 'none';
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

