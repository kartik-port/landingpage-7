import React, { useState } from 'react';
import { ChevronRight, ChevronDown, CreditCard, Box, Database, Zap, X } from 'lucide-react';

const cases = [
  {
    id: 'midday',
    category: 'FINTECH',
    name: 'Midday Financial',
    icon: <CreditCard className="text-gray-400" size={20} />,
    challenge: 'Internal fragmentation led to siloed decision-making and slower release cycles across distributed engineering teams.',
    solution: "Deployed Otisium's collaborative engine to synchronize asset pipelines and automate status reporting in real-time.",
    result: 'Achieved a 40% reduction in meeting times and doubled the velocity of feature shipments within Q3.'
  },
  {
    id: 'vercel',
    category: 'INFRASTRUCTURE',
    name: 'Vercel',
    icon: <Box className="text-gray-400" size={20} />,
    challenge: 'Scaling visual consistency across thousands of deployments.',
    solution: 'Integrated Otisium AI to auto-generate preview assets.',
    result: '95% reduction in manual design hours.'
  },
  {
    id: 'supabase',
    category: 'DATABASE',
    name: 'Supabase',
    icon: <Database className="text-gray-400" size={20} />,
    challenge: 'Need for real-time visualization of complex data structures.',
    solution: 'Custom Otisium renderer for PostgreSQL schema visualization.',
    result: 'User engagement increased by 30%.'
  },
  {
    id: 'linear',
    category: 'PRODUCTIVITY',
    name: 'Linear Systems',
    icon: <Zap className="text-gray-400" size={20} />,
    challenge: 'Streamlining bug reporting visuals.',
    solution: 'Automated screenshot annotation using Otisium Vision.',
    result: 'Ticket resolution time cut in half.'
  }
];

export const CaseStudies = () => {
  const [activeId, setActiveId] = useState('midday');

  return (
    <section className="py-24 px-4 bg-[#050505] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* List */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-2 h-2 rounded-full bg-lumina-orange"></div>
              <h2 className="text-4xl font-display font-bold text-white">Success Stories</h2>
            </div>
            
            <div className="space-y-6">
              {cases.map((item) => (
                <div key={item.id} className="group">
                  <div className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-2 ml-9">{item.category}</div>
                  <button 
                    onClick={() => setActiveId(item.id)}
                    className="w-full flex items-center justify-between text-left group-hover:bg-white/5 p-4 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <span className={`text-xl font-bold transition-colors ${activeId === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {item.name}
                      </span>
                    </div>
                    {activeId === item.id ? (
                      <ChevronRight className="text-lumina-orange" />
                    ) : (
                      <ChevronRight className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                  {/* Mobile expansion */}
                  {activeId === item.id && (
                     <div className="lg:hidden mt-4 pl-9 pr-4 pb-4 border-l border-lumina-orange/20 ml-4">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Challenge</h4>
                            <p className="text-gray-300 leading-relaxed text-sm">
                              {item.challenge.split(' ').map((word, i) => 
                                word.includes('siloed') || word.includes('decision-making') ? <span key={i} className="text-white font-bold">{word} </span> : word + ' '
                              )}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Solution</h4>
                            <p className="text-gray-300 leading-relaxed text-sm">
                               {item.solution.split(' ').map((word, i) => 
                                word.includes('asset') || word.includes('pipelines') ? <span key={i} className="text-white font-bold">{word} </span> : word + ' '
                              )}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Result</h4>
                            <p className="text-gray-300 leading-relaxed text-sm">
                               {item.result.split(' ').map((word, i) => 
                                word.includes('40%') || word.includes('reduction') ? <span key={i} className="text-lumina-orange font-bold">{word} </span> : word + ' '
                              )}
                            </p>
                          </div>
                        </div>
                     </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Detail View */}
          <div className="hidden lg:block relative border-l border-white/5 pl-12 py-12">
            <div className="absolute top-0 left-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-lumina-orange to-transparent"></div>
             
             {cases.map((item) => (
               activeId === item.id && (
                <div key={item.id} className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Challenge</h4>
                    <p className="text-xl text-gray-300 leading-relaxed">
                       {item.challenge.split(' ').map((word, i) => 
                        word.includes('siloed') || word.includes('decision-making') ? <span key={i} className="text-white font-bold">{word} </span> : word + ' '
                      )}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Solution</h4>
                    <p className="text-xl text-gray-300 leading-relaxed">
                       {item.solution.split(' ').map((word, i) => 
                        word.includes('asset') || word.includes('pipelines') ? <span key={i} className="text-white font-bold">{word} </span> : word + ' '
                      )}
                    </p>
                  </div>

                   <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Result</h4>
                    <p className="text-xl text-gray-300 leading-relaxed">
                       {item.result.split(' ').map((word, i) => 
                        word.includes('40%') || word.includes('reduction') ? <span key={i} className="text-lumina-orange font-bold">{word} </span> : word + ' '
                      )}
                    </p>
                  </div>
                </div>
               )
             ))}
          </div>

        </div>
      </div>
      
      {/* Decorative center line for the page */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 -z-10 hidden lg:block"></div>
    </section>
  );
};