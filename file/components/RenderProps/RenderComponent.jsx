import React, { useState } from 'react'

export default function RenderComponent({renderprop}) {
    const [position, setPosition] = useState({x:0, y:0});

    const handleMouse = (event)=>{
        setPosition({x:event.clientX, y:event.clientY});
    };

  return (
    <div style={{height:'100vh'}} onMouseMove={handleMouse}>
        {renderprop(position)}
    </div>
  );
}
