import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../../Data';
import { Item } from '../../helpers/types';
import { getProductsDataFulfilledReducer } from './reducers/getItemsDataFulfilled.reducer';
import { getItemsDataPendingReducer } from './reducers/getItemsDataPending.reducer';
import { getItemsDataRejectedReducer } from './reducers/getItemsDataRejected.reducer';

export const getProductsData = createAsyncThunk(
  'Products/getItemData',
  async () => {
    return data;
  },
);

type fetchStatus = 'Loading' | 'succeeded' | 'failed' | 'idle';

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
};

export const Products = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsData.pending, getItemsDataPendingReducer)
      .addCase(getProductsData.fulfilled, getProductsDataFulfilledReducer)
      .addCase(getProductsData.rejected, getItemsDataRejectedReducer);
  },
});

export default Products.reducer;
