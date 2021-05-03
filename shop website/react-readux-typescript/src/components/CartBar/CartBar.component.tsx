import styled from 'styled-components';
import { CustomButton } from '../../App/App.component';

interface CartBarProps {
  opend: boolean;
}

export const CartBarWrapper = styled.div`
  position: fixed;
  overflow-x: scroll;
  border-top: 1px solid black;
  z-index: 20;
  width: 100vw;
  border-radius: 10% 10% 0 0;
  opacity: ${(props: CartBarProps) => (props.opend ? '1' : '0')};
  top: ${(props: CartBarProps) => (props.opend ? '60vh' : '100vh')};
  height: ${(props: CartBarProps) => (props.opend ? '40vh' : '0')};
  transition: all 0.5s;
`;

export const Items = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled(CustomButton)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
`;
export const ItemCard = styled.div`
  height: 3rem;
`;
export const Total = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const Price = styled.p``;
export const CheckoutFotter = styled.div`
  padding: 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CheckoutButton = styled(CustomButton)`
  height: 2.7rem;
  width: 100%;
  background-color: black;
  border-radius: 35px;
  color: white;
`;
