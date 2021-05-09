import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './App.component';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { getItemsData } from '../components/Products/ProductsSlice';
// import { useAppDispatch } from '../helpers/hooks';
import store from './store';
import { useSelector } from 'react-redux';
import { isBarOpenSelector } from '../components/CartSlice/CartSlice';

const App: React.FC = () => {
  useEffect(() => {
    // const dispatch= useAppDispatch()
    // dispatch(getItemsData());
    store.dispatch(getItemsData());
  }, []);

  const isCartBarOpen = useSelector(isBarOpenSelector);
  return (
    <>
      <GlobalStyle canScroll={isCartBarOpen} />
      <BrowserRouter>
        <NavBar />
        <h1>wiyééé</h1>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
