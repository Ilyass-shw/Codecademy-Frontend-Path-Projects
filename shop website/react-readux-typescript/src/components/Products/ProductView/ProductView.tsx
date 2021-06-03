import React, { useState } from 'react';
import { CustomButton } from '../../../App/App.component';
import { Item } from '../../../helpers/types';
import CustomSelectInput from '../../CustomComponents/CustomSelectInput/CustomSelectInput';
import ProductDetais from '../ProductDetails/ProductDetails';
import ProductViewImgSlider from '../ProductViewImgSlider/ProductViewImgSlider';
import { AddToCart } from './helpers';
import { NumberOfItem, TheNumber } from './ProductView.component';
interface productViewProps {
  item: Item;
}
const ProductView: React.FC<productViewProps> = ({ item }) => {
  const options = ['choose a size', 'XS', 'S', 'M', 'L', 'Xl']; // We'd udually get this from store
  const [itemSize, setItemSize] = useState('choose a size');
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <ProductViewImgSlider imgs={item.imgs} />
      <ProductDetais item={item} />
      <CustomSelectInput
        label={'Size :'}
        id="productSize"
        options={options}
        value={itemSize}
        onChange={(size: string) => {
          setItemSize(size);
        }}
      />
      <NumberOfItem>
        <CustomButton
          onClick={() =>
            setQuantity((current) => (current > 1 ? current - 1 : 1))
          }
        >
          -
        </CustomButton>
        <TheNumber>{quantity}</TheNumber>
        <CustomButton onClick={() => setQuantity(quantity + 1)}>+</CustomButton>
      </NumberOfItem>
      <CustomButton onClick={() => AddToCart(item, itemSize, quantity)}>
        Add To Cart
      </CustomButton>
    </>
  );
};

export default ProductView;
