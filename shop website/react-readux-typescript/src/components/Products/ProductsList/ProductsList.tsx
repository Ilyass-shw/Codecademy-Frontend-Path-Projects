import React from 'react';
import { useSelector } from 'react-redux';
import CustomSelectInput from '../../CustomComponents/CustomSelectInput/CustomSelectInput';
import Product from '../Product/Product';
import { filterSelector } from '../ProductsSlice/selectors/filterSelector';
import { itemsCategoriesSelector } from '../ProductsSlice/selectors/itemsCategoriesSelector';
import { getProductsByFilter } from './helpers.tsx/getProductsByFilter';
import { updateFilter } from './helpers.tsx/updateFilter';
import { ItemList, ProductsWrapper, Filter } from './ProductsList.component';
const ProductsList: React.FC = () => {
  const filter = useSelector(filterSelector);
  const options = ['AllJewelry', ...useSelector(itemsCategoriesSelector)];
  const productsList = getProductsByFilter(filter);

  // if (!productsList || productsList.length === 0) {
  //   return (
  //     <h4>Sorry, no products are available right now. Please check later.</h4>
  //   );
  // }

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
      {!productsList || productsList.length === 0 ? (
        <h4>Sorry, no products are available right now. Please check later.</h4>
      ) : (
        <ItemList role={'products List'}>
          {productsList.map((item) => {
            return <Product item={item} key={item.id} />;
          })}
        </ItemList>
      )}
    </ProductsWrapper>
  );
};

export default ProductsList;
