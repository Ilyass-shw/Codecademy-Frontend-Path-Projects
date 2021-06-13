import styled from 'styled-components';
import { CustomButton } from '../../../App/App.component';

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  @media screen and (min-width: 550px) {
    flex-direction: row;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  /* align-items: center; */
`;

export const Size = styled.div`
  padding: 1rem;
  display: block;
`;
export const CustomLabel = styled.label`
  padding: 1rem 0;
  display: block;
`;
export const CustomSelect = styled.select`
  padding: 0.5rem;
  width: 80%;
  border: 1px solid #8c8c8c;
`;
export const CustomOption = styled.option``;
export const ButtomView = styled.div``;
export const NumberOfItem = styled.div`
  display: inline-block;
`;
export const QuantityButton = styled(CustomButton)`
  height: 2rem;
  width: 2rem;
  font-size: large;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  display: inline-block;
`;

export const TheNumber = styled.p`
  display: inline-block;
  width: 2rem;
  border: 1px solid #ddd;
  height: 100%;
  text-align: center;
`;

export const AddToCartButton = styled(CustomButton)`
  display: inline-block;
  padding: 0.7rem 3rem;
  background-color: #666666;
`;
