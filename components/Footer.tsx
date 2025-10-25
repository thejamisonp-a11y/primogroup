
import React from 'react';
import { NAV_LINKS, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primo-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src={LOGO_URL} alt="Primo Pools Logo" className="h-12 w-auto mb-2" />
            <p className="mt-2 text-primo-sand/80 max-w-sm">Crafting luxury swimming pools and outdoor living spaces with unparalleled quality and design.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg uppercase tracking-wider text-primo-sand">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={`footer-${link.name}`}>
                  <a href={link.href} className="hover:text-primo-sand transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg uppercase tracking-wider text-primo-sand">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-primo-sand/80">
              <li>
                <a href="tel:+61499613240" className="hover:text-primo-sand transition-colors">+61 499 613 240</a>
              </li>
              <li>
                <a href="mailto:andrea@primogroup.net.au" className="hover:text-primo-sand transition-colors">andrea@primogroup.net.au</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primo-light-blue/30 text-center text-sm text-primo-sand/60">
          <p>&copy; {new Date().getFullYear()} Primo Pools. All Rights Reserved. <br className="sm:hidden" /> ABN: 46 684 104 934</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
