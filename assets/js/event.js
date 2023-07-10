import {
  btnPlay,
  btnPause,
  btnStop,
  btnIncrement,
  btnDecrement,
} from "./elements.js"

export default function ({ sounds, controls, timer }) {
  function play() {
    sounds.pressButton()
    controls.buttonPlay()
    timer.countdown()
  }

  function pause() {
    sounds.pressButton()
    controls.buttonPause()
    timer.hold()
  }

  function stop() {
    controls.reset()
    timer.hold()
    timer.updateDisplay()
  }

  function increment() {
    timer.incrementFive()
  }

  function decrement() {
    timer.decrementFive()
  }

  btnPlay.addEventListener("click", play)
  btnPause.addEventListener("click", pause)
  btnStop.addEventListener("click", stop)
  btnIncrement.addEventListener("click", increment)
  btnDecrement.addEventListener("click", decrement)
}
