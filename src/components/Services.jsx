import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Search, Smartphone, Globe, Box, Eye, Terminal } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'UI Design',
      icon: Layout,
      color: 'text-indigo-400',
      bgColor: 'from-indigo-500/20 to-transparent',
      borderColor: 'border-indigo-500/30 hover:border-indigo-500/60',
      description: 'Crafting beautiful, pixel-perfect user interfaces that are clean, modern, and aligned with your brand style systems. Every detail is meticulously refined.',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      title: 'UX Research',
      icon: Search,
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500/20 to-transparent',
      borderColor: 'border-cyan-500/30 hover:border-cyan-500/60',
      description: 'Conducting usability test loops, constructing detailed personas, user flows, and mapping cognitive pathways.',
      span: 'md:col-span-2 md:row-span-1',
    },
    {
      title: 'App Design',
      icon: Smartphone,
      color: 'text-pink-400',
      bgColor: 'from-pink-500/20 to-transparent',
      borderColor: 'border-pink-500/30 hover:border-pink-500/60',
      description: 'High-converting native iOS & Android UI.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      title: 'Web Design',
      icon: Globe,
      color: 'text-purple-400',
      bgColor: 'from-purple-500/20 to-transparent',
      borderColor: 'border-purple-500/30 hover:border-purple-500/60',
      description: 'SaaS dashboards and marketing sites.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      title: 'Product Design',
      icon: Box,
      color: 'text-emerald-400',
      bgColor: 'from-emerald-500/20 to-transparent',
      borderColor: 'border-emerald-500/30 hover:border-emerald-500/60',
      description: 'Guiding end-to-end product design cycles, merging business value parameters with clean UX flows to create products people actually want to use.',
      span: 'md:col-span-2 md:row-span-1',
    },
    {
      title: 'Visual Design',
      icon: Eye,
      color: 'text-amber-400',
      bgColor: 'from-amber-500/20 to-transparent',
      borderColor: 'border-amber-500/30 hover:border-amber-500/60',
      description: 'Flyers, logos, and custom vectors.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      title: 'Development',
      icon: Terminal,
      color: 'text-rose-400',
      bgColor: 'from-rose-500/20 to-transparent',
      borderColor: 'border-rose-500/30 hover:border-rose-500/60',
      description: 'React, Tailwind CSS, and Vite.',
      span: 'md:col-span-1 md:row-span-1',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      
      {/* Background blobs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            Expertise
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            Creative Services I Provide
          </h2>
          <p className="text-slate-400 text-lg">
            From conducting foundational user research to structuring wireframes and compiling deployment-ready frontend files.
          </p>
        </motion.div>

        {/* Bento Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[auto] md:auto-rows-[240px] gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={index}
                className={`group relative rounded-3xl p-8 bg-white/5 backdrop-blur-sm border ${service.borderColor} transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] overflow-hidden text-left flex flex-col justify-between ${service.span}`}
              >
                {/* Background Gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    {/* Icon Frame */}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <Icon className={`w-7 h-7 ${service.color}`} />
                    </div>
                    {/* Optional indicator arrow */}
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-white/50">
                      →
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-display font-extrabold text-2xl text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className={`text-slate-400 leading-relaxed font-light ${service.span.includes('row-span-2') ? 'text-base sm:text-lg' : 'text-sm'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Micro accent block at card bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-500 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
