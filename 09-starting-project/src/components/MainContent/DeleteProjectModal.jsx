import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export const DeleteProjectModal = forwardRef(({ name, handleCloseDeleteModal, handleDeleteProject }, ref) => {

  const deleteModal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        deleteModal.current.showModal()
      },
      close() {
        deleteModal.current.close()
      }
    }
  })

  return createPortal(
    <dialog ref={ deleteModal }
            className="p-6">
      <p className="p-4 text-2xl">Are you sure, you want remove { name }?</p>

      <div className="flex justify-between mt-8">
        <button className="p-2 bg-neutral-200 rounded hover:bg-neutral-600 text-white text-xl"
                onClick={ handleCloseDeleteModal}>CANCEL</button>

        <button className="p-2 bg-rose-200 rounded hover:bg-rose-600 text-white text-xl"
                onClick={ handleDeleteProject }>REMOVE</button>
      </div>
    </dialog>,
    document.getElementById('modal')
  )
})
