import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import store, { makeCustomTestStore } from './faksestore';
import { RenderReturn, StoreType } from './types';
import { BrowserRouter } from 'react-router-dom';

// const TestWrapper: React.FC<WrapperParams> = ({
//   MyStore,
//   WithRouter,
//   children,
// }) => {
//   if (WithRouter) {
//     return (
//       <Provider store={MyStore}>
//         <BrowserRouter>{children}</BrowserRouter>
//       </Provider>
//     );
//   } else {
//     return <Provider store={MyStore}>{children}</Provider>;
//   }
// };

// ============= ============= ============= ============= =============

export const render = (
  ui: React.ReactElement,
  MyStore: StoreType,
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

export const renderWithRouterOnly = (ui: React.ReactElement): RenderReturn => {
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
