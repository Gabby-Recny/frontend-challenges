import React, { useState } from "react";
import Square from "../Square/Square";

const Board = () => {
    const [gameSquares, setGameSquares] = useState([Array(9).fill(null)])
    const [ xIsNext, setXIsNext ] = useState(true)

    const handleClick = (i) => {
        const squares = gameSquares.slice();
        squares[i] = xIsNext ? 'X' : 'O'
        setGameSquares(squares)
        setXIsNext(!xIsNext)
    }

    const renderSquare = (i) => {
        return <Square 
                    value={gameSquares[i]}
                    onClick={() => handleClick(i)}
                />
    }
    
    return (
        <section className="board">
            <h2>Board</h2>
            <h3>Next player: {xIsNext ? 'X' : 'O'}</h3>
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
    )
}

export default Board;