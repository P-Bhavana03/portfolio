import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check, Send, Award, ArrowUpRight, PenTool } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [recruiterInterest, setRecruiterInterest] = useState('uiux');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
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

  const getMailtoLink = () => {
    let subject = 'Hiring Inquiry - Bhavana Pappala';
    let body = 'Hi Bhavana,\n\nI reviewed your portfolio and would like to discuss...';

    if (recruiterInterest === 'uiux') {
      subject = 'UI/UX Design Opportunity - Bhavana Pappala';
      body = 'Hi Bhavana,\n\nWe love your UI/UX designs. We would like to discuss an opportunity for a UI/UX Designer role...';
    } else if (recruiterInterest === 'frontend') {
      subject = 'Frontend Development Role - Bhavana';
      body = 'Hi Bhavana,\n\nWe saw you design and develop React/Tailwind applications. We have an opportunity for...';
    } else if (recruiterInterest === 'freelance') {
      subject = 'Freelance Project - Bhavana Pappala';
      body = 'Hi Bhavana,\n\nWe have a project we would like you to design and develop. Here are the brief details...';
    }

    return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    }
  };

  const triggerResumeDownload = () => {
    alert("Resume download triggered! In production, this links to your PDF document.");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 left-0 h-96 bg-gradient-to-t from-indigo-900/10 via-pink-900/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            Reach Out
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            Let's Build the Future
          </h2>
          <p className="text-slate-400 text-lg">
            Whether you want to discuss a full-time role, a freelance build, or just say hello—reach out below!
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Quick Info & Recruiter Widget (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Quick Actions Card */}
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="font-display font-black text-2xl text-white mb-8">
                Direct Contact
              </h3>
              
              <div className="space-y-4 relative z-10">
                {/* Email Copy Card */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Email</p>
                      <p className="text-sm font-semibold text-slate-200">{emailAddress}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(emailAddress, 'email')}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-slate-400 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>

                {/* Phone Copy Card */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-pink-500/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/20">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Phone</p>
                      <p className="text-sm font-semibold text-slate-200">+91 {phoneNumber}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(phoneNumber, 'phone')}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-slate-400 transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Recruiter Fast-Track Card */}
            <div className="rounded-3xl bg-gradient-to-br from-indigo-900/30 via-pink-900/20 to-cyan-900/20 border border-indigo-500/30 p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-indigo-500/40 transition-colors duration-500" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-2xl text-white">
                  Recruiter Fast-Track
                </h3>
              </div>

              <p className="text-sm text-slate-400 mb-8 leading-relaxed font-light relative z-10">
                Choose your hiring domain interest to trigger a pre-formatted email draft to my inbox:
              </p>

              {/* Selector Radios */}
              <div className="space-y-3 mb-8 relative z-10">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 cursor-pointer hover:border-indigo-500/30 transition-colors">
                  <input
                    type="radio"
                    name="interest"
                    checked={recruiterInterest === 'uiux'}
                    onChange={() => setRecruiterInterest('uiux')}
                    className="accent-indigo-500 w-4 h-4"
                  />
                  <span className="text-sm font-semibold text-slate-300">Hire for UI/UX Design</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 cursor-pointer hover:border-indigo-500/30 transition-colors">
                  <input
                    type="radio"
                    name="interest"
                    checked={recruiterInterest === 'frontend'}
                    onChange={() => setRecruiterInterest('frontend')}
                    className="accent-indigo-500 w-4 h-4"
                  />
                  <span className="text-sm font-semibold text-slate-300">Hire for Front-End Dev</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 cursor-pointer hover:border-indigo-500/30 transition-colors">
                  <input
                    type="radio"
                    name="interest"
                    checked={recruiterInterest === 'freelance'}
                    onChange={() => setRecruiterInterest('freelance')}
                    className="accent-indigo-500 w-4 h-4"
                  />
                  <span className="text-sm font-semibold text-slate-300">Contract Freelance Work</span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <a
                  href={getMailtoLink()}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-display text-sm font-bold text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all"
                >
                  Send Email Draft
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={triggerResumeDownload}
                  className="px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 text-white font-display text-sm font-bold text-center cursor-pointer transition-colors"
                >
                  Get Resume PDF
                </button>
              </div>

            </div>

          </motion.div>

          {/* Contact Form Grid (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              
              <h3 className="font-display font-black text-3xl text-white mb-8">
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
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-white text-black hover:bg-slate-200 font-display font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all cursor-pointer"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

        {/* Footer info */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-6">
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
