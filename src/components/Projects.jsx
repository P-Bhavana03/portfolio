import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShoppingCart, Brain, Radio, Zap, Cpu, ArrowUpRight, X } from 'lucide-react';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Healthcare',
      domain: 'Biomedical Patient Monitoring',
      tag: 'UI/UX Design',
      icon: Activity,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-400',
      summary: 'Designed tablet and desktop dashboards for real-time biomedical patient monitoring, showing vitals graphs and critical warnings.',
      details: 'I structured the user experience to be zero-latency and highly scannable for hospital emergency rooms. Handled research phases for cognitive load limitations of physicians on night shifts.',
      tools: ['Figma', 'UX Research', 'DaVinci Resolve', 'GIMP'],
      features: ['Real-time cardiogram graph layout', 'High-contrast alarms design', 'Doctor-to-Nurse notification paths']
    },
    {
      id: 2,
      title: 'E-Commerce',
      domain: 'Consumer Shopping',
      tag: 'UX Design & Dev',
      icon: ShoppingCart,
      color: 'from-indigo-500 to-blue-500',
      textColor: 'text-indigo-400',
      summary: 'Designed and developed a premium checkout workflow for consumer shopping, lowering cart abandonment rates by 18%.',
      details: 'Implemented the frontend using React and Tailwind CSS. Built custom micro-interactions for adding items to the cart, editing payment methods, and reviewing delivery stages.',
      tools: ['VS Code', 'React', 'Framer', 'Tailwind CSS', 'Git'],
      features: ['One-click payment interface', 'Interactive cart slider', 'Dynamic discount checkout codes']
    },
    {
      id: 3,
      title: 'Artificial Intelligence',
      domain: 'LLM Prompt Playground',
      tag: 'Product Design',
      icon: Brain,
      color: 'from-pink-500 to-purple-500',
      textColor: 'text-pink-400',
      summary: 'Designed an interactive interface for prompting LLMs, reviewing tokens, and comparing output models side-by-side.',
      details: 'I created a modular workspace layout. Users can adjust parameters (temperature, Top-P) in sidebar drawers and test context window inputs with code-blocks and formatted tables.',
      tools: ['Figma', 'UX Research', 'Gemini', 'Canva'],
      features: ['Dual-model output view', 'Dynamic token estimator tool', 'Custom developer settings panel']
    },
    {
      id: 4,
      title: 'Energy',
      domain: 'SmartGrid Telemetry',
      tag: 'UI Design & Dev',
      icon: Zap,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-400',
      summary: 'Interactive web dashboards illustrating power supply grids, commercial battery parameters, and live outages.',
      details: 'Designed and developed the frontend system. Utilized clean reactive states to handle battery levels and show color-coded alert zones representing transformers under load.',
      tools: ['VS Code', 'Tailwind CSS', 'JavaScript', 'Figma'],
      features: ['Vector SVG grid layout', 'Transformer load indicators', 'Historical energy consumption charts']
    },
    {
      id: 5,
      title: 'IoT',
      domain: 'Ambient Controller',
      tag: 'Mobile App Design',
      icon: Radio,
      color: 'from-cyan-500 to-blue-500',
      textColor: 'text-cyan-400',
      summary: 'Mobile app UI designed for controlling ambient smart devices, air purifiers, and home temperature schedules.',
      details: 'Created high-fidelity mobile frames in dark and light modes. Configured custom color pickers and slide-to-adjust radial selectors representing fan speeds.',
      tools: ['Figma', 'Framer', 'Google Labs Flow', 'Canva'],
      features: ['Radial thermostat selector', 'Smart device group panels', 'Automated ambient scene scheduler']
    },
    {
      id: 6,
      title: 'Embedded Systems',
      domain: 'Telemetry Board Viewer',
      tag: 'Front-End Dev',
      icon: Cpu,
      color: 'from-rose-500 to-pink-500',
      textColor: 'text-rose-400',
      summary: 'Telemetry viewer app developed to plot micro-controller sensor logs, voltages, and motor speeds.',
      details: 'Built a light web interface to capture serial logs. Parsed data blocks into real-time visual charts to help hardware engineers calibrate motor telemetry parameters during test phases.',
      tools: ['Antigravity', 'HTML/CSS', 'JavaScript', 'Git & GitHub'],
      features: ['Live terminal log console', 'Parsed graph plots', 'Calibration modifier controls']
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030712] border-t border-white/5">
      
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            Case Studies
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            Work Across Diverse Domains
          </h2>
          <p className="text-slate-400 text-lg">
            A cinematic showcase of my recent design and development projects, resolving complexity in healthcare, AI, IoT, and engineering.
          </p>
        </motion.div>

        {/* The Interactive Sliding Accordion (Projects) */}
        <div className="flex flex-col md:flex-row w-full h-[650px] md:h-[500px] gap-2 lg:gap-3 p-2 rounded-[2rem] bg-white/[0.02] border border-white/5 shadow-2xl backdrop-blur-sm">
          {projects.map((project, index) => {
            const isActive = hoveredIndex === index;
            const Icon = project.icon;
            
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setSelectedProject(project)}
                className={`
                  relative overflow-hidden rounded-[1.5rem] cursor-pointer group
                  transition-[flex,border-color,background-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isActive ? 'bg-[#0f111a] border border-white/10 shadow-2xl' : 'bg-black/20 border border-transparent hover:bg-white/5'}
                `}
                style={{ flex: isActive ? 6 : 1 }}
              >
                
                {/* Colored background glow that reveals on hover/active */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-500 ${isActive ? 'opacity-20' : 'opacity-0'}`} 
                />

                {/* Content Wrapper */}
                <div className={`absolute inset-0 flex ${isActive ? 'flex-col justify-between items-start p-6 md:p-8' : 'flex-row md:flex-col justify-center items-center'} w-full h-full`}>
                  
                  {/* Icon */}
                  <div className={`shrink-0 flex items-center justify-center transition-transform duration-500 ${isActive ? 'w-14 h-14 rounded-2xl bg-black/50 border border-white/10 mb-4' : 'w-10 h-10 rounded-full bg-white/5 border border-white/5 opacity-50 group-hover:scale-110'}`}>
                    <Icon className={`w-6 h-6 ${isActive ? project.textColor : 'text-slate-500'}`} />
                  </div>

                  {/* Text Details - Crossfades and slides in when active */}
                  <div 
                    className={`flex flex-col transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 md:translate-y-8 translate-x-8 md:translate-x-0'}`}
                    style={{ position: isActive ? 'relative' : 'absolute', pointerEvents: isActive ? 'auto' : 'none' }}
                  >
                    <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest font-mono ${project.textColor} drop-shadow-md mb-2`}>
                      {project.tag}
                    </span>
                    <h3 className="font-display font-black text-2xl lg:text-3xl xl:text-4xl text-white tracking-wide mb-3 drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-sm hidden md:block">
                      {project.summary}
                    </p>
                    
                    <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                      View Details <ArrowUpRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>

                  {/* Rotated ID for inactive state */}
                  {!isActive && (
                    <span className="hidden md:block absolute bottom-8 text-xs font-mono font-bold text-slate-600 rotate-[-90deg]">
                      0{project.id}
                    </span>
                  )}
                  {!isActive && (
                    <span className="md:hidden ml-4 text-xs font-mono font-bold text-slate-600">
                      0{project.id}
                    </span>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Cinematic Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 pointer-events-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#0a0a0a] rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl text-left overflow-hidden z-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${selectedProject.color} opacity-10 rounded-full blur-[80px] pointer-events-none`} />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-white/10 z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <div className="mb-10 space-y-4">
                  <span className={`inline-block text-xs font-mono font-bold px-4 py-1.5 rounded-full border border-white/10 ${selectedProject.textColor} bg-white/5`}>
                    {selectedProject.tag}
                  </span>
                  <h3 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500 font-mono">
                    {selectedProject.domain}
                  </p>
                </div>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 border-b border-white/10 pb-2">
                      Project Overview
                    </h4>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                      {selectedProject.details}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 border-b border-white/10 pb-2">
                      Key Deliverables
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 font-light">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                          <span className={`w-2 h-2 rounded-full shrink-0 bg-white`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 border-b border-white/10 pb-2">
                      Tools & Workflow
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-mono tracking-wide"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">
                    Project Case Study
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-white text-black hover:bg-slate-200 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
