import React from 'react';
import { renderWithReactHookForm } from '../../../test-utils/testUtils';
import RegisteredInput from './RegisteredInput';

describe('RegisteredInput', () => {
  it('should render', () => {
    renderWithReactHookForm(
      <RegisteredInput
        Name="email"
        registerOptions={{ required: 'This is required.' }}
        type="email"
        placeholder="Email"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="email"
      />,
    );
  });

  it('should match snapshot', () => {
    const { asFragment } = renderWithReactHookForm(
      <RegisteredInput
        Name="email"
        registerOptions={{ required: 'This is required.' }}
        type="email"
        placeholder="Email"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="email"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
