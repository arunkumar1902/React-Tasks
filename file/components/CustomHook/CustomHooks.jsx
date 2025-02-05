import React from 'react'
import UseCustomHook from './UseCustomHook.jsx';

export default function CustomHooks() {
    const email = UseCustomHook();
    const password = UseCustomHook();

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert("Email : " + email.value + ", Password : "+ password.value);
    }


  return (
    <div>
        <h3>CustomHooks</h3>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={email.value} onChange={email.handleChange}></input>

            <label>Password</label>
            <input type="password" value={password.value} onChange={password.handleChange}></input>

            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
