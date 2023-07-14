import {
  btnPlay,
  btnPause,
  btnStop,
  btnIncrement,
  btnDecrement,
  playForest,
  stopForest,
  playRain,
  stopRain,
  playCoffeeMachine,
  stopCoffeeMachine,
  playFireplace,
  stopFireplace,
  forestVolume,
  rainVolume,
  coffeeMachineVolume,
  fireplaceVolume,
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

  function playForestSound() {
    controls.playForestSound()
    sounds.soundForestPlay()
    stopRainSound()
    stopCoffeeMachineSound()
    stopFireplaceSound()
  }

  function stopForestSound() {
    controls.stopForestSound()
    sounds.soundForestStop()
  }

  function playRainSound() {
    controls.playRainSound()
    sounds.soundRainPlay()
    stopForestSound()
    stopCoffeeMachineSound()
    stopFireplaceSound()
  }

  function stopRainSound() {
    controls.stopRainSound()
    sounds.soundRainStop()
  }

  function playCoffeeMachineSound() {
    controls.playCoffeeMachineSound()
    sounds.soundCoffeeMachinePlay()
    stopForestSound()
    stopRainSound()
    stopFireplaceSound()
  }

  function stopCoffeeMachineSound() {
    controls.stopCoffeeMachineSound()
    sounds.soundCoffeeMachineStop()
  }

  function playFireplaceSound() {
    controls.playFireplaceSound()
    sounds.soundFireplacePlay()
    stopForestSound()
    stopRainSound()
    stopCoffeeMachineSound()
  }

  function stopFireplaceSound() {
    controls.stopFireplaceSound()
    sounds.soundFireplaceStop()
  }

  function forestSoundVolume() {
    sounds.forestSoundVolume(forestVolume.value)
  }

  function rainSoundVolume() {
    sounds.rainSoundVolume(rainVolume.value)
  }

  function coffeeMachineSoundVolume() {
    sounds.coffeeMachineSoundVolume(coffeeMachineVolume.value)
  }

  function fireplaceSoundVolume() {
    sounds.fireplaceSoundVolume(fireplaceVolume.value)
  }

  btnPlay.addEventListener("click", play)
  btnPause.addEventListener("click", pause)
  btnStop.addEventListener("click", stop)
  btnIncrement.addEventListener("click", increment)
  btnDecrement.addEventListener("click", decrement)
  playForest.addEventListener("click", playForestSound)
  stopForest.addEventListener("click", stopForestSound)
  playRain.addEventListener("click", playRainSound)
  stopRain.addEventListener("click", stopRainSound)
  playCoffeeMachine.addEventListener("click", playCoffeeMachineSound)
  stopCoffeeMachine.addEventListener("click", stopCoffeeMachineSound)
  playFireplace.addEventListener("click", playFireplaceSound)
  stopFireplace.addEventListener("click", stopFireplaceSound)
  forestVolume.addEventListener("input", forestSoundVolume)
  rainVolume.addEventListener("input", rainSoundVolume)
  coffeeMachineVolume.addEventListener("input", coffeeMachineSoundVolume)
  fireplaceVolume.addEventListener("input", fireplaceSoundVolume)
}
