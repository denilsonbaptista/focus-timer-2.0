export default function ({ btnPlay, btnPause, btnLight, btnDark }) {
  const soundForestPlay = document.querySelector(".sound-forest-play")
  const soundForestStop = document.querySelector(".sound-forest-stop")
  const soundRainPlay = document.querySelector(".sound-rain-play")
  const soundRainStop = document.querySelector(".sound-rain-stop")
  const soundFireplacePlay = document.querySelector(".sound-fireplace-play")
  const soundFireplaceStop = document.querySelector(".sound-fireplace-stop")
  const soundCoffeeMachinePlay = document.querySelector(
    ".sound-coffee-machine-play"
  )
  const soundCoffeeMachineStop = document.querySelector(
    ".sound-coffee-machine-stop"
  )
  const html = document.documentElement

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
    soundForestPlay.classList.add("hide")
    soundForestStop.classList.remove("hide")
  }

  function stopForestSound() {
    soundForestPlay.classList.remove("hide")
    soundForestStop.classList.add("hide")
  }

  function playRainSound() {
    soundRainPlay.classList.add("hide")
    soundRainStop.classList.remove("hide")
  }

  function stopRainSound() {
    soundRainPlay.classList.remove("hide")
    soundRainStop.classList.add("hide")
  }

  function playCoffeeMachineSound() {
    soundCoffeeMachinePlay.classList.add("hide")
    soundCoffeeMachineStop.classList.remove("hide")
  }

  function stopCoffeeMachineSound() {
    soundCoffeeMachinePlay.classList.remove("hide")
    soundCoffeeMachineStop.classList.add("hide")
  }

  function playFireplaceSound() {
    soundFireplacePlay.classList.add("hide")
    soundFireplaceStop.classList.remove("hide")
  }

  function stopFireplaceSound() {
    soundFireplacePlay.classList.remove("hide")
    soundFireplaceStop.classList.add("hide")
  }

  function buttonLight() {
    btnLight.classList.add("hide")
    btnDark.classList.remove("hide")
    html.classList.add("dark")
  }

  function buttonDark() {
    btnDark.classList.add("hide")
    btnLight.classList.remove("hide")
    html.classList.remove("dark")
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
    buttonLight,
    buttonDark,
  }
}
