import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {

  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  const handlerPlayerName = (event) => {
    setPlayerName(event.target.value)
  }

  const handlerChangeStateIsEditing = () => {
    setIsEditing((editing) => !editing)
  }

  return (
    <li className={ isActive ? 'active' : undefined }>
      <span className="player">
        {
          isEditing ? <input type="text"
                             onChange={ handlerPlayerName }
                             value={ playerName }/> : <span className="player-name">{ playerName }</span>
        }
        <span className="player-symbol">{ symbol }</span>
      </span>
      <button onClick={ handlerChangeStateIsEditing }>{ isEditing ? 'Save' : 'Edit' }</button>
    </li>
  )
}
