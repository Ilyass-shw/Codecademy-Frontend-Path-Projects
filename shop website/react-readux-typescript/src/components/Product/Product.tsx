import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import HoverBarWrapper from '../../custom components/HoverBarWrapper/HoverBarWrapper';
import { Item } from '../../helpers/types';
import {
  ProductItem,
  ItemImages,
  ItemImage,
  ItemName,
  ItemPrice,
} from './Product.component';
interface product {
  item: Item;
}
const Product: React.FC<product> = ({ item }) => {
  return (
    <ProductItem>
      <HoverBarWrapper durationInSec='2sec' repeate={1}>
      <ItemImages>
        {item.imgs.map((src) => {
          return <ItemImage src={src} key={nanoid()} />;
        })}
      </ItemImages>
      </HoverBarWrapper>
      <ItemName>{item.name}</ItemName>
      <ItemPrice>{item.price}</ItemPrice>
    </ProductItem>
  );
};

export default Product;
