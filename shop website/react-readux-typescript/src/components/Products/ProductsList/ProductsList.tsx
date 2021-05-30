import React from 'react';
import { useSelector } from 'react-redux';
import CustomSelectInput from '../../CustomComponents/CustomSelectInput/CustomSelectInput';
import Product from '../Product/Product';
import { filterSelector } from '../ProductsSlice/selectors/filterSelector';
import { itemsCategoriesSelector } from '../ProductsSlice/selectors/itemsCategoriesSelector';
// import { AllJewellrySelector } from '../ProductsSlice/selectors/AllJewelrySelector';
import { getProductsByFilter } from './helpers.tsx/getProductsByFilter';
import { updateFilter } from './helpers.tsx/updateFilter';
import { ItemList, ProductsWrapper, Filter } from './ProductsList.component';
const ProductsList: React.FC = () => {
  // const [filter, setFilter] = useState<string>('Necklage');
  // console.log(filter+''+ setFilter);
  // setFilter('Necklage');
  const filter = useSelector(filterSelector);
  const productsList = getProductsByFilter(filter);
  console.log(productsList);

  if (!productsList || productsList.length === 0) {
    return (
      <h4>Sorry, no products are available right now. Please check later.</h4>
    );
  }
  const options = useSelector(itemsCategoriesSelector);

  return (
    <ProductsWrapper>
      <Filter>
        <CustomSelectInput
          label={'Filter'}
          id="productFilter"
          options={options}
          value={'Necklage'}
          onChange={updateFilter}
        />
      </Filter>
      <ItemList role={'products List'}>
        {productsList.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      </ItemList>
    </ProductsWrapper>
  );
};

export default ProductsList;
