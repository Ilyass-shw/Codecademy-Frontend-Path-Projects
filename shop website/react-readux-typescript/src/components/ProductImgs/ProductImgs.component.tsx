import styled from 'styled-components';

export const ItemImages = styled.div`
  /* @media screen and (min-width: 880px) { */
  display: flex;
  /* } */
  flex-wrap: nowrap;
  overflow: hidden;
`;
export const ItemImage = styled.img`
  width: 100%;
  object-fit: cover;
  line-height: 1.8rem;
  height: 80%;

  @media screen and (min-width: 780px) {
    /* max-height: 25%; */
  }
`;
