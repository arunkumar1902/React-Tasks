// Create a button that changes the background color of the page each 
// time it is clicked, cycling through a few colors. 

import React, { useState } from "react";

export default function BackgroundColor() {

    const colors = ["red", "green", "blue", "yellow", "pink"];
    const [index, setIndex] = useState(0);

    const handleButton = () => {
        document.body.style.backgroundColor = colors[index]; 
        setIndex(
            (prevIndex) =>
                (prevIndex + 1) % colors.length
        );
    }

    return (
        // <div style={{backgroundColor: colors[index]}}>
        <div>            
            <h2>Background Color Change</h2>
            <button onClick={handleButton}>Change</button>
        </div>
    );
}