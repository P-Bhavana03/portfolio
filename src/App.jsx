import React, { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Tools from './components/Tools';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Force dark mode globally
    document.documentElement.classList.add('dark');
    document.documentElement.style.cursor = 'none'; // Hide default cursor if you want full custom cursor experience
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 w-full mesh-gradient-dark text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      <CustomCursor />
      


      {/* Navbar wrapper */}
      <Navbar isDark={true} toggleDark={() => {}} />

      {/* Main Container */}
      <main className="w-full relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Story Section */}
        <Story />

        {/* Tools Section */}
        <Tools />

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        {/* Skills Bento Grid Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Contact Section & Footer */}
        <Contact />
      </main>
    </div>
  );
}
