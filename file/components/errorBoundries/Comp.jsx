import React from 'react'

export default function Comp({content}) {
    
    if(content === "hi"){
        throw Error("Error");
    }

  return (
    <div>
        {content}
    </div>
  )
}
