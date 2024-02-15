import React, { useState } from 'react';
import './App.css';
import Display from './personal_components/Display';
import Keypad from './personal_components/Keypad';

function App() {
  const [input, setInput] = useState('');

  // Handle input
  function handleInput(e) {
    const inputValue = (input + e.target.name);
    setInput(inputValue);
  }

  // Calculate the result
  function calculate() {
    const result = eval(input);
    setInput(result.toString());
  }

  // Clear the input
  function clear() {
    setInput('');
  }

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <Display input={input} />
      <Keypad
        onInput={handleInput}
        onCalculate={calculate}
        onClear={clear}
      />
    </div>
  );
}

export default App;