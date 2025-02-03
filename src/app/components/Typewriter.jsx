'use client'
import React, { useState, useEffect } from "react";

const texts = ["Hackers Cry, You Just Tap & Buy!", "Explore awesome features.", "Join us today!"];

const Typewriter = () => {
  const [text, setText] = useState(""); // Stores the current text
  const [index, setIndex] = useState(0); // Tracks which text is being typed
  const [isDeleting, setIsDeleting] = useState(false); // Track if erasing
  const [charIndex, setCharIndex] = useState(0); // Position in the current string

  useEffect(() => {
    const currentText = texts[index];

    let typingSpeed = isDeleting ? 50 : 100; // Faster erase, slower type

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentText.length) {
        setText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
        return;
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length); // Move to next text
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <h1 className="text-7xl font-bold ubuntu-bold text-white">
      {text}
      <span className="animate-blink">|</span> {/* Blinking Cursor */}
    </h1>
  );
};

export default Typewriter;
