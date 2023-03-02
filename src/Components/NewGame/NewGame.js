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
                <img src={X} alt="X token for display purposes"/>
                <img src={O} alt="O token for display purposes"/>
            </div>
            <div className="player-choice-container">
                <p>Pick Player 1's Mark</p>
                <div className="icon-choice-container">
                    <label>
                        <input type="radio" name="radio" />
                        <div>
                            <img src={xOutline} alt="Choose the x token"/>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="radio"/>
                        <div>
                            <img src={oOutline} alt="Choose the o token"/>
                        </div>
                    </label>
                </div>        
                <p>Remember: X Goes First</p>
            </div>
            <button>Start Game</button>
            <button>Quit Game</button>
        </section>
    )
}

export default NewGame;