import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Code, Sparkles, Globe } from 'lucide-react';

export default function Skills() {
  const designSkills = [
    'UI Design', 'UX Designing', 'UX Research', 'Graphic Design',
    'Logo Design', 'Wireframing', 'Prototyping', 'Responsive Design',
  ];

  const techSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS',
    'SQL', 'Git', 'GitHub', 'AWS Deployment', 'Framer Motion'
  ];

  const mediaSkills = [
    'Image Editing', 'Video Editing', 'Visual Production', 
    'Color Grading', 'Mockups', 'Vector Art'
  ];

  // Helper component for Marquee
  const MarqueeRow = ({ items, speed, direction = -1, colorClass, icon: Icon }) => {
    return (
      <div className="relative flex overflow-hidden py-4 -mx-6 sm:-mx-0 group">
        {/* Gradients for fading edges */}
        <div className="absolute top-0 left-0 w-24 sm:w-48 h-full bg-gradient-to-r from-[#030712] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 sm:w-48 h-full bg-gradient-to-l from-[#030712] to-transparent z-10" />

        <motion.div
          animate={{ x: direction === -1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: speed }}
          className="flex whitespace-nowrap w-max items-center"
        >
          {items.concat(items).map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 mx-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm cursor-default`}
            >
              {Icon && <Icon className={`w-5 h-5 ${colorClass}`} />}
              <span className="font-display font-bold text-lg text-slate-300 tracking-wide">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030712] border-t border-white/5">
      
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Core Talents
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            Infinite Skill Matrix
          </h2>
          <p className="text-slate-400 text-lg">
            A comprehensive matrix of design theory, frontend coding languages, and editing capabilities.
          </p>
        </motion.div>

        {/* Infinite Marquees */}
        <div className="space-y-6 sm:space-y-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <MarqueeRow items={designSkills} speed={35} direction={-1} colorClass="text-pink-400" icon={PenTool} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MarqueeRow items={techSkills} speed={40} direction={1} colorClass="text-cyan-400" icon={Code} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MarqueeRow items={mediaSkills} speed={30} direction={-1} colorClass="text-emerald-400" icon={Sparkles} />
          </motion.div>
        </div>

        {/* Bottom Feature Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 text-left transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/30 flex flex-col sm:flex-row gap-10 items-center group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/20">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-display font-black text-2xl text-white">
                Multi-Domain Integration
              </h3>
            </div>
            <p className="text-slate-400 text-base leading-relaxed font-light">
              Whether deploying layouts for energy telemetry grids or designing interfaces for medical heart monitors, I focus on the connection of user flows, visual clarity, and clean backend databases.
            </p>
          </div>
          
          {/* Visual Mini Board */}
          <div className="w-full sm:w-64 p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col gap-3 font-mono text-xs text-slate-400 relative z-10 shadow-inner">
            <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 group-hover:border-emerald-500/30 transition-colors">
              <span className="font-bold text-white tracking-wide">AWS Deploy</span>
              <span className="text-emerald-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                ONLINE
              </span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 group-hover:border-indigo-500/30 transition-colors">
              <span className="font-bold text-white tracking-wide">Git Commits</span>
              <span className="text-indigo-400">12+ Daily</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 group-hover:border-cyan-500/30 transition-colors">
              <span className="font-bold text-white tracking-wide">SQL Queries</span>
              <span className="text-cyan-400">Optimized</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
