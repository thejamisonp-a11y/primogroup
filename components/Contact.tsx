
import React, { useState } from 'react';
import Button from './Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-primo-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primo-blue">Start Your Project</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to dive in? Contact us today for a free, no-obligation consultation.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 text-slate-700">
            <h3 className="text-2xl font-bold text-primo-blue">Contact Details</h3>
            <p className="text-lg">
              Have a question or want to discuss your project? Reach out to us through phone, email, or by filling out the form. We look forward to hearing from you.
            </p>
            <div className="space-y-4">
              <a href="tel:+61499613240" className="flex items-center group">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primo-blue group-hover:text-primo-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="ml-3 text-lg font-semibold group-hover:text-primo-blue transition-colors">+61 499 613 240</span>
              </a>
              <a href="mailto:andrea@primogroup.net.au" className="flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primo-blue group-hover:text-primo-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="ml-3 text-lg font-semibold group-hover:text-primo-blue transition-colors">andrea@primogroup.net.au</span>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-slate-700 font-bold mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primo-blue" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-slate-700 font-bold mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primo-blue" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-700 font-bold mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primo-blue"
                  placeholder="Tell us about your dream pool..."
                ></textarea>
              </div>
              <div className="text-center">
                <Button type="submit">Send Inquiry</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
