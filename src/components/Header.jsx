import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ onScrollToAcercade, onScrollToCentro }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-2 md:py-4 rounded-lg">
  <nav className="bg-white border-gray-200">
    <div className="flex flex-wrap items-center justify-between mx-auto px-4 md:px-6 lg:px-8">
      <a href="/" className="flex items-center space-x-3">
        <img src="/logo2.webp" className="h-16 md:h-20 lg:h-16" alt="Sinty Quibdó" />
      </a>
      <button
        onClick={toggleMenu}
        className="inline-flex items-center w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}
        id="navbar-default"
      >
        <ul className="font-semibold flex flex-col p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li>
            <button
              onClick={onScrollToAcercade} 
              className="block py-1 px-2 text-[#294BA1] rounded hover:text-[#0F4767]"
            >
              Sinty Quibdó
            </button>
          </li>
          <li>
            <button
              onClick={onScrollToCentro} 
              className="block py-1 px-2 text-[#294BA1] rounded hover:text-[#0F4767]"
            >
              Agrega tu cancha
            </button>
          </li>
          <li>
            <Link
              to="/login"
              className="block py-1 px-2 text-[#294BA1] rounded hover:text-[#0F4767]"
            >
              <img src="/login.png" className="h-8 md:h-10 lg:h-8" alt="Sinty Quibdó" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>


  );
}

export default Header;
