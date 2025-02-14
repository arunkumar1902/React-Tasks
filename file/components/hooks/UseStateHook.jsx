import React, { useState } from 'react'

export default function UseStateHook() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h3>UseStateHook</h3>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
