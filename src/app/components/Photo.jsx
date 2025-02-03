'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Photo = () => {

  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 }, // Start invisible and slightly smaller
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%', // Adjust visibility trigger
          toggleActions: 'play none none reverse', // Play when scrolled in, reverse when scrolled out
        },
      }
    );
  }, []);


  return (
    <section className="text-white body-font ubuntu-bold ">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="photo.png"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1
            ref={textRef}
            className="title-font font-extrabold sm:text-4xl mb-4 text-7xl text-blue-500 text-center"
          >
            Say goodbye to crypto theft and weak security – Wall-ID ensures every transaction is verified.
          </h1>
          {/* <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.
          </p> */}
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-all hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:py-4 hover:px-6">
              Get Started
            </button>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Photo;
