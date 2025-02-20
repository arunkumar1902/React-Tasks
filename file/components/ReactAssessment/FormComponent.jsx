//  Create a simple form with an input field and a submit button. 
// The form should display the text entered in the input when the submit button is clicked.

import React, { useState } from 'react'

export default function FormComponent() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState({
        nameError : "",
        emailError : ""
    });

    function validation(){
        const namePattern = new RegExp(/^[a-zA-Z\s]+$/);
        const emailPattern = new RegExp(/^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/);
        let isValid = true;

        setError({
            nameError:"",
            emailError:""
        });

        if(!namePattern.test(name)){
            isValid = false;
            setError((prevState)=>({
                ...prevState,
                nameError:"Name must have only alphabets"
            }));
        }
        else if(!emailPattern.test(email)){
            isValid = false;
            setError((prevState)=>({
                ...prevState,
                emailError:"Enter valid email ID"
            }));
        }
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validation()){
            alert("Name : " + name + " , Email : " + email);
        };
    }

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input 
                    type="text" 
                    id='name'
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    required 
                />
                {error.nameError && <span style={{color:'red'}}>{error.nameError}</span>}
                <br />
                <br />
                <label htmlFor="email">Email: </label>
                <input 
                    type="email" 
                    id='email' 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                    required 
                />
                {error.emailError && <span style={{color:'red'}}>{error.emailError}</span>}
                <br />
                <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    );

}