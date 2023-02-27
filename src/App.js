import React, {useState} from 'react';
import './App.css';
import Board from './Components/Board/Board';
import BoardHeader from './Components/BoardHeader/BoardHeader';
import Score from './Components/Score/Score';


const App = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [ xIsNext, setXIsNext ] = useState(true);
    const [ winner, setWinner ] = useState('');
    const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
    ];

   const handleClick = (selectedSquare) => {
        if (winner) {
            return
        }
        const updatedBoard = board.map((square, index) => {
            if (selectedSquare === index) {
                return board[selectedSquare] =  xIsNext ? "X" : "O"
            } else {
                return square
            }
        })

        setBoard(updatedBoard)
        setXIsNext(!xIsNext)
        calculateWinner(updatedBoard)
    }

    const calculateWinner = (playedSquares) => {
        for (let i = 0; i < winningConditions.length; i++) {
            const [a,b,c] = winningConditions[i];
            if (playedSquares[a] && playedSquares[a] === playedSquares[b] && playedSquares[a] === playedSquares[c]) {
                setWinner(playedSquares[a])
                return playedSquares[a]
            } 
        }
        return null;
    }

    const restartGame = () => {
      setBoard(Array(9).fill(null))
      setWinner('');
    }
  

    return (
      <section className="App">
        <BoardHeader 
          xIsNext={xIsNext} 
          winner={winner}
          restartGame={restartGame}
        />
        <Board 
          handleClick={handleClick} 
          board={board}
        />
        <Score winner={winner}/>
      </section>
    );
}

export default App;
