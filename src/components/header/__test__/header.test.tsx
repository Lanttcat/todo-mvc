import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../index';

test('Header component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/TODO MVC/i);
  expect(linkElement).toBeInTheDocument();
});
