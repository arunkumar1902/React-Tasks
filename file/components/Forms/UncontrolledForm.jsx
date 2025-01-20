import React, { useRef, useState } from 'react'

export default function UncontrolledForm() {

    const emailRef = useRef(null);
    const passwordRef= useRef(null);
    const usernameRef= useRef(null);
    const [emailError, setEmailError]= useState('');
    const [usernameError, setUsernameError]= useState('');
    const [passwordError, setPasswordError]= useState('');


    const submitForm = (event)=>{
        event.preventDefault();

        const emailPattern = new RegExp(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        const passwordPattern = new RegExp(/^[a-zA-Z0-9!@#$%^&*]{7,}$/);
        const usernamePattern = new RegExp(/^[A-Za-z]+$/);


        const emailValue =emailRef.current.value;
        const usernameValue =usernameRef.current.value;
        const passwordValue =passwordRef.current.value;

        if(!usernameValue || !usernamePattern.test(usernameValue)){
            setUsernameError("Enter Valid Username");
        }
        else{
            setUsernameError('');
        }
       

        if(!emailValue || !emailPattern.test(emailValue)){
            setEmailError("Enter Valid EmailId");
        }
        else{
            setEmailError('');
        }

        if(!passwordValue || !passwordPattern.test(passwordValue)){
            setPasswordError("Enter Valid Password");
        }
        else{
            setPasswordError('');
        }

        if(!usernameError && !emailError && !passwordError && usernameValue && emailValue && passwordValue){
            alert(`Username : ${usernameValue} \nEmail : ${emailValue} \nPassword : ${passwordValue}`);

            usernameRef.current.value='';
            emailRef.current.value='';
            passwordRef.current.value='';
        }
    }
  return (
    <div>
        <h3>Login Form</h3>

        <form onSubmit={submitForm}>
        <tr>
                <td>Username</td>
                <td>
                    <input 
                    type="text" 
                    ref={usernameRef}
                    required
                    /></td>
                    <td>{usernameError && <div style={{color:'red'}}>{usernameError}</div>}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>
                    <input 
                    type="email" 
                    ref={emailRef}
                    required
                    /></td>
                    <td>{emailError && <div style={{color:'red'}}>{emailError}</div>}</td>
            </tr>
            <tr>
                <td>Password</td>
                <td>
                    <input 
                    type="password" 
                    ref={passwordRef}
                    required
                    /></td>
                    <td>{passwordError && <div style={{color:'red'}}>{passwordError}</div>}</td>
                    <td></td>
            </tr>

            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}
