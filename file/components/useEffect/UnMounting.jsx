import React, { useState, useEffect } from 'react';

export default function UnMounting(){
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
        console.log('mounted');

        return () => {
            clearInterval(interval);
            console.log('unmounted');
        };
    }, []);

    return (
        <div>
           <p>Timer: {time}</p>
        </div>
    );
}
