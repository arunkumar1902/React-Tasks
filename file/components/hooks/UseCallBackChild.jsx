import React from 'react'

export default function UseCallBackChild({ val, deleteItem }) {
    return (
        <div>
            <li>{val}
                <button onClick={() => deleteItem(val)}>Delete</button>
            </li>
        </div>
    )
}
