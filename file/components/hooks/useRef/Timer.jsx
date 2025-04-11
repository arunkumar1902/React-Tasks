import React, { useEffect, useRef, useState } from 'react'

export default function Timer() {
    const timer = useRef(0);
    // const [timer, setTimer] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            timer.current += 1;
            // setTimer(timer+1)
            console.log(timer.current);
            // console.log(timer);
        }, 1000);
        console.log("value change without re-render ");
        return(
            ()=>{
                clearInterval(interval);
            }
        );
    },[{/*timer*/}]);

  return (
    <div>Timer</div>
  )
}
