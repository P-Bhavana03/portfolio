import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShoppingCart, Brain, Radio, Zap, Cpu, ArrowUpRight, X } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'BioPulse Monitor',
      domain: 'Biomedical & Healthcare',
      category: 'design',
      tag: 'UI/UX Design',
      icon: Activity,
      color: 'from-emerald-500 to-teal-500 text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      summary: 'Designed tablet and desktop dashboards for real-time biomedical patient monitoring, showing vitals graphs and critical warnings.',
      details: 'I structured the user experience to be zero-latency and highly scannable for hospital emergency rooms. Handled research phases for cognitive load limitations of physicians on night shifts.',
      tools: ['Figma', 'UX Research', 'DaVinci Resolve', 'GIMP'],
      features: ['Real-time cardiogram graph layout', 'High-contrast alarms design', 'Doctor-to-Nurse notification paths']
    },
    {
      id: 2,
      title: 'NexShop E-Commerce',
      domain: 'E-Commerce Platforms',
      category: 'dev',
      tag: 'UX Design & Dev',
      icon: ShoppingCart,
      color: 'from-indigo-500 to-blue-500 text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]',
      summary: 'Designed and developed a premium checkout workflow for consumer shopping, lowering cart abandonment rates by 18%.',
      details: 'Implemented the frontend using React and Tailwind CSS. Built custom micro-interactions for adding items to the cart, editing payment methods, and reviewing delivery stages.',
      tools: ['VS Code', 'React', 'Framer', 'Tailwind CSS', 'Git'],
      features: ['One-click payment interface', 'Interactive cart slider', 'Dynamic discount checkout codes']
    },
    {
      id: 3,
      title: 'Sentient.AI Playground',
      domain: 'Artificial Intelligence',
      category: 'design',
      tag: 'Product Design',
      icon: Brain,
      color: 'from-pink-500 to-purple-500 text-pink-400 bg-pink-500/10 border-pink-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
      summary: 'Designed an interactive interface for prompting LLMs, reviewing tokens, and comparing output models side-by-side.',
      details: 'I created a modular workspace layout. Users can adjust parameters (temperature, Top-P) in sidebar drawers and test context window inputs with code-blocks and formatted tables.',
      tools: ['Figma', 'UX Research', 'Gemini', 'Canva'],
      features: ['Dual-model output view', 'Dynamic token estimator tool', 'Custom developer settings panel']
    },
    {
      id: 4,
      title: 'SmartGrid Telemetry',
      domain: 'Energy Tech',
      category: 'dev',
      tag: 'UI Design & Dev',
      icon: Zap,
      color: 'from-amber-500 to-orange-500 text-amber-400 bg-amber-500/10 border-amber-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]',
      summary: 'Interactive web dashboards illustrating power supply grids, commercial battery parameters, and live outages.',
      details: 'Designed and developed the frontend system. Utilized clean reactive states to handle battery levels and show color-coded alert zones representing transformers under load.',
      tools: ['VS Code', 'Tailwind CSS', 'JavaScript', 'Figma'],
      features: ['Vector SVG grid layout', 'Transformer load indicators', 'Historical energy consumption charts']
    },
    {
      id: 5,
      title: 'IoT Ambient Controller',
      domain: 'Internet of Things',
      category: 'design',
      tag: 'Mobile App Design',
      icon: Radio,
      color: 'from-cyan-500 to-blue-500 text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
      summary: 'Mobile app UI designed for controlling ambient smart devices, air purifiers, and home temperature schedules.',
      details: 'Created high-fidelity mobile frames in dark and light modes. Configured custom color pickers and slide-to-adjust radial selectors representing fan speeds.',
      tools: ['Figma', 'Framer', 'Google Labs Flow', 'Canva'],
      features: ['Radial thermostat selector', 'Smart device group panels', 'Automated ambient scene scheduler']
    },
    {
      id: 6,
      title: 'Telemetry Board Viewer',
      domain: 'Embedded Systems',
      category: 'dev',
      tag: 'Front-End Dev',
      icon: Cpu,
      color: 'from-rose-500 to-pink-500 text-rose-400 bg-rose-500/10 border-rose-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]',
      summary: 'Telemetry viewer app developed to plot micro-controller sensor logs, voltages, and motor speeds.',
      details: 'Built a light web interface to capture serial logs. Parsed data blocks into real-time visual charts to help hardware engineers calibrate motor telemetry parameters during test phases.',
      tools: ['Antigravity', 'HTML/CSS', 'JavaScript', 'Git & GitHub'],
      features: ['Live terminal log console', 'Parsed graph plots', 'Calibration modifier controls']
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

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

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-3 mb-16"
        >
          {['all', 'design', 'dev'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-6 py-2.5 rounded-full font-display text-sm font-bold border transition-all duration-300 cursor-pointer overflow-hidden ${
                activeFilter === filter
                  ? 'text-white border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                  : 'text-slate-400 border-white/10 hover:text-white hover:border-white/30 bg-white/5'
              }`}
            >
              {activeFilter === filter && (
                <motion.div 
                  layoutId="activeProjFilter" 
                  className="absolute inset-0 bg-indigo-600 -z-10" 
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {filter === 'all' ? 'All Work' : filter === 'design' ? 'UI/UX Design' : 'Design & Dev'}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  layout
                  layoutId={`project-${project.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group rounded-3xl p-8 bg-white/5 backdrop-blur-md border border-white/10 text-left transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 ${project.glow} cursor-pointer flex flex-col justify-between overflow-hidden relative`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.color} opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Domain Tag Bar */}
                    <div className="flex items-center justify-between mb-8">
                      <span className={`text-[10px] font-bold font-mono px-3 py-1.5 rounded-full border ${project.color}`}>
                        {project.tag}
                      </span>
                      <span className="text-xs text-slate-500 font-mono font-medium tracking-widest">
                        0{project.id}
                      </span>
                    </div>

                    {/* Icon Header */}
                    <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <Icon className={`w-7 h-7 ${project.color.split(' ')[2]}`} />
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300 tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium font-mono uppercase tracking-widest mb-4">
                      {project.domain}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs text-indigo-400 font-bold tracking-widest uppercase relative z-10">
                    <span>View Details</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

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
              layoutId={`project-${selectedProject.id}`}
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
                  <span className={`inline-block text-xs font-mono font-bold px-4 py-1.5 rounded-full border ${selectedProject.color}`}>
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
                          <span className={`w-2 h-2 rounded-full shrink-0 ${selectedProject.color.split(' ')[0].replace('from-', 'bg-')}`} />
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
