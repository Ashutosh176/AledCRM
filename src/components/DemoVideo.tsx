import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const DemoVideo = () => {
  const scrollToContact = () => {
    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="demo" className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-black px-4 text-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            See ALED CRM in Action
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto">
            Watch how our CRM transforms sales processes and boosts team productivity
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-blue-800 to-purple-800 flex items-center justify-center">
              <div className="text-center px-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">Product Demo Video</h3>
                <p className="text-white/80 text-sm">Click to play our comprehensive product walkthrough</p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-gray-800 text-sm">YouTube/Vimeo embed would go here</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={scrollToContact}
              className="group px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold text-base hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto "
            >
              <ExternalLink className="w-5 h-5" />
              Book Live Demo
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <p className="text-white/70 mt-4 text-sm">
              Get a personalized demo tailored to your business needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
