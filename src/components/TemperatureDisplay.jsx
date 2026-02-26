//const TemperatureDisplay = ({ temperature, history }) => {
   // return (
     //   <div>
     //       <span>Temperatura</span>
      //      <p>{temperature}</p>
      //      <span> Mensaje</span>
       //     <p>{ history }</p>
      //  </div>
   // )
//} 

import React from 'react'

const TemperatureDisplay = ({ temperature}) => {
    let mensaje =''
    let color = ''
    if( temperature <15) {
        mensaje = "¡Hace frío!"
        color = 'blue'

    } else if ( temperature <=25) {
        mensaje = 'Temperatura agradable'
        color = 'green'
    } else {
        mensaje = "¡Hace calor!"
        color = 'red'
    }
return (
    <div>
      <h2>{temperature} °C</h2>
      <p style={{ color: color }}>{mensaje}</p>
    </div>
    )
} 
export default TemperatureDisplay;