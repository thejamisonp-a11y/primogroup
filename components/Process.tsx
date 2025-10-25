import React from 'react';
import Button from './Button';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'We evaluate your pool\'s current condition, structure, and your vision for the transformation.'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Our team creates a detailed plan and timeline, ensuring transparent communication every step of the way.'
    },
    {
      number: '03',
      title: 'Restoration',
      description: 'Expert craftsmanship brings your pool back to life with premium materials and precision work.'
    },
    {
      number: '04',
      title: 'Completion',
      description: 'Final inspections and finishing touches ensure your pool exceeds expectations and stands the test of time.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-light italic text-primo-blue mb-4">
            Our Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From assessment to completion, we guide you through every step of transforming your pool back to its former glory—and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="group text-center">
              <div className="text-6xl font-playfair font-light italic text-primo-accent mb-4 group-hover:text-primo-blue transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-primo-blue mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact">
            <Button>Start Your Transformation</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
