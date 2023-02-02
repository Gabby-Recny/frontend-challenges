import React from 'react';
import './BoardHeader.css';
import O from '../../assets/icon-o.svg';
import X from '../../assets/icon-x.svg';
import restartIcon from '../../assets/icon-restart.svg';
import oOutline from '../../assets/icon-o-outline.svg';
import xOutline from '../../assets/icon-x-outline.svg';


const BoardHeader = ({ xIsNext, winner }) => {
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
