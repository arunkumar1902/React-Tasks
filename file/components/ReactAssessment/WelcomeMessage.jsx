// Create a component WelcomeMessage that takes a user prop. 
// If the user prop is provided, display a message "Welcome, {user}!". 
// If not, display "Welcome, guest!". 

import React from "react";

export default function WelcomeMessage({user}){
    return (
        <>
            <h2>Welcome Message</h2>
            {user ? <p>Welcome, {user}</p> : <p>Welcome, guest</p> }
        </>
    );
}