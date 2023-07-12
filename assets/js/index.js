import Timer from "./timer.js"
import Controls from "./controls.js"
import Event from "./event.js"
import Sounds from "./sounds.js"
import {
  minutesDisplay,
  secondsDisplay,
  btnPlay,
  btnPause,
  playForest,
  stopForest,
} from "./elements.js"

const sounds = Sounds()

const controls = Controls({
  btnPlay,
  btnPause,
  playForest,
  stopForest,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  reset: controls.reset,
  soundKichenTimer: sounds.kichenTimer,
})

Event({ sounds, controls, timer })
