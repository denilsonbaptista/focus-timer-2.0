export default function () {
  const pressAudio = new Audio("./assets/sounds/press.wav")
  const kichen = new Audio("./assets/sounds/kichen-timer.mp3")
  const soundForest = new Audio("./assets/sounds/sound-forest.wav")
  const soundRain = new Audio("./assets/sounds/sound-rain.wav")
  const soundCoffeeMachine = new Audio(
    "./assets/sounds/sound-coffee-machine.wav"
  )
  const soundFireplace = new Audio("./assets/sounds/sound-fireplace.wav")

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

  function soundRainPlay() {
    soundRain.loop = true
    soundRain.load()
    soundRain.play()
  }

  function soundRainStop() {
    soundRain.pause()
  }

  function soundCoffeeMachinePlay() {
    soundCoffeeMachine.loop = true
    soundCoffeeMachine.load()
    soundCoffeeMachine.play()
  }

  function soundCoffeeMachineStop() {
    soundCoffeeMachine.pause()
  }

  function soundFireplacePlay() {
    soundFireplace.loop = true
    soundFireplace.load()
    soundFireplace.play()
  }

  function soundFireplaceStop() {
    soundFireplace.pause()
  }

  function forestSoundVolume(volume) {
    soundForest.volume = volume
  }

  function rainSoundVolume(volume) {
    soundRain.volume = volume
  }

  function coffeeMachineSoundVolume(volume) {
    soundCoffeeMachine.volume = volume
  }

  function fireplaceSoundVolume(volume) {
    soundFireplace.volume = volume
  }

  return {
    pressButton,
    kichenTimer,
    soundForestPlay,
    soundForestStop,
    soundRainPlay,
    soundRainStop,
    soundCoffeeMachinePlay,
    soundCoffeeMachineStop,
    soundFireplacePlay,
    soundFireplaceStop,
    forestSoundVolume,
    rainSoundVolume,
    coffeeMachineSoundVolume,
    fireplaceSoundVolume,
  }
}
