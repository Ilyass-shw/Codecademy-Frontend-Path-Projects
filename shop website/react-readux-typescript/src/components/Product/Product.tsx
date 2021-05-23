import React from 'react';
import HoverBarWrapper from '../../custom components/HoverBarWrapper/HoverBarWrapper';
import { Item } from '../../helpers/types';
import { ProductItem, ItemName, ItemPrice } from './Product.component';

import ProductImgs from '../ProductImgs/ProductImgs';
interface product {
  item: Item;
}
const Product: React.FC<product> = ({ item }) => {
  const imgNumber = item.imgs.length;
  return (
    <ProductItem>
      <HoverBarWrapper repeate={'infinite'} imgNumber={imgNumber}>
        <ProductImgs  imgs={item.imgs} />
      </HoverBarWrapper>
      <ItemName>{item.name}</ItemName>
      <ItemPrice>{'$' + item.price}</ItemPrice>
    </ProductItem>
  );
};

export default Product;
