import { forwardRef, useImperativeHandle, useRef } from 'react'

export const ResultModal = forwardRef(({ result, targetTime, timeRemaining }, ref) => {

  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })
  return (
    <dialog ref={ dialog }
            className="result-modal">

      <h2>You { result }</h2>
      <p className="">The target time was: <strong>{ targetTime } seconds.</strong></p>
      <p className="">The stopped the timer with <strong>{ (timeRemaining / 1000).toFixed(2) } seconds.</strong> left</p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
})

