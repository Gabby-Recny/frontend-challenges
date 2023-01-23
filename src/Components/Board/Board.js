import { render } from "@testing-library/react";
import React, { useState } from "react";
import Square from "../Square/Square";

const Board = () => {
    // const [squares, setSquares] = useState([Array(9).fill(null)])
    const [status, setStatus] = useState('X')

    const renderSquare = (i) => {
        return <Square value={i}/>
    }
    
    // const renderSquare = (i) => {
    //     return <Square 
    //                 setShape={setSquares(i)}
    //                 value={squares[i]}
    //             />
    // }
    
    return (
        <section className="board">
            <h2>Board</h2>
            <h3>Next player: {status}</h3>
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