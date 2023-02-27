import React, { useEffect, useState } from 'react';
import './Score.css';

const Score = ({winner}) => {
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
            let { xScore } = scores;
            xScore++;
            setScores({...scores, xScore});
            console.log('Updated X Score', scores)
            // saveScoresToLocalStorage(scores);
        } else if (winner === 'O') {
            let { oScore } = scores;
            oScore++;
                        console.log('Updated O Score', scores)

            setScores({...scores, oScore});
            // saveScoresToLocalStorage(scores.oScore);
        } else if (winner === "Draw") {
            let { tiedScore } = scores;
            tiedScore++;
            console.log('Updated Tied Score', scores)
            setScores({...scores, tiedScore});
            // saveScoresToLocalStorage(scores.tiedScore);
        } 
    }

    // const saveScoresToLocalStorage = (newScore) => {
    //     console.log('New Score in Local Storage', newScore)
    //     const stringifiedScores = JSON.stringify(newScore);
    //     window.localStorage.setItem(`Scores`, stringifiedScores);
    // }

    // const retriveScoresFromLocalStorage = () => {
    //     let storedScores = window.localStorage.getItem(`Scores`);
    //     // console.log('Stored Scores', storedScores)
    //     const parsedScores = JSON.parse(storedScores);
    //     // console.log('Parsed scores', parsedScores)
    //     // return parsedScores;
    // }

    return (
        <section className="score-container">
            <div className="score x-score">
                <p>You</p>
                {/* <p>{retriveScoresFromLocalStorage()}</p> */}
            </div>
            <div className="score ties">
                <p>Ties</p>
                {/* <p>{retriveScoresFromLocalStorage()}</p> */}
            </div>
            <div className="score o-score">
                <p>O</p>
                {/* <p>{retriveScoresFromLocalStorage()}</p> */}
            </div>
        </section>
    )
}

export default Score;