import React from 'react';
import { useSelector } from 'react-redux';
import CustomSelectInput from '../../CustomComponents/CustomSelectInput/CustomSelectInput';
import { itemsCategoriesSelector } from '../ProductsSlice/selectors/itemsCategoriesSelector';
import { filterSelector } from '../ProductsSlice/selectors/filterSelector';
import { updateFilter } from './helpers/updateFilter';
import { Filter } from './ProductsListFilter.component';

const ProductsListFilter: React.FC = () => {
  const filter = useSelector(filterSelector);
  const options = ['All Jewelry', ...useSelector(itemsCategoriesSelector)];

  return (
    <Filter>
      <CustomSelectInput
        label={'Filter'}
        id="productFilter"
        options={options}
        value={filter}
        onChange={updateFilter}
      />
    </Filter>
  );
};

export default ProductsListFilter;
