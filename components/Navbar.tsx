import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            {/* Logo from screenshot: Orange circle with black center */}
            <div className="w-8 h-8 bg-lumina-orange rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-[#050505] rounded-full"></div>
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-display">Otisium</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log In</a>
            <button className="bg-lumina-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)]">
              Get Access
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#" className="text-gray-300 py-2">Log In</a>
          <button className="bg-lumina-orange text-white px-6 py-3 rounded-full text-sm font-semibold w-full">
            Get Access
          </button>
        </div>
      )}
    </nav>
  );
};