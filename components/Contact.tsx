import React, { useState } from 'react';
import Button from './Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you shortly.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-light italic text-primo-blue mb-4">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to transform your pool? Get in touch with our team today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 mb-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primo-blue mb-4">Phone</h4>
              <a href="tel:+61499613240" className="text-xl font-semibold text-primo-blue hover:text-primo-accent transition-colors">
                +61 499 613 240
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primo-blue mb-4">Email</h4>
              <a href="mailto:andrea@primogroup.net.au" className="text-xl font-semibold text-primo-blue hover:text-primo-accent transition-colors">
                andrea@primogroup.net.au
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primo-blue mb-4">ABN</h4>
              <p className="text-xl font-semibold text-primo-blue">46 684 104 934</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-slate-700 font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primo-blue"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-slate-700 font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primo-blue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">Email</label>
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
              <div>
                <label htmlFor="phone" className="block text-slate-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primo-blue"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primo-blue"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="text-center">
              <Button type="submit" variant="primary">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
