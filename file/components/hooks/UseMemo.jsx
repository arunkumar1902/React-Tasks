import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [search, setSearch] = useState("");

    const values = ['one', 'two', 'three', 'four', 'five'];

    const handleChange = (event)=>{
        setSearch(event.target.value);
    }

    const memoizedValue = useMemo(()=>{
        return values.find((val)=>(val === search));
    }, [search]);
  return (
    <div>
        <input type="text" value={search} onChange={handleChange} />
        {memoizedValue?<p>Searched Item : {memoizedValue}</p> : <p>Item not Found</p>}
    </div>
  )
}
