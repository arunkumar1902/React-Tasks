import React, { useEffect, useRef, useState } from 'react'

export default function UseRefHook() {
    const [count, setCount] = useState(0);
    const prevCountref = useRef();

    useEffect(()=>{
        prevCountref.current = count;
    },[count]);

    const handleClick = () =>{
        setCount(count+1);
    }


  return (
    <div>
        <h3>Use Ref Hook Demo</h3>
        <p>Count : {count}</p>
        <p>Previous Count : {prevCountref.current}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}
