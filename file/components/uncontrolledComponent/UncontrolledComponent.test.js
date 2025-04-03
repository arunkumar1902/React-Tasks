import '@testing-library/jest-dom'
import React from 'react'
import UncontrolledComponent from './UncontrolledComponent'
import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

describe("test Input field", () => {
    beforeEach(() => {
        render(
            <UncontrolledComponent></UncontrolledComponent>
        )
    });

    test("Input value", () => {
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: "text" } });
        expect(input.value).toBe("text");
    });

    test("Input focus", ()=>{
        const input = screen.getByRole('textbox');
        const button = screen.getByText(/click/i);
        fireEvent.click(button);
        expect(input).toHaveFocus();
    });
})