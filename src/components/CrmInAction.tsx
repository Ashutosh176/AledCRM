import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Screenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      title: "Deals Pipeline",
      description: "Visual Kanban boards for managing your sales pipeline",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      title: "Contact Management",
      description: "Comprehensive contact profiles with interaction history",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      title: "Calendar Integration",
      description: "Seamless calendar sync with automated scheduling",
      image: "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      title: "Email Integration",
      description: "Built-in email client with conversation tracking",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time insights and performance metrics",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-black px-4 text-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 te">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-white">
            See ALED CRM in Action
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Explore our intuitive interface and powerful features through these screenshots
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
    <div 
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {screenshots.map((screenshot, index) => (
        <div key={index} className="w-full flex-shrink-0 relative">
          <img 
            src={screenshot.image} 
            alt={screenshot.title}
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-bold mb-1">{screenshot.title}</h3>
            <p className="text-base opacity-90">{screenshot.description}</p>
          </div>
        </div>
      ))}
    </div>

    <button 
      onClick={prevSlide}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>

    <button 
      onClick={nextSlide}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>

  <div className="flex justify-center mt-4 space-x-2">
    {screenshots.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-2.5 h-2.5 rounded-full transition-colors ${
          index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      />
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Screenshots;