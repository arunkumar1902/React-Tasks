import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders Counter component and increments count', () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i); // Get the button element
  const count = screen.getByText(/0/i); // Get the count element
  expect(count).toBeInTheDocument(); // Assert that the count is initially 0
  fireEvent.click(button); // Simulate a button click
  expect(screen.getByText(/1/i)).toBeInTheDocument(); // Assert that count increments to 1
});
