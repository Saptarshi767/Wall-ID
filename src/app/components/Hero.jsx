import React from 'react'

const Hero = () => {
    return (
      <section className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
            <source src="/background.mp4" type="video/mp4" />
          welcome
        </video>
        <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-4xl text-white font-bold">
            Welcome to Our Website
          </h1>
          <p className="mt-4 text-lg text-white">
            Hackers Cry u fry
          </p>
        </div>
      </section>
    );
  };
  
  export default Hero;
