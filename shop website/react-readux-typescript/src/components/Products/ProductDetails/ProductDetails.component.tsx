import styled from 'styled-components';

export const ProductTitle = styled.h2`
  color: #151515;
  padding: 1rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 4rem;
    left: 17px;
    right: 0;
    height: 3px;
    background-color: #7b7777;
    width: 20%;
  }
`;
export const ProductPrice = styled.h3`
  color: #111;
  padding: 0.6rem 1rem 1rem 1rem;
`;
export const ProductDescription = styled.p`
  color: #111;
  padding: 0.6rem 1rem 1rem 1rem;
`;
