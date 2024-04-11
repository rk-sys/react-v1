import { Header } from "./components/Header/Header.jsx";
import { UserInput } from "./components/UserInput/UserInput.jsx";
import { useState } from "react";

const App = () => {

  const [values, setValues] = useState([
    {
      value: 0,
      label: 'Initial investment',
    },
    {
      value: 0,
      label: 'Annual Investment',
    },
    {
      value: 0,
      label: 'Expected return',
    },
    {
      value: 0,
      label: 'Duration',
    }
  ])


  const handleSetInputValue = (event, index) => {
    setValues((prevState => {
      const newState = [...prevState]
      newState[index].value = event.target.value
      return newState
    }))
  }

  return (
    <>
      <Header/>

      <UserInput initialValues={ values }
                 handleSetInputValue={ handleSetInputValue }/>
    </>
  )
}

export default App
