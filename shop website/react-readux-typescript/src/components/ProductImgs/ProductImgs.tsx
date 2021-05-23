import React, { useEffect, useState } from 'react';
import { ItemImage, ItemImages } from './ProductImgs.component';
import { nanoid } from '@reduxjs/toolkit';
// import { isInViewport } from '../../helpers/isInViewport';

interface productImgs {
  imgs: string[];
}

const ProductImgs: React.FC<productImgs> = ({ imgs }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgNumber = imgs.length;
  //   const img = useRef<Element>(null);
  //   const isVisible = isInViewport(img);
  // let n: ReturnType<typeof setTimeout>;
  // const timeout = useRef(n);

  useEffect(() => {
    const nextImg = () => {
      setCurrentImg((current) => (current === imgNumber - 1 ? 0 : current + 1));
    };
    // timeout.current = setTimeout(nextImg, 2000);
    // let bo: ReturnType<typeof setTimeout>;
    // if (isVisible) {
    const bo = setTimeout(nextImg, 2000);
    // }

    return () => {
      if (bo) {
        clearTimeout(bo);
      }
    };
  }, [currentImg, imgNumber]);

  return (
    <ItemImages>
      {
        <ItemImage src={imgs[currentImg]} key={nanoid()} />
        // item.imgs.map((src) => {
        //   return <ItemImage src={src} key={nanoid()} />;
        // })
      }
    </ItemImages>
  );
};

export default ProductImgs;
