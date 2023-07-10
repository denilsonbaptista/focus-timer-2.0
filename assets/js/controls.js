export default function ({ btnPlay, btnPause }) {
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

  return {
    buttonPlay,
    buttonPause,
    reset,
  }
}
