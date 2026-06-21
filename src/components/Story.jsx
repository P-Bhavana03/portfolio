import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import { Search, PenTool, Palette, Layers, Code, ChevronRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Page = React.forwardRef(({ children, className = '', density = 'soft', isLeft }, ref) => {
  return (
    <div 
      className={`bg-[#0f111a] overflow-hidden relative ${className}`} 
      ref={ref} 
      data-density={density}
    >
      {/* Subtle paper noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      
      {/* Spine shadow for 3D depth */}
      <div className={`absolute inset-y-0 ${isLeft ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} w-12 md:w-16 from-black/90 via-black/30 to-transparent pointer-events-none z-10`} />
      
      {/* Edge lighting for paper */}
      <div className={`absolute inset-y-0 ${isLeft ? 'left-0' : 'right-0'} w-[1px] bg-white/10 z-10`} />
      
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
});

export default function Story() {
  const phases = [
    {
      title: 'UX Research & Strategy',
      subtitle: 'Understanding the problem',
      icon: Search,
      color: 'from-cyan-500 to-blue-500',
      description: 'Before drawing a single line, I dig deep into the target user base and business goals. I synthesize qualitative data, structure hierarchies, and map flows.',
      details: ['User Personas', 'Journeys & Flows', 'AI Synthesis']
    },
    {
      title: 'Wireframing & Media',
      subtitle: 'Building the skeleton',
      icon: PenTool,
      color: 'from-indigo-500 to-purple-500',
      description: 'I translate raw requirements into structured layouts. Low-fidelity wireframes establish hierarchy, paired with gathering foundational media assets.',
      details: ['Information Architecture', 'Lo-Fi Wireframes', 'Media Curation']
    },
    {
      title: 'Final Design',
      subtitle: 'Crafting brand identity',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      description: 'Aesthetics matter. I apply harmonious color palettes, custom logos, typography, and polished visual elements to transform raw wireframes into beautiful UI.',
      details: ['Hi-Fi Interface Design', 'Color Systems', 'Custom Iconography']
    },
    {
      title: 'Prototyping',
      subtitle: 'Breathing life into static designs',
      icon: Layers,
      color: 'from-orange-500 to-amber-500',
      description: 'I link the high-fidelity screens together using advanced prototyping. This includes testing micro-interactions and validating usability flows before coding.',
      details: ['Advanced Prototyping', 'Micro-Interactions', 'Flow Validation']
    },
    {
      title: 'Frontend Development',
      subtitle: 'Transforming designs to code',
      icon: Code,
      color: 'from-emerald-500 to-teal-500',
      description: 'I bridge the gap between Figma and code. I write clean, responsive frontend layouts using React, Tailwind CSS, and Vite, while handling deployments.',
      details: ['Responsive Fluid Layouts', 'React Architecture', 'Cloud Deployment']
    }
  ];

  const bookPages = [];

  // Page 0: Front Cover (Right Page when closed)
  bookPages.push(
    <Page key="cover-front" density="hard" isLeft={false} className="bg-gradient-to-br from-[#1c1d29] to-[#13141f] rounded-r-xl border-y border-r border-white/20 shadow-[5px_5px_30px_rgba(0,0,0,0.8)]">
       <div className="h-full flex flex-col items-center justify-center p-8 md:p-12 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 blur-[60px] rounded-full pointer-events-none" />
          
          <span className="text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest shadow-lg mb-8 relative z-10">
            The Workflow
          </span>
          
          <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight mb-6 leading-tight relative z-10">
            Interactive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Storybook</span>
          </h2>
          
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 relative z-10" />
          
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed max-w-[250px] relative z-10">
            Drag the edge of the page to open the book and explore my process.
          </p>
          
          <div className="absolute bottom-10 right-10 flex items-center gap-2 text-indigo-400/60 animate-pulse">
            <span className="text-[10px] uppercase tracking-widest font-mono">Drag</span>
            <ChevronRight className="w-4 h-4" />
          </div>
       </div>
    </Page>
  );

  // Page 1: Inside Front Cover (Left Page)
  bookPages.push(
    <Page key="cover-inside" isLeft={true} className="bg-[#0f1017]" />
  );

  // Pages 2 to 10: Content
  phases.forEach((phase, index) => {
     const Icon = phase.icon;
     
     // The Right Page (Phase Content)
     bookPages.push(
        <Page key={`phase-${index}-right`} isLeft={false} className="bg-[#13141f] border-r border-white/10">
           <div className="p-8 md:p-12 h-full flex flex-col relative">
              <div className="mb-10">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${phase.color} shadow-lg flex items-center justify-center mb-6 relative z-10`}>
                   <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-2 leading-tight relative z-10">{phase.title}</h3>
                <p className="text-indigo-400 text-[10px] md:text-xs tracking-widest uppercase font-mono relative z-10">{phase.subtitle}</p>
              </div>
              
              <div className="flex-1 relative z-10">
                 <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light mb-8">
                    {phase.description}
                 </p>
                 <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Core Action Items</h4>
                    {phase.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                         <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color} shadow-lg shrink-0`} />
                         <span className="text-slate-200 text-xs md:text-sm font-medium">{detail}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="mt-auto flex justify-between items-center text-slate-600 relative z-10">
                 <span className="text-[10px] uppercase tracking-widest font-mono">Page 0{index + 1}</span>
              </div>
           </div>
        </Page>
     );
     
     // The Left Page (Blank/Back of the previous page)
     if (index < phases.length - 1) {
        bookPages.push(
          <Page key={`phase-${index}-left`} isLeft={true} className="bg-[#0f1017] border-l border-white/10" />
        );
     }
  });

  // Page 11: Back Cover (Hard - Left Page when closed)
  bookPages.push(
    <Page key="cover-back" density="hard" isLeft={true} className="bg-gradient-to-tl from-[#1c1d29] to-[#13141f] rounded-l-xl border-y border-l border-white/20 shadow-[-5px_5px_30px_rgba(0,0,0,0.8)]">
       <div className="h-full flex items-center justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/10 blur-[40px] rounded-full pointer-events-none" />
          <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.02)] relative z-10">
            <span className="text-slate-500 font-display font-bold uppercase tracking-widest text-xs">End</span>
          </div>
       </div>
    </Page>
  );

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Generate some static random positions for floating particles so they don't jump on re-render
  const [particles] = useState(() => 
    Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }))
  );

  return (
    <section 
      id="story" 
      onMouseMove={handleMouseMove}
      className="py-24 relative overflow-hidden bg-[#030712] border-t border-white/5 min-h-screen flex flex-col justify-center"
    >
      {/* 3D Stars Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={1.5} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* 1. Dot Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* 2. Interactive Mouse Spotlight */}
      <motion.div 
        className="absolute pointer-events-none z-0 rounded-full blur-[100px]"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 200, mass: 0.5 }}
        style={{ 
          width: 500, 
          height: 500, 
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(236,72,153,0.05) 50%, transparent 70%)' 
        }}
      />

      {/* 3. Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '10s' }} />

      {/* 4. Floating Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{ left: particle.left, top: particle.top }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Book Container */}
        <div className="w-full flex justify-center perspective-[3000px]">
          <HTMLFlipBook 
            width={450} 
            height={650} 
            size="stretch"
            minWidth={300}
            maxWidth={500}
            minHeight={400}
            maxHeight={700}
            showCover={true}
            mobileScrollSupport={true}
            className="storybook-container drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {bookPages}
          </HTMLFlipBook>
        </div>

      </div>
    </section>
  );
}
