import React, { Profiler, useState } from 'react'
import ProfilerDemo2 from './ProfilerDemo2.jsx';

export default function ProfilerDemo() {
    const [value, setValue] = useState(0);


    const handleIncrement = ()=>{
        setValue(value+1)
    }

    const handleDecrement = ()=>{
        setValue(value-1)
    }
    const onRender=(id, phase, actualDuration, baseDuration, startTime, commitTime)=>{
        console.log("ProfilerDemo rendered",id);
        console.log("ProfilerDemo Phase",phase);
        console.log("ProfilerDemo Actual Duration",actualDuration);
        console.log("ProfilerDemo baseDuration",baseDuration);
        console.log("ProfilerDemo startTime",startTime);
        console.log("ProfilerDemo commitTime",commitTime);
        console.log("-----------------------");
    }

  return (
    <>
        <Profiler id="ProfilerDemo" onRender={onRender}>

            <div>Profiler Demo</div>
            <h2>{value}</h2>
            <button onClick={handleIncrement}>Increment</button>


            <Profiler id="ProfilerDemo2">
                <ProfilerDemo2 decrement={handleDecrement}></ProfilerDemo2>
            </Profiler>

        </Profiler>
    </>
  )
}
