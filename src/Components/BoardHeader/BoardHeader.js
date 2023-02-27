import React, {useState} from 'react';
import './BoardHeader.css';
import O from '../../assets/icon-o.svg';
import X from '../../assets/icon-x.svg';
import restartIcon from '../../assets/icon-restart.svg';
import oOutline from '../../assets/icon-o-outline.svg';
import xOutline from '../../assets/icon-x-outline.svg';
import RestartGameModal from '../RestartGameModal/RestartGameModal';


const BoardHeader = ({ xIsNext, winner, restartGame }) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

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

    const renderWinnerStatus = () => {
        if (winner === "Draw") {
            return (<p>Draw</p>)
        } else {
            return (<p>Player {winner}  wins!</p>)
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
                    {winner && renderWinnerStatus()}
                </div>
                <div className="btn-container">
                    <button 
                        className="restart-button"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <img className="restart-icon" src={restartIcon} alt="Click here to restart the game. AKA the Help, I'm losing button." />
                    </button>
                </div>
                <RestartGameModal 
                    isModalOpen={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
                    restartGame={restartGame}
                />
        </section>
    )
}

export default BoardHeader;
