import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, Crown } from 'lucide-react';

const PriceTagIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Loop */}
    <path d="M17 3.5C17 3.5 21 2.5 22.5 5C23.5 7 21.5 9 21.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Tag Body */}
    <path d="M20 11L12.5 3.5H4.5V11.5L12 19C12.8 19.8 14.2 19.8 15 19L20 14C20.8 13.2 20.8 11.8 20 11Z" fill="currentColor"/>
    {/* Dollar Sign (Cutout effect using card background color #0A0A0A) */}
    <path d="M10.5 9.5C10.5 8.9 11 8.5 11.5 8.5H12.5C13 8.5 13.5 8.9 13.5 9.5V10C13.5 10.6 13 11 12.5 11H11.5C11 11 10.5 11.4 10.5 12V12.5C10.5 13.1 11 13.5 11.5 13.5H12.5C13 13.5 13.5 13.1 13.5 12.5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 7.5V8.5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 13.5V14.5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individual creators starting their journey.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ['Access to basic AI tools', '720p export resolution', '1GB cloud storage', 'Community support', 'Basic color grading'],
    icon: <PriceTagIcon className="w-6 h-6 text-gray-400" />,
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For professionals who demand the highest quality.',
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: ['Everything in Starter', '4K Ultra HD export', 'Unlimited AI generations', '100GB cloud storage', 'Advanced collaboration', 'Priority rendering'],
    icon: <PriceTagIcon className="w-6 h-6 text-white" />,
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Scalable solutions for teams and agencies.',
    monthlyPrice: 99,
    yearlyPrice: 89,
    features: ['Everything in Pro', '8K resolution support', 'API access', 'Unlimited storage', 'Dedicated account manager', 'SSO & Advanced Security'],
    icon: <PriceTagIcon className="w-6 h-6 text-gray-400" />,
    popular: false,
  }
];

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="py-32 px-4 bg-[#050505] relative overflow-hidden" id="pricing">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-lumina-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Simple, transparent <span className="text-lumina-orange">pricing.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg mb-10">
            Choose the perfect plan for your creative needs. Upgrade, downgrade, or cancel at any time.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-[#111] border border-white/10 rounded-full p-1.5 relative">
            <button 
              onClick={() => setIsYearly(false)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${!isYearly ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isYearly ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Yearly <span className="text-[#FF6B00] text-[10px] ml-1">SAVE 20%</span>
            </button>
            
            {/* Sliding Pill */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#222] border border-white/10 rounded-full transition-transform duration-300 shadow-lg ${isYearly ? 'translate-x-full' : 'translate-x-0'}`}
            ></div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-500 group ${
                plan.popular 
                  ? 'bg-[#0A0A0A] border-[#FF6B00]/40 shadow-[0_0_40px_rgba(255,107,0,0.15)] scale-105 z-10' 
                  : 'bg-[#080808] border-white/5 hover:border-white/10 opacity-80 hover:opacity-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(255,107,0,0.4)]">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 ${plan.popular ? 'bg-[#FF6B00]/20 shadow-[0_0_15px_rgba(255,107,0,0.4)]' : 'bg-white/5'}`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    {plan.monthlyPrice === 0 ? 'Forever' : 'Per User'}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                 <div className="flex items-end gap-1">
                   <span className="text-4xl font-display font-bold text-white">
                     ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                   </span>
                   <span className="text-gray-500 mb-1">/mo</span>
                 </div>
                 <p className="text-sm text-gray-400 mt-4 leading-relaxed h-10">
                   {plan.description}
                 </p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-[#FF6B00] text-white' : 'bg-white/10 text-gray-400'}`}>
                      <Check size={10} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-[#FF6B00] hover:bg-orange-600 text-white shadow-[0_0_20px_rgba(255,107,0,0.3)]' 
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/5'
                }`}
              >
                {plan.monthlyPrice === 0 ? 'Start for Free' : 'Get Access Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};