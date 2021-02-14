const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
var srt = textEl.innerHTML;
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = srt.slice(0, idx)

    idx++

    if(idx > srt.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('click', (e) => speed = 300 / e.target.value)//recibe valor para el botón 