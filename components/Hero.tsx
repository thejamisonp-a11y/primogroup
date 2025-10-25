import React, { useState, useEffect } from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=3840&h=2160&fit=crop',
    'https://images.unsplash.com/photo-1598696114155-b0b4c0e70b7b?w=3840&h=2160&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d3b?w=3840&h=2160&fit=crop',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=3840&h=2160&fit=crop',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
        setFade(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white pt-20 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${images[currentImageIndex]}')`,
          opacity: fade ? 0 : 1
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primo-blue/80 via-primo-blue/60 to-primo-blue/80"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      <div className="relative z-10 px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="inline-block rounded-full bg-primo-accent/80 text-primo-blue text-xs uppercase tracking-widest font-semibold px-6 py-2">
            Pool Refurbishment Specialists
          </span>
        </div>

        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-light italic text-white mb-4 leading-tight">
          Bring Your Pool Back to Life
        </h1>

        <p className="text-sm uppercase tracking-widest font-light text-white/90 mb-8">
          Expert Pool Renovation
        </p>

        <p className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your tired, outdated pool into a stunning modern oasis. Expert craftsmanship and premium materials guarantee lasting results.
        </p>

        <a href="#contact">
          <Button>Start Your Transformation</Button>
        </a>

        <div className="mt-16 flex justify-center items-center flex-col">
          <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-sm text-white/70 mt-2">Discover Your Pool's Potential</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
