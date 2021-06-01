import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../../../Data';
import { Item, categories, DataItem } from '../../../helpers/types';
import { filterUpdatedReducer } from './reducers/filterUpdated.reducer';
import { getProductsDataFulfilledReducer } from './reducers/getItemsDataFulfilled.reducer';
import { getItemsDataPendingReducer } from './reducers/getItemsDataPending.reducer';
import { getItemsDataRejectedReducer } from './reducers/getItemsDataRejected.reducer';

export const getProductsData = createAsyncThunk<{
  data: DataItem[];
  categories: categories[];
}>('Products/getItemData', async () => {
  return {
    data,
    categories: ['Armcuff', 'Ring', 'Bracelet', 'Earrings', 'Necklage'],
  };
});

type fetchStatus = 'Loading' | 'succeeded' | 'failed' | 'idle';

export type filter = categories | 'AllJewelry';

interface jewelryLists {
  AllJewelry: Item[];
  Armcuff: Item[];
  Ring: Item[];
  Bracelet: Item[];
  Earrings: Item[];
  Necklage: Item[];
}

export interface ProductsState {
  Products: { jewelry: jewelryLists };
  FetchStatus: fetchStatus;
  categories: categories[];
  filter: filter;
}
const initialState: ProductsState = {
  Products: {
    jewelry: {
      AllJewelry: [],
      Armcuff: [],
      Ring: [],
      Bracelet: [],
      Earrings: [],
      Necklage: [],
    },
  },
  FetchStatus: 'idle',
  categories: [],
  filter: 'AllJewelry',
};

export const Products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterUpdated: filterUpdatedReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsData.pending, getItemsDataPendingReducer)
      .addCase(getProductsData.fulfilled, getProductsDataFulfilledReducer)
      .addCase(getProductsData.rejected, getItemsDataRejectedReducer);
  },
});

export const { filterUpdated } = Products.actions;

export default Products.reducer;