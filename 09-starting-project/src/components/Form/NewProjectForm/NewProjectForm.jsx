import { useRef, forwardRef, useImperativeHandle, useState } from "react";

export const NewProjectForm = forwardRef(({ ...props }, ref) => {

  const formRef = useRef();

  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    date: '',
  });

  useImperativeHandle(ref, () => {
    return {
      resetForm: () => setProjectForm(_ => ({ name: '', description: '', date: '' })),
      sendForm: () => projectForm
    }
  })

  const handleChangeName = (event) => {
    setProjectForm(prevState => ({
      ...prevState,
      name: event.target.value,
    }))
  }

  const handleChangeDescription = (event) => {
    setProjectForm(prevState => ({
      ...prevState,
      description: event.target.value,
    }))
  }

  const handleChangeDate = (event) => {
    setProjectForm(prevState => ({
      ...prevState,
      date: event.target.value,
    }))
  }

  return (
    <>
      <form ref={ formRef }
            className="flex flex-col">

        <div className="mx-0 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="name">
            Project name
          </label>

          <input value={ projectForm.name }
                 onChange={ handleChangeName }
                 id="name"
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text"
                 placeholder="Project name"/>

        </div>

        <div className="mx-0 mb-4">
          <label htmlFor="date"
                 className="block text-gray-700 text-sm font-bold mb-2">Project date</label>

          <input value={ projectForm.date }
                 onChange={ handleChangeDate }
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 placeholder="Pick date"
                 id="date"
                 type="date"/>
        </div>

        <div className="mx-0 mb-4">

          <label htmlFor="description"
                 className="block text-gray-700 text-sm font-bold mb-2">Project description</label>

          <textarea value={ projectForm.description }
                    onChange={ handleChangeDescription }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Project description..."
                    id="description"/>

        </div>

      </form>
    </>
  )
})
