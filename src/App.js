import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks = ${count}`;
  }, [count]);

  return (
    <div class = 'container'>
      <p>You clicked {count} times!!</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
