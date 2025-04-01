import React, { useState, useEffect } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  const handleClick = () => {
    setCount(count + 1);
    if (count === 3) {
      setError(new Error("Error Occured"));
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
