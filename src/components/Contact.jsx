import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Check, Send, ArrowUpRight, PenTool } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';

const InteractiveGlobe = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ec4899" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#06b6d4" />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={1} fade speed={1.5} />
        
        <Suspense fallback={null}>
          <FloatSphere />
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>

    </div>
  );
};

const FloatSphere = () => {
  return (
    <Sphere args={[1.8, 32, 32]}>
      <meshStandardMaterial 
        color="#0f172a" 
        emissive="#4f46e5"
        emissiveIntensity={0.5}
        wireframe={true} 
        transparent 
        opacity={0.4}
      />
    </Sphere>
  );
};

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailAddress = 'pappalabhavana@gmail.com';
  const phoneNumber = '7382093790';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    }
  };

  return (
    <section id="contact" className="pt-24 relative overflow-hidden bg-[#030712] border-t border-white/5 flex flex-col items-center">
      
      {/* Background gradients */}
      <div className="absolute top-0 right-0 left-0 h-[800px] bg-gradient-to-b from-indigo-900/10 via-pink-900/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mb-12 space-y-4"
        >
          <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.15)] inline-block mb-4">
            Reach Out
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none drop-shadow-xl">
            Let's Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400">
              The Future
            </span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl font-light mt-6">
            Whether you want to discuss a full-time role, a freelance build, or just say hello—send me a message below.
          </p>
        </motion.div>

        {/* Direct Contact Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => copyToClipboard(emailAddress, 'email')}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all cursor-pointer group"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />}
            <span className="text-sm font-semibold text-slate-200">{emailAddress}</span>
          </button>
          
          <button
            onClick={() => copyToClipboard(phoneNumber, 'phone')}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all cursor-pointer group"
          >
            {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Phone className="w-4 h-4 text-slate-400 group-hover:text-pink-400 transition-colors" />}
            <span className="text-sm font-semibold text-slate-200">+91 {phoneNumber}</span>
          </button>
        </motion.div>

        {/* Contact Form (Centered) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl"
        >
          <div className="rounded-3xl bg-white/[0.02] backdrop-blur-xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center w-full">
            
            <h3 className="font-display font-black text-3xl text-white mb-8 text-center">
              Send a Message
            </h3>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-16 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-3xl font-bold shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-2xl text-white mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. I have captured your message details and will respond to your email as soon as possible.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleFormSubmit} 
                  className="space-y-6 w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-white/5 transition-all placeholder:text-slate-600"
                        placeholder="John Doe"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-white/5 transition-all placeholder:text-slate-600"
                        placeholder="john@example.com"
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phone (Optional)</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-white/5 transition-all placeholder:text-slate-600"
                        placeholder="+91 0000000000"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-indigo-500 focus:bg-white/5 transition-all resize-none custom-scrollbar placeholder:text-slate-600"
                      placeholder="Hi Bhavana, I would love to discuss a project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className="px-10 py-4 rounded-xl bg-white text-black hover:bg-slate-200 font-display font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all cursor-pointer"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>

      {/* Interactive 3D Globe Footer Element */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="w-full mt-24 relative"
      >
        <InteractiveGlobe />
      </motion.div>

      {/* Actual Footer bar below the globe */}
      <div className="w-full border-t border-white/5 bg-black/50 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">BHAVANA.P</span>
            <span className="font-mono">© 2026. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://dribbble.com/bhavana7382" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <ArrowUpRight className="w-4 h-4" /> Dribbble
            </a>
            <a href="https://www.behance.net/bhavanapappala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <PenTool className="w-4 h-4" /> Behance
            </a>
            <a href="https://www.linkedin.com/in/bhavana-pappala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <ArrowUpRight className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
