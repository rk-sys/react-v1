import { HeaderMainContent } from "./HeaderMainContent.jsx";
import { DeleteProjectModal } from "./DeleteProjectModal.jsx";
import { useRef } from "react";
import { Tasks } from "./Tasks.jsx";

export const MainContent = ({ project, handleRemoveProject, handleAddTask, handleRemoveTsk }) => {

  const deleteRef = useRef(null)

  const removeProject = (payload) => {
    handleRemoveProject(payload)
    deleteRef.current.close()
  }

  const handleDeleteProject = () => {
    deleteRef.current.open()
  }

  const handleCloseDeleteModal = () => {
    deleteRef.current.close()
  }

  return (
    <main className="p-40 w-full">
      <DeleteProjectModal name={ project.name }
                          ref={ deleteRef }
                          handleDeleteProject={ () => removeProject(project) }
                          handleCloseDeleteModal={ handleCloseDeleteModal }/>

      <HeaderMainContent name={ project.name }
                         description={ project.description }
                         date={ project.date }
                         id={ project.id }
                         handleAddTask={ handleAddTask }
                         handleDeleteProject={ handleDeleteProject }/>

      { project.tasks ? <Tasks tasks={ project.tasks } onClick={ handleRemoveTsk }/> : null }
    </main>
  )
}
