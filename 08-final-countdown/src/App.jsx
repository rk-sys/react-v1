import Player from './components/Player.jsx';
import TimerContainer from './components/TimerChallenge.jsx';
import { useState } from "react";

function App() {

  const [games, setGames] = useState([
    {
      time: 1,
      title: 'Easy Game Board'
    },
    {
      time: 2,
      title: 'Medium Game Board'
    },
    {
      time: 5,
      title: 'Advance Game Board'
    },
    {
      time: 10,
      title: 'Hard Game Board'
    }
  ])

  return (
    <>
      <Player/>
      <div id="challenges">
        { games.map((game, index) => (
          <TimerContainer title={ game.title }
                          targetTime={ game.time }
                          key={ index }/>
        )) }
      </div>
    </>
  );
}

export default App;
