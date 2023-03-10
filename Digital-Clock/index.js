let hourElem = document.getElementById("hour")
let minElem = document.getElementById("min")
let secElem = document.getElementById("sec")
let ampmElem = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? `0${h}` : h
    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec

    hourElem.innerText = h;
    minElem.innerText = min;
    secElem.innerText = sec;
    ampmElem.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000)
}
updateClock();
