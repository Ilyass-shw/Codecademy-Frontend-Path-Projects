import React, { useState } from 'react';
import { CustomButton } from '../../../App/App.component';
import {
  ImgContainer,
  MainImgContainer,
  Arrow,
  MainImg,
  AllImgs,
  ImgBorder,
  Img,
} from './ProductViewImgSlider.component';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

interface productViewImgSliderProps {
  imgs: string[];
}
const ProductViewImgSlider: React.FC<productViewImgSliderProps> = ({
  imgs,
}) => {
  const [main, setMain] = useState(0);
  return (
    <ImgContainer>
      <MainImgContainer>
        <Arrow
          left={true}
          onClick={() =>
            setMain((current) => (current <= 0 ? imgs.length - 1 : current - 1))
          }
          data-testid="leftArrow"
        >
          <MdKeyboardArrowLeft />
        </Arrow>
        <Arrow
          left={false}
          onClick={() =>
            setMain((current) => (current >= imgs.length - 1 ? 0 : current + 1))
          }
          data-testid="rightArrow"
        >
          <MdKeyboardArrowRight />
        </Arrow>
        <MainImg loading="lazy" src={imgs[main]} data-testid="mainImg" />
      </MainImgContainer>
      <AllImgs>
        {imgs.map((src, index) => (
          <CustomButton key={src} onClick={() => setMain(index)}>
            <ImgBorder selected={src === imgs[main]}>
              <Img loading="lazy" src={src} data-testid={'miniImg ' + src} />
            </ImgBorder>
          </CustomButton>
        ))}
      </AllImgs>
    </ImgContainer>
  );
};

export default ProductViewImgSlider;
