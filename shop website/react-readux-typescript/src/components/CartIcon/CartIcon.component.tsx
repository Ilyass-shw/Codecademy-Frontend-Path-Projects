import styled from 'styled-components';
import { CustomButton } from '../../App/App.component';

export const CartWrapper = styled(CustomButton)`
  position: relative;
  padding: 0.7rem 0.4rem;
  transform: translate(3rem, -10px);

  @media screen and (min-width: 360px) {
    transform: translate(0, 0);
    margin: 0 2.5rem 0 2rem;
  }
  @media screen and (min-width: 700px) {
    margin: 0 3rem 0 2rem;
  }
`;

export const NumberOfItemsIndicator = styled.h6`
  position: absolute;
  padding: 0.05rem 0.15rem;
  background-color: #ff2300;
  border-radius: 50%;
  transform: translate(.7rem,-.6rem);
  @media screen and (min-width: 700px) {
    transform: translate(1.2rem,-.8rem);
  }
`;
