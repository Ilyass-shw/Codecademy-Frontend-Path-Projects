import React, { useEffect, useRef, useState } from 'react';
import { handleScroll, setNextImg } from './helpers';
import { ItemImage, ItemImages } from './ProductImgs.component';
import HoverBarWrapper from '../../custom components/HoverBarWrapper/HoverBarWrapper';
import { useWindowWidth } from '../../helpers/useWindowWidth';

interface productImgs {
  imgs: string[];
  isOnHover: boolean;
}

const ProductImgs: React.FC<productImgs> = ({ imgs, isOnHover }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const img = useRef<HTMLImageElement>(null);
  const imgsNumber = imgs.length;
  let timeout: ReturnType<typeof setTimeout>;
  const isOnMobile = useWindowWidth() < 500;

  useEffect(() => {
    window.addEventListener('scroll', () =>
      handleScroll(img.current, setIsVisible),
    );
    return () => {
      window.removeEventListener('scroll', () =>
        handleScroll(img.current, setIsVisible),
      );
    };
  }, []);

  useEffect(() => {
    // Change imgs when product is visible on mobile
    // and on hover on bigger screens.
    if ((isVisible && isOnMobile) || (isVisible && isOnHover)) {
      timeout = setTimeout(() => setNextImg(setCurrentImg, imgsNumber), 2000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      // We want to restart to the first img in two cases:
      // -when product is out and back again in viewport, on mobiles.
      // -when user hovers again on the product, on bigger screens.
      if (!isVisible || (!isOnMobile && !isOnHover)) {
        setCurrentImg(0);
      }
    };
  }, [currentImg, imgsNumber, isVisible, isOnMobile, isOnHover]);

  return (
    <HoverBarWrapper
      repeate={'infinite'}
      imgNumber={imgsNumber}
      active={isVisible && isOnMobile}
    >
      <ItemImages>{<ItemImage ref={img} src={imgs[currentImg]} />}</ItemImages>
    </HoverBarWrapper>
  );
};

export default ProductImgs;
