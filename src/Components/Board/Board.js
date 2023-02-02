import React, { useState } from "react";
import Square from "../Square/Square";
import O from '../../assets/icon-o.svg';
import X from '../../assets/icon-x.svg';
import oOutline from '../../assets/icon-o-outline.svg';
import xOutline from '../../assets/icon-x-outline.svg';
import restartIcon from '../../assets/icon-restart.svg';
import './Board.css';

const Board = () => {
    const [gameBoard, setGameBoard] = useState([Array(9).fill(null)])
    const [ xIsNext, setXIsNext ] = useState(true);
    const [ winner, setWinner ] = useState('');

    const handleClick = (selectedSquare) => {
        const squares = gameBoard.slice();
        if (winner) {
            return;
        }

        squares[selectedSquare] = xIsNext ? 'X' : 'O';
        setXIsNext(!xIsNext)
        calculateWinner(squares)
        setGameBoard(squares)
    }

    const renderSquare = (selectedSquare) => {
        return <Square 
            value={gameBoard[selectedSquare]}
            onClick={() => handleClick(selectedSquare)}
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
                console.log('Inside the if in calculate winner')
                setWinner(playedSquares[a])
                return playedSquares[a]
            } 
        }
        return null;
    }

    const renderTurnStatus = () => {
        if (xIsNext) {
            return (
            <>
                <img src={xOutline} alt="It is X's turn"/>
                <p>turn</p>
            </>
            )
        } else {
            return (
            <>
                <img src={oOutline} alt="It is O's turn"/>
                <p>turn</p>
            </>
            )
        }
    }
    
    return (
        <main className="game-board">          
            <section className="board-header">
                <div className="icons">
                    <img src={X} alt="X token"/>
                    <img src={O} alt="O token"/>
                </div>
                <div className="status">
                    {!winner && renderTurnStatus()}
                    {winner && <p>Player {winner} wins!</p>}
                </div>
                <div className="btn-container">
                    <button className="restart-button">
                        <img className="restart-icon" src={restartIcon} alt="Click here to restart the game. AKA the Help, I'm losing button." />
                    </button>
                </div>
            </section>
            <section className="board">
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
        </main>
    )
}

export default Board;