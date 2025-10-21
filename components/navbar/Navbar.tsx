import React, { useState } from 'react';
import { SearchIcon, BellIcon, MenuIcon, XIcon } from '../icons/Icons';

interface NavbarProps {
  onSearchClick: () => void;
  navigate: (page: 'home' | 'about' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchClick, navigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (page: 'home' | 'about' | 'contact') => {
    navigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative sticky top-7 z-50 mx-4 md:mx-10 my-5 rounded-full bg-white/10 backdrop-blur-2xl shadow-xl shadow-black/30 ring-1 ring-white/20 transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          <h1
            className="text-xl md:text-2xl font-extrabold text-green-400 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate('home')}
          >
            promptVerse
          </h1>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigate('home')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => navigate('about')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About Us
            </button>
            <button
              onClick={() => navigate('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onSearchClick}
            aria-label="Search"
            className="p-2 rounded-full hover:bg-white/10 hover:scale-105 transition-all"
          >
            <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
          </button>

          <button className="relative p-2 rounded-full hover:bg-white/10 hover:scale-105 transition-all">
            <BellIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-900"></span>
          </button>

          <div className="hidden sm:flex w-10 h-10 rounded-full bg-green-600 items-center justify-center font-bold text-lg text-white shadow-md shadow-green-500/20">
            JV
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6 text-gray-300" />
            ) : (
              <MenuIcon className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full mt-2 overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 bg-white/10 backdrop-blur-2xl ring-1 ring-white/20 rounded-3xl shadow-xl shadow-black/30 transition-all">
          <nav className="flex flex-col items-center p-5 space-y-3">
            <button
              onClick={() => handleMobileNavClick('home')}
              className="w-full text-center py-3 text-lg text-gray-200 hover:bg-white/10 rounded-xl transition-all"
            >
              Home
            </button>
            <button
              onClick={() => handleMobileNavClick('about')}
              className="w-full text-center py-3 text-lg text-gray-200 hover:bg-white/10 rounded-xl transition-all"
            >
              About Us
            </button>
            <button
              onClick={() => handleMobileNavClick('contact')}
              className="w-full text-center py-3 text-lg text-gray-200 hover:bg-white/10 rounded-xl transition-all"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;