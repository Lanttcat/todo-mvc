import React from 'react';
import { screen } from '@testing-library/react';
import TaskTools from '../index';
import { render } from "../../../helper/test-helper";

describe('TaskTools component', () => {
  test('should render tools', () => {
    render(<TaskTools leftCount={3} showClear={false} onClearCompleted={() => {}} onFilter={() => {}} />);
    const inputElement = screen.getByText(/3 items left/i);
    expect(inputElement).toBeInTheDocument();
  });
})

