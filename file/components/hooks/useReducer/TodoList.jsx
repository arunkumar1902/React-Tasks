import React, { useReducer, useState } from 'react'

const initialValue = [];

const updateList = (state, action) => {
    switch (action.type) {
        case 'add': return [...state, { item: action.data, id: action.id }];
        case 'remove': return state.filter((val) => val.item !== action.data);
        default: return state;
    }
}
export default function TodoList() {
    const [list, dispatch] = useReducer(updateList, initialValue);
    const [item, setItem] = useState("");

    const handleChange = (event) => {
        setItem(event.target.value);
    }

    const addItem = () => {
        const exist = list.some(val => val.item === item);
        if(exist){
            alert("Already added")
        }
        else{
            dispatch({ type: 'add', data: item, id: new Date().toLocaleDateString() });
            setItem("");
        }
    }

    const removeItem = (item) => {
        dispatch({ type: 'remove', data:item });
    }
    
    return (
        <div>
            <input type="text" value={item} onChange={handleChange} />
            <button onClick={addItem}>Add to List</button>

            <div>
                {list.map((value) => {
                    return (
                        <li key={value.item}>
                            {value.item}&emsp;{value.id}
                            <button onClick={() => removeItem(value.item)}>Remove</button>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}
