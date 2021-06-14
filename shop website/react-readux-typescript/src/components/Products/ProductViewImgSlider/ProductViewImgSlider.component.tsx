import styled from 'styled-components';
import { CustomButton } from '../../../App/App.component';

export const ImgContainer = styled.div`
  flex-shrink: 0;
  width: 90vw;
  align-self: center;
  /* margin: auto; */
  @media screen and (min-width: 916px) {
    width: 60vw;
    display: flex;
    flex-direction: row-reverse;
  }
`;
export const MainImgContainer = styled.div`
  position: relative;
`;

export const Arrow = styled(CustomButton)<{ left: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? 'left: 10%' : 'right: 10%')};
  transform: scale(3.5);
`;

export const MainImg = styled.img`
  display: block;
  width: 90vw;
  margin: auto;
  padding: 1rem;
  @media screen and (min-width: 916px) {
    width: 38vw;
    padding: 0 1rem;
  }
`;
export const AllImgs = styled.div`
  padding: 1rem 1rem;
  height: fit-content;
  width: fit-content;
  margin: auto;
  @media screen and (min-width: 916px) {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
type ImgBorderProps = { selected: boolean };
export const ImgBorder = styled.div<ImgBorderProps>`
  display: flex;
  margin: 0 0.5rem;
  border: ${({ selected }) => (selected ? '2.5px solid black' : 'none')};
`;

export const Img = styled.img`
  width: 11vw;
  margin: 0.5rem;
  @media screen and (min-width: 550px) {
    width: 8vw;
    
  }
`;
