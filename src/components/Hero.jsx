import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Pen, MousePointer2, Layers, Grid3x3, Monitor } from 'lucide-react';

import dribbbleIcon from '../assets/app_icons/mynaui--dribbble.svg';
import behanceIcon from '../assets/app_icons/uil--behance.svg';
import linkedinIcon from '../assets/app_icons/basil--linkedin-outline.svg';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* 3D Canvas Background - Stars only */}
      <div className="absolute inset-0 z-0 opacity-90 mix-blend-screen pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={1.5} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10 pt-20">
        
        {/* Slogan & Info column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6 pointer-events-auto"
        >
          {/* Heading */}
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-[5.5rem] text-white leading-[1.05] tracking-tight drop-shadow-2xl">
            I design digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 filter drop-shadow-lg">
              experiences
            </span> <br />
            that feel alive.
          </h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-lg sm:text-2xl max-w-2xl font-light leading-relaxed backdrop-blur-sm bg-slate-950/30 p-4 rounded-2xl border border-slate-800/50 shadow-xl"
          >
            Hi, I'm <strong className="text-white font-semibold tracking-wide">Bhavana Pappala</strong>. Primarily a UI/UX Designer, I also code frontend apps, craft graphics, and edit video. I blend creative psychology with immersive aesthetics.
          </motion.p>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-5 pt-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 rounded-full font-display font-bold text-white overflow-hidden bg-slate-900 border border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                Explore My Work
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-full font-display font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] tracking-wide cursor-pointer"
            >
              Let's Talk
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6 pt-8 w-full"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Connect
            </span>
            <div className="flex items-center gap-5">
              <a href="https://dribbble.com/bhavana7382" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-400 transition-colors hover:scale-125 transform duration-300 flex items-center justify-center" title="Dribbble">
                <img src={dribbbleIcon} alt="Dribbble" className="w-6 h-6 invert opacity-70 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.behance.net/bhavanapappala" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-125 transform duration-300 flex items-center justify-center" title="Behance">
                <img src={behanceIcon} alt="Behance" className="w-6 h-6 invert opacity-70 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/bhavana-pappala" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors hover:scale-125 transform duration-300 flex items-center justify-center" title="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 invert opacity-70 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Creative UI/UX Design Composition */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-5 hidden lg:flex items-center justify-center relative pointer-events-none"
          style={{ minHeight: '550px' }}
        >
          {/* Ambient glow behind the composition */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-pink-500/5 to-cyan-500/10 rounded-full blur-[100px]" />

          {/* Main Phone Mockup */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="relative z-20"
          >
            <div className="w-[220px] h-[440px] rounded-[2.5rem] bg-gradient-to-b from-slate-800/80 to-slate-900/90 border-2 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(99,102,241,0.15)] backdrop-blur-xl overflow-hidden">
              {/* Phone Notch */}
              <div className="mx-auto mt-3 w-20 h-5 bg-black rounded-full" />
              
              {/* Phone Screen Content - Mini UI */}
              <div className="p-4 mt-3 space-y-3">
                {/* Mini Header */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-2 bg-white/30 rounded-full" />
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    <div className="w-2 h-2 rounded-full bg-pink-400" />
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                </div>
                
                {/* Mini Hero Image Area */}
                <div className="w-full h-24 rounded-xl bg-gradient-to-br from-indigo-500/30 to-pink-500/20 border border-white/5 flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white/20" />
                </div>
                
                {/* Mini Text Lines */}
                <div className="space-y-2">
                  <div className="w-full h-2 bg-white/15 rounded-full" />
                  <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                  <div className="w-5/6 h-2 bg-white/8 rounded-full" />
                </div>
                
                {/* Mini Cards */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="h-16 rounded-lg bg-indigo-500/10 border border-indigo-500/20 p-2">
                    <div className="w-4 h-4 rounded bg-indigo-400/30 mb-1" />
                    <div className="w-full h-1.5 bg-white/10 rounded-full" />
                  </div>
                  <div className="h-16 rounded-lg bg-pink-500/10 border border-pink-500/20 p-2">
                    <div className="w-4 h-4 rounded bg-pink-400/30 mb-1" />
                    <div className="w-full h-1.5 bg-white/10 rounded-full" />
                  </div>
                </div>
                
                {/* Mini Button */}
                <div className="w-full h-8 rounded-lg bg-gradient-to-r from-indigo-500/40 to-pink-500/40 border border-white/10 mt-1" />
                
                {/* Mini Nav Bar */}
                <div className="flex justify-around pt-2 mt-auto">
                  <div className="w-5 h-5 rounded-full bg-white/10" />
                  <div className="w-5 h-5 rounded-full bg-indigo-400/30" />
                  <div className="w-5 h-5 rounded-full bg-white/10" />
                  <div className="w-5 h-5 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Cursor */}
          <motion.div
            animate={{ x: [0, 15, -5, 0], y: [0, -10, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute top-16 right-8 z-30"
          >
            <div className="bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-xl p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <MousePointer2 className="w-5 h-5 text-white" />
            </div>
          </motion.div>

          {/* Floating Pen Tool */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="absolute bottom-20 right-4 z-30"
          >
            <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/10 backdrop-blur-md border border-pink-500/20 rounded-xl p-3 shadow-[0_8px_30px_rgba(236,72,153,0.15)]">
              <Pen className="w-5 h-5 text-pink-400" />
            </div>
          </motion.div>

          {/* Floating Layers Icon */}
          <motion.div
            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            className="absolute top-8 left-0 z-30"
          >
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 backdrop-blur-md border border-cyan-500/20 rounded-xl p-3 shadow-[0_8px_30px_rgba(6,182,212,0.15)]">
              <Layers className="w-5 h-5 text-cyan-400" />
            </div>
          </motion.div>

          {/* Floating Color Palette */}
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, -3, 3, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-32 left-[-20px] z-30"
          >
            <div className="bg-slate-800/70 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              <div className="w-5 h-5 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
              <div className="w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              <div className="w-5 h-5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>
          </motion.div>

          {/* Floating Grid/Wireframe Card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
            className="absolute top-36 right-[-10px] z-10"
          >
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)] w-[120px]">
              <Grid3x3 className="w-4 h-4 text-indigo-400 mb-2" />
              <div className="space-y-1.5">
                <div className="w-full h-1.5 bg-white/10 rounded-full" />
                <div className="w-3/4 h-1.5 bg-white/8 rounded-full" />
                <div className="grid grid-cols-2 gap-1 mt-2">
                  <div className="h-6 rounded bg-indigo-500/15 border border-indigo-500/10" />
                  <div className="h-6 rounded bg-white/5 border border-white/5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Typography Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.8 }}
            className="absolute bottom-4 right-16 z-10"
          >
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-1">Typography</span>
              <span className="font-display font-black text-lg text-white leading-none">Aa</span>
              <span className="font-light text-sm text-slate-400 ml-2">Inter</span>
            </div>
          </motion.div>

        </motion.div>

      </div>

      {/* Gradient Vignette overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#030712]/40 to-[#030712] z-0" />
    </section>
  );
}
