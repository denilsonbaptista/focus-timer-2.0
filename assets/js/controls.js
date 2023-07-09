import sounds from "./sounds.js"

export default function ({
  btnPlay,
  btnPause,
  timerCountdown,
  timerHold,
  timerUpdateDisplay,
  timerIncrementFive,
  timerDecremetnFive,
}) {
  function buttonPlay() {
    btnPlay.classList.add("hide")
    btnPause.classList.remove("hide")
    timerCountdown()
    sounds().pressButton()
  }

  function buttonPause() {
    btnPause.classList.add("hide")
    btnPlay.classList.remove("hide")
    timerHold()
  }

  function buttonStop() {
    btnPause.classList.add("hide")
    btnPlay.classList.remove("hide")
    timerHold()
    timerUpdateDisplay()
  }

  function buttonIncrementFive() {
    timerIncrementFive()
  }

  function buttonDecrementFive() {
    timerDecremetnFive()
  }

  return {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrementFive,
    buttonDecrementFive,
  }
}
