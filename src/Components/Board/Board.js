import React from "react";
import Square from "../Square/Square";
import './Board.css';

const Board = ({handleClick, board}) => {
    const renderedSquares = board.map((square, index) => 
             <Square 
                key={index}
                value={square}
                onClick={() => handleClick(index)}
            />
        )
        
        return (
            <section className="board">
                {renderedSquares}
            </section>
    )
}

export default Board;