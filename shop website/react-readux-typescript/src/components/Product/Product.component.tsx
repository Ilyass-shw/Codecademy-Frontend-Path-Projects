import styled from 'styled-components';
import { RouterLink } from '../../App/App.component';

export const ProductItem = styled.li`
  overflow: hidden;
  padding: 1rem 1rem;
  /* max-width: 80vw; */
  width: 60vw;
    max-height: 70vw;
  margin: auto;
  @media screen and (min-width: 960px) {
    width: 40vw;
    /* max-height: 70vw; */
  }
  @media screen and (min-width: 1276px) {
    width: 30vw;
    /* max-height: 70vw; */
  }
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
