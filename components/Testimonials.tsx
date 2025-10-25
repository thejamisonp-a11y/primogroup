
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primo-blue">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We are proud to have built lasting relationships with our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-primo-blue text-white p-8 rounded-lg shadow-lg flex flex-col">
              <svg className="w-10 h-10 text-primo-light-blue mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.789 0l-2 4A1 1 0 008 8h4a1 1 0 00.894-1.447l-2-4zM10 18a1 1 0 001-1v-2a1 1 0 10-2 0v2a1 1 0 001 1zM20 10a10 10 0 11-20 0 10 10 0 0120 0zM12 9a1 1 0 10-2 0v5a1 1 0 102 0V9z"></path>
              </svg>
              <blockquote className="text-lg italic mb-6 flex-grow">"{testimonial.quote}"</blockquote>
              <footer className="mt-auto">
                <p className="font-bold text-xl">{testimonial.author}</p>
                <p className="text-primo-sand">{testimonial.location}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
