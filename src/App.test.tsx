import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from './App';
import { render } from "./helper/test-helper";

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
  
    const completeBtns = getAllByRole('button')
    fireEvent.click(completeBtns[1])
    
    const clearBtn = getByText('Clear completed')
    fireEvent.click(clearBtn)
    const listItem1ElementAfterRemove = queryByText('task1')
    
    expect(listItem1ElementAfterRemove).toBe(null)
  })
  
  test('should filter task by status', () => {
    const { input, getByText, getAllByRole, queryByText } = setup();
    
    setupTasks(input)
  
    const completeBtns = getAllByRole('button')
    fireEvent.click(completeBtns[1])
    
    const doneBtn = getByText('done')
    fireEvent.click(doneBtn)
    const listItem1ElementAfterDoneFiler = queryByText('task1')
    const listItem2ElementAfterDoneFiler = queryByText('task2')
    
    expect(listItem1ElementAfterDoneFiler).toBeInTheDocument()
    expect(listItem2ElementAfterDoneFiler).toBe(null)
  
    const activeBtn = getByText('active')
    fireEvent.click(activeBtn)
    const listItem1ElementAfterActiveFiler = queryByText('task1')
    const listItem2ElementAfterActiveFiler = queryByText('task2')
  
    expect(listItem1ElementAfterActiveFiler).toBe(null)
    expect(listItem2ElementAfterActiveFiler).toBeInTheDocument()
  
    const allBtn = getByText('all')
    fireEvent.click(allBtn)
    const listItem1ElementAfterAllFiler = queryByText('task1')
    const listItem2ElementAfterAllFiler = queryByText('task2')
  
    expect(listItem1ElementAfterAllFiler).toBeInTheDocument()
    expect(listItem2ElementAfterAllFiler).toBeInTheDocument()
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

