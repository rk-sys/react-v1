import './UserInput.css'
import { Input } from '../Input/Input.jsx'

export const UserInput = ({ initialValues, handleSetInputValue }) => {

  return (
    <div id="user-input"
         className="input-group">

      { initialValues.map((item, index) =>
        <Input initialValue={ item.value }
               key={ index }
               onChange={ (event) => handleSetInputValue(event, index) }
               type="number"
               id={ index }
               label={ item.label }/>)
      }
    </div>
  )
}
