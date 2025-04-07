import React, { useCallback, useState } from 'react'
import UseCallBackChild from './UseCallBackChild.jsx';

export default function UseCallBackParent() {
    const [values, setValues] = useState(['one', 'two', 'three', 'four', 'five']);

    const deleteValue = useCallback((data) => {
        setValues((prev) => (
            prev.filter((val) => (val !== data))
        ));
    }, []);

    return (
        <div>
            {values.map((item) => (
                <UseCallBackChild key={item} val={item} deleteItem={deleteValue}></UseCallBackChild>
            ))}
        </div>
    )
}
