import React, { useEffect, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    message:
      'Implementation was seamless, and the custom fields feature lets us track exactly what matters to our business.',
    name: 'Lisa Thompson',
    position: 'Operations Director at InnovateCorp',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    message:
      'ALED CRM has transformed how we manage leads. The intuitive interface and automation features save us countless hours each week.',
    name: 'Michael Rivera',
    position: 'Sales Manager at BrightFuture',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    message:
      'The integration with our existing tools was quick and easy. We saw improved team collaboration from day one.',
    name: 'Sofia Perez',
    position: 'CRM Specialist at MarketWise',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    message:
      'We appreciate the responsive support team and constant improvements. Highly recommend ALED CRM!',
    name: 'Rahul Mehta',
    position: 'Business Analyst at InsightPro',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    message:
      'From lead generation to customer retention, ALED CRM covers everything we need. Our revenue has grown significantly.',
    name: 'Emily Zhang',
    position: 'Director of Sales at VisionTech',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-black px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Sales Teams Worldwide</h2>
        <p className="text-gray-300 mb-10">See what our customers have to say about their experience with ALED CRM</p>

        <div className="relative bg-white rounded-xl shadow-lg px-8 py-10">
          <Quote className="h-8 w-8 text-blue-600 mb-4 mx-auto" />
          <p className="text-xl font-medium text-gray-800 mb-6">"{testimonials[index].message}"</p>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-500" />
            ))}
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={testimonials[index].image} alt={testimonials[index].name} className="w-10 h-10 rounded-full" />
            <div className="text-left">
              <p className="font-semibold text-gray-900">{testimonials[index].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[index].position}</p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              ></span>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-white">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-500">4.9/5</p>
            <p className="text-gray-300">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-500">2,500+</p>
            <p className="text-gray-300">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-500">99.9%</p>
            <p className="text-gray-300">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-500">24/7</p>
            <p className="text-gray-300">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
