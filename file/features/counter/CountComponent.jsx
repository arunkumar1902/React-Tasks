import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counter';

export default function CountComponent() {
    const count = useSelector((state)=>state.counter.count);

    const dispatch = useDispatch();

  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}
