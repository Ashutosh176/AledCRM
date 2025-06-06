import React from 'react';
import { Award, Users2, Globe, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users2, value: '50K+', label: 'Active Users' },
    { icon: Globe, value: '120+', label: 'Countries' },
    { icon: Award, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '150%', label: 'Avg Growth' }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built for Modern Businesses
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Aled CRM was founded with a simple mission: to make customer relationship 
              management accessible and powerful for businesses of all sizes. We believe 
              that great customer relationships are the foundation of business success.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our platform combines intuitive design with powerful features, helping 
              thousands of businesses worldwide streamline their sales processes, 
              improve customer satisfaction, and drive sustainable growth.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-orange-500/20 to-orange-400/20 p-3 rounded-xl inline-block mb-3">
                      <Icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Aled CRM?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                    <Users2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">User-Centric Design</h4>
                    <p className="text-white/90">Intuitive interface that your team will love to use</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Scalability</h4>
                    <p className="text-white/90">Grows with your business from startup to enterprise</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Award-Winning Support</h4>
                    <p className="text-white/90">24/7 customer support that truly cares about your success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;