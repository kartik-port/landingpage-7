import React from 'react';
import { Video, Sparkles, Download, Quote } from 'lucide-react';

export const Workflow = () => {
  return (
    <section className="py-24 px-4 border-t border-white/5 bg-[#050505] relative">
       {/* Background gradient spot */}
       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] pointer-events-none" />

       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         {/* Steps */}
         <div className="space-y-4">
            <div className="p-6 rounded-xl bg-[#111] border border-lumina-orange/20 flex items-center justify-between group cursor-pointer transition-all hover:bg-[#161616]">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-lumina-orange flex items-center justify-center text-black font-bold text-sm">01</div>
                <span className="text-white font-medium text-lg">Import Footage</span>
              </div>
              <Video size={20} className="text-lumina-orange" />
            </div>

            <div className="p-6 rounded-xl bg-transparent border border-white/5 flex items-center justify-between group cursor-pointer transition-all hover:bg-[#111] opacity-60 hover:opacity-100">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 text-sm font-mono">02</div>
                <span className="text-gray-400 font-medium text-lg group-hover:text-white">AI Scene Detect</span>
              </div>
              <Sparkles size={20} className="text-gray-600 group-hover:text-gray-400" />
            </div>

            <div className="p-6 rounded-xl bg-transparent border border-white/5 flex items-center justify-between group cursor-pointer transition-all hover:bg-[#111] opacity-60 hover:opacity-100">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 text-sm font-mono">03</div>
                <span className="text-gray-400 font-medium text-lg group-hover:text-white">Export 4K</span>
              </div>
              <Download size={20} className="text-gray-600 group-hover:text-gray-400" />
            </div>
         </div>

         {/* Testimonial */}
         <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-lumina-orange to-orange-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-lumina-orange rounded-2xl p-8 md:p-12 text-black">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-3">
                  <img src="https://picsum.photos/seed/user1/100/100" className="w-10 h-10 rounded-full border-2 border-orange-500" alt="User 1" />
                  <img src="https://picsum.photos/seed/user2/100/100" className="w-10 h-10 rounded-full border-2 border-orange-500" alt="User 2" />
                  <div className="w-10 h-10 rounded-full border-2 border-orange-500 bg-black text-white flex items-center justify-center text-xs font-bold">+2k</div>
                </div>
              </div>
              
              <Quote className="text-black/20 mb-4" size={48} />
              
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                "Otisium changed my entire workflow."
              </h3>
              
              <div className="flex items-center justify-between border-t border-black/10 pt-6">
                <span className="font-semibold text-xs tracking-wider uppercase opacity-70">Verified Creator</span>
                <div className="flex items-center gap-1">
                  <span className="font-bold">5.0</span>
                  <span className="opacity-70 text-sm">RATING</span>
                </div>
              </div>
            </div>
         </div>
       </div>
    </section>
  );
};