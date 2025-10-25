
import React from 'react';
import type { NavLink, Service, Testimonial } from './types';

export const LOGO_URL = 'data:image/png;base64,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';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.485-6.515l-1.414-1.414M6.929 17.071l-1.414 1.414m11.571 0l-1.414-1.414M6.929 6.929L5.515 5.515" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const WrenchScrewdriverIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.471-2.471a.563.563 0 01.8 0l1.285 1.285a.563.563 0 010 .8l-2.471 2.471m-2.885-2.885l-3.35 3.35a2.625 2.625 0 01-3.712-3.712l3.35-3.35m2.885-2.885l.286-.286a2.625 2.625 0 00-3.712-3.712l-.286.286m3.712 3.712z" />
  </svg>
);

const LifebuoyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 6.343l-1.414 1.414m-9.9 9.9l1.414-1.414M6.343 6.343l1.414 1.414m9.9 9.9l-1.414 1.414" />
    </svg>
);

export const SERVICES: Service[] = [
  {
    icon: <CompassIcon />,
    title: 'Custom Pool Design',
    description: 'We collaborate with you to design a unique pool that perfectly fits your landscape and lifestyle. From modern geometric to natural freeform.',
  },
  {
    icon: <WrenchScrewdriverIcon />,
    title: 'Expert Construction',
    description: 'Our master builders use the highest quality materials and techniques to bring your vision to life, ensuring a durable and beautiful result.',
  },
  {
    icon: <LifebuoyIcon />,
    title: 'Maintenance & Care',
    description: 'Keep your investment pristine with our comprehensive maintenance plans, covering everything from chemical balancing to equipment checks.',
  },
];

export const GALLERY_IMAGES: string[] = [
    'https://i.imgur.com/8QzL5Jz.jpeg',
    'https://i.imgur.com/So2A73N.jpeg',
    'https://i.imgur.com/5N2p0aJ.jpeg',
    'https://i.imgur.com/S1n2sJe.jpeg',
    'https://i.imgur.com/c4pS5Wl.jpeg',
    'https://i.imgur.com/1dUS2hE.jpeg',
    'https://i.imgur.com/1o2z3z1.jpeg',
    'https://i.imgur.com/0o3L2o5.jpeg',
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Primo Pools transformed our backyard into a paradise. The attention to detail and craftsmanship were second to none. We couldn't be happier!",
        author: 'The Johnson Family',
        location: 'Scarsdale, NY'
    },
    {
        quote: "From the initial design consultation to the final splash, the entire process was seamless and professional. A truly first-class experience.",
        author: 'Maria Rodriguez',
        location: 'Greenwich, CT'
    },
    {
        quote: "The quality of work is outstanding. Our pool is not only beautiful but also built to last. Highly recommend their dedicated team.",
        author: 'David Chen',
        location: 'Alpine, NJ'
    }
];