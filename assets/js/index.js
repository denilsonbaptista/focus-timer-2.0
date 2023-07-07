import {
  minutesDisplay,
  secondsDisplay,
  btnPlay,
  btnPause,
  btnStop,
  btnMore,
  btnLess,
} from "./elements.js"

let timeTimerInterval

function countdown() {
  timeTimerInterval = setInterval(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (seconds <= 0) {
      seconds = 60
      minutes--
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }, 1000)
}

btnPlay.addEventListener("click", () => {
  btnPlay.classList.add("hide")
  btnPause.classList.remove("hide")
  countdown()
})

btnPause.addEventListener("click", () => {
  btnPause.classList.add("hide")
  btnPlay.classList.remove("hide")
  clearInterval(timeTimerInterval)
})
