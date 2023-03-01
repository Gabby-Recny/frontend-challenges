import React from "react";
import './NewGame.css';
import O from '../../assets/icon-o.svg';
import X from '../../assets/icon-x.svg';
import oOutline from '../../assets/icon-o-outline.svg';
import xOutline from '../../assets/icon-x-outline.svg';

const NewGame = () => {
    return (
        <section className="new-game-modal">
            <div className="new-game-icon-container">
                <img src={X} alt="X token"/>
                <img src={O} alt="O token"/>
            </div>
            <div className="player-choice-container">
                <p>Pick Player 1's Mark</p>
                <div className="icon-choice-container">
                    <div className="icon-wrapper">
                        <img src={xOutline}/>
                    </div>
                    <div className="icon-wrapper">
                        <img src={oOutline}/>
                    </div>
                </div>        
                <p>Remember: X Goes First</p>
            </div>
            <button>New Game</button>
            <button>Quit Game</button>
        </section>
    )
}

export default NewGame;