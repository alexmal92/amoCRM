import { useState,ChangeEvent } from 'react'
import './App.css'
import { validator } from './helpers/validator'
import { Timer } from './components/Timer'

const App = () => {
  const [value, setValue] = useState('')
  const [seconds, setSeconds] = useState(0)
  const [isRun, setIsRun] = useState(false)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    return setValue(validator(e.target.value))
  }

  const submit = () => {
    setIsRun(!isRun)
    setSeconds(+value)
    setValue('')
  }

  return (
    <div className='App'>
      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
        isRun={isRun}
        setIsRun={setIsRun}
      />
      <input
        type='text'
        value={value}
        onChange={(e) => handleInput(e)}
      />
      <button onClick={() => submit()}>{isRun ? 'Stop' : 'Start'}</button>
    </div>
  )
}

export default App
