import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import CountrySelect from '../CountrySelect/CountrySelect';
import { ConnectForm } from '../ConnectForm';
import {
  FormProvider,
  useForm,
  UseFormRegister,
  FormState,
} from 'react-hook-form';
import {
  Logo,
  FormContainer,
  Form,
  MainLabel,
  SignIn,
  Link,
  Input,
  FormError,
  Checkbox,
  MarketingCheckbox,
  MarketingLabel,
  SubmitButton,
  ReturnLink,
} from './CheckoutForm.component';

export type formValue = {
  email: string;
  buyerAcceptMarketing: string;
  FirstName: string;
  LastName: string;
  Address: string;
  Address2: string;
  City: string;
  Country: string;
  PhoneNumber: number;
};

const CheckoutForm: React.FC = () => {
  const methods = useForm<formValue>();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = methods;
  return (
    <>
      <Logo to="/">Shw</Logo>
      <OrderSummary />
      <FormProvider {...methods}>
        <FormContainer>
          <Form
            onSubmit={methods.handleSubmit((data) => {
              console.log(data);
            })}
          >
            <ConnectForm>
              <MainLabel>Contact information</MainLabel>
              <SignIn>
                Already have an account?
                <Link href=""> Log in</Link>
              </SignIn>
              {({
                register,
                formState: { errors },
              }: {
                register: UseFormRegister<formValue>;
                formState: FormState<formValue>;
              }) => (
                <>
                  <Input
                    {...register('email', { required: 'This is required.' })}
                    isError={errors.email}
                    type="email"
                    placeholder="Email"
                    autoCapitalize="off"
                    spellCheck="false"
                    autoComplete="email"
                  />
                  <FormError>{errors.email && errors.email.message}</FormError>
                </>
              )}

              <Checkbox>
                {({ register }: { register: UseFormRegister<formValue> }) => (
                  <>
                    <MarketingCheckbox
                      {...register('buyerAcceptMarketing')}
                      type="checkbox"
                      id="buyer-accept-marketing"
                    />
                  </>
                )}

                <MarketingLabel htmlFor="buyer-accept-marketing">
                  Keep me up to date on news and exclusive offers.
                </MarketingLabel>
              </Checkbox>
              <MainLabel>Shipping address</MainLabel>
              {({
                register,
                formState: { errors },
              }: {
                register: UseFormRegister<formValue>;
                formState: FormState<formValue>;
              }) => (
                <>
                  <Input
                    {...register('FirstName', {
                      required: 'This is required.',
                    })}
                    isError={errors.FirstName}
                    type="text"
                    placeholder="First name"
                    autoCapitalize="off"
                    spellCheck="false"
                    autoComplete="given-name"
                    autoCorrect="off"
                  />
                  <FormError>
                    {errors.FirstName && errors.FirstName.message}
                  </FormError>
                </>
              )}

              {({
                register,
                formState: { errors },
              }: {
                register: UseFormRegister<formValue>;
                formState: FormState<formValue>;
              }) => (
                <>
                  <Input
                    {...register('LastName', { required: 'This is required.' })}
                    isError={errors.LastName}
                    type="text"
                    placeholder="Last name"
                    autoCapitalize="off"
                    spellCheck="false"
                    autoComplete="family-name"
                    autoCorrect="off"
                  />
                  <FormError>
                    {errors.LastName && errors.LastName.message}
                  </FormError>
                </>
              )}

              {({
                register,
                formState: { errors },
              }: {
                register: UseFormRegister<formValue>;
                formState: FormState<formValue>;
              }) => (
                <>
                  <Input
                    {...register('Address', { required: 'This is required.' })}
                    isError={errors.Address}
                    type="text"
                    placeholder="Address"
                    autoCapitalize="off"
                    spellCheck="false"
                    autoComplete="address-line1"
                    autoCorrect="off"
                  />
                  <FormError>
                    {errors.Address && errors.Address.message}
                  </FormError>
                </>
              )}
              {({
                register,
                formState: { errors },
              }: {
                register: UseFormRegister<formValue>;
                formState: FormState<formValue>;
              }) => (
                <>
                  <Input
                    {...register('Address2')}
                    isError={errors.Address2}
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    autoCapitalize="off"
                    spellCheck="false"
                    autoComplete="address-line2"
                    autoCorrect="off"
                  />
                  <FormError>
                    {errors.Address2 && errors.Address2.message}
                  </FormError>
                </>
              )}

              {({
                register,
                formState: { errors },
              }: {
                register: UseFormRegister<formValue>;
                formState: FormState<formValue>;
              }) => (
                <>
                  <Input
                    {...register('City', { required: 'This is required.' })}
                    isError={errors.City}
                    type="text"
                    placeholder="City"
                    autoComplete="address-level2"
                    autoCorrect="off"
                  />
                  <FormError>{errors.City && errors.City.message}</FormError>
                </>
              )}

              <CountrySelect />
              {({
                register,
                formState: { errors },
              }: {
                register: UseFormRegister<formValue>;
                formState: FormState<formValue>;
              }) => (
                <>
                  <Input
                    {...register('PhoneNumber', {
                      required: 'This is required.',
                      valueAsNumber: true,
                    })}
                    isError={errors.PhoneNumber}
                    type="tel"
                    placeholder="Phone"
                    autoComplete="tel"
                    autoCorrect="off"
                  />
                  <FormError>
                    {errors.PhoneNumber && errors.PhoneNumber.message}
                  </FormError>
                </>
              )}

              <SubmitButton type="submit">Continue to shipping</SubmitButton>
              <ReturnLink to="/">Return to cart</ReturnLink>
            </ConnectForm>
          </Form>
        </FormContainer>
      </FormProvider>
    </>
  );
};

export default CheckoutForm;
