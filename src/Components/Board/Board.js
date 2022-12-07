import React from "react";
import Square from "../Square/Square";

const Board = () => {
    const renderSquare = (i) => {
        return <Square value={i} />
    }
    
    return (
        <section className="board">
            <h2>Board</h2>
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