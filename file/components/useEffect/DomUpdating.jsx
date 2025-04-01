import React, { useEffect, useRef, useState } from 'react'

export default function DomUpdating() {
    const [count, setCount] = useState(0);
    const inputref = useRef();
    
    useEffect(()=>{
        if(inputref.current){
            inputref.current.focus();
        }
    },[count]);

  return (
    <div>
        <input type="text" ref={inputref} />
        <p>Count: {count}</p>
        <button onClick={()=>(setCount(count+1))}>Increment</button>
        <button onClick={()=>(setCount(count-1))}>Decrement</button>
    </div>
  )
}
