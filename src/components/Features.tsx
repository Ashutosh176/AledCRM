import React from 'react';
import { 
  Kanban, 
  Users, 
  Package, 
  Calendar, 
  RefreshCcw, 
  Mail, 
  Filter, 
  Zap, 
  Phone, 
  FormInput, 
  Shield, 
  Webhook,
  Target,
  Clock
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Kanban className="w-8 h-8" />,
      title: "Deals Management",
      description: "Kanban boards with multiple customizable pipelines for visual deal tracking"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Contacts & Companies",
      description: "Comprehensive contact management with company hierarchies and relationships"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Products Module",
      description: "Complete product catalog with pricing, inventory, and quote generation"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Activities & Calendar",
      description: "Integrated calendar with activities, tasks, and smart reminders"
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: "Two-way Calendar Sync",
      description: "Seamless synchronization with Google Calendar and Outlook"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Built-in Email Client",
      description: "Native email integration with Gmail, Outlook, and IMAP support"
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Advanced Filters",
      description: "Powerful filtering and field mapping for precise data management"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Workflows",
      description: "Smart automation to streamline repetitive tasks and processes"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "In-App Calling",
      description: "Built-in calling system with call logs and VOIP integration"
    },
    {
      icon: <FormInput className="w-8 h-8" />,
      title: "Web Forms",
      description: "Customizable lead capture forms with automatic CRM integration"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Roles & Permissions",
      description: "Granular access control with custom fields and user management"
    },
    {
      icon: <Webhook className="w-8 h-8" />,
      title: "API & Webhooks",
      description: "Comprehensive API access with webhook support for integrations"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "SLA Automation",
      description: "Service level agreement tracking with automated escalations"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "1-Click Updates",
      description: "Instant system updates and patches with zero downtime"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-900/50 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Built for Sales Teams
          </div>
          <h2 className="text-4xl md:text-5xl font-bold  text-white mb-6">
            Everything You Need to Close More Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive CRM features designed to streamline your sales process, 
            improve team collaboration, and accelerate revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6  rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center ">
          <div className=" bg-gray-900 from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Powerful Integrations
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with your favorite tools and services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                Zapier
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                Telecorce VOIP
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                WhatsApp (Doublick API)
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                Google Workspace
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                Microsoft 365
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;