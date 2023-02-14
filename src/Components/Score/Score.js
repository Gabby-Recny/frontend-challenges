import React, { useEffect, useState } from 'react';
import './Score.css';

const Score = ({winner, isEverySquareEmpty}) => {
    useEffect(() => {
        updateScores();
    }, [winner]);

    const [ scores, setScores ] = useState(
        {xScore: 0, 
         oScore: 0, 
         tiedScore: 0
        });

        const updateScores = () => {
        if (winner === 'X') {
            // console.log('X won')
            let {xScore} = scores;
            xScore++;
            setScores({...scores, xScore})
            
        } else if (winner === 'O') {
            // console.log('O won')
            let {oScore} = scores;
            oScore++;
            setScores({...scores, oScore})
        } else if (isEverySquareEmpty && !winner) {
            // console.log('Tie won')
            let {tiedScore} = scores;
            tiedScore++;
            setScores({...scores, tiedScore});
        }
    }

    return (
        <section className="score-container">
            <div className="score x-score">
                <p>You</p>
                <p>{scores.xScore}</p>
            </div>
            <div className="score ties">
                <p>Ties</p>
                <p>{scores.tiedScore}</p>
            </div>
            <div className="score o-score">
                <p>O</p>
                <p>{scores.oScore}</p>
            </div>
        </section>
    )
}

export default Score;