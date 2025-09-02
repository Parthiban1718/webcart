import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-page">
    <div className="calculator">
        <h1 className="calc-title">Glass Calculator</h1>
      <input type="text" className="display" value={input} readOnly />
      <div className="buttons">
  <button onClick={() => handleClick('7')}>7</button>
  <button onClick={() => handleClick('8')}>8</button>
  <button onClick={() => handleClick('9')}>9</button>
  <button onClick={() => handleClick('/')}>÷</button>

  <button onClick={() => handleClick('4')}>4</button>
  <button onClick={() => handleClick('5')}>5</button>
  <button onClick={() => handleClick('6')}>6</button>
  <button onClick={() => handleClick('*')}>×</button>

  <button onClick={() => handleClick('1')}>1</button>
  <button onClick={() => handleClick('2')}>2</button>
  <button onClick={() => handleClick('3')}>3</button>
  <button onClick={() => handleClick('-')}>−</button>

  <button onClick={() => handleClick('0')}>0</button>
  <button onClick={() => handleClick('.')}>.</button>
  <button className="equal" onClick={handleEqual}>=</button>
  <button onClick={() => handleClick('+')}>+</button>

  <button className="clear" onClick={handleClear}>CLEAR</button>
</div>

      </div>
      </div>   
  );
}
