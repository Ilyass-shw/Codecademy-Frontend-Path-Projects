import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  renderWithReactHookForm,
  screen,
  waitFor,
} from '../../../test-utils/testUtils';
import CheckoutForm from './CheckoutForm';

describe('CheckoutForm', () => {
  window.alert = (): void => undefined; // provide an empty implementation for window.alert

  it('should render', () => {
    renderWithReactHookForm(<CheckoutForm />, 'withRouter');
  });

  //========================================================================

  it('should match snapshot', () => {
    const { asFragment } = renderWithReactHookForm(
      <CheckoutForm />,
      'withRouter',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  //========================================================================

  it('should validate form fields', async () => {
    const verifyHowManyRequiredErrors = (Num: number): Promise<void> => {
      return waitFor(() => {
        expect(screen.queryAllByText('This is required.')).toHaveLength(Num);
      });
    };

    const saveData = jest.fn();
    renderWithReactHookForm(<CheckoutForm saveData={saveData} />, 'withRouter');

    const submitButton = screen.getByRole('button', {
      name: /continue to shipping/i,
    });

    //verify initial state
    expect(screen.queryByText('This is required.')).not.toBeInTheDocument();
    userEvent.click(submitButton);
    await verifyHowManyRequiredErrors(7);
    expect(saveData).not.toHaveBeenCalled();

    // test validation for Email input
    userEvent.type(screen.getByPlaceholderText('Email'), 'example.gmail.com');
    expect(
      await screen.findByText('Please enter a valid email Address.'),
    ).toBeInTheDocument();
    userEvent.type(screen.getByPlaceholderText('Email'), 'example@gmail.com');

    await verifyHowManyRequiredErrors(6);

    await waitFor(() => {
      expect(
        screen.queryByText('Please enter a valid email Address.'),
      ).not.toBeInTheDocument();
    });

    // test validation for First name input
    userEvent.type(screen.getByPlaceholderText('First name'), 'Emilie');
    await verifyHowManyRequiredErrors(5);

    // test validation for Last name input
    userEvent.type(screen.getByPlaceholderText('Last name'), 'Sobolov');
    await verifyHowManyRequiredErrors(4);

    // test validation for Address input
    userEvent.type(
      screen.getByPlaceholderText('Address'),
      'Germany, strasse nummer 8',
    );
    await verifyHowManyRequiredErrors(3);

    // test validation for City input
    userEvent.type(screen.getByPlaceholderText('City'), 'Berlin');
    await verifyHowManyRequiredErrors(2);

    // test validation for country input
    userEvent.selectOptions(
      screen.getByPlaceholderText('Counrty/Region'),
      'Germany',
    );
    await verifyHowManyRequiredErrors(1);

    // test validation for Phone input
    userEvent.type(screen.getByPlaceholderText('Phone'), '04578163554');

    await verifyHowManyRequiredErrors(0);
  }, 8000);

  //========================================================================

  it('should submit correct form data', async () => {
    const saveData = jest.fn();
    renderWithReactHookForm(<CheckoutForm saveData={saveData} />, 'withRouter');

    const submitButton = screen.getByRole('button', {
      name: /continue to shipping/i,
    });
    userEvent.click(submitButton);
    expect(saveData).not.toHaveBeenCalled();

    expect;
    // fill in data
    userEvent.type(screen.getByPlaceholderText('Email'), 'example@gmail.com');
    userEvent.click(
      screen.getByRole('checkbox', {
        name: /keep me up to date on news and exclusive offers\./i,
      }),
    );
    userEvent.type(screen.getByPlaceholderText('First name'), 'Emilie');
    userEvent.type(screen.getByPlaceholderText('Last name'), 'Sobolov');
    userEvent.type(
      screen.getByPlaceholderText('Address'),
      'Germany, strasse nummer 8',
    );
    userEvent.type(screen.getByPlaceholderText('City'), 'Berlin');
    userEvent.selectOptions(
      screen.getByPlaceholderText('Counrty/Region'),
      'Germany',
    );
    userEvent.type(screen.getByPlaceholderText('Phone'), '04578163554');

    userEvent.click(submitButton);
    await waitFor(() =>
      expect(saveData).toHaveBeenCalledWith({
        Address: 'Germany, strasse nummer 8',
        Address2: '',
        City: 'Berlin',
        Country: 'DE',
        FirstName: 'Emilie',
        LastName: 'Sobolov',
        PhoneNumber: '04578163554',
        buyerAcceptMarketing: true,
        email: 'example@gmail.com',
      }),
    );
  }, 8000);
});
