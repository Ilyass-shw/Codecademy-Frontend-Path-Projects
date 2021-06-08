import styled from 'styled-components';
import { CustomButton, RouterLink } from '../../App/App.component';

export const Logo = styled(RouterLink)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #55565a;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: 9rem;
  border-bottom: 1px solid #e6e6e6;

  @media screen and (min-width: 700px) {
    /* margin: 0 3rem 0 2rem; */
  }
`;

export const Form = styled.form`
  color: #333;
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  width: 95vw;
`;
export const MainLabel = styled.h2`
  padding: 0.9rem 0;
`;
export const SignIn = styled.p``;
export const Link = styled.span``;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  padding: 1.2rem;
  margin: 0.9rem 0;
  font-size: 0.9rem;
`;
export const MarketingCheckbox = styled.input`
  border: 1px solid #d9d9d9;
  width: 18px;
  border-radius: 4px;
  box-sizing: border-box;
  height: 18px;
  cursor: pointer;
`;
export const MarketingLabel = styled.label``;
export const Select = styled.select``;
export const SubmitButton = styled(CustomButton)`
  padding-top: 1.75em;
  padding-bottom: 1.75em;
  background-color: #5c5c5c;
  border: 1px transparent solid;
  border-radius: 5px;
  font-weight: 600;
  color: white;
`;
