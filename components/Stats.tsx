import React from 'react';
import { Triangle } from 'lucide-react';

export const Stats = () => {
  return (
    <section className="py-24 px-4 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-500 leading-tight">
          We are a creative <br/>
          <span className="text-white">intelligence engine</span> <br/>
          dedicated to <br/>
          transforming how <br/>
          the world <span className="text-white">visualizes</span> <br/>
          <span className="text-white">stories.</span> With a <br/>
          team of <br/>
          researchers, <br/>
          engineers, and <br/>
          artists, we build <br/>
          tools that empower <br/>
          <span className="text-white">ambitious creators</span> <br/>
          to design, animate, <br/>
          and ship cinematic <br/>
          experiences at the <br/>
          speed of thought.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 border-t border-white/5 pt-16">
        <div>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-2 tracking-tight">$500M</h3>
          <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Creator Revenue</p>
        </div>
        <div>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-2 tracking-tight">99%</h3>
          <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Client Satisfaction</p>
        </div>
        <div>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-2 tracking-tight">2M+</h3>
          <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Videos Generated</p>
        </div>
        <div>
          <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-2 tracking-tight">4.9</h3>
          <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Average Rating</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-32 text-center">
        <p className="text-xs font-bold text-gray-600 tracking-[0.2em] uppercase mb-16">Trusted by Industry Leaders</p>
        
        {/* Custom Abstract AI Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           
           {/* Logo 1: The 'Flux' (Resembles abstract F/S loop) */}
           <svg className="h-10 md:h-12 w-auto" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#FF6B00" />
                 <stop offset="100%" stopColor="#FF0080" />
               </linearGradient>
             </defs>
             <path d="M30 10C18.9543 10 10 18.9543 10 30H20C20 24.4772 24.4772 20 30 20C35.5228 20 40 24.4772 40 30C40 35.5228 35.5228 40 30 40H20C14.4772 40 10 44.4772 10 50H20C31.0457 50 40 41.0457 40 30H50C50 41.0457 41.0457 50 30 50C18.9543 50 10 41.0457 10 30H0C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0V10Z" fill="url(#grad1)"/>
           </svg>

           {/* Logo 2: The 'Nexus' (Interlocking Hexagon/Cube) */}
           <svg className="h-10 md:h-12 w-auto" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
               <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                 <stop offset="0%" stopColor="#00C9FF" />
                 <stop offset="100%" stopColor="#92FE9D" />
               </linearGradient>
             </defs>
             <path fillRule="evenodd" clipRule="evenodd" d="M30 0L55.9808 15V45L30 60L4.01924 45V15L30 0ZM30 11.547L45.9808 20.7735V39.2265L30 48.453L14.0192 39.2265V20.7735L30 11.547Z" fill="url(#grad2)"/>
             <path d="M30 23.094L39.9904 28.8675V40.4145L30 46.188L20.0096 40.4145V28.8675L30 23.094Z" fill="white" fillOpacity="0.2"/>
           </svg>

           {/* Logo 3: The 'Prism' (Abstract Triangle A) */}
           <svg className="h-10 md:h-12 w-auto" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
               <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#8E2DE2" />
                 <stop offset="100%" stopColor="#4A00E0" />
               </linearGradient>
             </defs>
             <path d="M30 0L58 50H45L30 22L15 50H2L30 0Z" fill="url(#grad3)"/>
             <path d="M30 35L40 54H20L30 35Z" fill="white" fillOpacity="0.3"/>
             <rect x="18" y="54" width="24" height="6" rx="3" fill="url(#grad3)"/>
           </svg>

           {/* Logo 4: The 'Vortex' (Swirl shape) */}
           <svg className="h-10 md:h-12 w-auto" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
               <linearGradient id="grad4" x1="100%" y1="0%" x2="0%" y2="100%">
                 <stop offset="0%" stopColor="#F7971E" />
                 <stop offset="100%" stopColor="#FFD200" />
               </linearGradient>
             </defs>
             <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM30 50C41.0457 50 50 41.0457 50 30C50 18.9543 41.0457 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z" fill="url(#grad4)" fillOpacity="0.2"/>
             <path d="M30 10C35.5 10 40 16 40 22C40 26 38 30 30 35C22 30 20 26 20 22C20 16 24.5 10 30 10Z" fill="url(#grad4)"/>
             <circle cx="30" cy="45" r="5" fill="url(#grad4)"/>
           </svg>

           {/* Logo 5: The 'Wave' (Abstract N/W) */}
           <svg className="h-8 md:h-10 w-auto" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
               <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#00c6ff" />
                 <stop offset="100%" stopColor="#0072ff" />
               </linearGradient>
             </defs>
             <path d="M10 0L0 10L15 25L30 10L45 25L60 10L50 0L35 15L20 0L10 0Z" fill="url(#grad5)"/>
             <path d="M10 20L0 30L15 45L30 30L45 45L60 30L50 20L35 35L20 20L10 20Z" fill="url(#grad5)" opacity="0.5"/>
           </svg>

        </div>
      </div>
      
      <div className="flex justify-center mt-32">
        <Triangle className="text-lumina-orange rotate-180 fill-lumina-orange animate-bounce opacity-80" size={16} />
      </div>
    </section>
  );
};
