import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';

import { GlobalStyle } from './App.component';
import { getProductsData } from '../components/Products/ProductsSlice/ProductsSlice';
import { isCartBarOpenSelector } from '../components/Cart/CartSlice/selectors/isCartBarOpenSelector';
import Home from '../pages/Home';
import ProductPage from '../pages/ViewProduct';
import Checkout from '../pages/Checkout';

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(getProductsData());
  }, []);

  const isCartBarOpen = useSelector(isCartBarOpenSelector);
  return (
    <>
      <GlobalStyle canScroll={isCartBarOpen} />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/Product/:id"
            exact
            component={ProductPage}
          /><Route
            path="/checkout"
            exact
            component={Checkout}
          />
      
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
