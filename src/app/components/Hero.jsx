import React from 'react';
import Arduino from './Arduino.jsx'; 

const Hero = () => {
  return (
    <div className="bg-black text-center justify-center flex text-white relative">
      <img src="belownav.svg" alt="" className="absolute top-[-20px]" /> {/* Adjust top position */}
      <Arduino/>
    </div>
  );
}

export default Hero;
