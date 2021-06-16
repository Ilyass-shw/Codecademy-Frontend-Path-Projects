import styled from 'styled-components';

export const Filter = styled.div`
  padding: 1.5rem 0;
  width: 13rem;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const ProductsWrapper = styled.section`
  padding: 1.5rem 0;
`;

export const ItemList = styled.ul`
  overflow: hidden;
  list-style: none;

  @media screen and (min-width: 780px) {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 80vw;
  }
  @media screen and (min-width: 1276px) {
    width: 90vw;
  }
`;
