import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

import dribbbleIcon from '../assets/app_icons/mynaui--dribbble.svg';
import behanceIcon from '../assets/app_icons/uil--behance.svg';
import linkedinIcon from '../assets/app_icons/basil--linkedin-outline.svg';

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere visible args={[1, 100, 200]} scale={2.8}>
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.5}
          speed={2.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

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
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-90 mix-blend-screen pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ec4899" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={1.5} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10 pt-20">
        
        {/* Slogan & Info column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-8 flex flex-col items-start text-left space-y-6 pointer-events-auto"
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

        {/* Empty placeholder to keep the grid structure if needed, or we can just let it flow over the canvas */}
        <div className="lg:col-span-4 hidden lg:block pointer-events-none" />

      </div>

      {/* Down arrow link */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10 animate-bounce pointer-events-auto"
      >
        <button
          onClick={() => scrollToSection('story')}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all duration-300 shadow-lg"
          aria-label="Scroll Down"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </motion.div>

      {/* Gradient Vignette overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#030712]/40 to-[#030712] z-0" />
    </section>
  );
}
