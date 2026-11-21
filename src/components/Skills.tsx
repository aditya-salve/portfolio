import React, { useState } from 'react';
import { 
  FileCode, Binary, Terminal, Code, Layout, Palette, Network, 
  Gamepad2, Layers, Sparkles, CheckCircle2, Info, ArrowUpRight 
} from 'lucide-react';
import { skillsData, currentlyExploring } from '../data/portfolioData';
import { SkillCategory } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming Languages', 'Web Development', 'Core Computer Science'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode': return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-indigo-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Code': return <Code className="w-5 h-5 text-amber-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-orange-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Network': return <Network className="w-5 h-5 text-violet-400" />;
      default: return <Code className="w-5 h-5 text-blue-400" />;
    }
  };

  const getExploringIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-pink-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <Binary className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            My Technical <span className="text-gradient-electric">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A transparent and honest representation of my current technical proficiencies, distinguishing established intermediate skills from actively developing beginner foundations.
          </p>
        </div>

        {/* Disclaimer Notice */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 rounded-xl glass-panel border border-blue-500/20 bg-blue-500/5 text-xs text-slate-300 flex items-start gap-3 shadow-md">
          <Info className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
          <p>
            <strong className="text-white">Proficiency Representation:</strong> Progress bars and metrics shown below represent self-evaluated visual learning milestones and continuous practice, not formal standardized examination percentages.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 font-semibold'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredSkills.map((skill, index) => {
            const isIntermediate = skill.level === 'Intermediate';
            return (
              <div
                key={index}
                className="rounded-2xl glass-card p-6 flex flex-col justify-between group hover:border-blue-500/40 relative overflow-hidden transition-all duration-300"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold font-heading text-white">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Level Pill */}
                    <span
                      className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
                        isIntermediate
                          ? 'border-blue-500/40 bg-blue-500/10 text-blue-300'
                          : 'border-violet-500/40 bg-violet-500/10 text-violet-300'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Description / Notes */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-5 min-h-[36px]">
                    {skill.notes}
                  </p>
                </div>

                {/* Progress Bar & Metric */}
                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>Learning Milestone</span>
                    <span className="text-white font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        isIntermediate
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]'
                          : 'bg-gradient-to-r from-violet-600 to-indigo-400 shadow-[0_0_10px_rgba(139,92,246,0.5)]'
                      }`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Section: Currently Exploring (Interests Subsection) */}
        <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Future Horizons</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Currently Exploring
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              These represent my active learning interests, future engineering curiosities, and personal exploration domains—not established professional credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentlyExploring.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                    {getExploringIcon(item.icon)}
                  </div>
                  <div className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <h4 className="text-lg font-bold font-heading text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Status</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
