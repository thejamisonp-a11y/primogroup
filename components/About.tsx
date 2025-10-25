
import React from 'react';

const CheckBadgeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primo-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/about-pool/600/800" 
              alt="A stunning modern pool designed by Primo Pools" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-primo-blue mb-6">Transforming Backyards into Sanctuaries</h2>
            <p className="text-lg text-slate-600 mb-6">
              At Primo Pools, we specialize in transforming tired, outdated, or damaged pools into stunning, modern outdoor spaces. With years of experience in pool refurbishment, resurfacing, and renovation, our expert team is dedicated to restoring the beauty, safety, and functionality of your swimming pool.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Whether you're looking to upgrade your finishes, fix structural issues, or give your pool a complete makeover, we deliver high-quality craftsmanship and lasting results—on time and within budget. Let us help you fall in love with your pool all over again.
            </p>
            <div className="space-y-4">
                <div className="flex items-center">
                    <CheckBadgeIcon />
                    <span className="ml-3 font-semibold text-slate-700 text-lg">15+ Years of Experience</span>
                </div>
                <div className="flex items-center">
                    <CheckBadgeIcon />
                    <span className="ml-3 font-semibold text-slate-700 text-lg">Award-Winning Designs</span>
                </div>
                <div className="flex items-center">
                    <CheckBadgeIcon />
                    <span className="ml-3 font-semibold text-slate-700 text-lg">Commitment to Quality & Safety</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
