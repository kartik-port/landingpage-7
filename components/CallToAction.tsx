import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section className="py-32 px-4 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumina-orange/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Ready to start <span className="text-lumina-orange">creating?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of creators who are already using Otisium to tell better stories. 
              Start your free 14-day trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-[#111] border border-white/10 text-white px-6 py-4 rounded-full w-full sm:w-80 focus:outline-none focus:border-lumina-orange/50 transition-colors"
              />
              <button className="bg-lumina-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] w-full sm:w-auto justify-center">
                Get Started <ArrowRight size={20} />
              </button>
            </div>
            
            <p className="mt-6 text-xs text-gray-600">
              No credit card required for trial. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};