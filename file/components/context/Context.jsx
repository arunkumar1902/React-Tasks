import React, { createContext, useContext } from 'react'
 
const context = createContext();

export default function Context({message}) {
    return (
        <div>
            <h1>Use Context</h1>

            <context.Provider value={message} >
                <Component1></Component1>
            </context.Provider>
               
        </div>
    )
}
 
function Component1() {
    return (
        <div>
            <h3>Component 1</h3>
            <Component2 />
        </div>
    )
}
function Component2() {
    return (
        <div>
            <h3>Component 2</h3>
            <Component3  />
        </div>
    )
}

function Component3() {

    const text = useContext(context);

    return (
        <div>
            <h3>Component 3</h3>
            <p>{text}</p>
            <Component4 />
        </div>
    )
}

function Component4() {
    return (
        <div>
            <h3>Component 4 </h3>
        </div>
    )
}

