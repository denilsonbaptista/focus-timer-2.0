export default function ({
  btnPlay,
  btnPause,
  playForest,
  stopForest,
  playRain,
  stopRain,
  playCoffeeMachine,
  stopCoffeeMachine,
  playFireplace,
  stopFireplace,
}) {
  function reset() {
    btnPause.classList.add("hide")
    btnPlay.classList.remove("hide")
  }

  function buttonPlay() {
    btnPlay.classList.add("hide")
    btnPause.classList.remove("hide")
  }

  function buttonPause() {
    btnPause.classList.add("hide")
    btnPlay.classList.remove("hide")
  }

  function playForestSound() {
    playForest.classList.add("hide")
    stopForest.classList.remove("hide")
  }

  function stopForestSound() {
    playForest.classList.remove("hide")
    stopForest.classList.add("hide")
  }

  function playRainSound() {
    playRain.classList.add("hide")
    stopRain.classList.remove("hide")
  }

  function stopRainSound() {
    playRain.classList.remove("hide")
    stopRain.classList.add("hide")
  }

  function playCoffeeMachineSound() {
    playCoffeeMachine.classList.add("hide")
    stopCoffeeMachine.classList.remove("hide")
  }

  function stopCoffeeMachineSound() {
    playCoffeeMachine.classList.remove("hide")
    stopCoffeeMachine.classList.add("hide")
  }

  function playFireplaceSound() {
    playFireplace.classList.add("hide")
    stopFireplace.classList.remove("hide")
  }

  function stopFireplaceSound() {
    playFireplace.classList.remove("hide")
    stopFireplace.classList.add("hide")
  }

  return {
    buttonPlay,
    buttonPause,
    reset,
    playForestSound,
    stopForestSound,
    playRainSound,
    stopRainSound,
    playCoffeeMachineSound,
    stopCoffeeMachineSound,
    playFireplaceSound,
    stopFireplaceSound,
  }
}
