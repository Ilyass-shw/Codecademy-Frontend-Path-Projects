import styled, { css } from 'styled-components';
import { CustomButton } from '../../App/App.component';

interface CartBarProps {
  opend: boolean;
}
const animation = () => css`
  top: 100vh;
  height: 0;
`;

export const CartBarWrapper = styled.div`
  position: absolute;
  top: 60vh;
  height: 40vh;
  display: flex;
  z-index: 20;
  width: 100vw;
  background-color: grey;
  border-radius: 10% 10% 0 0;
  overflow: hidden;
  transition: top 0.5s, height 0.5s;
  ${(props: CartBarProps) => (props.opend ? '' : animation)}
`;

export const CloseButton = styled(CustomButton)`
  background-color: red;
  padding: 20px;
`;
export const ItemCard = styled.div`
  height: 10px;
`;
