import React from 'react';
import CheckoutForm from '../components/Checkout/CheckoutForm/CheckoutForm';
import OrderSummary from '../components/Checkout/OrderSummary/OrderSummary';
// import Footer from '../components/Footer/Footer';

const Checkout: React.FC = () => {
  return (
    <>
      <OrderSummary />
      <CheckoutForm />
    </>
  );
};

export default Checkout;
