import { SideBar } from "./components/SideBar/SideBar.jsx";
import { useState, useRef } from "react";
import { Dialog } from "./components/Dialog/Dialog.jsx";
import { NewProjectForm } from "./components/Form/NewProjectForm/NewProjectForm.jsx";
import { MainContent } from "./components/MainContent/MainContent.jsx";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: 'ToDoList',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      date: '24-01-2010',
      tasks: ['ASD', 'QWE', 'ZCX', 'RFA']
    },
    {
      id: 1,
      name: 'MTW',
      description: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      date: '14-07-2023',
      tasks: []
    },
    {
      id: 2,
      name: 'ARP2',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum',
      date: '10-08-2024',
      tasks: []
    }
  ])
  const [choosenProject, setChoosenProject] = useState({
    id: null,
    name: '',
    description: '',
    date: '',
    tasks: []
  })

  const dialogRef = useRef(null);
  const formRef = useRef(null);

  const handleOpenNewProjectModal = () => {
    dialogRef.current.open()
  }

  const handleProjectDetails = (payload) => {
    setChoosenProject(_ => payload)
  }

  const handleCloseModal = () => {
    dialogRef.current.close()
  }

  const handleResetForm = () => {
    formRef.current.resetForm()
  }

  const handleAddTask = async (payload) => {
    await setProjects(prevState => {
      return prevState.map(project => {

        if (project.id === payload.id) {
          project.tasks.push(payload.task)
        }
        return project
      })
    })
    await setChoosenProject(prevState => prevState)
  }

  const handleCreateNewProject = () => {
    const k = formRef.current.sendForm()
    const lastProject = projects[projects.length - 1]
    setProjects(prevState => [...prevState, { ...k, id: lastProject ? lastProject.id + 1 : 0 }])
    formRef.current.resetForm()
    dialogRef.current.close()
  }

  const handleDeleteProject = (payload) => {
    setProjects(prevState => prevState.filter(element => element.id !== payload.id))
  }

  const handleRemoveTsk = (payload) => {
    setProjects(prevState => {
      return prevState.map(project => {
        if (project.id === choosenProject.id) {
          project.tasks.splice(payload, 1)
        }
        return project
      })
    })

    setChoosenProject(prevState => prevState)
  }
  return (
    <>
      <Dialog ref={ dialogRef }>

        <NewProjectForm ref={ formRef }/>

        <div className="flex justify-between mt-4">
          <button className="border-2 p-3 rounded hover:border-cyan-600"
                  onClick={ handleCloseModal }>Cancel
          </button>

          <button className="border-2 p-3 rounded hover:bg-cyan-600 hover:border-cyan-600"
                  onClick={ handleResetForm }>Reset
          </button>

          <button className="bg-cyan-600 p-3 rounded hover:bg-cyan-700 text-white"
                  onClick={ handleCreateNewProject }>Create
          </button>
        </div>
      </Dialog>

      <div className="h-screen">
        <div className="flex ">
          <SideBar projects={ projects }
                   onClick={ handleProjectDetails }
                   openModal={ handleOpenNewProjectModal }/>

          <MainContent project={ choosenProject }
                       handleAddTask={ handleAddTask }
                       handleRemoveProject={ handleDeleteProject }
                       handleRemoveTsk={ handleRemoveTsk }/>

        </div>
      </div>
    </>
  );
}

export default App;
