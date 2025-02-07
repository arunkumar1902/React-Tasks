import React, { useRef } from 'react'

export default function UncontrolledComponent() {
    const inputref = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
        inputref.current.focus();

        alert('Name: ' + inputref.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type='text' ref={inputref}></input>
                <button type='submit'>Click</button>
            </form>
        </div>
    )
}
