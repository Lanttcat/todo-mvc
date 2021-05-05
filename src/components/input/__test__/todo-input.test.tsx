import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import TodoInput from '../index';
import { render } from "../../../helper/test-helper";

describe('TodoInput component', () => {
  test('should render input', () => {
    render(<TodoInput />);
    const inputElement = screen.getByPlaceholderText(/What needs to be done/i);
    expect(inputElement).toBeInTheDocument();
  });
  
  test('should change input value', () => {
    render(<TodoInput />);
    const inputElement = screen.getByPlaceholderText(/What needs to be done/i) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'task' } })
    expect(inputElement.value).toBe('task')
  });
})

