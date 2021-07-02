import React from 'react';
import { renderWithReactHookForm } from '../../../test-utils/testUtils';
import CheckoutForm from './CheckoutForm';

describe('CheckoutForm', () => {
  it('should render', () => {
    renderWithReactHookForm(<CheckoutForm />,'withRouter');
  });
});
