import React, { useState } from 'react';
import { 
  Compass, Gamepad2, Cpu, Network, Terminal, Globe, Layers, 
  ArrowRight, Sparkles, CheckCircle2, Target 
} from 'lucide-react';
import { learningGoalsData } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const [activeGoalId, setActiveGoalId] = useState<string>(learningGoalsData[0].id);

  const getGoalIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-pink-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Network': return <Network className="w-5 h-5 text-violet-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const activeGoal = learningGoalsData.find(g => g.id === activeGoalId) || learningGoalsData[0];

  return (
    <section id="journey" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Growth Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Always Learning, <span className="text-gradient-electric">Always Growing</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            My strategic learning targets and technical interests. Presented as active development goals and curiosity-driven exploration rather than completed claims.
          </p>
        </div>

        {/* Interactive Roadmap Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Domain Selector Tabs (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {learningGoalsData.map((goal) => {
              const isSelected = activeGoalId === goal.id;
              return (
                <button
                  key={goal.id}
                  onClick={() => setActiveGoalId(goal.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-600/15 border-blue-500 shadow-lg shadow-blue-500/15'
                      : 'glass-panel border-white/[0.08] hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg border ${
                      isSelected ? 'bg-blue-500/20 border-blue-400/40' : 'bg-white/[0.03] border-white/5'
                    }`}>
                      {getGoalIcon(goal.icon)}
                    </div>
                    <div>
                      <div className="text-sm font-bold font-heading text-white">
                        {goal.title}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {goal.category}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                    goal.status === 'Continuous Focus'
                      ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                      : goal.status === 'Actively Exploring'
                      ? 'bg-pink-500/15 text-pink-300 border border-pink-500/30'
                      : 'bg-slate-500/15 text-slate-300 border border-slate-500/30'
                  }`}>
                    {goal.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Target Canvas (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-6 sm:p-9 border border-white/10 shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              
              <div>
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      {getGoalIcon(activeGoal.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                        {activeGoal.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-blue-400" />
                    <span>STATUS: {activeGoal.status}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-4">
                  {activeGoal.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {activeGoal.description}
                </p>

                {/* Target Milestones */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                    Target Milestones & Roadmap Checkpoints:
                  </div>

                  <div className="space-y-2.5">
                    {activeGoal.targetMilestones.map((milestone, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-slate-300 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Domain Focus: {activeGoal.category}</span>
                <span className="text-blue-400">Growth Driven</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
