import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../../Data';

export const getItemsData = createAsyncThunk('Items/getItemData', async () => {
  //   const data = import('../../Data');
  return data;
});

type fetchStatus = 'Loading' | 'succeeded' | 'failed' | 'idle';

interface Item {
  id: number;
  category: 'jewelry' | 'photoprints';
  name: string;
  price: number;
  description: string;
  imgs: string[];
}

interface items {
  jewelry: Omit<Item, 'category'>[];
  photoprints: Exclude<Item, 'category'>[];
}

export interface ItemsState {
  Items: items;
  FetchStatus: fetchStatus;
}
const initialState: ItemsState = {
  Items: { jewelry: [], photoprints: [] },
  FetchStatus: 'idle',
};

export const Items = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItemsData.pending, (state) => {
        state.FetchStatus = 'Loading';
      })
      .addCase(getItemsData.fulfilled, (state, action) => {
        state.FetchStatus = 'succeeded';
        const jewelryItems = action.payload.filter((item: Item) => {
          return item.category === 'jewelry';
        });

        state.Items.jewelry = jewelryItems;
        const photoprints = action.payload.filter((item: Item) => {
          return item.category === 'photoprints';
        });
        state.Items.photoprints = photoprints;
      })
      .addCase(getItemsData.rejected, (state) => {
        state.FetchStatus = 'failed';
      });
  },
});

export default Items.reducer;
