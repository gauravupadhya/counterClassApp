import React, { useState } from 'react';
import './App.css';

function CounterApp () {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount (count +1)
  };

  const decrement = () => {
    setCount (count -1)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button className="increment" onClick={increment}> Increment</button>
      <button className="decrement" onClick={decrement}> Decrement</button>
    </div>
  );
}
export default CounterApp;
