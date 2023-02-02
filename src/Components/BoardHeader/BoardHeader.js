import React from 'react';
import './BoardHeader.css';
import O from '../../assets/icon-o.svg';
import X from '../../assets/icon-x.svg';
import restartIcon from '../../assets/icon-restart.svg';


const BoardHeader = ({ renderTurnStatus, winner }) => {
    return (
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
    )
}

export default BoardHeader;
