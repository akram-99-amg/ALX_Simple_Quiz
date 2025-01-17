function checkAnswer() {
    let correctAnswer = "4";
    let userAnswer = document.querySelector("[name='quiz']").value;

    if (userAnswer == correctAnswer) {
        let feedback = document.getElementById("feedback")
        feedback.textContent = "Correct! Well done.";

    } else {
        feedback.textContent = "That's incorrect. Try again!.";
    }
}

let submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer)

