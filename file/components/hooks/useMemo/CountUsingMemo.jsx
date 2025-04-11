import React, { useMemo, useState } from 'react'

export default function CountUsingMemo() {
    const [count, setCount] = useState(0);
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const [even, setEven] = useState(false);

    const buttonClick = ()=>{
        setCount(count+1);
        console.log("re-rendered by count");
    }

    const handleFilter = ()=>{
        setEven(!even);
        console.log("Re-rendered by filter");
        
    }
    const memoizedValue = useMemo(()=>{
        let value = 0;
        for(let i=0; i<10000; i++) {
            value = value + i;
        }
        console.log("Usememo executed");
        return value;
    },[]);

    const filterEven = useMemo(()=>{
        return numbers.filter((val)=>val%2 === 0)
    },[even]);

  return (
    <div>
        <p>MemoizedValue : {memoizedValue}</p>
        <button onClick={handleFilter}>Even Numbers</button>
        {even ? <p>filtered numbers: {filterEven.join(",")}</p> : <p>{numbers.join(",")}</p>}
        <button onClick={buttonClick}>Count {count}</button>
    </div>
  )
}
