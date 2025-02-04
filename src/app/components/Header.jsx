"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import LinkComponent from './Link';  
import Link from 'next/link';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLinkPage, setShowLinkPage] = useState(false);

  const handleWallIdClick = () => {
    setShowLinkPage(true); 
  };

  return (
    <>
      <nav className="bg-[#4285f4]">
        {/* Desktop Navbar */}
        <div className="navbar ubuntu-bold text-neutral-content bg-[#4285f4] px-4 sm:px-8 py-3 flex justify-between items-center">

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
            <span className="cursor-pointer hover:text-gray-300">
              <Link  href="/dashboard" className="text-white hover:no-underline">
              Research
              </Link>
              </span>
              <span className="cursor-pointer hover:text-gray-300">
            <Link  href="/newsroom" className="text-white hover:no-underline">
            Newsroom
              </Link>
              </span>

              

            <span className="cursor-pointer hover:text-gray-300">
            <button className="btn btn-active btn-ghost">SignUp</button>
            </span>

            
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
            <span className="py-2 cursor-pointer hover:text-gray-300">
            <Link  href="/dashboard" className="text-white hover:no-underline">
              Research
              </Link>
            </span>
            <span className="py-2 cursor-pointer hover:text-gray-300">
            <Link  href="/newsroom" className="text-white hover:no-underline">
            Newsroom
              </Link>
            </span>
            <span className="py-2 cursor-pointer hover:text-gray-300">
            <button className="btn btn-active btn-ghost">SignUp</button>
            </span>
          </div>
        )}
      </nav>

      {showLinkPage && <LinkComponent />}
    </>
  );
};

export default Header;
