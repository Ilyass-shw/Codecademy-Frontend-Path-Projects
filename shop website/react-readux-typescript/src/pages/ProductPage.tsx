import React from 'react';
import { useParams } from 'react-router';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import ProductView from '../components/Products/ProductView/ProductView';

const Home: React.FC = () => {

  interface i {
    id?: string;
  }
  let Id;
  const { id } = useParams<i>();
  if (id) {
    Id = parseFloat(id);
  }
  return (
    <>
      <NavBar />
      <ProductView productId={Id} />
      <Footer />
    </>
  );
};

export default Home;
