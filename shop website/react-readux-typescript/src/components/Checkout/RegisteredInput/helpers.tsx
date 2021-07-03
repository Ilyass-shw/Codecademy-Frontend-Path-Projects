import React from 'react';
import { render as OriginalRender, RenderResult } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';

export const render = (ui: JSX.Element, saveData: jest.Mock): RenderResult => {
  interface useFormProps {
    email: string;
    phone: number;
    saveData: jest.Mock;
  }
  const Wrapper: React.FC = ({ children }) => {
    const methods = useForm<useFormProps>();
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            saveData(data);
          })}
        >
          <BrowserRouter>{children}</BrowserRouter>
          <button type="submit"></button>
        </form>
      </FormProvider>
    );
  };
  return OriginalRender(<Wrapper>{ui}</Wrapper>);
};
export * from '@testing-library/react';
