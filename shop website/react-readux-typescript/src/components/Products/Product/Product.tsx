import React, { useRef, useState, useEffect } from 'react';
import { Item } from '../../../helpers/types';
import {
  ProductItem,
  ItemName,
  ItemPrice,
  ProductLink,
} from './Product.component';
import { handleScroll } from './helpers';
import ProductImgs from '../ProductImgs/ProductImgs';

interface product {
  item: Item;
}
const Product: React.FC<product> = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const img = useRef<HTMLAnchorElement>(null);

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
  return (
    <ProductItem
      onMouseEnter={(): void => setIsHover(true)}
      onMouseLeave={(): void => setIsHover(false)}
    >
      <ProductLink ref={img} to={`/product/${item.id}`}>
        <ProductImgs
          imgs={item.imgs}
          alt={item.name}
          isOnHover={isHover}
          isVisible={isVisible}
        />
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{'$' + item.price}</ItemPrice>
      </ProductLink>
    </ProductItem>
  );
};

export default Product;
