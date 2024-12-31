import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input); // Be cautious with eval in production
      setResult(calculatedResult);
    } catch {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result !== null ? `= ${result}` : ''}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleInput('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleInput('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleInput('*')}>×</button>
        </div>
        <div className="row">
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleInput('/')}>÷</button>
        </div>
      </div>
    </div>
  );
};

export default App;
