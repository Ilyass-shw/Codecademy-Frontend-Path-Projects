import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { StoreType } from './types';

const fakeSlice = createSlice({
  name: 'name',
  initialState: {} ,
  reducers: {},
});

export default configureStore({
  reducer: {
    posts: fakeSlice.reducer,
  },
});

export const makeCustomTestStore = (
  name: string,
  initialState: Record<string, unknown>,
  reducers = {},
): StoreType => {
  const FakeSlice = createSlice({
    name,
    initialState,
    reducers,
  });

  return configureStore({
    reducer: {
      posts: FakeSlice.reducer,
    },
  });
};
