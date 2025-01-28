import React from 'react'

export default function ChildA({ text, TextChange }) {
  return (
    <div>
      <h3>ChildA :</h3>
      <input type='text' value={text} onChange={TextChange}></input>
    </div>
  )
}
