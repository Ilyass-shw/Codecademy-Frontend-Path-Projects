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
        <Arrow left={true}>
          <MdKeyboardArrowLeft
            onClick={() =>
              setMain((current) =>
                current <= 0 ? imgs.length - 1 : current - 1,
              )
            }
          />
        </Arrow>
        <Arrow left={false}>
          <MdKeyboardArrowRight
            onClick={() =>
              setMain((current) =>
                current >= imgs.length - 1 ? 0 : current + 1,
              )
            }
          />
        </Arrow>
        <MainImg loading="lazy" src={imgs[main]} />
      </MainImgContainer>
      <AllImgs>
        {imgs.map((src, index) => (
          <CustomButton key={src} onClick={() => setMain(index)}>
            <ImgBorder selected={src === imgs[main]}>
              <Img loading="lazy" src={src} />
            </ImgBorder>
          </CustomButton>
        ))}
      </AllImgs>
    </ImgContainer>
  );
};

export default ProductViewImgSlider;
