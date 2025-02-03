"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu
import LinkComponent from './Link';  // Correct default import


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLinkPage, setShowLinkPage] = useState(false);

  const handleWallIdClick = () => {
    setShowLinkPage(true); // Show the Link component when wall-Id is clicked
  };

  return (
    <>
      <nav className="bg-[#4285f4]">
        {/* Desktop Navbar */}
        <div className="navbar ubuntu-bold text-neutral-content bg-[#4285f4] px-4 sm:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <button className="btn btn-ghost text-xl text-white">
            <img className="w-34 h-14" src="/logonav.svg" alt="Logo" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex justify-evenly navbar ubuntu-bold text-white items-center space-x-6">
            <span
              className="cursor-pointer hover:text-gray-300"
              onClick={handleWallIdClick}
            >
              Wall-ID W1
            </span>
            <span className="cursor-pointer hover:text-gray-300">Research</span>
            <span className="cursor-pointer hover:text-gray-300">Support</span>
            <span className="cursor-pointer hover:text-gray-300">Newsroom</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center bg-[#4285f4] py-4 space-y-2">
            <span className="py-2 cursor-pointer hover:text-gray-300">Wall-ID W1</span>
            <span className="py-2 cursor-pointer hover:text-gray-300">Research</span>
            <span className="py-2 cursor-pointer hover:text-gray-300">Support</span>
            <span className="py-2 cursor-pointer hover:text-gray-300">Newsroom</span>
          </div>
        )}
      </nav>

      {/* Conditionally render the LinkComponent when wall-Id is clicked */}
      {showLinkPage && <LinkComponent />}
    </>
  );
};

export default Header;
