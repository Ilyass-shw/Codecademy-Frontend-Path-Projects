import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import Inputs from '../Inputs/Inputs';
import { FormProvider, useForm } from 'react-hook-form';
import { handleData } from './helpers.tsx/handleData';
import { formValue } from './helpers.tsx/types';
import {
  Logo,
  FormContainer,
  Form,
  MainLabel,
  SignIn,
  Link,
  SubmitButton,
  ReturnLink,
} from './CheckoutForm.component';


const CheckoutForm: React.FC = () => {
  const methods = useForm<formValue>();

  return (
    <>
      <Logo to="/">Shw</Logo>
      <OrderSummary />
      <FormProvider {...methods}>
        <FormContainer>
          <Form onSubmit={methods.handleSubmit(handleData)}>
            <MainLabel>Contact information</MainLabel>
            <SignIn>
              Already have an account?
              <Link href=""> Log in</Link>
            </SignIn>
            <Inputs />

            <SubmitButton type="submit">Continue to shipping</SubmitButton>
            <ReturnLink to="/">Return to cart</ReturnLink>
          </Form>
        </FormContainer>
      </FormProvider>
    </>
  );
};

export default CheckoutForm;
