export default function () {
  const pressAudio = new Audio("./assets/sounds/press.wav")
  const kichen = new Audio("./assets/sounds/kichen-timer.mp3")
  const soundForest = new Audio("./assets/sounds/sound-forest.wav")

  function pressButton() {
    pressAudio.play()
  }

  function kichenTimer() {
    kichen.play()
  }

  function soundForestPlay() {
    soundForest.loop = true
    soundForest.load()
    soundForest.play()
  }

  function soundForestStop() {
    soundForest.pause()
  }

  return {
    pressButton,
    kichenTimer,
    soundForestPlay,
    soundForestStop,
  }
}
