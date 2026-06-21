import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Freelance & Full-time
          </motion.div>

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
              <a href="https://dribbble.com/bhavana7382" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-400 transition-colors hover:scale-125 transform duration-300" title="Dribbble">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.457c-.227-.089-2.316-.867-4.707-.403 1.004 2.76 1.48 5.21 1.542 5.568 1.954-1.393 3.093-3.606 3.165-5.165zm-4.767 6.47c-.097-.503-.63-3.136-1.745-6.002-4.108 1.258-8.115 1.157-8.528 1.144-.015.4-.022.802-.022 1.2 0 4.195 2.85 7.72 6.702 8.708.384-2.183 1.472-4.088 3.593-5.05zm-9.356.611A9.771 9.771 0 0 1 2.213 13.82c.073.013 3.655.485 7.42-.714-.403-1.026-.849-2.13-1.282-3.238-5.318 1.528-9.426-.272-9.524-.316a9.897 9.897 0 0 0 7.18 10.978zm-1.89-13.43c.125.049 3.513 1.34 6.815-.178-.574-1.246-1.196-2.583-1.737-3.693C5.74 4.316 3.498 6.402 2.855 7.194zm6.98-2.617c.563 1.135 1.21 2.502 1.8 3.754 3.076-1.127 4.285-3.08 4.417-3.3a9.882 9.882 0 0 0-6.217-.454zm7.643 1.365c-.157.25-.1.173-3.167 3.328 3.52 1.05 3.11 3.568 3.12 3.633.02 0 .041-.01.062-.015a9.816 9.816 0 0 0 .5-5.91c.01-.012-.486-.88-.515-1.036z" /></svg>
              </a>
              <a href="https://www.behance.net/bhavanapappala" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-125 transform duration-300" title="Behance">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 10.009h-6v1.176h6v-1.176zm-13.298-2.592c1.884 0 3.307.72 3.307 2.68 0 1.521-.861 2.316-2.146 2.628 1.637.378 2.518 1.328 2.518 3.109 0 2.296-1.724 3.167-3.805 3.167h-5.576v-11.584h5.702zm-2.702 4.453h2.388c.957 0 1.579-.379 1.579-1.162 0-.804-.576-1.118-1.556-1.118h-2.411v2.28zm0 5.097h2.646c.996 0 1.745-.333 1.745-1.282 0-.882-.693-1.25-1.723-1.25h-2.668v2.532zm14.492-5.748c-2.311 0-3.921 1.545-3.921 4.14 0 2.68 1.554 4.248 4.093 4.248 1.776 0 2.996-.867 3.39-2.221h-1.632c-.314.544-.925.867-1.714.867-1.189 0-1.896-.642-2.029-1.84h5.45c.038-.382.057-.751.057-1.118 0-2.613-1.399-4.076-3.694-4.076zm-2.001 2.973c.123-1.077.781-1.758 1.942-1.758 1.114 0 1.743.681 1.868 1.758h-3.81z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/bhavana-pappala" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors hover:scale-125 transform duration-300" title="LinkedIn">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="mailto:pappalabhavana@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors hover:scale-125 transform duration-300" title="Email">
                <Mail className="w-6 h-6" />
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
