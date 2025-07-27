import React from 'react';
import Hero from '../components/Hero';
import Product from '../components/Product';


const Home = ({ theme }) => {


  return (
    <div>
      <Hero theme={theme} />
      <Product />
    </div>
  );
};

export default Home;
