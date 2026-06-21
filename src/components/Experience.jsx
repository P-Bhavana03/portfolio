import React from 'react';
import { Briefcase, Calendar, Award, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'UI/UX Designer',
      company: 'Smart Rotamach Private Limited',
      period: 'Nov 2025 - Present',
      description: 'Owner of the end-to-end design lifecycle for physical products and web dashboards. Working at the intersection of UI, graphics, and frontend code.',
      bullets: [
        'Designed and developed multiple responsive marketing and telemetry websites.',
        'Structured complete UI screens for native mobile and tablet applications.',
        'Designed branding collateral including product logos, banners, flyers, panel prints, and brochures.',
        'Created high-fidelity 3D product demo videos and animated transition sequences.'
      ],
      skills: ['Figma', 'React', 'Video Production', 'Logo Design', 'Print Media']
    },
    {
      role: 'Freelance Designer & Developer',
      company: 'Intimate Design Studios',
      period: 'Aug 2025 - Oct 2025',
      description: 'Contracted to establish the digital portfolio and presence for an aesthetic creative design studio.',
      bullets: [
        'Designed the core website mockup reflecting the studio’s design ideals.',
        'Developed and deployed the responsive website, ensuring 99.9% layout fidelity with the Figma wireframes.',
        'Structured graphic layouts and adjusted product photograph assets for digital showcase grids.'
      ],
      skills: ['UI/UX Design', 'Web Development', 'Asset Manipulation', 'GIMP']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-t border-slate-200/40 dark:border-slate-800/40 bg-white dark:bg-slate-950">
      
      {/* Background circles */}
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase tracking-widest">
            Career Path
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            A chronological timeline of my career, showing design execution and development contributions.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Timeline Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          {/* Timeline nodes */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col sm:flex-row items-stretch ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}>
                  
                  {/* Timeline node icon indicator */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                    <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                  </div>

                  {/* Card Block */}
                  <div className={`w-full sm:w-[calc(50%-24px)] ml-10 sm:ml-0 ${
                    isEven ? 'sm:text-right' : 'sm:text-left'
                  }`}>
                    
                    <div className="p-6 rounded-3xl bg-slate-50/60 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/50 hover:shadow-md transition-all text-left">
                      
                      {/* Period Header */}
                      <div className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 mb-2 font-semibold text-xs sm:text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider mb-4">
                        {exp.company}
                      </p>

                      <p className="text-slate-650 dark:text-slate-350 text-xs sm:text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Deliverables checklist */}
                      <div className="space-y-2 mb-6">
                        {exp.bullets.map((bullet, i) => (
                          <div key={i} className="flex gap-2 items-start text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tool Tags */}
                      <div className={`flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/40 dark:border-slate-800/40`}>
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-mono font-bold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Spacer for large screens */}
                  <div className="hidden sm:block w-[calc(50%-24px)]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
