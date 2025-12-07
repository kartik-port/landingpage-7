import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ArrowRight, Check, Sparkles, Settings, Share2, Maximize2, Volume2 } from 'lucide-react';

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeCode, setCurrentTimeCode] = useState("00:04:12:08");
  const [progress, setProgress] = useState(0);
  const requestRef = useRef<number>();
  const [animFrame, setAnimFrame] = useState(0);

  // Generate consistent base waveform data
  const staticWaveform = useMemo(() => {
    const data = [];
    let prev = 0.5;
    for (let i = 0; i < 64; i++) {
        // Random walk for natural shape
        let change = (Math.random() - 0.5) * 0.6;
        let val = Math.max(0.2, Math.min(0.8, prev + change));
        data.push(val);
        prev = val;
    }
    return data;
  }, []);

  // Smooth animation loop
  const animate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      // Use 1 as fallback to avoid division by zero if duration is 0 or NaN during loading
      const total = (Number.isFinite(duration) && duration > 0) ? duration : 1;
      
      const p = (current / total) * 100;
      setProgress(p);

      // Update timecode
      const fps = 24;
      const baseFrames = (4 * 60 * fps) + (12 * fps) + 8;
      const currentFrames = baseFrames + (current * fps);
      
      const totalSeconds = Math.floor(currentFrames / fps);
      const frame = Math.floor(currentFrames % fps);
      const seconds = totalSeconds % 60;
      const minutes = Math.floor((totalSeconds / 60) % 60);
      const hours = Math.floor(totalSeconds / 3600);

      const pad = (n: number) => n.toString().padStart(2, '0');
      setCurrentTimeCode(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frame)}`);
      
      // Increment animation frame for the visualizer
      if (!videoRef.current.paused && !videoRef.current.ended) {
        setAnimFrame(prev => prev + 1);
        requestRef.current = requestAnimationFrame(animate);
      }
    }
  };

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play().then(() => {
         requestRef.current = requestAnimationFrame(animate);
      }).catch(e => console.log("Autoplay prevented", e));
    } else {
      videoRef.current?.pause();
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const handleTimelineSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.max(0, Math.min(1, x / width));
        
        const duration = videoRef.current.duration;
        
        // Ensure duration is valid before calculation
        if (Number.isFinite(duration)) {
            const newTime = percentage * duration;
            videoRef.current.currentTime = newTime;
            setProgress(percentage * 100);
            
            if (!isPlaying) {
                // Update timecode statically
                const fps = 24;
                const baseFrames = (4 * 60 * fps) + (12 * fps) + 8;
                const currentFrames = baseFrames + (newTime * fps);
                const totalSeconds = Math.floor(currentFrames / fps);
                const frame = Math.floor(currentFrames % fps);
                const seconds = totalSeconds % 60;
                const minutes = Math.floor((totalSeconds / 60) % 60);
                const hours = Math.floor(totalSeconds / 3600);
                const pad = (n: number) => n.toString().padStart(2, '0');
                setCurrentTimeCode(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frame)}`);
            }
        }
    }
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 px-4 overflow-hidden flex flex-col items-center justify-start">
      
      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-8 lg:mb-10 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <div className="w-2 h-2 rounded-full bg-[#FF6B00] shadow-[0_0_10px_#FF6B00]"></div>
          <span className="text-[#FF6B00] font-bold text-xs tracking-[0.25em] uppercase font-display">Creative Suite 2.0</span>
        </div>
        
        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-[7.5rem] font-bold font-display tracking-tight text-white mb-6 lg:mb-8 leading-[0.9] opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
          Craft Visual <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">Stories.</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg text-gray-400 mb-10 lg:mb-14 max-w-2xl mx-auto leading-relaxed font-light tracking-wide opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards] px-4">
          Transforms raw footage into cinematic masterpieces instantly. Otisium's AI adapts to your unique style, automating the tedious so you can focus on the story.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 mb-16 lg:mb-24 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
          <button className="group relative inline-flex items-center justify-between bg-[#111] hover:bg-[#1a1a1a] text-white p-1.5 rounded-full border border-white/10 transition-all hover:border-[#FF6B00]/50 w-[280px] shadow-2xl cursor-pointer">
             <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-[0_0_15px_rgba(255,107,0,0.4)] group-hover:scale-105 transition-transform">
               <Sparkles size={20} className="text-white fill-white" />
             </div>
             <span className="font-semibold text-base tracking-wide text-gray-100">Start Creating</span>
             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-colors">
               <ArrowRight size={18} className="text-gray-400 group-hover:text-white" />
             </div>
          </button>
          
          <div className="flex items-center gap-2.5 text-sm text-gray-500 font-medium">
            <Check size={16} className="text-[#FF6B00]" />
            <span>No credit card required</span>
          </div>
        </div>

        {/* Advanced Video Editor Interface */}
        <div className="relative w-full max-w-5xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
           {/* The Horizon Glow Effect */}
           <div className="absolute -top-[100px] lg:-top-[150px] left-1/2 -translate-x-1/2 w-[140%] h-[300px] lg:h-[500px] bg-gradient-to-t from-[#FF4500]/20 via-[#FF6B00]/10 to-transparent blur-[60px] lg:blur-[80px] rounded-[100%] pointer-events-none mix-blend-screen" />

           {/* Editor Container */}
           <div className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] lg:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] border border-white/10 bg-[#0a0a0a] group ring-1 ring-white/5">
              
              {/* Window Header */}
              <div className="absolute top-0 left-0 right-0 h-12 lg:h-14 bg-gradient-to-b from-black/80 to-transparent z-30 flex items-center justify-between px-4 lg:px-5">
                 <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FF5F57] border border-white/5 shadow-inner"></div>
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FEBC2E] border border-white/5 shadow-inner"></div>
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#28C840] border border-white/5 shadow-inner"></div>
                 </div>
                 
                 <div className="flex gap-3 lg:gap-4">
                    <Settings size={14} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
                    <Share2 size={14} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
                    <Maximize2 size={14} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
                 </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-14 right-4 lg:top-16 lg:right-5 z-30">
                 <div className="bg-[#0f1214]/80 backdrop-blur-md text-[9px] lg:text-[10px] font-mono px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full border border-white/10 text-white/90 flex items-center gap-2 shadow-lg hover:bg-black/80 transition-colors cursor-help">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF94] shadow-[0_0_8px_#00FF94] animate-pulse"></div>
                    RENDERING PREVIEW
                 </div>
              </div>

              {/* Main Canvas with Video */}
              <div className="aspect-[16/9] relative bg-[#050505] cursor-pointer" onClick={togglePlay}>
                 <video 
                   ref={videoRef}
                   src="https://assets.mixkit.co/videos/preview/mixkit-storm-clouds-in-the-sky-during-sunset-12759-large.mp4" 
                   className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
                   loop
                   playsInline
                   muted
                   poster="https://images.unsplash.com/photo-1614728853975-69c96077d8bd?q=80&w=2574&auto=format&fit=crop"
                 />
                 
                 {/* Cinematic Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none"></div>
                 
                 {/* Floating Tooltip (Mockup) - Hidden on mobile */}
                 <div className={`hidden md:flex absolute top-[40%] right-[20%] z-20 transition-all duration-700 delay-100 ${isPlaying ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-lg py-2 px-3 flex items-center gap-3 shadow-2xl">
                       <div className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse"></div>
                       <div className="flex flex-col">
                           <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Color Grade</span>
                           <span className="text-xs text-white font-medium">Mars Dust V2.0</span>
                       </div>
                    </div>
                 </div>

                 {/* Bottom Timeline Bar */}
                 <div className="absolute bottom-3 left-3 right-3 lg:bottom-6 lg:left-6 lg:right-6 z-20" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-[#121212]/80 backdrop-blur-2xl border border-white/10 rounded-xl lg:rounded-2xl p-3 lg:p-4 flex flex-col gap-2 lg:gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden group/timeline">
                       
                       {/* Top Info Bar */}
                       <div className="flex justify-between items-center text-[9px] md:text-xs font-mono tracking-widest relative z-10 text-gray-400">
                          <div className="flex items-center gap-2 md:gap-4">
                             <div className="text-white font-bold">{currentTimeCode}</div>
                             <div className="w-px h-2 md:h-3 bg-white/10"></div>
                             <div className="hidden sm:block">TC: 24:00:00:00</div>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3">
                             <Volume2 size={10} className="md:w-3 md:h-3" />
                             <div>4K / 60FPS / RAW</div>
                          </div>
                       </div>
                       
                       {/* Waveform Visualizer & Scrubber */}
                       <div 
                         className="relative h-10 md:h-16 flex items-center gap-[2px] md:gap-[3px] cursor-pointer py-1 md:py-2" 
                         onClick={handleTimelineSeek}
                       >
                          {/* Background Track Line */}
                          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 -translate-y-1/2 z-0"></div>

                          {staticWaveform.map((baseHeight, i) => {
                             const isPlayed = (i / staticWaveform.length * 100) <= progress;
                             
                             // Calculate dynamic "Live Radio" visualization height
                             let height = baseHeight;
                             if (isPlaying) {
                                // Add complex sine wave modulation for "living" feel
                                const time = animFrame * 0.15;
                                const wave1 = Math.sin(i * 0.4 + time) * 0.3;
                                const wave2 = Math.cos(i * 0.7 - time * 1.2) * 0.15;
                                const jitter = (Math.random() - 0.5) * 0.2;
                                
                                // Enhance the played/active parts more
                                const multiplier = 1 + wave1 + wave2 + jitter;
                                height = Math.max(0.15, Math.min(1.0, baseHeight * multiplier));
                             }

                             return (
                               <div 
                                 key={i} 
                                 className={`flex-1 rounded-full transition-all duration-100 ease-linear relative z-10 ${
                                   isPlayed 
                                     ? 'bg-gradient-to-t from-[#FF6B00] to-[#FF8F40] shadow-[0_0_10px_rgba(255,107,0,0.5)]' 
                                     : 'bg-white/10 hover:bg-white/30'
                                 }`}
                                 style={{ 
                                   height: `${height * 100}%`,
                                   opacity: isPlayed ? 1 : 0.3,
                                 }} 
                               />
                             );
                          })}
                          
                          {/* Playhead Line */}
                          <div 
                              className="absolute top-[-4px] bottom-[-4px] w-[1.5px] md:w-[2px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none transition-all duration-75 ease-linear"
                              style={{ left: `${progress}%` }}
                          >
                               <div className="absolute -top-1 md:-top-1.5 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-white rotate-45 rounded-[1px] md:rounded-sm shadow-sm"></div>
                               <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-white via-white to-transparent"></div>
                          </div>
                       </div>
                    </div>
                 </div>

              </div>
           </div>
           
           {/* Reflection/Ground Glow */}
           <div className="absolute -bottom-20 left-10 right-10 h-32 bg-[#FF6B00]/10 blur-[80px] rounded-full pointer-events-none mix-blend-screen animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};