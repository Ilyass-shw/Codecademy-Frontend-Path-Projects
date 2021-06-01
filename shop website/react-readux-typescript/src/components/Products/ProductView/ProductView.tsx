import React from 'react';
import ProductDetais from '../ProductDetails/ProductDetails';
import ProductViewImgSlider from '../ProductViewImgSlider/ProductViewImgSlider';

interface productViewProps {
  productId: number | undefined;
}
const ProductView: React.FC<productViewProps> = ({ productId }) => {
  return (
    <>
      <ProductViewImgSlider productId={productId} />
      <ProductDetais />
    </>
  );
};

export default ProductView;
