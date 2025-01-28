import React from 'react'

export default function List() {
    const items = [
        { id: 1, name: 'Arun' },
        { id: 2, name: 'Gopi' },
        { id: 3, name: 'Vicky' }
    ];
    return (
        <div>
            <h3>List & Keys</h3>

            <ul>
                {items.map(listItems => (
                    <li key={listItems.id}>{listItems.name}</li>
                ))}
            </ul>

            <ol>
                {items.map((listItems, index) => (
                    <li key={index}>{listItems.name}</li>
                ))}
            </ol>
            
        </div>
    )
}
