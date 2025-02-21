import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Counter from './Counter';

describe("Counter Component", ()=>{
  beforeEach(() => {
    render(<Counter />);
  });
  
  afterEach(()=>{
    console.log("Test Cleanup after Each test");
  });
  
  test('renders initial count of 0', () => {
    const countText = screen.getByText(/0/i);
    expect(countText).toBeInTheDocument();
  });
  
  test('increments count when button is clicked', () => {
    const button = screen.getByText('Increment');
    act(()=>{
      fireEvent.click(button);
    });
  
    //assertion
    const countText = screen.getByText(/1/i);
    expect(countText).toBeInTheDocument();
  });
  
  it('increments count twice when button is clicked twice', () => {
    const button = screen.getByText('Increment');
    act(()=>{
      fireEvent.click(button);
    });
  
    act(()=>{
      fireEvent.click(button);
    });
  
    const countText = screen.getByText(/2/i);
    expect(countText).toBeInTheDocument();
  });
  
})