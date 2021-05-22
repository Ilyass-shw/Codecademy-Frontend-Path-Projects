import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import { AllJewellrySelector } from '../ProductsSlice/selectors/AllJewelrySelector';
import { ItemList, ProductsWrapper } from './ProductsList.component';
const ProductsList: React.FC = () => {
  const productsList = useSelector(AllJewellrySelector);

  return (
    <ProductsWrapper>
      <ItemList>
        {productsList.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      </ItemList>
    </ProductsWrapper>
  );
};

export default ProductsList;
