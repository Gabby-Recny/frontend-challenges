import React, { useState } from "react";
import Square from "../Square/Square";
import O from '../../assets/icon-o.svg';
import X from '../../assets/icon-x.svg';
import oOutline from '../../assets/icon-o-outline.svg';
import xOutline from '../../assets/icon-x-outline.svg';

const Board = () => {
    const [gameSquares, setGameSquares] = useState([Array(9).fill(null)])
    const [ xIsNext, setXIsNext ] = useState(true);
    const [ winner, setWinner ] = useState('');

    const handleClick = (selectedSquare) => {
        if (winner) {
            return;
        }
        gameSquares[selectedSquare] = xIsNext ? <img src={X} alt="X token"/> : <img src={O} alt="O token"/>;
        setXIsNext(!xIsNext)
        calculateWinner(gameSquares)
    }

    const renderSquare = (i) => {
        return <Square 
            value={gameSquares[i]}
            onClick={() => handleClick(i)}
        />
    }
    
    const calculateWinner = (playedSquares) => {
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        
        for (let i = 0; i < winningLines.length; i++) {
            const [a,b,c] = winningLines[i];
            
            if (playedSquares[a] && playedSquares[a] === playedSquares[b] && playedSquares[a] === playedSquares[c]) {
                setWinner(playedSquares[a])
            } 
        }
    }
    
    return (
        <>
            <section className="board">
                <h3>{!winner && `Next player: ${xIsNext ? 'X' : 'O'}`}</h3>
                <h3>{winner && `Player ${winner} wins!`}</h3>
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </section>
        </>
    )
}

export default Board;