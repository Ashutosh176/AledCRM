import React from 'react';
import { Check, Star } from 'lucide-react';

interface PricingProps {
  onSignupClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onSignupClick }) => {
  const plans = [
    {
      name: 'Starter',
      price: 19,
      period: 'per user/month',
      description: 'Perfect for small teams getting started with CRM',
      features: [
        'Up to 1,000 contacts',
        'Basic contact management',
        'Email integration',
        'Basic reporting',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 49,
      period: 'per user/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 10,000 contacts',
        'Advanced contact management',
        'Email & phone integration',
        'Advanced reporting & analytics',
        'Workflow automation',
        'API access',
        'Priority support',
        'Custom fields & tags'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'per user/month',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited contacts',
        'Full CRM suite',
        'Advanced integrations',
        'Custom reporting',
        'Advanced automation',
        'Multi-language support',
        'Dedicated account manager',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial 
            with no credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-orange-500 scale-105' : 'border border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <button
                  onClick={onSignupClick}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-700 hover:to-orange-600 shadow-lg hover:shadow-xl'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Start Free Trial
                </button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="bg-emerald-500/20 rounded-full p-1 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-emerald-500" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need a custom solution? Enterprise customers get volume discounts.
          </p>
          <button className="text-orange-500 font-semibold hover:text-orange-400 transition-colors duration-200">
            Contact Sales →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;