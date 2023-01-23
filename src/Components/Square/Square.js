import React, {useState} from "react";

const Square = ({ value}) => {

    const [  squareValue, setSquareValue ] = useState(null)

    return (

        <button 
            className="square"
            onClick={() => setSquareValue('X')}
        >
            {squareValue}
        </button>
    )
}

export default Square;