import React from "react";
import './RestartGameModal.css';
import xIcon from '../../assets/icon-x.svg';
import oIcon from '../../assets/icon-o.svg';


const RestartGameModal = ({isModalOpen, closeModal, restartGame}) => {
    if (!isModalOpen) {
        return null;
    }

    const handleClick = () => {
        restartGame()
        closeModal()
    }


    return (
        <section className="restart-game-modal-container">
            <div className="restart-game-modal-icons">
                    <img src={xIcon} alt="X token"/>
                    <img src={oIcon} alt="O token"/>
            </div>
            <h3>Would you like to restart the game?</h3>
            <div className="restart-game-modal-btn-container">
                <button onClick={() => handleClick()}>Start New Game</button>
                <button onClick={() => closeModal()}>Continue Playing</button>
            </div>
        </section>
    )
}

export default RestartGameModal;