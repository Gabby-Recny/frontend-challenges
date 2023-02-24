import React from "react";
import '../Square/Square.css';
import O from '../../assets/icon-o.svg';
import X from '../../assets/icon-x.svg';

const Square = ({ value, onClick }) => {
    const renderToken = () => {
        if (value === 'X') {
            return (
                <img className="game-token" src={X} alt="X token"/>
            )
        } else if (value === 'O') {
            return (
                <img className="game-token" src={O} alt="O token"/>
            )
        } else {
            return null;
        }
    }

    return (
        <button 
            className="square"
            onClick={() => onClick()}
            >
            {renderToken()}
        </button>
    )
}

export default Square;