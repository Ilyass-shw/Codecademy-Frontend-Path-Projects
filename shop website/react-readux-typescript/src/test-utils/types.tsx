import { configureStore, createSlice } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';


export type StoreType = ReturnType<typeof configureStore>;
export type RenderReturn = ReturnType<typeof render>;
export type SliceParameters = Parameters<typeof createSlice>;
/* eslint-disable */
export type UiType = React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>;
/* eslint-enable */

export interface TestProviderprops {
  MyStore: StoreType;
  children: /* eslint-disable */
  React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /* eslint-enable */
}
