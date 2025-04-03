import React from "react";
import Button from "./Button";
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

describe("Button", ()=>{
    beforeEach(()=>{
        render(
            <Button></Button>
        );
    });    

    test("Click me text in button",()=>{
        const button = screen.getByText(/Click Me/i);
        expect(button).toBeInTheDocument();
    });

    test("Button click", ()=>{
        
        expect(screen.queryByText(/Button clicked/i)).not.toBeInTheDocument();
        const button = screen.getByText(/Click Me/i);
        fireEvent.click(button);

        expect(screen.getByText(/Button clicked/i)).toBeInTheDocument();

    });
});