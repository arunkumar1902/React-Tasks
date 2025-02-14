import React, { useRef, useEffect } from 'react';
import './CustomWebComponent.jsx'

export default function WebComponent() {
  const greetingRef = useRef();

  useEffect(() => {
    if (greetingRef.current) {
      greetingRef.current.setAttribute('name', 'Arun');
    }
  }, []);

  return (
    <div>
      <h1>Web Component in React</h1>
      <my-greeting ref={greetingRef}></my-greeting>
    </div>
  );
}