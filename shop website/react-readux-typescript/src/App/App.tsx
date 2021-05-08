import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { getItemsData } from '../components/Products/ProductsSlice';
// import { useAppDispatch } from '../helpers/hooks';
import store from './store';

const App: React.FC = () => {
  useEffect(() => {
    // const dispatch= useAppDispatch()
    // dispatch(getItemsData());
    store.dispatch(getItemsData())
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <h1>wiyééé</h1>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
