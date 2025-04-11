import React, { useCallback, useState } from 'react'

const Button =React.memo(function Button({onclick}){
    console.log("Button Rendered");
    return(
        <div>
            <button onClick={onclick}>Increment</button>
        </div>
    )
})
export default function Increment() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(true);

    console.log("Parent rendered");
    const incrementCount = useCallback(()=>{
        setCount(prev => prev+1);
    },[]);

  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={()=>setText(!text)}>Text{text}</button>
        {text ? <p>Hello</p> : <p>Hi</p>}
        <Button onclick={incrementCount}></Button>
    </div>
  )
}
