import {
  btnPlay,
  btnPause,
  btnStop,
  btnIncrement,
  btnDecrement,
} from "./elements.js"

export default function ({ sounds, controls, timer }) {
  btnPlay.addEventListener("click", () => {
    sounds.pressButton()
    controls.buttonPlay()
    timer.countdown()
  })
  btnPause.addEventListener("click", () => {
    sounds.pressButton()
    controls.buttonPause()
    timer.hold()
  })
  btnStop.addEventListener("click", () => {
    controls.reset()
    timer.hold()
    timer.updateDisplay()
  })
  btnIncrement.addEventListener("click", timer.incrementFive)
  btnDecrement.addEventListener("click", timer.decrementFive)
}
