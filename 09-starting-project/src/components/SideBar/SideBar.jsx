export const SideBar = ({ projects, openModal, onClick }) => {

  return (
    <>
      <div className="w-2/12 bg-cyan-900 h-screen p-6 text-white font-semibold">
        <h1 className="text-2xl mb-6">Your projects</h1>

        <button className="bg-cyan-600 p-3 rounded hover:bg-cyan-700 mb-12"
                onClick={ openModal }>Add new project
        </button>

        <div className="">
          { projects.length > 0 ? <ol>
            { projects && projects.map((project, index) => <li key={ index }
                                                               className="hover:underline cursor-pointer"
                                                               onClick={ () => onClick(project) }>{ project.name }</li>) }
          </ol> : <span className="text-neutral-200 text-center block">NO DATA</span> }

        </div>
      </div>
    </>
  )
}
