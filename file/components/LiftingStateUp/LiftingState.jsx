import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

export default function LiftingState() {
    const [message, setMessage] = useState("Good morning");

    const handleChange = (event)=>{
        setMessage(event.target.value);
    }

  return (
    <div>
        <ChildA text={message} TextChange={handleChange}></ChildA>
        <ChildB text={message}></ChildB>
    </div>
  )
}
