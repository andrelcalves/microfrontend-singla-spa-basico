import React, { useState } from 'react';
import './App.css';

function App() {

  const [counter, updateCounter] = useState(0)
  const handleDecrement = () => {
    updateCounter(counter - 1)
  }
  const handleIncrement = () => {
    updateCounter(counter + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </header>
    </div>
  );
}

export default App;
