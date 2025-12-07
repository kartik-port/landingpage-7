import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6 text-[#FF6B00]">
        <path d="M13 4L7 20H10L16 4H13Z" />
        <path d="M17 4L11 20H14L20 4H17Z" opacity="0.6" />
      </svg>
    ),
    title: "Real-time Rendering",
    description: "See your changes instantly with our proprietary engine. No more waiting for previews to render or buffer.",
    gradient: "from-orange-500/10 to-transparent",
    borderHover: "group-hover:border-orange-500/30"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6 text-blue-400">
        <circle cx="9" cy="12" r="5" opacity="0.9" />
        <circle cx="15" cy="12" r="5" opacity="0.5" />
      </svg>
    ),
    title: "Global CDN",
    description: "Lightning fast asset delivery to anyone, anywhere in the world via our edge network.",
    gradient: "from-blue-500/10 to-transparent",
    borderHover: "group-hover:border-blue-500/30"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6 text-purple-400">
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" opacity="0.7" />
        <rect x="4" y="14" width="6" height="6" rx="1" opacity="0.5" />
        <rect x="14" y="14" width="6" height="6" rx="1" opacity="0.3" />
      </svg>
    ),
    title: "AI Upscaling",
    description: "Automatically enhance footage resolution up to 8K with our neural engine trained on cinematic data.",
    gradient: "from-purple-500/10 to-transparent",
    borderHover: "group-hover:border-purple-500/30"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6 text-emerald-400">
        <path d="M4 4h7v7H4V4z" />
        <path d="M13 13h7v7h-7v-7z" opacity="0.7" />
        <path d="M4 13h7v7H4v-7z" opacity="0.4" />
        <path d="M13 4h7v7h-7V4z" opacity="0.4" />
      </svg>
    ),
    title: "Version Control",
    description: "Branch, merge, and revert changes just like code. Never lose work or overwrite a master file again.",
    gradient: "from-emerald-500/10 to-transparent",
    borderHover: "group-hover:border-emerald-500/30"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6 text-rose-400">
        <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" />
        <circle cx="12" cy="12" r="2.5" fill="#0A0A0A" />
      </svg>
    ),
    title: "Enterprise Security",
    description: "SOC2 compliant with role-based access control, SSO, and detailed audit logs for your peace of mind.",
    gradient: "from-rose-500/10 to-transparent",
    borderHover: "group-hover:border-rose-500/30"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6 text-cyan-400">
        <path d="M12 4L17 9H14V12H10V9H7L12 4Z" opacity="0.6" />
        <path d="M12 20L7 15H10V12H14V15H17L12 20Z" />
      </svg>
    ),
    title: "Seamless Handoff",
    description: "One-click export to Premiere, After Effects, and DaVinci Resolve with full project compatibility.",
    gradient: "from-cyan-500/10 to-transparent",
    borderHover: "group-hover:border-cyan-500/30"
  }
];

export const Features = () => {
  return (
    <section className="py-32 px-4 bg-[#050505] relative overflow-hidden">
      {/* Subtle Background Gradients for depth */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse"></span>
             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Feature Set 2.0</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Everything you need to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">create without limits.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            A complete suite of tools designed for the modern creator. 
            Powerful, intuitive, and built for speed.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 transition-all duration-300 hover:translate-y-[-4px] overflow-hidden ${feature.borderHover}`}
            >
              {/* Internal Glow Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-14 h-14 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                   {feature.icon}
                </div>
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white font-display tracking-tight">
                    {feature.title}
                  </h3>
                  <ArrowUpRight size={16} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                </div>
                
                <p className="text-gray-400 leading-relaxed text-sm font-medium pr-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};