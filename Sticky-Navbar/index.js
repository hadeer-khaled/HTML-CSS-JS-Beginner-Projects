let navbar = document.querySelector(".navbar")
let textContent = document.querySelector(".content")

console.log(navbar.offsetHeight)
console.log(textContent.offsetTop)

window.addEventListener("scroll", () => {
    if (window.scrollY > (textContent.offsetTop - navbar.offsetHeight - 20)) {
        navbar.classList.add("active") 
    }
    else {
        navbar.classList.remove("active") 
    }
})