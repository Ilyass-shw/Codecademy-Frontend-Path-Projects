import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';
import RegisteredInput from './RegisteredInput';

describe('RegisteredInput', () => {
  interface useFormProps {
    email: string;
    phone: number;
  }
  const Wrapper: React.FC = ({ children }) => {
    const methods = useForm<useFormProps>();
    return (
      <BrowserRouter>
        <FormProvider {...methods}>{children}</FormProvider>
      </BrowserRouter>
    );
  };

  it('should render', () => {
    render(
      <RegisteredInput
        Name="email"
        registerOptions={{ required: 'This is required.' }}
        type="email"
        placeholder="Email"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="email"
      />,
      { wrapper: Wrapper },
    );
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <RegisteredInput
        Name="email"
        registerOptions={{ required: 'This is required.' }}
        type="email"
        placeholder="Email"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="email"
      />,
      { wrapper: Wrapper },
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should watch input correctly', () => {
    render(<RegisteredInput Name="phone" type="tel" placeholder="Phone " />, {
      wrapper: Wrapper,
    });
    const registeredInput = screen.getByPlaceholderText('Email');
    userEvent.type(registeredInput, 'example.net@gmail.com');
    expect(registeredInput).toHaveValue('example.net@gmail.com');
  });
});
