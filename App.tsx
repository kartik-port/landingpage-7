import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Workflow } from './components/Workflow';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { AppPreview } from './components/AppPreview';
import { CaseStudies } from './components/CaseStudies';
import { Pricing } from './components/Pricing';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-lumina-orange/30 overflow-x-hidden">
      {/* Vertical Lines Background Overlay */}
      <div className="fixed inset-0 vertical-lines pointer-events-none z-0 h-[200vh]" />
      
      {/* Background Glows */}
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-lumina-orange/5 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Workflow />
          <Features />
          <Stats />
          <AppPreview />
          <CaseStudies />
          <Pricing />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;