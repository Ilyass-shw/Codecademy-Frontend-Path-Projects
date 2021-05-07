import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import NavBar from '../components/NavBar/NavBar';
import { getItemsData } from '../components/Items/ItemsSlice';
// import { useDispatch } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  useEffect(() => {
    // const dispatch = useDispatch();
    // dispatch(getItemsData());
    store.dispatch(getItemsData())
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <h1>wiyééé</h1>
      </BrowserRouter>
    </>
  );
};

export default App;
