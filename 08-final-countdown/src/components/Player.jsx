import { useRef, useState } from "react";

export default function Player() {

  const playerNewName = useRef()

  const [name, setName] = useState(null)

  const handleSetName = () => {
    setName(playerNewName.current.value)
    playerNewName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome { name ?? 'unknown entity' }</h2>
      <p>
        <input type="text"
               ref={playerNewName} />

        <button onClick={ handleSetName }>Set Name</button>
      </p>
    </section>
  );
}
