import React, { useState, useEffect } from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const images = [
    'https://picsum.photos/3840/2160?random=1&t=' + Date.now(),
    'https://picsum.photos/3840/2160?random=2&t=' + Date.now(),
    'https://picsum.photos/3840/2160?random=3&t=' + Date.now(),
    'https://picsum.photos/3840/2160?random=4&t=' + Date.now(),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fade, setFade] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(prev => {
        if (prev < 1) {
          return prev + 0.02;
        } else {
          setCurrentImageIndex(prev => (prev + 1) % images.length);
          setNextImageIndex(prev => (prev + 1) % images.length);
          return 0;
        }
      });
    }, 70);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(0);
      setCurrentImageIndex(prev => (prev + 1) % images.length);
      setNextImageIndex(prev => (prev + 1) % images.length);
    }, 7000);

    if (fade > 0) return () => clearTimeout(timer);
    return () => clearTimeout(timer);
  }, [fade, images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white pt-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${images[currentImageIndex]}')`,
            opacity: 1 - fade
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${images[nextImageIndex]}')`,
            opacity: fade
          }}
        ></div>
      </div>

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
