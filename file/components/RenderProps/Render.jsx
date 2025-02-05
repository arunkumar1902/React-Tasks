import React from 'react'
import RenderComponent from './RenderComponent.jsx'

export default function Render() {
    return (
        <div>
            <RenderComponent renderprop={
                ({ x, y }) => (
                    <div>Mouse Position: ({x},{y})</div>
                )}></RenderComponent>
        </div>
    );
};
