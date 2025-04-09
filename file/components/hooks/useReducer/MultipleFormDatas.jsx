import React, { useReducer } from 'react'

const initialValue = {};
const updateState = (state, action)=>{
    switch(action.type){
        case "userInputs":
            return {...state, [action.name]: action.value}
    }
}
export default function MultipleFormDatas() {
    const [state, dispatch] = useReducer(updateState, initialValue);

    const handleChange = (event)=>{
        const {name, value} = event.target;
        dispatch({type:"userInputs", name, value});
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(state);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' value={state.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' value={state.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' value={state.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="address">address</label>
                <input type="address" id='address' name='address' value={state.address} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id='dob' name='dob' value={state.dob} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id='confirmPassword' name='confirmPassword' value={state.confirmPassword} onChange={handleChange} />
            </div>
        </form>
    </div>
  )
}
