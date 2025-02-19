// Create a functional component that uses the useState hook to manage a counter. 
// The component should display the counter value and have two buttons to increment 
// and decrement the counter by 1

import React, { useState } from 'react'

export default function CounterComponent(){
    const [count, setCount] = useState(0); 
    
    const increment = ()=>{
        setCount(count+1);
    };

    const decrement = ()=>{
        setCount(count-1);
    };
    
    return(
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}