import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from './App';
import { render } from "./helper/test-helper";
import { GetByText } from "@testing-library/dom/types/queries";

describe('App component', () => {
  const setup = () => {
    const utils = render(<App />);
    const input = screen.getByPlaceholderText(/What needs to be done/i) as HTMLInputElement;
    
    return {
      input,
      ...utils,
    }
  }
  test('should render added task', () => {
    const { input, getByText } = setup();
    fireEvent.change(input, { target: { value: 'task1' } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
    const listElement = getByText('task1')
    expect(listElement).toBeInTheDocument()
    
    fireEvent.change(input, { target: { value: 'task2' } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
    const listItem1Element = getByText('task1')
    const listItem2Element = getByText('task2')
    
    expect(listItem1Element).toBeInTheDocument()
    expect(listItem2Element).toBeInTheDocument()
  })
  
  test('should remove added task', () => {
    const { input, getByText, getAllByRole, queryByText } = setup();
  
    setupTasks(input)
    
    const removeBtns = getAllByRole('remove-todo-item')
    fireEvent.click(removeBtns[1])
    const listItem1ElementAfterRemove = queryByText('task1')
    
    expect(listItem1ElementAfterRemove).toBe(null)
  })
  
  test('should clear completed task', () => {
    const { input, getByText, getAllByRole, queryByText } = setup();
    
    setupTasks(input)
  
    const completeBtns = getAllByRole('complete-todo-item')
    fireEvent.click(completeBtns[1])
    
    const clearBtn = getByText('Clear completed')
    fireEvent.click(clearBtn)
    const listItem1ElementAfterRemove = queryByText('task1')
    
    expect(listItem1ElementAfterRemove).toBe(null)
  })
  
  const setupTasks = (input: HTMLInputElement) => {
    fireEvent.change(input, { target: { value: 'task1' } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
    fireEvent.change(input, { target: { value: 'task2' } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
    const listItem1Element = screen.getByText('task1')
    const listItem2Element = screen.getByText('task2')
  
    expect(listItem1Element).toBeInTheDocument()
    expect(listItem2Element).toBeInTheDocument()
  }
})

