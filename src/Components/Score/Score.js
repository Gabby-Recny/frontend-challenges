import React from 'react';
import './Score.css';

const Score = () => {
    return (
        <section className="score-container">
            <div className="score x-score">
                <p>You</p>
                <p>0</p>
            </div>
            <div className="score ties">
                <p>Ties</p>
                <p>0</p>
            </div>
            <div className="score o-score">
                <p>O</p>
                <p>0</p>
            </div>
        </section>
    )
}

export default Score;