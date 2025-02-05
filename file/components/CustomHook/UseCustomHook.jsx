import React, { useState } from 'react'

export default function UseCustomHook() {
    const [value, setValue] = useState("");

    const handleChange = (event) =>{
        setValue(event.target.value);
    }

  return { value, handleChange };
}
