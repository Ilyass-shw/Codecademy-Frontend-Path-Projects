import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../../Data';
import { DataItem, Item } from '../../helpers/types';

export const getItemsData = createAsyncThunk('Items/getItemData', async () => {
  //   const data = import('../../Data');
  return data;
});

type fetchStatus = 'Loading' | 'succeeded' | 'failed' | 'idle';

type items = {
  jewelry: Item[];
  photoprints: Item[];
};

export interface ItemsState {
  Items: items;
  FetchStatus: fetchStatus;
}
const initialState: ItemsState = {
  Items: { jewelry: [], photoprints: [] },
  FetchStatus: 'idle',
};

export const Products = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItemsData.pending, (state) => {
        state.FetchStatus = 'Loading';
      })
      .addCase(getItemsData.fulfilled, (state, action) => {
        state.FetchStatus = 'succeeded';
        const jewelryItems = action.payload.filter((item: DataItem) => {
          return item.category === 'jewelry';
        });

        state.Items.jewelry = jewelryItems;
        const photoprints = action.payload.filter((item: DataItem) => {
          return item.category === 'photoprints';
        });
        state.Items.photoprints = photoprints;
      })
      .addCase(getItemsData.rejected, (state) => {
        state.FetchStatus = 'failed';
      });
  },
});

export default Products.reducer;
