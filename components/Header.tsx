import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primo-blue/95 border-b border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="block">
            <img src={LOGO_URL} alt="Primo Pools Logo" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-white transition-colors">
              About
            </a>
            <a href="#gallery" className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#process" className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-white transition-colors">
              Process
            </a>
            <a href="#contact" className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#contact"><Button className="ml-4">Start Your Project</Button></a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
        <nav className="bg-primo-blue/98 flex flex-col py-4 space-y-3 px-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-white py-2">
            About
          </a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-white py-2">
            Gallery
          </a>
          <a href="#process" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-white py-2">
            Process
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-white py-2">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
