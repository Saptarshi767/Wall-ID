import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Install from './components/Install';
import Content from './components/Content';
import Photo from './components/Photo';
import Footer from './components/Footer';

const Page = () => {
  return (
    <div>
      <Header /> {/* Header will handle the conditional rendering of LinkComponent */}
      <Hero />
      <Content />
      <Install />
      <Photo />
      <Footer/>

      {/* <Grid />
      <FAQ /> */}
    </div>
  );
};

export default Page;
