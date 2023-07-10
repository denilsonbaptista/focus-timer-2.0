export default function () {
  const pressAudio = new Audio("./assets/sounds/press.wav")
  const kichen = new Audio("./assets/sounds/kichen-timer.mp3")

  function pressButton() {
    pressAudio.play()
  }

  function kichenTimer() {
    kichen.play()
  }

  return {
    pressButton,
    kichenTimer,
  }
}
