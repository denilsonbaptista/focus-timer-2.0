export default function () {
  const pressAudio = new Audio()

  function pressButton() {
    pressAudio.play()
  }

  return {
    pressButton,
  }
}
