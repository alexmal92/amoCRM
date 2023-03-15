import { useState, useEffect, ChangeEvent } from 'react'
import { decoratorTime } from '../helpers/decoratorTime'

interface Timer {
  isRun: boolean
  setIsRun: (x: boolean) => void
  seconds: number
  setSeconds: (num: number) => void
}

export const Timer = ({ isRun, setIsRun, seconds, setSeconds }: Timer) => {
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>
    if (isRun) {
      timer = setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)
    }
    if (isRun && seconds < 1) {
      setIsRun(false)
      alert('timer out')
    }
    return () => clearInterval(timer)
  }, [seconds, isRun])
  return <div>{decoratorTime(seconds)}</div>
}
