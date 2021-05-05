import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../index';

test('Header component', () => {
  render(<App />);
  const linkElement = screen.getByText(/TODO MVC/i);
  expect(linkElement).toBeInTheDocument();
});
