import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';
import { AllJewellrySelector } from '../ProductsSlice/selectors/AllJewelrySelector';
import { ItemList, ProductsWrapper } from './ProductsList.component';
const ProductsList: React.FC = () => {
  const productsList = useSelector(AllJewellrySelector);
  if (!productsList || productsList.length === 0) {
    return (
      <h4>Sorry, no products are available right now. Please check later.</h4>
    );
  }
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
