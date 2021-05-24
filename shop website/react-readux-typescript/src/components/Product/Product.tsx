import React, { useState } from 'react';
import { Item } from '../../helpers/types';
import {
  ProductItem,
  ItemName,
  ItemPrice,
  ProductLink,
} from './Product.component';

import ProductImgs from '../ProductImgs/ProductImgs';
interface product {
  item: Item;
}
const Product: React.FC<product> = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <ProductItem
      onMouseEnter={(): void => setIsHover(true)}
      onMouseLeave={(): void => setIsHover(false)}
    >
      <ProductLink to="/">
        <ProductImgs imgs={item.imgs} isOnHover={isHover} />
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{'$' + item.price}</ItemPrice>
      </ProductLink>
    </ProductItem>
  );
};

export default Product;
