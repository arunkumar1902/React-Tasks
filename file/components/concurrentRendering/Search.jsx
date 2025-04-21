import React, { startTransition, useState, useTransition } from 'react'

export default function Search() {
    const [input, setInput] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [isPending, startTransition] = useTransition();
    const data = [
        "one", "two", "three", "four"
    ];

    const handleChange = (event) => {
        const search = event.target.value;
        setInput(search);

        startTransition(() => {
            const searchedItems = data.filter((item) => item.includes(input));
            setFilteredData(searchedItems);
        });
    }
    
    return (
        <div>
            <input type="text" name="search" onChange={handleChange} />

            {isPending ? <p>Loading.....{console.log(isPending)}</p> : <>{console.log(isPending)}</>}
            {filteredData.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </div>
    )
}
