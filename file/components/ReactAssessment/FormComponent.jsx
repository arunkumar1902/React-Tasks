//  Create a simple form with an input field and a submit button. 
// The form should display the text entered in the input when the submit button is clicked.

import React, { useState } from 'react'

export default function FormComponent() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Name : " + name + " , Email : " + email);
    }

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" id='name' name='name' value={name} onChange={(event) => setName(event.target.value)} required />
                <br />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" id='email' name='email' value={email} onChange={(event) => setEmail(event.target.value)} required />
                <br />
                <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    );

}