import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export const Dialog = forwardRef(({ children, ...props }, ref) => {

  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
      close() {
        dialog.current.close()
      }
    }
  })
  return createPortal(
    <>
      <dialog className="p-6"
              ref={ dialog }>

        <h1 className="text-2xl mb-8">Create new project form</h1>

        { children }
      </dialog>
    </>,
  document.getElementById('modal')
  )
})
