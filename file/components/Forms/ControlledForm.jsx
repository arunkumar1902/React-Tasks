import React, { useState } from 'react'

export default function ControlledForm() {

    const [emailId, setEmailId]= useState('');
    const [password, setPassword]= useState('');
    const [emailError, setEmailError]= useState('');
    const [passwordError, setPasswordError]= useState('');


    const submitForm = (event)=>{
        event.preventDefault();

        var emailPattern = new RegExp(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        var passwordPattern = new RegExp(/^[a-zA-Z0-9!@#$%^&*]{7,}$/);

        if(!emailId || !emailPattern.test(emailId)){
            setEmailError("Enter Valid EmailId");
        }
        else{
            setEmailError('');
        }

        if(!password || !passwordPattern.test(password)){
            setPasswordError("Enter Valid Password");
        }
        else{
            setPasswordError('');
        }

        if(!emailError && !passwordError && emailId && password){
            alert(`Email : ${emailId} \nPassword : ${password}`);

            setEmailId('');
            setPassword('');
        }
    }
  return (
    <div>
        <h3>Register Form</h3>

        <form onSubmit={submitForm}>
            <tr>
                <td>Email</td>
                <td>
                    <input 
                    type="email" 
                    value={emailId}
                    onChange={(event)=>setEmailId(event.target.value)}
                    /></td>
                    <td>{emailError && <div style={{color:'red'}}>{emailError}</div>}</td>
            </tr>
            <tr>
                <td>Password</td>
                <td>
                    <input 
                    type="password" 
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    /></td>
                    <td>{passwordError && <div style={{color:'red'}}>{passwordError}</div>}</td>
                    <td></td>
            </tr>

            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}
