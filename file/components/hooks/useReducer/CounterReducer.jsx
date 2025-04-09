import React, { useReducer } from 'react'

const initialValue = 0;
function updateCounter(state, action){
    switch (action.type){
        case "Increment": return state + 1;
        case "Decrement": return state - 1;
        default : return state;
    }
}

export default function CounterReducer() {
    const [counter, dispatch] = useReducer(updateCounter, initialValue);

  return (
    <div>
        <p>Count : {counter}</p>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    </div>
  )
}
