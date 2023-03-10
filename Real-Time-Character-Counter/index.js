let textArea = document.querySelector("#textarea")
let totalCounter = document.querySelector(".total-charac")
let remainingCounter = document.querySelector(".remaining-charac")


textArea.addEventListener("keyup", () => {
    updateCounter()
})
function updateCounter() {
    totalCounter.innerText = textArea.value.length
    remainingCounter.innerText = textArea.getAttribute("maxlength") - textArea.value.length
}
