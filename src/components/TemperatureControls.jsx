import React from 'react'
const TemperatureControls = ({ incrementar, decrementar, reset}) => {
   return (
    <div>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
   )
}

export default TemperatureControls