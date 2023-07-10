export default function () {
  const pressAudio = new Audio("./assets/sounds/press.wav")

  function pressButton() {
    pressAudio.play()
  }

  return {
    pressButton,
  }
}
