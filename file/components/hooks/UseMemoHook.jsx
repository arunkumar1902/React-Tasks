import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {
    const [count, setCount]=useState(0);

    const value = useMemo(()=>{ //Memoizing
        return count * 1000; 
    },[count]);
  return (
    <div>
        <h3>UseMemoHook</h3>
        <p>Calculation : {value}</p>
        <button onClick={()=> setCount(count+1)}>Click</button>
    </div>
  )
}
