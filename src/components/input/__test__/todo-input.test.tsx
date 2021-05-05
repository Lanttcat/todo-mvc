import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoInput from '../index';

test('TodoInput component', () => {
  render(<TodoInput />);
  const linkElement = screen.getByPlaceholderText(/What needs to be done/i);
  expect(linkElement).toBeInTheDocument();
});
