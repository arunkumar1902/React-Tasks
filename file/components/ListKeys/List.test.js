import '@testing-library/jest-dom'
import React from 'react'
import List from './List';
import { render, screen } from '@testing-library/react';

describe("List", ()=>{

    test("List Elements", ()=>{
        render(
            <List></List>
        );
        expect(screen.getAllByText('Arun').length).toBeGreaterThan(0);
        expect(screen.getAllByText(/gopi/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText('Vicky').length).toBeGreaterThan(0);

        const list = screen.getAllByRole('listitem');
        expect(list.length).toBe(6);
    })
});