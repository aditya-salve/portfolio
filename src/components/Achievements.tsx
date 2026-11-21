import React from 'react';
import { Trophy, Code2, Presentation, Calendar, CheckCircle2, ArrowRight, ShieldCheck, Flag } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'Presentation': return <Presentation className="w-6 h-6 text-violet-400" />;
      default: return <Flag className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>Activities & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Milestones & <span className="text-gradient-electric">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Key participations and milestones that reflect my commitment to collaborative engineering and continuous improvement.
          </p>
        </div>

        {/* SIH Highlight Card (Featured) */}
        <div className="max-w-4xl mx-auto mb-12">
          {achievementsData.filter(a => !a.isDemo).map((sih) => (
            <div
              key={sih.id}
              className="rounded-3xl glass-card p-6 sm:p-9 border border-amber-500/30 relative overflow-hidden shadow-2xl bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5"
            >
              {/* Top Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{sih.statusBadge}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{sih.date}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2">
                {sih.title}
              </h3>
              <div className="text-sm font-medium text-amber-400/90 mb-4">
                {sih.event}
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {sih.description}
              </p>

              {/* Key Takeaways */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Experience & Collaborative Takeaways:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                  {sih.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Future Milestones Grid (Demo Placeholders) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Upcoming Competitions & Target Milestones (Demo Placeholders)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.filter(a => a.isDemo).map((demo) => (
              <div
                key={demo.id}
                className="rounded-2xl glass-card p-6 border border-white/[0.08] flex flex-col justify-between group hover:border-violet-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      DEMO PLACEHOLDER
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {demo.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-heading text-white group-hover:text-violet-300 transition-colors">
                    {demo.title}
                  </h4>

                  <div className="text-xs text-slate-400 font-mono mt-1 mb-3">
                    {demo.event}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {demo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Editable in portfolioData.ts</span>
                  <span className="text-violet-400">Target Goal</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
