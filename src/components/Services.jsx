import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Search, Smartphone, Globe, Box, Eye, Terminal } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'UI Design',
      icon: Layout,
      color: 'text-indigo-400',
      bgColor: 'from-indigo-600/30 to-transparent',
      glowColor: 'bg-indigo-600/20',
      description: 'Crafting beautiful, pixel-perfect user interfaces that are clean, modern, and aligned with your brand style systems. Every detail is meticulously refined.',
    },
    {
      title: 'UX Research',
      icon: Search,
      color: 'text-cyan-400',
      bgColor: 'from-cyan-600/30 to-transparent',
      glowColor: 'bg-cyan-600/20',
      description: 'Conducting usability test loops, constructing detailed personas, user flows, and mapping cognitive pathways.',
    },
    {
      title: 'App Design',
      icon: Smartphone,
      color: 'text-pink-400',
      bgColor: 'from-pink-600/30 to-transparent',
      glowColor: 'bg-pink-600/20',
      description: 'High-converting native iOS & Android UI. Focusing heavily on touch targets, micro-interactions, and platform-specific design guidelines.',
    },
    {
      title: 'Web Design',
      icon: Globe,
      color: 'text-purple-400',
      bgColor: 'from-purple-600/30 to-transparent',
      glowColor: 'bg-purple-600/20',
      description: 'SaaS dashboards and high-conversion marketing sites. Building layouts that balance aesthetic beauty with clear user conversion funnels.',
    },
    {
      title: 'Product Design',
      icon: Box,
      color: 'text-emerald-400',
      bgColor: 'from-emerald-600/30 to-transparent',
      glowColor: 'bg-emerald-600/20',
      description: 'Guiding end-to-end product design cycles, merging business value parameters with clean UX flows to create products people actually want to use.',
    },
    {
      title: 'Visual Design',
      icon: Eye,
      color: 'text-amber-400',
      bgColor: 'from-amber-600/30 to-transparent',
      glowColor: 'bg-amber-600/20',
      description: 'Flyers, logos, custom vectors, and branding packages. Ensuring your visual identity is cohesive and memorable across all mediums.',
    },
    {
      title: 'Development',
      icon: Terminal,
      color: 'text-rose-400',
      bgColor: 'from-rose-600/30 to-transparent',
      glowColor: 'bg-rose-600/20',
      description: 'Translating designs into clean code using React, Tailwind CSS, and Vite. I bridge the gap between Figma mockups and fully responsive production apps.',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0a0a0f] border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              Expertise
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Creative Services <br className="hidden md:block" /> I Provide.
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
            From foundational user research to structuring wireframes and compiling deployment-ready frontend files.
          </p>
        </motion.div>

        {/* The Cinematic Split-Screen Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
          
          {/* Left Panel: The Index (Typography List) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-2 lg:space-y-4">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div 
                  key={index} 
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`
                    relative group py-4 lg:py-6 cursor-pointer border-b border-white/5 last:border-transparent
                    transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                    ${isActive ? 'pl-8 lg:pl-12' : 'pl-0 hover:pl-4'}
                  `}
                >
                  {/* Active Indicator Line */}
                  <div 
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 rounded-full bg-gradient-to-b ${service.bgColor.replace('from-', 'from-').replace('/30', '')} transition-all duration-500`}
                    style={{ opacity: isActive ? 1 : 0, height: isActive ? '60%' : '0%' }}
                  />
                  
                  <h3 
                    className={`
                      font-display font-black text-3xl sm:text-4xl lg:text-[4rem] uppercase tracking-tighter leading-none
                      transition-all duration-500 ease-out
                      ${isActive ? 'text-white' : 'text-slate-700 group-hover:text-slate-500'}
                    `}
                  >
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Right Panel: The Stage (Interactive Display Area) */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center lg:sticky lg:top-32">
            
            {/* Dynamic Background Ambient Glow matching the active service */}
            <div 
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[100px] -z-10 transition-colors duration-700 ease-in-out ${services[activeService].glowColor}`} 
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="w-full bg-[#111116] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden"
              >
                {/* Decorative mesh inside the card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].bgColor} opacity-40 pointer-events-none`} />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  
                  {/* Service Icon */}
                  <div className="mb-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].bgColor} opacity-20 rounded-2xl`} />
                      {React.createElement(services[activeService].icon, { 
                        className: `w-8 h-8 sm:w-10 sm:h-10 ${services[activeService].color}` 
                      })}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest font-mono text-slate-500 mb-3 block">
                      0{activeService + 1} // Service Details
                    </span>
                    <h4 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 tracking-tight">
                      {services[activeService].title}
                    </h4>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                      {services[activeService].description}
                    </p>
                  </div>
                  
                </div>
              </motion.div>
            </AnimatePresence>
            
          </div>
        </div>

      </div>
    </section>
  );
}
