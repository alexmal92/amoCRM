export function decoratorTime(sec: number): string {
  let seconds = 0
  let minutes = 0
  let hours = 0

  let currentSec: number
  currentSec = sec

  if (currentSec < 1) return `00 : 00 : 00`

  if (currentSec / 3600 >= 1) {
    hours = Math.floor(currentSec / 3600)
    currentSec = currentSec - hours * 3600
  }

  if (currentSec / 60 >= 1) {
    minutes = Math.floor(currentSec / 60)
    currentSec = currentSec - minutes * 60
  }

  seconds = currentSec

  return `${decorator(hours)} : ${decorator(minutes)} : ${decorator(seconds)}`
}

const decorator = (num: number): string => {
  return num < 10 ? '0' + num : num.toString()
}
