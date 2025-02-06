import React, {useRef} from 'react'

export default function StrictDemo() {
    const mydiv = useRef();

  return (
    // <div ref='mydiv'>StrictDemo</div>
    <div ref={mydiv}>StrictDemo</div>
  )
}

