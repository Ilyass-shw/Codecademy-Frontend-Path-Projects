import React from 'react';
import { Item } from '../../../helpers/types';
import ProductDetais from '../ProductDetails/ProductDetails';
import ProductViewImgSlider from '../ProductViewImgSlider/ProductViewImgSlider';

interface productViewProps {
  item: Item ;
}
const ProductView: React.FC<productViewProps> = ({ item }) => {
  return (
    <>
      <ProductViewImgSlider imgs={item.imgs} />
      <ProductDetais />
    </>
  );
};

export default ProductView;
