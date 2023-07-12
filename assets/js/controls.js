export default function ({ btnPlay, btnPause, playForest, stopForest }) {
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

  return {
    buttonPlay,
    buttonPause,
    reset,
    playForestSound,
    stopForestSound,
  }
}
