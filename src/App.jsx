import React from 'react'
import { useState } from 'react'
import TemperatureDisplay from './components/TemperatureDisplay'
import TemperatureControls from './components/TemperatureControls'
import HistoryList from './components/HistoryList'

const  App = () =>  {
  const [temperature, setTemperature] = useState(20)
  const [history, setHistory] = useState(() => {
  const saved = localStorage.getItem('historial')
  return saved ? JSON.parse(saved) : []
})

  
  const addHistorial = (newTemperatura) => {
  const hora = new Date().toLocaleTimeString()
  setTimeout(() => {
    const newHistory = [...history, `${hora} --> ${newTemperatura}`]
    setHistory(newHistory)
    localStorage.setItem('historial', JSON.stringify(newHistory))
  }, 1000)
}


  //Funcion subir temperatura
  const incrementar = () => {
    if (temperature <40) {
    const newTemperatura = temperature + 1
    setTemperature(newTemperatura)
    addHistorial(newTemperatura)
    }
  }

  //Funcion bajar temperatura
  const decrementar = () => {
    if (temperature >0) {
    const newTemperatura = temperature - 1
    setTemperature(newTemperatura)
    addHistorial(newTemperatura)
    }
  }

  //Funcion reset
  const reset = () => {
    setTemperature(20);
    setHistory([])
    localStorage.removeItem('historial')
  }

  return (
    <div className="app">
      <h1>Controlador de temperatura</h1>
      <TemperatureDisplay temperature={temperature}/>
      <TemperatureControls incrementar={incrementar} decrementar={decrementar} reset={reset} /> 
      <HistoryList history={history}/>
    </div>
  )
}
export default App;