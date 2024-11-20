import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex gap-10 sm:justify-between justify-center p-5 items-center">
        <div className="text-2xl font-bold">G & K</div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-gray-700 hover:text-gray-900">Home</a></li>
          <li><a href="#venue" className="text-gray-700 hover:text-gray-900">Venue</a></li>
          <li><a href="#relatives" className="text-gray-700 hover:text-gray-900">Relatives</a></li>
          <li><a href="#date" className="text-gray-700 hover:text-gray-900">Date</a></li>
          <li>
            <a href="tel:+919058811318" className="text-white font-semibold bg-teal-400 hover:bg-teal-600 px-4 py-2 rounded-md">Contact</a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 absolute w-full left-0 top-16">
          <ul className="space-y-4">
            <li><a href="#home" className="text-gray-700 hover:text-gray-900 block">Home</a></li>
            <li><a href="#date" className="text-gray-700 hover:text-gray-900 block">Date</a></li>
            <li><a href="#relatives" className="text-gray-700 hover:text-gray-900 block">Relatives</a></li>
            <li><a href="#venue" className="text-gray-700 hover:text-gray-900 block">Venue</a></li>
            <li>
              <a href="tel:+919058811318" className="text-white font-semibold bg-teal-400 hover:bg-teal-600 px-4 py-2 rounded-md">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;