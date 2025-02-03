import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import Grid from './components/Grid';
// import FAQ from './components/FAQ';

const Page = () => {
  return (
    <div>
      <Header /> {/* Header will handle the conditional rendering of LinkComponent */}
      <Hero />
      {/* <Grid />
      <FAQ /> */}
    </div>
  );
};

export default Page;
