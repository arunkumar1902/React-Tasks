import React from 'react'
import ErrorBoundaries from './ErrorBoundaries.jsx';
import Comp from './Comp.jsx';
import { ErrorBoundary } from 'react-error-boundary';

const array = ["hello", "hi", "welcome"];
export default function ListComponent() {
    return (
        <div>
            {array.map((value, index) => (
                <ErrorBoundaries key={index} fallback={<p>Something went wrong</p>}>
                    <Comp content={value}></Comp>
                </ErrorBoundaries>
                // <ErrorBoundary key={index} fallback={<p>Something went wrong</p>}>
                //      <Comp content={value}></Comp>
                // </ErrorBoundary>
            ))}
        </div>
    )
}
