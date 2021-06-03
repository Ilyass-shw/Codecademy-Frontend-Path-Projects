import React from 'react';
import { Item } from '../../../helpers/types';
import { ProductTitle, ProductPrice } from './ProductDetails.component';
interface ProductDetailsProps {
  item: Item;
}
const ProductDetais: React.FC<ProductDetailsProps> = ({ item }) => {
  return (
    <>
      <ProductTitle>{item.name}</ProductTitle>
      <ProductPrice>{item.price+'$'}</ProductPrice>
    </>
  );
};

export default ProductDetais;
