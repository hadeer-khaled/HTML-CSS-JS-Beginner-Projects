let bodyElem = document.querySelector("body")

bodyElem.addEventListener("mousemove", (e) => {
    xPos = e.offsetX;
    yPos = e.offsetY;
    // console.log(`Offset X: ${e.offsetX}`)
    // console.log(`Offset Y: ${e.offsetX}`)
    let spanEl = document.createElement("span")
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    bodyElem.appendChild(spanEl)

    let size = Math.random() * 100;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px";

    setTimeout(() => {
        spanEl.remove()
    },3000)

    
})