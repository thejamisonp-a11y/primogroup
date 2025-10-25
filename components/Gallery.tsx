import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-light italic text-primo-blue mb-4">Our Portfolio</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our collection of exceptional pool transformations, from complete renovations to custom installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg h-64">
              <img
                src={src}
                alt={`Primo Pools project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primo-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-center font-semibold uppercase tracking-wider text-sm">View Project</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-slate-600">
          Transform your pool with expert refurbishment services
        </p>
      </div>
    </section>
  );
};

export default Gallery;
