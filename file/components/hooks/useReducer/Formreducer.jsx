import React, { useReducer } from 'react'
const initialState = {name:"", email:"", password:""}

const reducerFunction = (state, action)=>{
    switch(action.type){
        case "name": return {...state, name: action.data };
        case "email": return {...state, email: action.data };
        case "password": return {...state, password: action.data };
        default: return state;
    }
}
export default function Formreducer() {
    
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    const handleChange = (event)=>{
        const {name, value} = event.target;
        dispatch({type:name, data: value});
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
                <input type="text" name='name' id='name' value={state.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' value={state.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' value={state.password} onChange={handleChange}/>
            </div>
            <button >Submit</button>
        </form>
    </div>
  )
}
