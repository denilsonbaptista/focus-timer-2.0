import Timer from "./timer.js"
import Controls from "./controls.js"
import {
  minutesDisplay,
  secondsDisplay,
  btnPlay,
  btnPause,
  btnStop,
  btnIncrement,
  btnDecrement,
} from "./elements.js"

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

const controls = Controls({
  btnPlay,
  btnPause,
  timerCountdown: timer.countdown,
  timerHold: timer.hold,
  timerUpdateDisplay: timer.updateDisplay,
  timerIncrementFive: timer.incrementFive,
  timerDecremetnFive: timer.decrementFive,
})

btnPlay.addEventListener("click", controls.buttonPlay)
btnPause.addEventListener("click", controls.buttonPause)
btnStop.addEventListener("click", controls.buttonStop)
btnIncrement.addEventListener("click", controls.buttonIncrementFive)
btnDecrement.addEventListener("click", controls.buttonDecrementFive)
