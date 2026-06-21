import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Palette, Layers, Code, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Story() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [animatingPage, setAnimatingPage] = useState(0);

  const phases = [
    {
      title: 'UX Research & Strategy',
      subtitle: 'Understanding the problem',
      icon: Search,
      color: 'from-cyan-500 to-blue-500',
      shadow: 'shadow-cyan-500/30',
      description: 'Before drawing a single line, I dig deep into the target user base and business goals. I synthesize qualitative data, structure hierarchies, and map flows.',
      details: [
        'User Personas',
        'Journeys & Flows',
        'AI Synthesis'
      ]
    },
    {
      title: 'Wireframing & Media',
      subtitle: 'Building the skeleton',
      icon: PenTool,
      color: 'from-indigo-500 to-purple-500',
      shadow: 'shadow-indigo-500/30',
      description: 'I translate raw requirements into structured layouts. Low-fidelity wireframes establish hierarchy, paired with gathering foundational media assets.',
      details: [
        'Information Architecture',
        'Lo-Fi Wireframes',
        'Media Curation'
      ]
    },
    {
      title: 'Final Design',
      subtitle: 'Crafting brand identity',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      shadow: 'shadow-pink-500/30',
      description: 'Aesthetics matter. I apply harmonious color palettes, custom logos, typography, and polished visual elements to transform raw wireframes into beautiful UI.',
      details: [
        'Hi-Fi Interface Design',
        'Color Systems',
        'Custom Iconography'
      ]
    },
    {
      title: 'Prototyping',
      subtitle: 'Breathing life into static designs',
      icon: Layers,
      color: 'from-orange-500 to-amber-500',
      shadow: 'shadow-orange-500/30',
      description: 'I link the high-fidelity screens together using advanced prototyping. This includes testing micro-interactions and validating usability flows before coding.',
      details: [
        'Advanced Prototyping',
        'Micro-Interactions',
        'Flow Validation'
      ]
    },
    {
      title: 'Frontend Development',
      subtitle: 'Transforming designs to code',
      icon: Code,
      color: 'from-emerald-500 to-teal-500',
      shadow: 'shadow-emerald-500/30',
      description: 'I bridge the gap between Figma and code. I write clean, responsive frontend layouts using React, Tailwind CSS, and Vite, while handling deployments.',
      details: [
        'Responsive Fluid Layouts',
        'React Architecture',
        'Cloud Deployment'
      ]
    }
  ];

  const turnPage = (direction) => {
    if (isFlipping) return;
    if (direction === 'next' && currentPage < phases.length - 1) {
      setFlipDirection('next');
      setAnimatingPage(currentPage);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(c => c + 1);
        setIsFlipping(false);
      }, 800);
    } else if (direction === 'prev' && currentPage > 0) {
      setFlipDirection('prev');
      setAnimatingPage(currentPage - 1);
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(c => c - 1);
        setIsFlipping(false);
      }, 800);
    }
  };

  const renderLeftPage = (index) => {
    const phase = phases[index];
    if (!phase) return null;
    const Icon = phase.icon;
    return (
      <div className="w-full h-full p-6 md:p-10 flex flex-col justify-between relative z-10">
        <div>
           <span className="text-4xl md:text-6xl font-black text-white/5">0{index + 1}</span>
        </div>
        <div className="flex-1 flex items-center justify-center">
           <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${phase.color} shadow-2xl ${phase.shadow} flex items-center justify-center`}>
              <Icon className="w-10 h-10 md:w-16 md:h-16 text-white" />
           </div>
        </div>
        <div>
           <h3 className="font-display font-black text-2xl md:text-4xl text-white mb-2 leading-tight">{phase.title}</h3>
           <p className="text-slate-400 text-xs md:text-sm tracking-widest uppercase">{phase.subtitle}</p>
        </div>
      </div>
    );
  };

  const renderRightPage = (index) => {
    const phase = phases[index];
    if (!phase) return null;
    return (
      <div className="w-full h-full p-6 md:p-12 flex flex-col justify-center relative z-10">
         <p className="text-slate-300 text-sm md:text-lg leading-relaxed font-light mb-8 md:mb-12">
            {phase.description}
         </p>
         <div className="space-y-5">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Core Action Items</h4>
            {phase.details.map((detail, idx) => (
              <div key={idx} className="flex items-center gap-4">
                 <span className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-gradient-to-r ${phase.color} shadow-lg`} />
                 <span className="text-slate-200 text-sm md:text-base font-medium">{detail}</span>
              </div>
            ))}
         </div>
      </div>
    );
  };

  const PageBackground = ({ isLeft }) => (
    <div className={`absolute inset-0 bg-[#0a0a0f] border-y border-white/10 ${isLeft ? 'border-l rounded-l-3xl' : 'border-r rounded-r-3xl'}`}>
       <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
       {/* Book spine shadow */}
       <div className={`absolute top-0 bottom-0 w-8 md:w-16 pointer-events-none ${isLeft ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} from-black/80 to-transparent`} />
    </div>
  );

  const staticLeftIdx = isFlipping ? animatingPage : currentPage;
  const staticRightIdx = isFlipping ? animatingPage + 1 : currentPage;

  return (
    <section id="story" className="py-24 md:py-32 relative overflow-hidden bg-[#030712] border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.15)] mb-4 inline-block">
            The Workflow
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight mb-4">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Storybook</span>
          </h2>
          <p className="text-slate-400 text-lg">Turn the pages to explore my design and development process.</p>
        </div>

        {/* 3D Book Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[2/1] min-h-[450px] md:min-h-[500px] max-w-5xl mx-auto mb-20" style={{ perspective: '2500px' }}>
          
          {/* Static Left Page */}
          <div className="absolute left-0 w-1/2 h-full z-0">
             <PageBackground isLeft={true} />
             {renderLeftPage(staticLeftIdx)}
          </div>

          {/* Static Right Page */}
          <div className="absolute right-0 w-1/2 h-full z-0">
             <PageBackground isLeft={false} />
             {renderRightPage(staticRightIdx)}
          </div>

          {/* Flipping Page */}
          {isFlipping && (
            <motion.div
              initial={{ rotateY: flipDirection === 'next' ? 0 : -180 }}
              animate={{ rotateY: flipDirection === 'next' ? -180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute left-1/2 w-1/2 h-full origin-left z-20"
              style={{ transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' }}
            >
               {/* Front Side */}
               <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                 <PageBackground isLeft={false} />
                 {renderRightPage(animatingPage)}
               </div>

               {/* Back Side */}
               <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                 <PageBackground isLeft={true} />
                 {renderLeftPage(animatingPage + 1)}
               </div>
            </motion.div>
          )}

        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 md:gap-10">
           <button 
             onClick={() => turnPage('prev')}
             disabled={currentPage === 0 || isFlipping}
             className="group p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all shadow-lg"
           >
             <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
           </button>
           <div className="flex flex-col items-center">
             <span className="text-white font-display font-bold text-xl">
               Phase {currentPage + 1} <span className="text-slate-500">/ {phases.length}</span>
             </span>
             <span className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-mono">
               Turn Page
             </span>
           </div>
           <button 
             onClick={() => turnPage('next')}
             disabled={currentPage === phases.length - 1 || isFlipping}
             className="group p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all shadow-lg"
           >
             <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

      </div>
    </section>
  );
}
