import React, { useState } from 'react';
import { Item } from '../../../helpers/types';
import ProductDetais from '../ProductDetails/ProductDetails';
import ProductViewImgSlider from '../ProductViewImgSlider/ProductViewImgSlider';
import { AddToCart } from './helpers';
import {
  NumberOfItem,
  TheNumber,
  ViewContainer,
  Description,
  Size,
  CustomLabel,
  CustomSelect,
  CustomOption,
  ButtomView,
  QuantityButton,
  AddToCartButton,
} from './ProductView.component';
interface productViewProps {
  item: Item;
}
const ProductView: React.FC<productViewProps> = ({ item }) => {
  const options = ['Choose an Option', 'XS', 'S', 'M', 'L', 'Xl']; // We'd udually get this from store
  const [itemSize, setItemSize] = useState('choose a size');
  const [quantity, setQuantity] = useState(1);

  return (
    <ViewContainer>
      <>
        <ProductViewImgSlider imgs={item.imgs} />
        <Description>
          <ProductDetais item={item} />
          <Size>
            <CustomLabel htmlFor="size">Size</CustomLabel>
            <CustomSelect
              value="Choose an Option"
              id="size"
              onChange={(e) => setItemSize(e?.target.value)}
            >
              {options.map((option) => (
                <CustomOption key={option}>{option}</CustomOption>
              ))}
            </CustomSelect>
          </Size>
          <ButtomView>
          <NumberOfItem>
            <QuantityButton
              onClick={() =>
                setQuantity((current) => (current > 1 ? current - 1 : 1))
              }
            >
              -
            </QuantityButton>
            <TheNumber>{quantity}</TheNumber>
            <QuantityButton onClick={() => setQuantity(quantity + 1)}>
              +
            </QuantityButton>
          </NumberOfItem>
          <AddToCartButton onClick={() => AddToCart(item, itemSize, quantity)}>
            Add To Cart
          </AddToCartButton>
          </ButtomView>
        </Description>
      </>
    </ViewContainer>
  );
};

export default ProductView;
