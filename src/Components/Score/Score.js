import React, { useEffect, useState } from 'react';
import './Score.css';

const Score = ({winner}) => {
    useEffect(() => {
        updateScores();
        localStorage.setItem('X Score', JSON.stringify(xScore));
        localStorage.setItem('O Score', JSON.stringify(oScore));
        localStorage.setItem('Draw Score', JSON.stringify(drawScore));
    }, [winner]);

    const [ savedXScore ] = useState(localStorage.getItem('X Score'));
    const [ savedOScore ] = useState(localStorage.getItem('O Score'));
    const [ savedDrawScore ] = useState(localStorage.getItem('Draw Score'));

    let [ xScore, setXScore ] = useState( savedXScore ? JSON.parse(savedXScore) : 0 );
    let [ oScore, setOScore ] = useState( savedOScore ? JSON.parse(savedOScore) : 0 );
    let [ drawScore, setDrawScore ] = useState( savedDrawScore ? JSON.parse(savedDrawScore) : 0 );


    const updateScores = () => {
        if (winner === 'X') {
            xScore++;
            setXScore(xScore);
        } else if (winner === 'O') {
            oScore++;
            setOScore(oScore)
        } else if (winner === 'Draw') {
            drawScore++;
            setDrawScore(drawScore)
        } 
    }
    
    return (
        <section className="score-container">
            <div className="score x-score">
                <p>X</p>
                <p>{xScore}</p>
            </div>
            <div className="score ties">
                <p>Ties</p>
                <p>{drawScore}</p>
            </div>
            <div className="score o-score">
                <p>O</p>
                <p>{oScore}</p>
            </div>
        </section>
    )
}

export default Score;