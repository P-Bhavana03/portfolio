import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShoppingCart, Brain, Radio, Zap, ArrowRight, X, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: 'Healthcare',
      domain: 'Biomedical Patient Monitoring',
      tag: 'UI/UX Design',
      role: 'Lead Product Designer',
      icon: Activity,
      color: '#10b981',
      gradient: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-400',
      bgGlow: 'bg-emerald-500',
      metric: '0 Latency',
      metricLabel: 'Real-time vitals monitoring',
      challenge: 'Physicians on night shifts face high cognitive load. Existing patient monitors were cluttered, causing delayed reactions to critical warnings during emergency room spikes.',
      solution: 'Designed an ultra-clean tablet and desktop dashboard utilizing a zero-latency dark mode interface. Prioritized high-contrast alerts and scalable cardiogram graph layouts.',
      impact: 'Reduced critical alarm response time by 22% and significantly decreased visual fatigue reported by nurses during 12-hour shifts.',
      tools: ['Figma', 'UX Research', 'DaVinci Resolve', 'GIMP'],
    },
    {
      id: 2,
      title: 'E-Commerce',
      domain: 'Consumer Shopping',
      tag: 'UX Design & Dev',
      role: 'Senior UI Engineer',
      icon: ShoppingCart,
      color: '#6366f1',
      gradient: 'from-indigo-500 to-blue-500',
      textColor: 'text-indigo-400',
      bgGlow: 'bg-indigo-500',
      metric: '+18% Conv.',
      metricLabel: 'Checkout success rate',
      challenge: 'Cart abandonment was peaking at 68% on mobile devices due to a convoluted multi-step checkout process and unclear delivery pricing.',
      solution: 'Developed a seamless, single-page checkout workflow using React. Built custom micro-interactions for adding items, dynamic discount codes, and a visual delivery stage timeline.',
      impact: 'Lowered cart abandonment rates by 18% within the first month of launch, resulting in a 12% increase in monthly recurring revenue (MRR).',
      tools: ['VS Code', 'React', 'Tailwind CSS', 'Git'],
    },
    {
      id: 3,
      title: 'AI Play',
      domain: 'LLM Prompt Playground',
      tag: 'Product Design',
      role: 'Lead UI/UX Designer',
      icon: Brain,
      color: '#ec4899',
      gradient: 'from-pink-500 to-purple-500',
      textColor: 'text-pink-400',
      bgGlow: 'bg-pink-500',
      metric: 'Dual-View',
      metricLabel: 'Side-by-side model testing',
      challenge: 'AI developers lacked a unified workspace to test prompts across different LLMs simultaneously, forcing them to switch tabs and lose context.',
      solution: 'Designed a modular, side-by-side prompting workspace. Users can adjust parameters (temperature, Top-P) in collapsible sidebar drawers and view dynamic token estimates.',
      impact: 'Increased developer testing efficiency by 40%. The playground became the primary internal tool for prompt engineering within the company.',
      tools: ['Figma', 'UX Research', 'Gemini', 'Canva'],
    },
    {
      id: 4,
      title: 'IoT Mobile',
      domain: 'Ambient Controller',
      tag: 'Mobile App Design',
      role: 'Mobile UX Designer',
      icon: Radio,
      color: '#06b6d4',
      gradient: 'from-cyan-500 to-blue-500',
      textColor: 'text-cyan-400',
      bgGlow: 'bg-cyan-500',
      metric: '4.8/5 Stars',
      metricLabel: 'App store user rating',
      challenge: 'Users found existing smart home apps overly technical and difficult to navigate for simple tasks like adjusting fan speeds or setting schedules.',
      solution: 'Created highly intuitive, high-fidelity mobile frames featuring slide-to-adjust radial selectors and smart device group panels for single-tap ambient scene setting.',
      impact: 'Achieved a 4.8/5 app store rating. User testing showed a 50% reduction in time-on-task for setting up automated weekly home temperature schedules.',
      tools: ['Figma', 'Framer', 'Google Labs Flow'],
    },
    {
      id: 5,
      title: 'Energy Sys',
      domain: 'Grid & Telemetry',
      tag: 'UI Design & Dev',
      role: 'Frontend Architect',
      icon: Zap,
      color: '#f59e0b',
      gradient: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-400',
      bgGlow: 'bg-amber-500',
      metric: 'Live Sync',
      metricLabel: 'Real-time telemetry & grid loads',
      challenge: 'Engineers needed a unified interface bridging macro-level SmartGrid transformer loads with micro-level motor telemetry calibration logs.',
      solution: 'Developed a dual-purpose web dashboard. It features live SVG map layouts for the power grid and a built-in terminal block that parses raw serial logs into real-time calibration charts.',
      impact: 'Reduced outage detection speed by 35% and cut motor hardware calibration time from several hours down to just minutes.',
      tools: ['JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Figma'],
    }
  ];

  // Helper to calculate the fan positioning
  const getCardStyle = (index, isHovered, anyHovered) => {
    // Base layout: 5 cards
    const rotations = [-20, -10, 0, 10, 20];
    const yOffsets = [60, 20, 0, 20, 60];
    const xOffsets = [-240, -120, 0, 120, 240];
    
    // When hovered, straighten it out, bring it up, scale it
    if (isHovered) {
      return {
        rotate: 0,
        y: -40,
        x: xOffsets[index],
        scale: 1.05,
        zIndex: 50,
        opacity: 1
      };
    }
    
    // When something else is hovered, push non-hovered slightly down and dim them
    if (anyHovered) {
      return {
        rotate: rotations[index],
        y: yOffsets[index] + 40,
        x: xOffsets[index],
        scale: 0.95,
        zIndex: index,
        opacity: 0.5
      };
    }

    // Default state
    return {
      rotate: rotations[index],
      y: yOffsets[index],
      x: xOffsets[index],
      scale: 1,
      zIndex: index,
      opacity: 1
    };
  };

  return (
    <section id="projects" className="py-32 relative bg-[#030712] border-t border-white/5 overflow-hidden">
      
      {/* Dynamic Background Glow based on hover */}
      <div className="absolute inset-0 pointer-events-none transition-colors duration-700 ease-in-out">
        {hoveredProject !== null && (
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] transition-all duration-700 ease-in-out opacity-20"
            style={{ backgroundColor: projects[hoveredProject].color }}
          />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center flex flex-col items-center gap-4"
        >
          <span className="text-xs font-mono font-semibold px-4 py-1.5 rounded-full bg-white/5 text-slate-400 border border-white/10 uppercase tracking-widest inline-block shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            Selected Works
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white tracking-tight leading-[1.1]">
            Case Studies that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
              drive results.
            </span>
          </h2>
        </motion.div>

        {/* The Fan Spread Container */}
        <div className="relative w-full h-[550px] flex items-center justify-center mt-10 perspective-[1000px]">
          
          {projects.map((project, index) => {
            const isHovered = hoveredProject === index;
            const anyHovered = hoveredProject !== null;
            const style = getCardStyle(index, isHovered, anyHovered);
            const Icon = project.icon;
            
            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                initial={{ 
                  rotate: style.rotate, 
                  y: style.y + 200, 
                  x: style.x, 
                  opacity: 0 
                }}
                whileInView={{ 
                  rotate: style.rotate, 
                  y: style.y, 
                  x: style.x, 
                  opacity: style.opacity,
                  scale: style.scale,
                  zIndex: style.zIndex
                }}
                animate={{
                  rotate: style.rotate, 
                  y: style.y, 
                  x: style.x, 
                  opacity: style.opacity,
                  scale: style.scale,
                  zIndex: style.zIndex
                }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ 
                  type: "spring", 
                  damping: 20, 
                  stiffness: 100, 
                  mass: 1
                }}
                // We use origin bottom center so the cards fan out naturally from a base point
                className="absolute w-[280px] h-[400px] md:w-[320px] md:h-[460px] rounded-[2rem] cursor-pointer shadow-2xl origin-bottom"
              >
                {/* The Card Background/Glass */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/20 bg-[#0a0a0a] backdrop-blur-xl">
                  {/* Vibrant Gradient Background matching project color */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  
                  {/* Subtle inner shadow/highlight for 3D card feel */}
                  <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] pointer-events-none" />

                  {/* Card Content Container */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    
                    {/* Top: Icon & Title */}
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg border border-white/20`}>
                          <Icon className="w-7 h-7 text-white drop-shadow-md" />
                        </div>
                        <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest font-bold">
                          0{project.id}
                        </span>
                      </div>
                      
                      <h3 className="font-display font-black text-3xl text-white tracking-tight drop-shadow-md leading-none mb-2">
                        {project.title}
                      </h3>
                      <p className={`text-xs font-mono font-bold uppercase tracking-widest ${project.textColor} drop-shadow-sm`}>
                        {project.domain}
                      </p>
                    </div>

                    {/* Bottom: Impact Metric (Fades in more clearly on hover) */}
                    <div className={`transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'}`}>
                      <div className="text-[10px] uppercase tracking-widest font-mono text-white/60 mb-1">
                        Business Impact
                      </div>
                      <div className="font-display font-black text-4xl text-white drop-shadow-lg mb-4">
                        {project.metric}
                      </div>

                      {/* View Button */}
                      <button className={`w-full py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${isHovered ? 'shadow-[0_0_20px_rgba(255,255,255,0.3)]' : ''}`}>
                        Case Study <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
          
        </div>
      </div>

      {/* Structured Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl h-[90vh] sm:h-auto sm:max-h-[90vh] bg-[#050505] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col z-10"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${selectedProject.gradient}`} />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors cursor-pointer border border-white/20 z-20 group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="overflow-y-auto custom-scrollbar p-8 sm:p-12 h-full">
                <div className="max-w-3xl mb-16 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/20`}>
                      {React.createElement(selectedProject.icon, { className: "w-7 h-7 text-white" })}
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 uppercase tracking-widest">
                      {selectedProject.domain}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-4xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Role</div>
                      <div className="text-sm text-slate-300 font-medium">{selectedProject.role}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Discipline</div>
                      <div className="text-sm text-slate-300 font-medium">{selectedProject.tag}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Tools</div>
                      <div className="text-sm text-slate-300 font-medium">{selectedProject.tools.join(', ')}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
                  <div className="md:col-span-8 space-y-12">
                    <section>
                      <h4 className="flex items-center gap-3 font-display font-bold text-2xl text-white mb-4">
                        <span className={`w-3 h-3 rounded-full ${selectedProject.bgGlow} shadow-[0_0_15px_currentColor]`} />
                        The Challenge
                      </h4>
                      <p className="text-lg text-slate-400 font-light leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </section>
                    <section>
                      <h4 className="flex items-center gap-3 font-display font-bold text-2xl text-white mb-4">
                        <span className={`w-3 h-3 rounded-full bg-white/30`} />
                        The Solution
                      </h4>
                      <p className="text-lg text-slate-400 font-light leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </section>
                  </div>

                  <div className="md:col-span-4">
                    <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 sticky top-0 shadow-2xl relative overflow-hidden">
                      <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${selectedProject.bgGlow} opacity-10 rounded-full blur-[40px]`} />
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-6 relative z-10">
                        Business Impact
                      </h4>
                      <div className="mb-8 relative z-10">
                        <div className={`font-display font-black text-5xl ${selectedProject.textColor} tracking-tight mb-2 drop-shadow-md`}>
                          {selectedProject.metric}
                        </div>
                        <div className="text-sm text-slate-300 leading-snug">
                          {selectedProject.impact}
                        </div>
                      </div>
                      <button className={`relative z-10 w-full py-4 rounded-xl bg-gradient-to-r ${selectedProject.gradient} text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow`}>
                        Visit Live Project <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
