import React from 'react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primo-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={LOGO_URL} alt="Primo Pools Logo" className="h-12 w-auto mb-4" />
            <p className="text-sm text-white/80">Pool Refurbishment & Renovation Specialists</p>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Pool Resurfacing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pool Renovation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Structural Repairs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Finish Upgrades</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a href="tel:+61499613240" className="hover:text-white transition-colors">+61 499 613 240</a>
              </li>
              <li>
                <a href="mailto:andrea@primogroup.net.au" className="hover:text-white transition-colors">andrea@primogroup.net.au</a>
              </li>
              <li>ABN: 46 684 104 934</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Primo Pools. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
