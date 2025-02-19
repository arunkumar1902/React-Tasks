//  Create a functional React component that renders a greeting message. 
// The component should accept a name prop and display "Hello, {name}!"

import React from 'react'

export default function GreetingsMessage({name}){
    return(
        <div>
            <h2>Greetings Message</h2>
            <p>Hello, {name}!</p>
        </div>
    );

}