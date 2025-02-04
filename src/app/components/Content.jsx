"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollText = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRefs = useRef([]);

  const texts = ["🚀 Biometric Security", "🔐 NFC Authentication", "📜 Smart Contract"];

  useEffect(() => {
    if (window.innerWidth < 768) return; // Skip GSAP for mobile devices
    
    textRefs.current.forEach((el, index) => {
      let xValue = "20%";
      if (index === 1) xValue = "50%";
      if (index === 2) xValue = "120%";

      gsap.fromTo(
        el,
        { x: "-100%", opacity: 0 },
        {
          x: xValue,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-[100vh] flex flex-col items-start justify-center bg-[#4285f4] border space-y-10 px-10 overflow-hidden">
      {texts.map((text, index) => (
        <h1
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="text-white text-7xl font-bold" 
        >
          {text}
        </h1>
      ))}
       <img
          className="w-[408px] h-[458px]"
          // className='w-96'
          src="front.gif"
          alt=""
          style={{ position: "relative", bottom: "80px" }}
        />
    </div>
  );
};

export default ScrollText;
