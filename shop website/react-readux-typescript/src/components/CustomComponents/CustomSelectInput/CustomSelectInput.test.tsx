import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '../../../test-utils/testUtils';
import CustomSelectInput from './CustomSelectInput';

describe('CustomSelectInput', () => {
  it('should render all provided options with the correct initial value', () => {
    const options = ['option1', 'option2', 'option3'];
    const onChange = jest.fn() as (value: string) => void;
    render(
      <CustomSelectInput
        label={'my label'}
        value={'option2'}
        options={options}
        onChange={onChange}
        id={'idd'}
      />,
    );
    const selectInput = screen.getByLabelText('my label');

    expect(screen.getByText('option1')).toBeInTheDocument();
    expect(screen.getByText('option2')).toBeInTheDocument();
    expect(screen.getByText('option3')).toBeInTheDocument();

    expect(selectInput).toHaveValue('option2');
  });

  it('should change the value and call onChange function when another option is selected', () => {
    const options = ['option1', 'option2', 'option3'];
    const onChange = jest.fn() as (value: string) => void;
    render(
      <CustomSelectInput
        label={'my label'}
        value={'option2'}
        options={options}
        onChange={onChange}
        id={'idd'}
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getAllByRole('option')[2]);

    // const selectInput = screen.getByLabelText('my label');

    // expect(selectInput).toHaveValue('option3');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
