import { Crown, Check } from 'lucide-react';
import Navbar from '../components/Navbar';

const Plans = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      features: [
        '40 min meetings',
        'Up to 100 participants',
        'Basic security',
        'Mobile apps'
      ],
      color: 'from-gray-400 to-gray-500',
      popular: false
    },
    {
      name: 'Pro',
      price: '14.99',
      features: [
        'Unlimited meetings',
        'Up to 300 participants',
        'Advanced security',
        'Recording & transcripts',
        'Custom branding',
        'Priority support'
      ],
      color: 'from-amber-400 to-yellow-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '29.99',
      features: [
        'Everything in Pro',
        'Up to 1000 participants',
        'Dedicated support',
        'Custom integration',
        'SLA guarantee',
        'Advanced analytics'
      ],
      color: 'from-purple-400 to-pink-500',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-gray-300">Flexible Pricing</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Choose Your Perfect Plan
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl">Upgrade anytime, cancel anytime</p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 sm:p-8 bg-white/5 border rounded-2xl transition transform hover:scale-105 ${
                  plan.popular ? 'border-amber-400 bg-white/10' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-linear-to-r from-amber-400 to-yellow-500 text-black text-sm font-semibold rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className={`w-12 h-12 bg-linear-to-br ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Crown className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 sm:py-4 rounded-xl font-semibold transition ${
                  plan.popular
                    ? 'bg-linear-to-r from-amber-400 to-yellow-500 text-black hover:shadow-xl hover:shadow-amber-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;