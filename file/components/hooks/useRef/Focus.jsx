import React, { useRef } from 'react'

export default function Focus() {
    const input = useRef(null);
    const scroll = useRef();


    const handleClick = () => {
        input.current.focus();
    }

    const handleScroll = () => {
        scroll.current.scrollIntoView({ behavior: "smooth" });
        scroll.current.style.backgroundColor = "red";
        scroll.current.innerText = "hello";
    }

    return (
        <div>
            <input ref={input} type="text" />
            <button onClick={handleClick}>Click</button>
            <br />

            <button onClick={handleScroll}>Scroll</button>
            <div style={{ height: "100vh" }}></div>
            <div ref={scroll} style={{ height: "100vh", backgroundColor: 'white' }}>
                <p>Scroll div</p>
            </div>
        </div>
    )
}
