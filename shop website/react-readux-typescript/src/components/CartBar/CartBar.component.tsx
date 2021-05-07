import styled from 'styled-components';
import { CustomButton } from '../../App/App.component';

interface WrapperProps {
  open: boolean;
}

export const CartBarWrapper = styled.div`
  position: absolute;
  top: 0;
  height: ${(props: WrapperProps) => (props.open ? '60vh' : '0')};
  width: 100vw;
  transition: background-color 0.28s ease-in-out, height 0s ease-in-out;
  background-color: ${(props: WrapperProps) =>
    props.open ? '#0000006e;' : 'transparent;'};
  @media screen and (min-width: 780px) {
    height: ${(props: WrapperProps) => (props.open ? '100vh' : '0')};
  }
`;

// ============= ============= ============= ============= =============

interface ContentProps {
  open: boolean;
  fullPage: boolean;
}

export const Content = styled.div`
  z-index: 20;
  position: fixed;
  overflow-x: scroll;
  width: 100vw;
  opacity: ${(props: ContentProps) => (props.open ? '1' : '0')};
  top: ${(props: ContentProps) => {
    if (props.open) {
      if (props.fullPage) {
        return '0';
      } else {
        return '60vh';
      }
    } else {
      return '100vh';
    }
  }};
  height: ${(props: ContentProps) => {
    if (props.open && props.fullPage) {
      return '100vh';
    } else {
      return '40vh';
    }
  }};
  transition: all 0.28s;
  background-color: white;

  @media screen and (min-width: 780px) {
    top: 0;
    right: 0;
    width: 40vw;
    height: 100vh;
    transform: ${(props: ContentProps) =>
      props.open ? 'translateX(0)' : 'translateX(100%)'};
  }
`;

// ============= ============= ============= ============= =============

export const Items = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// ============= ============= ============= ============= =============

export const CloseButton = styled(CustomButton)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
`;
// ============= ============= ============= ============= =============

export const ItemCard = styled.div`
  height: 3rem;
`;
// ============= ============= ============= ============= =============

export const Total = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
// ============= ============= ============= ============= =============

export const Price = styled.p``;
// ============= ============= ============= ============= =============

export const CheckoutFotter = styled.div`
  padding: 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// ============= ============= ============= ============= =============

export const CheckoutButton = styled(CustomButton)`
  height: 2.7rem;
  width: 100%;
  background-color: black;
  border-radius: 35px;
  color: white;
`;
