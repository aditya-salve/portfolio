import React from 'react';
import { Compass, Cpu, TrendingUp, Sparkles, Terminal, BookOpen, Layers } from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-violet-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Identity & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            More Than Just <span className="text-gradient-electric">Code</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A look into who I am, how I think, and what fuels my curiosity in technology.
          </p>
        </div>

        {/* Narrative & Engineering Mindset Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Main Story Card (8 Cols) */}
          <div className="lg:col-span-8 rounded-2xl glass-card p-6 sm:p-9 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                Hi, I'm <strong className="text-white font-semibold">Aditya Salve</strong>. I am currently in my Second Year of Computer Engineering at <span className="text-blue-400 font-medium">Dr. D. Y. Patil College of Engineering and Innovation</span> in Pune. My journey in technology is driven by a deep, relentless curiosity about how software systems actually work under the hood.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Rather than treating code as just an academic requirement, I approach programming as a creative problem-solving discipline. I enjoy decomposing complex algorithmic puzzles, understanding memory and pointer structures in C and C++, and exploring the mechanics of interactive software and game engines.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                I strongly believe that <span className="text-slate-200 font-medium">practical knowledge is just as vital as theoretical concepts</span>. That is why I consistently look beyond the college syllabus—studying online courses through NPTEL (IIT Madras), participating in nationwide hackathons like SIH, and iteratively building software fundamentals that lay the groundwork for a lasting career in software engineering.
              </p>
            </div>

            {/* Quote Strip */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/30 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Guiding Principle</div>
                  <div className="text-xs text-blue-400 font-mono">"{personalInfo.learningQuote}"</div>
                </div>
              </div>
              <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                Talegaon Dabhade, Pune • India
              </div>
            </div>
          </div>

          {/* Quick Stats / Identity Snapshot (4 Cols) */}
          <div className="lg:col-span-4 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-white/10 space-y-6">
            <div>
              <h3 className="text-lg font-bold font-heading text-white flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-violet-400" />
                <span>Quick Snapshot</span>
              </h3>
              
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-mono text-slate-400">Current Program</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{personalInfo.degree}</div>
                  <div className="text-xs text-blue-400 font-mono mt-0.5">{personalInfo.currentYear}</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-mono text-slate-400">Institution</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{personalInfo.college}</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Expected Grad: {personalInfo.expectedGraduation}</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-mono text-slate-400">Primary Core Focus</div>
                  <div className="text-sm font-semibold text-emerald-400 mt-0.5">C & C++ Programming, DSA</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Imarticus Grade 'A' Certified</div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-900/30 to-violet-900/30 border border-blue-500/20 text-xs text-slate-300">
              <span className="font-semibold text-white">Target Goal:</span> Aspiring to grow into a disciplined, high-impact Software Engineer ready for top technology challenges.
            </div>
          </div>

        </div>

        {/* 3 Three Core Trait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutHighlights.map((trait, index) => (
            <div
              key={index}
              className={`rounded-2xl glass-card p-6 sm:p-7 relative overflow-hidden group hover:${trait.border} transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getIcon(trait.icon)}
                </div>
                <h3 className="text-xl font-bold font-heading text-white">
                  {trait.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {trait.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                <span>PILLAR // 0{index + 1}</span>
                <span className="text-blue-400/80">Active Mindset</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
