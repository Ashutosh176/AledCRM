import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', teamSize: '', message: '' });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id = "Contact" className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-black px-4 text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Ready to Transform Your Sales Process?</h2>
          <p className="text-lg text-gray-100">Schedule a personalized demo and see how ALED CRM can boost your team's productivity</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div className="bg-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white">What You'll Get:</h3>
            <ul className="text-gray-100 space-y-4 list-disc list-inside">
              <li>30-minute personalized demo</li>
              <li>Custom setup recommendations</li>
              <li>Q&A with our CRM experts</li>
              <li>Free trial setup assistance</li>
              <li>Implementation roadmap</li>
              <li>ROI calculation for your business</li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 text-center">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-yellow-300 font-bold text-xl">📅</p>
                <p className="mt-2 text-sm font-medium text-white">Flexible<br />Schedule</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-yellow-300 font-bold text-xl">⏱️</p>
                <p className="mt-2 text-sm font-medium text-white">30 Min<br />Duration</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-yellow-300 font-bold text-xl">🧑‍💼</p>
                <p className="mt-2 text-sm font-medium text-white">Expert<br />Guidance</p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Schedule Your Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-1 text-sm font-medium text-white">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-white">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-white">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-white">Team Size</label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-white">Tell us about your needs (optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                  placeholder="What challenges are you looking to solve?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200"
              >
                Schedule My Demo
              </button>
              <p className="text-sm text-gray-600 mt-2 text-white">
                We’ll contact you within 24 hours to schedule your personalized demo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
