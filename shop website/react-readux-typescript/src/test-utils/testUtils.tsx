import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store, { makeCustomTestStore } from './faksestore';
import { RenderReturn, StoreType } from './types';
import { BrowserRouter } from 'react-router-dom';
import { realStoreType } from '../App/store';

export const render = (ui: React.ReactElement): RenderReturn => {
  return rtlRender(ui);
};

// ============= ============= ============= ============= =============

export const renderWithStore = (
  ui: React.ReactElement,
  MyStore: realStoreType,
  WithRouter?: 'withRouter',
): RenderReturn => {
  if (WithRouter) {
    return rtlRender(
      <Provider store={MyStore}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>,
    );
  } else {
    return rtlRender(<Provider store={MyStore}>{ui}</Provider>);
  }
};

// ============= ============= ============= ============= =============

export const renderWithRouter = (ui: React.ReactElement): RenderReturn => {
  return rtlRender(<BrowserRouter>{ui}</BrowserRouter>);
};

// ============= ============= ============= ============= =============

export const makeTestStore = (
  Name?: string,
  initialState?: Record<string, unknown>,
  reducers = {},
): StoreType => {
  if (Name && initialState) {
    const CustomTestStore = makeCustomTestStore(Name, initialState, reducers);
    const origDispatch = CustomTestStore.dispatch;
    CustomTestStore.dispatch = jest.fn(origDispatch);
    return CustomTestStore;
  } else {
    const origDispatch = store.dispatch as jest.Mock;
    store.dispatch = jest.fn(origDispatch);
    return store;
  }
};

// re-export everything
export * from '@testing-library/react';
