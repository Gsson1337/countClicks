import React, { useState, useEffect } from 'react';
import './App.css';

function Home() {
  const [count, setCount] = useState(() => {
    // Retrieve the count from localStorage, or default to 0 if not found
    const savedCount = localStorage.getItem('clickCount');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    // Update the document title and save the count to localStorage whenever count changes
    document.title = `Clicks = ${count}`;
    localStorage.setItem('clickCount', count);
  }, [count]);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className='container'>
      <p>You clicked {count} times!!</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Home;
