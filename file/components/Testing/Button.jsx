import React, { useState } from 'react'

export default function Button() {

    const [click, setClick] = useState(false);

    const handleClick = ()=>{
        setClick(!click);
    }
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        {click && <p>Button clicked</p>}
    </div>
  )
}
