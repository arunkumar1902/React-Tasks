import React, { useState, useEffect } from 'react';

function FunctionComponentLifecycle() {
  const [count, setCount] = useState(0);

  // mounting phase 
  useEffect(() => {
    console.log('Component is mounted');

    // unmounting phase
    return () => {
      console.log('Component is about to be removed');
    };
  }, []);

  // updating phase
  useEffect(() => {
    if (count > 0) {
      console.log('Component is updated');
    }
  }, [count]);

  return (
    <div>
      <h1>Function Component Lifecycle</h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FunctionComponentLifecycle;

// mounting	- useEffect() with empty dependency array ([])
// updating	- useEffect() with specific dependencies
// unmountng - useEffect() cleanup function