import React from 'react';

const PoolRestorationExperts: React.FC = () => {
  const expertise = [
    {
      title: "Years of Experience",
      description: "Trusted professionals with decades of combined experience."
    },
    {
      title: "Quality Craftsmanship",
      description: "Attention to detail and premium materials on every project."
    },
    {
      title: "Lasting Results",
      description: "Renovations built to last, backed by our quality guarantee."
    }
  ];

  return (
    <section className="bg-slate-800 text-slate-100 py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
          Pool Restoration Experts
        </h2>
        <p className="text-slate-400 mb-6 text-lg font-semibold">
          Years of Experience | Quality Craftsmanship | Lasting Results
        </p>
        <p className="text-slate-500 mb-8 max-w-3xl leading-relaxed">
          At Primo Group, we specialize in transforming tired, outdated, or damaged
          pools into stunning, modern outdoor spaces. With years of experience in
          pool refurbishment, resurfacing, and renovation, our expert team is
          dedicated to restoring the beauty, safety, and functionality of your
          swimming pool.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {expertise.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-700 rounded-lg p-4 shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoolRestorationExperts;
