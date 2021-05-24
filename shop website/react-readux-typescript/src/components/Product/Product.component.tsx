import styled from 'styled-components';
import { RouterLink } from '../../App/App.component';

export const ProductItem = styled.li`
  overflow: hidden;
  padding: 1rem 1rem;
  min-height: 21rem;
  min-width: 80vw;
  margin: auto;
`;
export const ProductLink = styled(RouterLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;
export const ItemName = styled.h4`
  padding: 0.2rem 0 0 0;
  text-align: center;
`;
export const ItemPrice = styled.h6`
  font-weight: lighter;
`;
