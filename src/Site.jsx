import React from 'react';
import NavBar from './sections/NavBar/NavBar'
import Propaganda from './sections/Principal/propaganda';
import Carrousel from './sections/Carousel/carrousel';
import Propaganda2 from './sections/Principal2/propaganda2';
import Carrousel2 from './sections/Carrousel2/carrousel2';
import Footer from './sections/Footer/footer';

const Site = () => {
  return (
    <>
      <NavBar/>
      <Propaganda/>
      <Carrousel/>
      <Propaganda2/>
      <Carrousel2/>
      <Footer/>
    </>
  );
}

export default Site;

