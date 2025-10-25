
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primo-blue">Our Expertise</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a complete range of services to bring your dream pool to life and keep it sparkling for years to come.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg text-center border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
