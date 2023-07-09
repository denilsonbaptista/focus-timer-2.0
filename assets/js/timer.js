export default function ({ secondsDisplay, minutesDisplay }) {
  let timeTimerInterval
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function countdown() {
    timeTimerInterval = setInterval(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      let isFinished = minutes <= 0 && seconds <= 0
      let countSeconds = seconds <= 0

      if (isFinished) {
        hold()
        updateDisplay()
        return
      }

      if (countSeconds) {
        seconds = 60
        minutes--
      }

      seconds--

      updateDisplay(minutes, seconds)
    }, 1000)
  }

  function hold() {
    clearInterval(timeTimerInterval)
  }

  function incrementFive() {
    minutes = minutes + 5
    updateDisplay(minutes, 0)
  }

  function decrementFive() {
    minutes = minutes - 5
    updateDisplay(minutes, 0)
  }

  return {
    countdown,
    hold,
    updateDisplay,
    incrementFive,
    decrementFive,
  }
}
