import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import figmaIcon from '../assets/app_icons/devicon--figma.svg';
import framerIcon from '../assets/app_icons/bxl--framer.svg';
import vscodeIcon from '../assets/app_icons/devicon--vscode.svg';
import cursorIcon from '../assets/app_icons/devicon-plain--cursor.svg';
import claudeIcon from '../assets/app_icons/material-icon-theme--claude.svg';
import canvaIcon from '../assets/app_icons/bxl--canva.svg';
import gimpIcon from '../assets/app_icons/vscode-icons--file-type-gimp.svg';
import davinciIcon from '../assets/app_icons/simple-icons--davinciresolve.svg';
import chatgptIcon from '../assets/app_icons/hugeicons--chat-gpt.svg';
import geminiIcon from '../assets/app_icons/vscode-icons--file-type-gemini.svg';
import googleLabsIcon from '../assets/app_icons/googlelabs.png';
import antigravityIcon from '../assets/app_icons/material-symbols--antigravity.svg';

export default function ToolsOrbit() {

  // 5 items
  const innerRing = [
    { name: 'Figma', icon: figmaIcon, usage: 'UI Prototyping' },
    { name: 'Canva', icon: canvaIcon, filter: 'invert(48%) sepia(87%) saturate(2258%) hue-rotate(152deg) brightness(97%) contrast(104%)', usage: 'Social Graphics' },
    { name: 'VS Code', icon: vscodeIcon, usage: 'Frontend Coding' },
    { name: 'GIMP', icon: gimpIcon, usage: 'Image Editing' },
    { name: 'ChatGPT', icon: chatgptIcon, invert: true, usage: 'Code Assistance' },
  ];

  // 6 items
  const outerRing = [
    { name: 'Framer', icon: framerIcon, invert: true, usage: 'Web Animations' },
    { name: 'DaVinci', icon: davinciIcon, filter: 'invert(37%) sepia(51%) saturate(3020%) hue-rotate(340deg) brightness(101%) contrast(92%)', usage: 'Video Editing' },
    { name: 'Gemini', icon: geminiIcon, usage: 'AI Reasoning' },
    { name: 'Claude', icon: claudeIcon, usage: 'Creative Writing' },
    { name: 'Google Labs', icon: googleLabsIcon, usage: 'Experimental UI' },
    { name: 'Antigravity', icon: antigravityIcon, filter: 'invert(1)', usage: 'Agentic Ideation' },
  ];

  const renderRing = (items, radius, offsetAngle = 0, duration = 30, reverse = false) => {
    return (
      <div 
        className="absolute top-1/2 left-1/2 rounded-full border border-white/20 border-dashed shadow-[0_0_30px_rgba(255,255,255,0.02)_inset] pointer-events-none"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          marginTop: `-${radius}px`,
          marginLeft: `-${radius}px`,
          animation: `orbit ${duration}s linear infinite ${reverse ? 'reverse' : 'normal'}`
        }}
      >
        {items.map((item, index) => {
          // Calculate angle and add the ring's offset so icons don't bunch up on the same axis
          const angle = ((index / items.length) * 360) + offsetAngle;
          return (
            <div 
              key={item.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(${radius}px)`,
                marginTop: '-28px', // offset for 56px height
                marginLeft: '-28px',
              }}
            >
              {/* Counteract the placement rotation */}
              <div style={{ transform: `rotate(-${angle}deg)` }}>
                {/* Icon Container with reverse orbit animation so it stays upright */}
                <div 
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0a0a0f] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer group hover:bg-[#151520] transition-colors pointer-events-auto"
                  style={{
                    animation: `orbit-reverse ${duration}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
                  }}
                >
                  {/* Tooltip on Hover */}
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white flex flex-col items-center px-4 py-2 rounded-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10">
                    <span className="text-xs md:text-sm uppercase font-mono font-bold tracking-widest">{item.name}</span>
                    <span className="text-[10px] md:text-xs text-indigo-300 tracking-wide mt-0.5 font-light">{item.usage}</span>
                  </div>
                  
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className="w-6 h-6 md:w-8 md:h-8 object-contain group-hover:scale-125 transition-transform duration-300"
                    style={{
                      filter: item.filter ? item.filter : item.invert ? 'invert(1)' : 'none'
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#030712] border-t border-white/5 flex flex-col items-center justify-center min-h-[900px] md:min-h-[1100px]">
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-100 mix-blend-screen pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={1.5} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
        </Canvas>
      </div>

      {/* Required CSS Animations */}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>

      {/* Section Header */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4">
        <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 uppercase tracking-widest shadow-[0_0_15px_rgba(236,72,153,0.15)] mb-4 inline-block">
          The Toolkit
        </span>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-2">
          Design & Build Workflow
        </h2>
        <p className="text-slate-400 text-sm md:text-base">The tools that power my creative and technical processes.</p>
      </div>

      <div className="relative w-full max-w-[1200px] aspect-square flex items-center justify-center scale-60 sm:scale-75 md:scale-100 mt-16">
        
        {/* Deep background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

        {/* The Center "Sun" */}
        <div className="absolute z-50 w-36 h-36 md:w-48 md:h-48 rounded-full bg-slate-900 border border-white/10 shadow-[0_0_80px_rgba(99,102,241,0.2)] flex items-center justify-center backdrop-blur-xl relative group">
           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-transparent pointer-events-none" />
           <span className="font-display font-black text-3xl md:text-4xl text-white tracking-widest uppercase drop-shadow-2xl z-10">
             Tools
           </span>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 border border-indigo-500/30 rounded-full animate-ping opacity-20 pointer-events-none" style={{ animationDuration: '3s' }} />
        </div>

        {/* Rings */}
        {/* Inner Ring: 5 items, Radius 300px, 0 deg offset, 40s duration */}
        {renderRing(innerRing, 300, 0, 40, false)}

        {/* Outer Ring: 6 items, Radius 520px, 30 deg offset to stagger slightly, 60s duration reverse */}
        {renderRing(outerRing, 520, 30, 60, true)}

      </div>
    </section>
  );
}
