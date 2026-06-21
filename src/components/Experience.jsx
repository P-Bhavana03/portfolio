import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle, ChevronLeft, ChevronRight, Briefcase, Compass, Rocket } from 'lucide-react';

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  // Define the faces of the flip card (removed Career Summary)
  const faces = [
    {
      id: 'front',
      title: 'UI/UX Designer',
      subtitle: 'Smart Rotamach Private Limited',
      period: 'Nov 2025 - Present',
      color: 'indigo',
      icon: Briefcase,
      content: (
        <>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
            Owner of the end-to-end design lifecycle for physical products and web dashboards. Working at the intersection of UI, graphics, and frontend code.
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Designed responsive marketing and telemetry websites.',
              'Structured complete UI screens for native mobile apps.',
              'Designed branding collateral (logos, banners, prints).',
              'Created high-fidelity 3D product demo videos.'
            ].map((bullet, idx) => (
              <div key={idx} className="flex gap-3 items-start group">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-500 mt-1 shrink-0" />
                <span className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">{bullet}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {['Figma', 'React', 'Video Production', 'Print Media'].map((skill, i) => (
              <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[10px] font-mono tracking-wide">
                {skill}
              </span>
            ))}
          </div>
        </>
      )
    },
    {
      id: 'right',
      title: 'Freelance Designer',
      subtitle: 'Intimate Design Studios',
      period: 'Aug 2025 - Oct 2025',
      color: 'emerald',
      icon: Compass,
      content: (
        <>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
            Contracted to establish the digital portfolio and presence for an aesthetic creative design studio.
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Designed the core website mockup reflecting studio ideals.',
              'Developed the responsive website with 99.9% layout fidelity.',
              'Structured graphic layouts and adjusted product photograph assets for digital grids.'
            ].map((bullet, idx) => (
              <div key={idx} className="flex gap-3 items-start group">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" />
                <span className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">{bullet}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {['UI/UX Design', 'Web Development', 'GIMP'].map((skill, i) => (
              <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[10px] font-mono tracking-wide">
                {skill}
              </span>
            ))}
          </div>
        </>
      )
    },
    {
      id: 'back',
      title: 'Future Endeavors',
      subtitle: 'Open to Opportunities',
      period: '2026 and Beyond',
      color: 'pink',
      icon: Rocket,
      content: (
        <>
          <div className="flex flex-col items-center justify-center h-full text-center pb-10">
            <div className="w-20 h-20 rounded-full bg-pink-500/20 flex items-center justify-center border border-pink-500/50 mb-6 shadow-[0_0_30px_rgba(236,72,153,0.3)] animate-pulse">
              <Rocket className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-xs">
              Actively seeking the next great challenge. I am open to roles involving frontend engineering, advanced UI/UX architecture, and interactive web experiences.
            </p>
            <button className="px-6 py-2.5 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Contact Me
            </button>
          </div>
        </>
      )
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % faces.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + faces.length) % faces.length);
  };

  const activeFace = faces[activeIndex];
  const Icon = activeFace.icon;

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-[#030712] border-t border-white/5 flex flex-col items-center justify-center min-h-[900px]">
      
      {/* Deep Space Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center z-10 w-full px-4 mb-24">
        <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.15)] mb-4 inline-block">
          The 3D Experience
        </span>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-2">
          Career Timeline
        </h2>
        <p className="text-slate-400 text-sm md:text-base">Flip the card to explore my professional history.</p>
      </div>

      {/* The 3D Flipping Card Scene */}
      <div className="relative w-full max-w-[1000px] flex items-center justify-center px-4 md:px-12">
        
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className="hidden md:flex w-14 h-14 rounded-full bg-white/5 border border-white/10 items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group shrink-0 mr-8 z-20"
        >
          <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
        </button>

        {/* Scene Container providing 3D perspective */}
        <div 
          className="relative w-full max-w-[450px]" 
          style={{ perspective: '1500px' }}
        >
          {/* AnimatePresence handles the smooth flip transition between cards */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              // Starts rotated 90 degrees (invisible)
              initial={{ rotateY: direction === 1 ? 90 : -90, opacity: 0, scale: 0.9 }}
              // Flips to 0 degrees (front facing)
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              // Flips away to 90 degrees
              exit={{ rotateY: direction === 1 ? -90 : 90, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`w-full min-h-[550px] p-8 md:p-10 flex flex-col justify-start text-left
                rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl bg-black/80
                bg-gradient-to-br from-white/[0.05] to-transparent
              `}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Internal Glow for Active Face */}
              <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-20 pointer-events-none ${
                activeFace.color === 'indigo' ? 'bg-indigo-500' :
                activeFace.color === 'emerald' ? 'bg-emerald-500' :
                activeFace.color === 'pink' ? 'bg-pink-500' : 'bg-cyan-500'
              }`} />

              {/* Header content */}
              <div className="relative z-10 flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div>
                  <h3 className="font-display font-black text-2xl text-white tracking-wide mb-1">
                    {activeFace.title}
                  </h3>
                  <div className="font-mono text-[10px] sm:text-xs text-indigo-400 font-bold uppercase tracking-widest mb-1">
                    {activeFace.subtitle}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeFace.period}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-slate-400" />
                </div>
              </div>

              {/* Body content */}
              <div className="relative z-10 flex-grow flex flex-col">
                {activeFace.content}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className="hidden md:flex w-14 h-14 rounded-full bg-white/5 border border-white/10 items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group shrink-0 ml-8 z-20"
        >
          <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
        </button>

      </div>

      {/* Mobile Controls (shown only on small screens below the card) */}
      <div className="flex md:hidden items-center gap-8 mt-12">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group"
        >
          <ChevronLeft className="w-6 h-6 text-slate-400" />
        </button>
        
        <div className="flex items-center gap-3">
          {faces.map((_, idx) => (
            <div 
              key={idx}
              className={`transition-all duration-500 rounded-full ${
                activeIndex === idx ? 'w-6 h-2 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'w-2 h-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group"
        >
          <ChevronRight className="w-6 h-6 text-slate-400" />
        </button>
      </div>

    </section>
  );
}
