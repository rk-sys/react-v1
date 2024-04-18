import { useRef } from "react";

export const HeaderMainContent = ({ name, date, description, id, handleDeleteProject, handleAddTask }) => {

  const inputRef = useRef();

  const handleSubmit = () => {
    handleAddTask({ id: id, task: inputRef.current.value })
    inputRef.current.value = '';
  }

  return (
    <>
      <div className="border-b-2">
        <h1 className="font-bold text-6xl text-neutral-700 flex justify-between">
          <span> { name !== '' ? name : 'Choose a project' } </span>
          <button className="p-2 bg-rose-200 rounded hover:bg-rose-600 text-white text-xl"
                  onClick={ handleDeleteProject }>DELETE
          </button>
        </h1>
        <span className="font-bold text-neutral-400 mt-4 block">{ date !== '' ? date : '' }</span>
        <p className="my-4 text-neutral-700">{ description !== '' ? description : '' }</p>

        <div className="mb-2">
          <input className="border-2 p-2 mr-2"
                 ref={ inputRef }/>
          <button className="p-2 bg-neutral-200 rounded hover:bg-neutral-600 text-white text-xl"
                  onClick={ handleSubmit }>Add task
          </button>
        </div>
      </div>
    </>
  )
}
