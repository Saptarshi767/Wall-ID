'use client'
import React, { useRef, useEffect } from 'react';
import Typewriter from './Typewriter';
import Textsap from './Textsap';
import gsap from "gsap";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0"> {/* Ensure it renders properly */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/back3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center flex flex-col justify-center items-center text-white">
        <img src="belownav.svg" alt="" className="absolute top-[-20px]" />

        {/* Floating Image */}
        <img
          ref={imageRef}
          className="w-96"
          src="pi.png"
          alt=""
          style={{ position: "relative", top: "80px" }}
        />

        {/* Typewriter Effect */}
        <div className="mt-10 w-full pl-0 text-white text-left">
          <div className='w-1/3'>
          
          </div>
          
          <Typewriter />
        </div>


        {/* Additional Text */}
        <div className="mt-4 px-6 text-white text-center w-full sm:w-2/3">
          <Textsap />
        </div>
      </div>
    </section>
  );
}

export default Hero;
