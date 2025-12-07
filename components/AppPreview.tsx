import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Home, Search, PlusSquare, Clapperboard, BadgeCheck, Sparkles } from 'lucide-react';

const STORY_IMAGES = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
];

export const AppPreview = () => {
  return (
    <section className="py-32 px-4 bg-[#050505] overflow-hidden relative">
      <div className="max-w-[400px] mx-auto relative z-10">
        
        {/* Glow behind phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[80%] bg-[#FF6B00]/15 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Realistic Phone Frame */}
        <div className="relative bg-black rounded-[50px] border-[8px] border-[#1f1f1f] shadow-2xl overflow-hidden aspect-[9/19.5] ring-1 ring-white/10">
          
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 z-50 px-7 flex justify-between items-end pb-2.5">
             <span className="text-white text-[15px] font-semibold tracking-wide">9:41</span>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-[#1f1f1f] rounded-b-3xl"></div>
             <div className="flex gap-1.5 items-center">
               <div className="h-2.5 w-4 bg-white rounded-sm"></div>
               <div className="h-2.5 w-4 bg-white rounded-sm"></div>
               <div className="h-2.5 w-4 bg-green-500 rounded-sm"></div>
             </div>
          </div>

          {/* App Header */}
          <div className="pt-14 pb-2 px-4 flex justify-between items-center bg-black sticky top-0 z-40">
            <div className="flex items-center gap-1">
               <span className="font-display font-bold text-2xl text-white tracking-tight">Otisium</span>
               <div className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full mt-1.5"></div>
            </div>
            <div className="flex gap-6 text-white items-center">
              <Heart size={24} strokeWidth={2} />
              <div className="relative">
                <MessageCircle size={24} strokeWidth={2} className="-rotate-[10deg]" />
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#FF3B30] rounded-full text-[10px] flex items-center justify-center font-bold">2</div>
              </div>
            </div>
          </div>

          {/* Stories Area */}
          <div className="flex gap-4 px-4 py-3 overflow-x-auto hide-scrollbar bg-black border-b border-white/5 pb-4">
            <div className="flex flex-col items-center gap-1.5 shrink-0">
               <div className="relative">
                 <div className="w-[76px] h-[76px] rounded-full p-[2px] bg-gradient-to-tr from-[#FFAA00] via-[#FF6B00] to-[#D300C5] relative">
                    <div className="w-full h-full rounded-full bg-black p-[3px]">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="w-full h-full rounded-full object-cover" alt="story" />
                    </div>
                 </div>
                 <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center border-2 border-black text-white text-xs font-bold">+</div>
               </div>
               <span className="text-[11px] text-gray-200">Your Story</span>
            </div>
            
            {STORY_IMAGES.map((imgSrc, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 shrink-0">
                <div className="w-[76px] h-[76px] rounded-full p-[2px] bg-gradient-to-tr from-[#FFAA00] via-[#FF6B00] to-[#D300C5]">
                   <div className="w-full h-full rounded-full bg-black p-[3px]">
                     <img src={imgSrc} className="w-full h-full rounded-full object-cover" alt={`story user ${i+1}`} />
                   </div>
                </div>
                <span className="text-[11px] text-gray-200">user_{i + 1}</span>
              </div>
            ))}
          </div>

          {/* Feed Post */}
          <div className="bg-black pb-24">
            {/* Post Header */}
            <div className="px-3 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FFAA00] via-[#FF6B00] to-[#D300C5]">
                   <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop" className="w-full h-full rounded-full object-cover border-2 border-black" alt="Profile" />
                 </div>
                 <div className="flex flex-col">
                   <div className="flex items-center gap-1">
                     <p className="text-sm font-semibold text-white">otisium.visuals</p>
                     <BadgeCheck size={12} className="text-blue-500 fill-blue-500 text-black" />
                   </div>
                   <p className="text-[11px] text-white/70">San Francisco, CA</p>
                 </div>
              </div>
              <MoreHorizontal size={20} className="text-white" />
            </div>

            {/* Post Image/Video */}
            <div className="w-full aspect-[4/5] bg-[#111] relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Abstract 3D" />
               
               {/* In-app overlay tags matching the screenshot style */}
               <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10 shadow-lg">
                    <div className="w-4 h-4 rounded-full bg-[#FF6B00] flex items-center justify-center">
                      <Sparkles size={10} className="text-white fill-white" />
                    </div>
                    <span className="text-xs font-medium text-white">Generated with Otisium</span>
                  </div>
                  
                   <div className="bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-lg">
                     <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-150"></div>
                     </div>
                   </div>
               </div>
            </div>

            {/* Action Bar */}
            <div className="px-3 py-3 flex justify-between items-center">
               <div className="flex gap-4 items-center">
                  <Heart size={24} className="text-white hover:text-red-500 transition-colors cursor-pointer" />
                  <MessageCircle size={24} className="text-white -rotate-90" />
                  <Send size={24} className="text-white" />
               </div>
               <Bookmark size={24} className="text-white" />
            </div>

            {/* Likes & Caption */}
            <div className="px-3 space-y-1">
               <p className="text-sm font-bold text-white">12,492 likes</p>
               <div className="text-sm text-white leading-tight">
                 <span className="font-bold mr-2">otisium.visuals</span>
                 <span className="font-light">The future of storytelling is here. Turn your concepts into reality with Otisium 2.0.</span>
                 <span className="text-blue-200/80 block mt-1">#Otisium #GenerativeAI #3DDesign #Motion</span>
               </div>
               <p className="text-[10px] text-gray-500 uppercase mt-2 font-medium tracking-wide">View all 128 comments</p>
               <p className="text-[10px] text-gray-500 uppercase font-medium tracking-wide">4 hours ago</p>
            </div>
          </div>
          
          {/* Bottom Nav */}
          <div className="absolute bottom-0 left-0 right-0 bg-black border-t border-white/10 px-6 py-3 pb-8 flex justify-between items-center z-50">
             <Home size={26} className="text-white fill-white" />
             <Search size={26} className="text-white" strokeWidth={2.5} />
             <PlusSquare size={26} className="text-white" strokeWidth={2.5} />
             <Clapperboard size={26} className="text-white" strokeWidth={2.5} />
             <div className="w-7 h-7 rounded-full bg-gray-700 overflow-hidden border border-white/20 ring-1 ring-white">
               <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
             </div>
          </div>
          
           {/* Home Indicator */}
           <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/30 rounded-full z-50"></div>
        </div>
      </div>
    </section>
  );
};