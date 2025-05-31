import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the menu
import logo from '/assets/logo.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#9B6C90] to-[#F2F2F2]">
  
      <div className="flex items-center space-x-3">
        <img src={logo} className="w-16" alt="Logo" />
        <h1 className="font-audiowide text-white text-xl">ALPINE VERGE</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-black font-audiowide hover:text-[#7226ff] transition-colors duration-300">Home</a>
        <a href="#" className="text-black font-audiowide hover:text-[#7226ff] transition-colors duration-300">About</a>
        <a href="#" className="text-black font-audiowide hover:text-[#7226ff] transition-colors duration-300">Services</a>
        <a href="#" className="text-black font-audiowide hover:text-[#7226ff] transition-colors duration-300">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle Icons */}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#010030] shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-5">
            <li><a href="#" className="text-white font-audiowide hover:text-[#7226ff]">Home</a></li>
            <li><a href="#" className="text-white font-audiowide hover:text-[#7226ff]">About</a></li>
            <li><a href="#" className="text-white font-audiowide hover:text-[#7226ff]">Services</a></li>
            <li><a href="#" className="text-white font-audiowide hover:text-[#7226ff]">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
