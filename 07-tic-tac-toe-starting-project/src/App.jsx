import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";

function App() {

  const [activePlayer, setActivePlayer] = useState('X')

  const handleSelectSquare = () => {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X')
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players"
            className="highlight-player">
          <Player initialName="Player 1"
                  isActive={ activePlayer === 'X' }
                  symbol="X"/>

          <Player initialName="Player 2"
                  isActive={ activePlayer === 'O' }
                  symbol="O"/>
        </ol>

        <GameBoard onSelectSquare={ handleSelectSquare }
                   symbolPlayer={ activePlayer }/>
      </div>
    </main>
  )
}

export default App
