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

  @media screen and (min-width: 1200px) {
    width: 62vw;
  }
`;

export const FormContainer = styled.div`
  width: 95vw;
  @media screen and (min-width: 1200px) {
    width: 65vw;
  }
`;
export const Form = styled.form`
  color: #333;
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
export const MainLabel = styled.h2`
  padding: 0.9rem 0;
`;
export const SignIn = styled.p``;
export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  padding: 1.2rem;
  margin: 0.9rem 0;
  font-size: 0.9rem;
`;
export const Checkbox = styled.div``;

export const MarketingCheckbox = styled.input`
  border: 1px solid #d9d9d9;
  width: 18px;
  border-radius: 4px;
  box-sizing: border-box;
  height: 18px;
  cursor: pointer;
  margin: 0.3rem;
  transform: translateY(4px);
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
  margin: 1rem 0;
`;
export const ReturnLink = styled(RouterLink)`
  padding-top: 1.75em;
  padding-bottom: 1.75em;
  font-weight: 600;
  color: black;
  text-align: center;
  font-size: smaller;
`;
