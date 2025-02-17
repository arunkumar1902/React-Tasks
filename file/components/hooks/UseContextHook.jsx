import React, { useContext } from 'react'
import { contextDemo } from '../App.jsx';

export default function UseContextHook() {
    const text = useContext(contextDemo);
  return (
    <div>
        <h3>{text.title}</h3> 
        <p>{text.message}</p>
    </div>
  )
}
