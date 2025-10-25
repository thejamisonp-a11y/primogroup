import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primo-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-5xl lg:text-6xl font-light italic mb-6">
              Pool Restoration Experts
            </h2>

            <p className="text-sm uppercase tracking-widest font-semibold text-primo-accent mb-6">
              Years of Experience | Quality Craftsmanship | Lasting Results
            </p>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              At Primo Group, we specialize in transforming tired, outdated, or damaged pools into stunning, modern outdoor spaces. With years of experience in pool refurbishment, resurfacing, and renovation, our expert team is dedicated to restoring the beauty, safety, and functionality of your swimming pool.
            </p>

            <p className="text-base text-white/80 mb-8 leading-relaxed">
              Whether you're looking to upgrade your finishes, fix structural issues, or give your pool a complete makeover, we deliver high-quality craftsmanship and lasting results—on time and within budget.
            </p>

            <p className="text-lg text-primo-accent font-semibold">
              Let us help you fall in love with your pool all over again.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/seed/pool-led/400/400"
                alt="Pool with LED lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/seed/geometric-pool/400/400"
                alt="Geometric pool design"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/seed/luxury-pool-2/400/400"
                alt="Luxury pool design"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/seed/pool-modern/400/400"
                alt="Modern pool"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
