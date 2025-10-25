
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/luxury-pool/1920/1080')" }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wider mb-4 animate-fade-in-down">
          Primo Pools
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 animate-fade-in-up">
          Crafting Your Personal Oasis
        </p>
        <div className="animate-fade-in-up animation-delay-500">
           <a href="#contact"><Button>Get a Free Quote</Button></a>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.3s forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
