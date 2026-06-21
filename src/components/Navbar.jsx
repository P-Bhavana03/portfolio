import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ isDark, toggleDark }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Story', target: 'story' },
    { label: 'Tools', target: 'tools' },
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const scrollPosition = window.scrollY + 150;
      const sections = ['hero', ...navItems.map(item => item.target), 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-transparent' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="cursor-pointer group flex items-center gap-1.5"
        >
          <span className="font-display font-extrabold text-xl tracking-tight text-gradient-indigo-pink">
            Bhavana
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 bg-transparent">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className={`font-display text-sm font-medium transition-all duration-300 ${
                activeSection === item.target
                  ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] scale-105'
                  : 'text-slate-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions (CTA) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-5 py-2.5 rounded-full font-display font-medium text-sm flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white shadow-md hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer"
          >
            Hire Me
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 transition-all"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 py-6 px-6 md:hidden shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className={`py-2 text-left font-display font-medium text-lg border-b border-slate-100 dark:border-slate-900 transition-all ${
                  activeSection === item.target
                    ? 'text-indigo-500 border-indigo-500/20'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-4 w-full py-3 rounded-xl font-display font-medium flex items-center justify-center gap-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
