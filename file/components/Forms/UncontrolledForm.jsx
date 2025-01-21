import React, { useRef, useState } from 'react'

export default function UncontrolledForm() {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validation = () => {
        const usernamePattern = new RegExp(/^(?=.*[A-Za-z])[A-Za-z]+$/);
        const emailPattern = new RegExp(/^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/);
        const passwordPattern = new RegExp(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/);

        const usernameValue = usernameRef.current.value;
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        let isValid=true;

        //username validation
        if (!usernameValue || !usernamePattern.test(usernameValue)) {
            setUsernameError("Enter Valid Username");
            isValid=false;
        }else {
            setUsernameError('');
        }


        //email validation
        if (!emailValue || !emailPattern.test(emailValue)) {
            setEmailError("Enter Valid EmailId");
            isValid=false;
        }else {
            setEmailError('');
        }

        // password validation
        if (!passwordValue || !passwordPattern.test(passwordValue)) {
            setPasswordError("Enter Valid Password");
            isValid=false;
        }else {
            setPasswordError('');
        }

        return isValid;
    }

    const formsubmit = (event) => {
        event.preventDefault();

        
        if(validation()){
            alert(`Username : ${usernameRef.current.value } \nEmail : ${emailRef.current.value} \nPassword : ${passwordRef.current.value}`);

            usernameRef.current.value = '';
            emailRef.current.value = '';
            passwordRef.current.value = '';
        }
    }

    return (
        <div>
            <h3>Register Form</h3>

            <form onSubmit={formsubmit}>
                <table>

                <tbody>
                <tr>
                    <td>Username</td>
                    <td>
                        <input
                            type="text"
                            ref={usernameRef}
                        /></td>
                    <td>{usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>
                        <input
                            type="email"
                            ref={emailRef}
                        /></td>
                    <td>{emailError && <div style={{ color: 'red' }}>{emailError}</div>}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input
                            type="password"
                            ref={passwordRef}
                        /></td>
                    <td>{passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}</td>
                </tr>
                </tbody>

                </table>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
