import React, { Suspense, useState } from 'react'

const LazyComponent = React.lazy(()=> import('./LazyComponent.jsx'))
export default function CodeSplit() {
    const [value, setValue]=useState(false)
    const handleClick=()=>{
        setValue(true);
    }
  return (
    <>{/* Fragment */}
        <h1>Lazy Loading</h1>
        <button onClick={handleClick}>Click me</button>
        {value && (
            <Suspense fallback={<div>Loading....</div>}>
                <LazyComponent></LazyComponent>
            </Suspense>
        )}
    </>
  )
}
