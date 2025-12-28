"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-purple-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="font-bold text-xl">Bitlinks</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/shorten" className="hover:underline">Shorten</Link>
       
          <Link href="/shorten" className="p-2 rounded-xl bg-purple-500">Try Now</Link>
         
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-purple-600 z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col mt-16 gap-4 px-6">
          <Link href="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/shorten" className="hover:underline" onClick={() => setMenuOpen(false)}>Shorten</Link>
        
          <Link href="/shorten" className="p-2 rounded-xl bg-purple-500 text-center" onClick={() => setMenuOpen(false)}>Try Now</Link>
          
        </div>
      </div>

   
    </nav>
  );
};

export default Navbar;
