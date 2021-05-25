import styled from 'styled-components';

export const ProductsWrapper = styled.section`
  padding: 1.5rem 0;
`;
export const ItemList = styled.ul`
  overflow: hidden;
  list-style: none;
  @media screen and (min-width: 780px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
