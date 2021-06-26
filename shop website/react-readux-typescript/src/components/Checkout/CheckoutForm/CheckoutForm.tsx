import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import CountrySelect from '../CountrySelect/CountrySelect';
import { useForm } from "react-hook-form";
import {
  Logo,
  FormContainer,
  Form,
  MainLabel,
  SignIn,
  Link,
  Input,
  Checkbox,
  MarketingCheckbox,
  MarketingLabel,
  // Select,
  SubmitButton,
  ReturnLink,
} from './CheckoutForm.component';

const CheckoutForm: React.FC = () => {
  type formValues = {
    
  }
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Logo to="/">Shw</Logo>
      <OrderSummary />
      <FormContainer>
        <Form>
          <MainLabel>Contact information</MainLabel>
          <SignIn>
            Already have an account?
            <Link href=""> Log in</Link>
          </SignIn>
          <Input
            type="email"
            placeholder="Email"
            autoCapitalize="off"
            spellCheck="false"
            autoComplete="email"
            required
          />
          <Checkbox>
            <MarketingCheckbox type="checkbox" id="buyer-accept-marketing" />
            <MarketingLabel htmlFor="buyer-accept-marketing">
              Keep me up to date on news and exclusive offers.
            </MarketingLabel>
          </Checkbox>
          <MainLabel>Shipping address</MainLabel>
          <Input
            type="text"
            placeholder="First name"
            autoCapitalize="off"
            spellCheck="false"
            autoComplete="given-name"
            autoCorrect="off"
            required
          />
          <Input
            type="text"
            placeholder="Last name"
            autoCapitalize="off"
            spellCheck="false"
            autoComplete="family-name"
            autoCorrect="off"
            required
          />
          <Input
            type="text"
            placeholder="Adress"
            autoCapitalize="off"
            spellCheck="false"
            autoComplete="address-line1"
            autoCorrect="off"
            required
          />
          <Input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            autoCapitalize="off"
            spellCheck="false"
            autoComplete="address-line2"
            autoCorrect="off"
            required
          />
          <Input
            type="text"
            placeholder="City"
            autoComplete="address-level2"
            autoCorrect="off"
            required
          />
          <CountrySelect/>
          <Input
            type="tel"
            placeholder="Phone"
            autoComplete="tel"
            autoCorrect="off"
            required
          />
          <SubmitButton type="submit">Continue to shipping</SubmitButton>
          <ReturnLink to="/">Return to cart</ReturnLink>
        </Form>
      </FormContainer>
    </>
  );
};

export default CheckoutForm;
