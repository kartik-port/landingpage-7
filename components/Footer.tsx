import React from 'react';
import { Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 px-4 relative overflow-hidden border-t border-white/5">
       
       <div className="max-w-6xl mx-auto text-center mb-32">
         <div className="inline-flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 mb-8 hover:bg-white/5 cursor-pointer transition-colors group">
           <div className="w-2 h-2 rounded-full bg-lumina-orange"></div>
           <span className="text-xs font-bold text-white tracking-widest uppercase">Get in touch</span>
         </div>

         <div className="space-y-4">
           <a href="tel:+18005550199" className="block text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:to-white transition-all">
             +1 800 555 0199
           </a>
           <a href="mailto:hello@otisium.ai" className="block text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:to-white transition-all uppercase">
             HELLO@OTISIUM.AI
           </a>
         </div>
       </div>

       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
         <div className="flex gap-6">
           <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={24} /></a>
           <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={24} /></a>
           <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
         </div>

         <div className="text-right space-y-2">
            <div className="flex gap-6 text-xs font-bold text-gray-500 uppercase tracking-wider justify-end mb-4">
              <a href="#" className="hover:text-white transition-colors">Privacy & Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p className="text-gray-600 text-sm">@2025 OTISIUM CREATIVE INC.</p>
         </div>
       </div>
       
       {/* Aura Badge */}
       <div className="fixed bottom-4 right-4 z-50">
          <a href="#" className="bg-[#111] hover:bg-[#222] border border-white/10 text-white text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-2xl transition-all">
            <span className="font-serif italic text-gray-400">A</span>
            Made by Otisium
          </a>
       </div>
    </footer>
  );
};