import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tools() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tools' },
    { id: 'design', label: 'Design & Prototyping' },
    { id: 'dev', label: 'Frontend Development' },
    { id: 'media', label: 'Creative Media & Editing' },
    { id: 'ai', label: 'AI & UX Research' },
  ];

  const tools = [
    {
      name: 'Figma',
      category: 'design',
      glow: 'hover:shadow-[0_0_30px_rgba(242,78,30,0.3)] hover:border-[#F24E1E]/50',
      textColor: 'text-[#F24E1E]',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C9.24 2 7 4.24 7 7c0 1.63.78 3.08 2 4-.79.62-1.45 1.4-1.84 2.32-.45.89-.66 1.83-.66 2.68 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.78-3.08-2-4 .79-.62 1.45-1.4 1.84-2.32.45-.89.66-1.83.66-2.68 0-2.76-2.24-5-5-5z" fill="none" />
          <path d="M9.5 7c0-1.38 1.12-2.5 2.5-2.5S14.5 5.62 14.5 7v5H9.5V7z" fill="#F24E1E" />
          <path d="M7 17c0-1.38 1.12-2.5 2.5-2.5h2.5v2.5c0 1.38-1.12 2.5-2.5 2.5S7 18.38 7 17z" fill="#0ACF83" />
          <path d="M12 12h2.5v2.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5V12z" fill="#19BCFE" />
          <path d="M12 7c0 1.38-1.12 2.5-2.5 2.5S7 8.38 7 7s1.12-2.5 2.5-2.5S12 5.62 12 7z" fill="#FF7262" />
          <path d="M17 7c0 1.38-1.12 2.5-2.5 2.5H12V4.5h2.5C15.88 4.5 17 5.62 17 7z" fill="#A259FF" />
        </svg>
      ),
      usage: 'This is my design home. I use Figma for structural layouts, design system variables, component building, vector logos, wireframes, and interactive click-through prototyping.',
    },
    {
      name: 'Framer',
      category: 'design',
      glow: 'hover:shadow-[0_0_30px_rgba(162,89,255,0.3)] hover:border-[#A259FF]/50',
      textColor: 'text-[#A259FF]',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2v8h8L12 18v-8H4L12 2z" />
          <path d="M12 18l8-8v8l-8 4v-4z" />
        </svg>
      ),
      usage: 'Advanced prototyping and micro-interactions. I use Framer to create dynamic physics-based design tests, interactive component sliders, page transitions, and ready-to-publish web components.',
    },
    {
      name: 'VS Code & Cursor',
      category: 'dev',
      glow: 'hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:border-blue-500/50',
      textColor: 'text-blue-400',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 5.5l14 14.5 5-2.5-19-15.5L1.5 5.5z" opacity="0.85" />
          <path d="M22.5 5.5l-6-2.5-12.5 12 4.5 4.5 14-14z" />
          <path d="M17.5 1.5L11 8.5l2.5 2.5 5-5 1-4.5z" opacity="0.7" />
        </svg>
      ),
      usage: 'My primary coding tools. I configure VS Code and Cursor for React, Tailwind, and JS file systems. I use Cursor’s semantic codebase context to quickly search files, write hooks, and review layouts.',
    },
    {
      name: 'Antigravity & Claude Code',
      category: 'dev',
      glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-emerald-500/50',
      textColor: 'text-emerald-400',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z" />
          <circle cx="12" cy="13" r="2.5" />
        </svg>
      ),
      usage: 'Advanced AI pair-programming and development environments. I use them to draft component files, build layouts, debug state handlers, clean up lint problems, and speed up UI creation.',
    },
    {
      name: 'Canva & Graphic Design',
      category: 'media',
      glow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:border-teal-500/50',
      textColor: 'text-teal-400',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6" />
          <path d="M15 12h-6" />
        </svg>
      ),
      usage: 'Quick brochures, flyers, banners, social media marketing templates, and presentation assets. I blend Figma and Canva to deliver swift layouts for product launches and panel prints.',
    },
    {
      name: 'GIMP',
      category: 'media',
      glow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:border-yellow-500/50',
      textColor: 'text-yellow-500',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3a9 9 0 0 0-9 9c0 2.5 1 4.8 2.6 6.4L12 12l6.4 6.4c1.6-1.6 2.6-3.9 2.6-6.4a9 9 0 0 0-9-9z" />
          <circle cx="9" cy="9" r="1.5" fill="currentColor" />
          <circle cx="15" cy="9" r="1.5" fill="currentColor" />
        </svg>
      ),
      usage: 'Precision image editing. I use GIMP for heavy raster adjustments, asset slicing, background removal, custom alpha masks, product photo grading, and creating mockups.',
    },
    {
      name: 'DaVinci & Clipchamp',
      category: 'media',
      glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:border-red-500/50',
      textColor: 'text-red-500',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8" cy="8" r="4" />
          <circle cx="16" cy="8" r="4" />
          <circle cx="12" cy="16" r="4" />
          <path d="M8 8l4 8 4-8" />
        </svg>
      ),
      usage: 'Video post-production. I edit product screen recordings, compile clean promo ads, build title overlays, apply keyframe micro-zooms, and composite voiceovers for product demo videos.',
    },
    {
      name: 'ChatGPT & UX Research',
      category: 'ai',
      glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-emerald-500/50',
      textColor: 'text-emerald-400',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" opacity="0.15" />
          <path d="M12 9c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1zm0-4c2.8 0 5 2.2 5 5v1h1.5c1.4 0 2.5 1.1 2.5 2.5S19.9 16 18.5 16H17v1c0 2.8-2.2 5-5 5s-5-2.2-5-5v-1H5.5C4.1 16 3 14.9 3 13.5S4.1 11 5.5 11H7v-1c0-2.8 2.2-5 5-5zm0-2C7.6 3 4 6.6 4 11c0 1.2.3 2.3.8 3.3C3.6 15 3 16.4 3 18c0 2.8 2.2 5 5 5h1v-1.5c0-1.4 1.1-2.5 2.5-2.5H13v1.5c0 1.4 1.1 2.5 2.5 2.5h1c2.8 0 5-2.2 5-5 0-1.6-.6-3-1.8-3.7.5-1 .8-2.1.8-3.3 0-4.4-3.6-8-8-8z" />
        </svg>
      ),
      usage: 'My cognitive research partner. I prompt ChatGPT to map structured user flows, draft comparative UX interview templates, write design survey outlines, and summarize key design research trends.',
    },
    {
      name: 'Gemini',
      category: 'ai',
      glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:border-cyan-400/50',
      textColor: 'text-cyan-400',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" />
          <path d="M19 15l1.2 2.8L23 19l-2.8 1.2L19 23l-1.2-2.8L15 19l2.8-1.2L19 15z" opacity="0.8" />
        </svg>
      ),
      usage: 'I use Gemini to brainstorm interactive feature lists, map layout hierarchies, refine user-facing web copy, generate design artifact proposals, and structure project case studies.',
    },
    {
      name: 'Google Labs Flow',
      category: 'ai',
      glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:border-pink-500/50',
      textColor: 'text-pink-500',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 22V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12" />
          <circle cx="12" cy="10" r="2" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      ),
      usage: 'Creative graphic asset pipeline. I use it to generate custom 3D abstract imagery, abstract vector backgrounds, holographic icons, and illustration mockups to integrate into web designs.',
    },
  ];

  const filteredTools = activeFilter === 'all'
    ? tools
    : tools.filter(tool => tool.category === activeFilter);

  return (
    <section id="tools" className="py-24 relative overflow-hidden bg-[#030712] border-t border-white/5">
      
      {/* Background neon glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-pink-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 uppercase tracking-widest shadow-[0_0_15px_rgba(236,72,153,0.15)]">
            The Toolkit
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            Dedicated Tools & Workflow
          </h2>
          <p className="text-slate-400 text-lg">
            A designer is only as good as their command over their tools. Here is the software and AI workflow I use daily at work.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`relative px-6 py-2.5 rounded-full font-display text-sm font-bold border transition-all duration-300 cursor-pointer overflow-hidden ${
                activeFilter === category.id
                  ? 'text-white border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                  : 'text-slate-400 border-white/10 hover:text-white hover:border-white/30 bg-white/5'
              }`}
            >
              {activeFilter === category.id && (
                <motion.div 
                  layoutId="activeFilterBg" 
                  className="absolute inset-0 bg-indigo-600 -z-10" 
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Tools Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={tool.name}
                className={`group rounded-3xl p-8 bg-white/5 backdrop-blur-md border border-white/10 text-left transition-all duration-500 ${tool.glow}`}
              >
                {/* Tool top header (Icon & Title) */}
                <div className="flex items-center gap-5 mb-6">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 rounded-2xl bg-slate-900 border border-white/5 shadow-inner flex items-center justify-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                    {tool.logo}
                  </motion.div>
                  <div>
                    <h3 className="font-display font-black text-2xl text-white tracking-wide">
                      {tool.name}
                    </h3>
                    <span className={`text-[10px] font-bold uppercase tracking-widest font-mono mt-1 block ${tool.textColor}`}>
                      {tool.category === 'design' && 'Design'}
                      {tool.category === 'dev' && 'Development'}
                      {tool.category === 'media' && 'Creative Media'}
                      {tool.category === 'ai' && 'AI & Research'}
                    </span>
                  </div>
                </div>

                {/* Tool usage details */}
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {tool.usage}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
