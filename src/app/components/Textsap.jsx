"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollingText = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { x: "100%" }, // Start off-screen (right)
        {
          x: "-100%", // Move to the left
          duration: 3,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 100%", // Trigger when it enters viewport
            end: "top 20%",
            scrub: 2, // Smooth animation while scrolling
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-[30vh] flex flex-col justify-center items-center">
      {/* Text Strip */}
      <div className="h-[80px] w-full overflow-hidden flex flex-col items-center gap-4">
        {["Welcome to HckerdsVsdf", "loremloremlreorme", "asascaefwrefwscsadc"].map(
          (text, index) => (
            <h1
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className="text-white text-2xl font-bold whitespace-nowrap"
            >
              {text}
            </h1>
          )
        )}
      </div>
    </div>
  );
};

export default ScrollingText;
