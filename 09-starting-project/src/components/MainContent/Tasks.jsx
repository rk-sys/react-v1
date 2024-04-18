export const Tasks = ({ tasks, onClick }) => {
  return (
    <>
      { tasks.map((task, index) => (
        <h2 className="w-full justify-between flex hover:bg-neutral-100"
            key={index}>

          <span className="flex items-center">{ task }</span>
          <button onClick={ () => onClick(index) }
                  className="m-2 p-1 bg-rose-200 rounded hover:bg-rose-600 text-white text-sm">Clear
          </button>
        </h2>
      )) }
    </>
  )
}
