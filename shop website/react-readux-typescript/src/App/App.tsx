import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';

import { GlobalStyle } from './App.component';
import { getProductsData } from '../components/Products/ProductsSlice/ProductsSlice';
import { isBarOpenSelector } from '../components/Cart/CartSlice/CartSlice';
import Home from '../pages/Home';

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(getProductsData());
  }, []);

  const isCartBarOpen = useSelector(isBarOpenSelector);
  return (
    <>
      <GlobalStyle canScroll={isCartBarOpen} />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
