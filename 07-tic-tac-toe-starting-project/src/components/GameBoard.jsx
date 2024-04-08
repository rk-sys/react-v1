import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
export default function GameBoard({onSelectSquare, symbolPlayer}) {

  const [gameBoard, setGameBoard] = useState(initialGameBoard)

  // const [symbolActivePlayer, setSymbolActivePlayer] = useState(symbolPlayer)

  const handleSelectSquare = (rowIndex, colIndex, sumbolPlyer = 'X') => {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
      newGameBoard[rowIndex][colIndex] = sumbolPlyer
      return newGameBoard
    })

    onSelectSquare()
  }

  return (
    <ol id="game-board">
      { gameBoard.map((row, rowIndex) => <li key={ rowIndex }>
        <ol>
          { row.map((playerSymbol, colIndex) => <li key={ colIndex }>
            <button onClick={ () => handleSelectSquare(rowIndex, colIndex, symbolPlayer) }>{ playerSymbol }</button>
          </li>) }
        </ol>
      </li>) }
    </ol>
  )
}
