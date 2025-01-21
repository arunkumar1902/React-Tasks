import React, { useState } from 'react'

export default function ControlledForm() {

    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const submitForm = (event) => {
        event.preventDefault();

        const emailPattern = new RegExp(/^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/);
        const passwordPattern = new RegExp(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/);

        // email validation
        if (!emailId || !emailPattern.test(emailId)) {
            setEmailError("Enter Valid EmailId");
        } else {
            setEmailError('');
        }

        // password validation
        if (!password || !passwordPattern.test(password)) {
            setPasswordError("Enter Valid Password");
        } else {
            setPasswordError('');
        }

        // if validation success
        if (!emailError && !passwordError && emailId && password) {
            alert(`Email : ${emailId} \nPassword : ${password}`);
            setEmailId('');
            setPassword('');
        }
    }

    return (
        <div>
            <h3>Login Form</h3>

            <form onSubmit={submitForm}>
                <tr>
                    <td>Email</td>
                    <td>
                        <input
                            type="email"
                            value={emailId}
                            onChange={(event) => setEmailId(event.target.value)}
                        /></td>
                    <td>{emailError && <div style={{ color: 'red' }}>{emailError}</div>}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        /></td>
                    <td>{passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}</td>
                </tr>

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
