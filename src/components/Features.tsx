import React from 'react';
import { 
  Users, 
  BarChart3, 
  Calendar, 
  Mail, 
  Phone, 
  Target,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Centralize all customer information, track interactions, and maintain detailed contact profiles with custom fields and tags.',
      color: 'orange'
    },
    {
      icon: BarChart3,
      title: 'Sales Pipeline',
      description: 'Visualize your sales process, track deals through stages, and forecast revenue with advanced analytics.',
      color: 'emerald'
    },
    {
      icon: Calendar,
      title: 'Task & Activity Tracking',
      description: 'Schedule meetings, set reminders, and track all customer touchpoints to never miss an opportunity.',
      color: 'amber'
    },
    {
      icon: Mail,
      title: 'Email Integration',
      description: 'Sync your email, track opens and clicks, and manage email campaigns directly from your CRM.',
      color: 'purple'
    },
    {
      icon: Phone,
      title: 'Call Management',
      description: 'Log calls automatically, record conversations, and track communication history with integrated VoIP.',
      color: 'pink'
    },
    {
      icon: Target,
      title: 'Lead Scoring',
      description: 'Automatically score leads based on behavior and engagement to prioritize your sales efforts.',
      color: 'indigo'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Create custom workflows to automate repetitive tasks and ensure consistent follow-up processes.',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption, role-based access control, and compliance standards.',
      color: 'red'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Support for multiple languages and currencies to manage global customer relationships.',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      orange: 'from-orange-500/20 to-orange-400/20 text-orange-500',
      emerald: 'from-emerald-500/20 to-emerald-400/20 text-emerald-500',
      amber: 'from-amber-500/20 to-amber-400/20 text-amber-500',
      purple: 'from-purple-500/20 to-purple-400/20 text-purple-500',
      pink: 'from-pink-500/20 to-pink-400/20 text-pink-500',
      indigo: 'from-indigo-500/20 to-indigo-400/20 text-indigo-500',
      red: 'from-red-500/20 to-red-400/20 text-red-500',
      teal: 'from-teal-500/20 to-teal-400/20 text-teal-500'
    };
    return colorMap[color] || colorMap.orange;
  };

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Everything You Need to Grow Your Business
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive CRM platform provides all the tools and features you need 
            to manage customer relationships, streamline sales processes, and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-r ${getColorClasses(feature.color)} p-4 rounded-xl mb-6 inline-block group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;