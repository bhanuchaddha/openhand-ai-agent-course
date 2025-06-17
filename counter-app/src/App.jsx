import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Simple Counter App</h1>
      <div className="counter-container">
        <h2 className="counter-display">{count}</h2>
        <button 
          className="counter-button" 
          onClick={() => setCount(count + 1)}
        >
          Click to Increase Counter
        </button>
        <button 
          className="reset-button" 
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
