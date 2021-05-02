// import React from 'react';
// import { render as rtlRender } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import store, { makeCustomTestStore } from './faksestore';
// import { UiType, RenderReturn, StoreType } from './types';

// const TestProvider: React.FC<{
//   MyStore: StoreType;
// }> = ({ MyStore, children }) => <Provider store={MyStore}>{children}</Provider>;

// export const render = (
//   ui: UiType,
//   { MyStore }: { MyStore: StoreType },
// ): RenderReturn => {
//   return rtlRender(<TestProvider MyStore={MyStore}>{ui}</TestProvider>);
// };

// export const makeTestStore = (
//   name: string,
//   initialState: object,
//   reducers: object,
// ): StoreType => {
//   if (name && initialState) {
//     const Store = makeCustomTestStore(name, initialState, reducers);
//     const origDispatch = Store.dispatch;
//     Store.dispatch = jest.fn(origDispatch);
//     return Store;
//   } else {
//     const origDispatch = store.dispatch;
//     store.dispatch = jest.fn(origDispatch);
//     return store;
//   }
// };

// // re-export everything
// export * from '@testing-library/react';
