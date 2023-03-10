let num1 = Math.ceil(Math.random()*10)
let num2 = Math.ceil(Math.random() * 10)


let question = document.querySelector(".question")
question.innerText = `What is ${num1} multiply ${num2} ?`

let correctAnswer = num1 * num2

let form = document.querySelector(".form");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0
}

form.addEventListener("submit", () => {
    let input = document.querySelector(".answer")
    let userAnawer = +( input.value);
    if (correctAnswer === userAnawer )
    {
        score++;
        updateLocalStorage();
    }
    else {
        score--;
        updateLocalStorage();
    }
})

let scoreElem = document.querySelector(".score");
scoreElem.innerText = `Score: ${score}`

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}