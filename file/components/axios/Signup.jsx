import axios from 'axios';
import React, { useState } from 'react'

export default function Signup() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const [errors, setErrors] = useState({
        usernameError: '',
        emailError: '',
        passwordError: '',
        confirmpasswordError: ''
    });


    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value
        })

        validate();
    }

    const validate = () => {
        const usernamePattern = new RegExp(/^[a-zA-Z]{3,}$/);
        const emailPattern = new RegExp(/^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/);
        const passwordPattern = new RegExp(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/);
        let valid = true;
        const validationError = {};

        if (!usernamePattern.test(userData.username)) {
            validationError.usernameError = "Only Alphabets with atleast 3 characters";
            valid = false;
        }


        if (!emailPattern.test(userData.email)) {
            validationError.emailError = "Invalid Email address";
            valid = false;
        }


        if (!passwordPattern.test(userData.password)) {
            validationError.passwordError = "Password must contain atleast one small and long alphabet, number, special charcter";
            valid = false;
        }

        if (userData.password !== userData.confirmpassword) {
            validationError.confirmpasswordError = "Password not match";
            valid = false;
        }

        setErrors(validationError);
        return valid;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validate()) {
            try {
                const response = await axios.get('http://localhost:3000/users');
                console.log(response)
                const existingUsers = response.data;
                const isEmailExist = existingUsers.some((user) => user.email === userData.email);

                if (isEmailExist) {
                    alert('Email already Exists, use another email');
                }
                else {
                    await axios.post('http://localhost:3000/users', userData)
                        .then((response) => {
                            alert('Form submitted Successfully');
                            setUserData({
                                username: '',
                                email: '',
                                password: '',
                                confirmpassword: ''
                            })
                        })
                        .catch((error) => {
                            alert(error + ', please try again');
                        })
                }
            }
            catch (error) {
                alert(error);
            }

        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Register Form : </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='username'>Name</label>
                            </td>
                            <td>
                                <input
                                    type='text'
                                    id='username'
                                    name='username'
                                    value={userData.username}
                                    onChange={handleChange}
                                    required
                                ></input>
                                {errors.usernameError && <span style={{ color: 'red' }}>{errors.usernameError}</span>}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor='email'>Email</label>
                            </td>
                            <td>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={userData.email}
                                    onChange={handleChange}
                                    required
                                ></input>
                                {errors.emailError && <span style={{ color: 'red' }}>{errors.emailError}</span>}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor='password'>Password</label>
                            </td>
                            <td>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    value={userData.password}
                                    onChange={handleChange}
                                    required
                                ></input>
                                {errors.passwordError && <span style={{ color: 'red' }}>{errors.passwordError}</span>}

                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor='confirmpassword'>Confirm Password</label>
                            </td>
                            <td>
                                <input
                                    type='password'
                                    id='confirmpassword'
                                    name='confirmpassword'
                                    value={userData.confirmpassword}
                                    onChange={handleChange}
                                    required
                                ></input>
                                {errors.confirmpasswordError && <span style={{ color: 'red' }}>{errors.confirmpasswordError}</span>}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <button type='submit'>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
