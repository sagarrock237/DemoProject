import React, { useContext } from 'react';
import { AppContext } from './Contexts';
import Search from './Search';
import Movies from './Movies';

const Home = () => {

  return (
    <div calss="bg-black">
      <Search></Search>
      <Movies></Movies>
      
    </div>
  );
};

export default Home;