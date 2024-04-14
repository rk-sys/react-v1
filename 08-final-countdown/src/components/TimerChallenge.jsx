import { useRef, useState } from 'react'
import { ResultModal } from './ResultModal.jsx'

const TimerChallenge = ({ title, targetTime }) => {

  const timer = useRef()
  const dialog = useRef()

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000


  if (timeRemaining <= 0) {
    clearInterval(timer.current)
    setTimeRemaining(targetTime * 1000)
    dialog.current.open()
  }


  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prevState => prevState - 10)
    }, 10)
  }

  const handleStop = () => {
    dialog.current.open()
    clearInterval(timer.current)
  }

  return (
    <>
      <ResultModal ref={ dialog }
                   result="lost"
                   targetTime={ '' }
                   timeRemaining={ timeRemaining }/>

      <section className="challenge">
        <h2 className="">{ title }</h2>

        { targetTime > 1 && <p>You lost</p> }

        <p className="challenge-time">
          { targetTime } second{ targetTime > 1 ? 's' : '' }
        </p>
        <button onClick={ timerIsActive ? handleStop : handleStart }>{ timerIsActive ? 'Stop' : 'Start' } challenge</button>
        <p className={ timerIsActive ? 'active' : '' }>
          { timerIsActive ? 'Time is running' : 'Time inactive' }
        </p>
      </section>
    </>
  )
}

export default TimerChallenge;
