import styled from 'styled-components';
import { CustomButton } from '../../../App/App.component';

export const ImgContainer = styled.div``;
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
  width: 90vw;
  margin: auto;
  padding: 1rem;
  display: block;
`;
export const AllImgs = styled.div`
  padding: 1rem 1rem;
  height: fit-content;
  width: fit-content;
  margin: auto;
`;
type ImgBorderProps = { selected: boolean };
export const ImgBorder = styled.div<ImgBorderProps>`
  display: flex;
  margin: 0 0.5rem;
  border: ${({ selected }) => (selected ? '2.5px solid black' : 'none')};
`;

export const Img = styled.img`
  width: 11vw;
  margin: 0 0.5rem;
`;
