import React from 'react';
import { useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import Product from '../Product/Product';
import { filterSelector } from '../ProductsSlice/selectors/filterSelector';
import { getProductsByFilter } from '../ProductsListFilter/helpers/getProductsByFilter';
import ProductsListFilter  from '../ProductsListFilter/ProductsListFilter';
import { ItemList, ProductsWrapper } from './ProductsList.component';

const ProductsList: React.FC = () => {
  const filter = useSelector(filterSelector);
  const productsList = getProductsByFilter(filter);

  return (
    <ProductsWrapper>
      <ProductsListFilter/>

      <ItemList role={'products List'}>
        {productsList.map((item) => {
          return (
            <LazyLoad height={400} key={item.id}>
              <Product item={item} />
            </LazyLoad>
          );
        })}
      </ItemList>
    </ProductsWrapper>
  );
};

export default ProductsList;
