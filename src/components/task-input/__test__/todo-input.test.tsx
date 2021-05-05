import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import TaskInput from '../index';
import { render } from "../../../helper/test-helper";

describe('TaskInput component', () => {
  test('should render input', () => {
    render(<TaskInput />);
    const inputElement = screen.getByPlaceholderText(/What needs to be done/i);
    expect(inputElement).toBeInTheDocument();
  });
  
  test('should change input value', () => {
    render(<TaskInput />);
    const inputElement = screen.getByPlaceholderText(/What needs to be done/i) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'task' } })
    expect(inputElement.value).toBe('task')
  });
})

