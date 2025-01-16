import React from 'react'

export default function FunctionalComponent(props) {

    const name = "Arun";
    return (
        <div>
            <h3>FunctionalComponent</h3>
            <p>Hello {name}, {props.message}</p>

        </div>
    )
}
