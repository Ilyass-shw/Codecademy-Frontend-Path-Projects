import React from 'react';
import { useSelector } from 'react-redux';
import CustomSelectInput from '../../CustomComponents/CustomSelectInput/CustomSelectInput';
import Product from '../Product/Product';
import { filterSelector } from '../ProductsSlice/selectors/filterSelector';
import { itemsCategoriesSelector } from '../ProductsSlice/selectors/itemsCategoriesSelector';
import { getProductsByFilter } from './helpers.tsx/getProductsByFilter';
import { updateFilter } from './helpers.tsx/updateFilter';
import { ItemList, ProductsWrapper, Filter } from './ProductsList.component';
import LazyLoad from 'react-lazyload';

const ProductsList: React.FC = () => {
  const filter = useSelector(filterSelector);
  const options = ['All Jewelry', ...useSelector(itemsCategoriesSelector)];
  const productsList = getProductsByFilter(filter);

  return (
    <ProductsWrapper>
      <Filter>
        <CustomSelectInput
          label={'Filter'}
          id="productFilter"
          options={options}
          value={filter}
          onChange={updateFilter}
        />
      </Filter>

      <ItemList role={'products List'}>
        {productsList.map((item) => {
          return (
            <LazyLoad height={400} key={item.id}>
              <Product item={item} />;
            </LazyLoad>
          );
        })}
      </ItemList>
    </ProductsWrapper>
  );
};

export default ProductsList;
