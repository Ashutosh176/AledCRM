import React from 'react';
import { ArrowRight, BarChart3, Users, Calendar } from 'lucide-react';

interface HeroProps {
  onSignupClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignupClick }) => {
  const scrollToDemoSection = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
<section className="pt-40 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-[95rem] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Aled CRM
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Streamline your customer relationships, boost sales performance, and grow your business 
            with our powerful, intuitive CRM platform designed for modern teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onSignupClick}
              className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-orange-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              Book Live Demo
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={scrollToDemoSection}
              className="text-orange-500 font-semibold text-lg hover:text-orange-400 transition-colors duration-200 flex items-center gap-2"
            >
              Watch Demo
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors duration-200">
                <div className="w-0 h-0 border-l-[8px] border-l-orange-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </button>
          </div>

          {/* Feature Icons */}
<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-800">
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-400/20 p-4 rounded-xl mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Contact Management</h3>
              <p className="text-gray-400 text-center">Organize and track all your customer interactions in one place</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-800">
              <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 p-4 rounded-xl mb-4">
                <BarChart3 className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sales Analytics</h3>
              <p className="text-gray-400 text-center">Get insights into your sales performance with detailed reports</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-800">
              <div className="bg-gradient-to-r from-amber-500/20 to-amber-400/20 p-4 rounded-xl mb-4">
                <Calendar className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Task Automation</h3>
              <p className="text-gray-400 text-center">Automate repetitive tasks and focus on what matters most</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
