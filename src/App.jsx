import React, { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import ToolsOrbit from './components/ToolsOrbit';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Force dark mode globally
    // Ensure scroll is at top on load
    window.scrollTo(0, 0);  }, []);

  return (
    <div className="bg-[#030712] min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-hidden">
      


      {/* Navbar wrapper */}
      <Navbar isDark={true} toggleDark={() => {}} />

      {/* Main Container */}
      <main className="w-full relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Story Section */}
        <Story />

        {/* Tools Section */}
        <ToolsOrbit />

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
