import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, UserCheck, Terminal, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [useRealPhoto, setUseRealPhoto] = useState(true);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call-To-Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-mono tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.statusText}</span>
            </div>

            {/* Small Introduction */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-blue-400 font-semibold flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-400 inline" />
                {personalInfo.heroIntro}
              </p>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-heading leading-tight text-white">
                <span className="text-gradient-silver">{personalInfo.fullName}</span>
              </h1>
            </div>

            {/* Professional Title */}
            <div className="flex flex-wrap items-center gap-2 text-slate-300 text-lg sm:text-xl font-medium">
              <span className="text-blue-400 font-semibold">Computer Engineering Student</span>
              <span className="text-slate-600">|</span>
              <span className="text-violet-400 font-semibold">Aspiring Software Engineer</span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              "{personalInfo.heroDescription}"
            </p>

            {/* Location & College Tagline */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Talegaon Dabhade, Pune</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="text-slate-400">
                Dr. D. Y. Patil COEI (Grad. 2029)
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('#projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-200 glass-panel hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 text-violet-400" />
              </button>
            </div>

            {/* Social Icons & Quick Connect */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08] w-full">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Directly"
                  className="p-2.5 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 hover:shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Profile Card & Avatar */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-600 opacity-30 blur-xl animate-pulse-subtle" />

              {/* Card Container */}
              <div className="relative rounded-2xl glass-panel p-6 sm:p-7 border border-white/10 shadow-2xl flex flex-col items-center text-center">
                
                {/* Header Badge */}
                <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08] text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    STATUS: ACTIVE_LEARNER
                  </span>
                  
                  {/* Photo / Initials Toggle */}
                  <button
                    onClick={() => setUseRealPhoto(!useRealPhoto)}
                    className="flex items-center gap-1 text-[11px] px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
                    title="Toggle between portrait photograph and cyber monogram"
                  >
                    <UserCheck className="w-3 h-3 text-violet-400" />
                    <span>{useRealPhoto ? 'Show Monogram' : 'Show Photo'}</span>
                  </button>
                </div>

                {/* Avatar Display */}
                <div className="relative mb-5 group">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl p-1 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                    <div className="w-full h-full rounded-[14px] bg-[#0B0F19] overflow-hidden flex items-center justify-center relative">
                      {useRealPhoto ? (
                        <img
                          src="./assets/aditya-avatar.png"
                          alt="Aditya Rajendra Salve"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          onError={() => setUseRealPhoto(false)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#080B14] p-4">
                          <span className="text-5xl sm:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 tracking-tighter">
                            AS
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 mt-2 tracking-widest uppercase">
                            ADITYA SALVE
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating Tech Pill 1 (C++) */}
                  <div className="absolute -top-3 -right-3 px-3 py-1 rounded-lg glass-panel border border-blue-500/40 text-[11px] font-mono text-blue-300 shadow-lg shadow-black/50 animate-float-slow">
                    ⚡ C++ / C
                  </div>

                  {/* Floating Tech Pill 2 (Python) */}
                  <div className="absolute -bottom-2 -left-3 px-3 py-1 rounded-lg glass-panel border border-violet-500/40 text-[11px] font-mono text-violet-300 shadow-lg shadow-black/50">
                    🐍 Python (NPTEL)
                  </div>
                </div>

                {/* Card Identity Text */}
                <h3 className="text-xl font-bold font-heading text-white tracking-tight">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs text-blue-400 font-mono mt-1">
                  DY Patil COEI • Computer Engineering '29
                </p>

                {/* Micro Metric Highlights */}
                <div className="grid grid-cols-3 gap-2 w-full mt-5 pt-4 border-t border-white/[0.08]">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-base font-bold text-white font-heading">2nd Yr</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Academic</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-base font-bold text-blue-400 font-heading">C / C++</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Core Focus</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-base font-bold text-violet-400 font-heading">SIH</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Hackathon</div>
                  </div>
                </div>

                {/* Quote Strip */}
                <div className="w-full mt-4 p-2.5 rounded-lg bg-blue-500/5 border border-blue-500/20 text-xs text-slate-300 italic flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>"{personalInfo.learningQuote}"</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
