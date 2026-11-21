import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            My Academic <span className="text-gradient-electric">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A structured vertical timeline of my formal academic qualifications and ongoing Computer Engineering coursework.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Center Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -ml-[1px] w-[2px] bg-gradient-to-b from-blue-500 via-violet-500 to-transparent opacity-40" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080B14] border-2 border-blue-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                    {item.isCurrent ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-violet-400" />
                    )}
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="rounded-2xl glass-card p-6 sm:p-7 group hover:border-blue-500/40 transition-all duration-300">
                      
                      {/* Status / Period Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>

                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            CURRENTLY ENROLLED
                          </span>
                        )}

                        {item.isPlaceholder && (
                          <span className="inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-white/5">
                            VERIFIED EDUCATION ENTRY
                          </span>
                        )}
                      </div>

                      {/* Institution Title */}
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-blue-300 transition-colors">
                        {item.institution}
                      </h3>

                      {/* Degree & Location */}
                      <div className="text-sm font-medium text-slate-300 mt-1 mb-2">
                        {item.degree}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-4">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                        <span>{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="pt-4 border-t border-white/[0.06] space-y-2">
                        <div className="text-[11px] uppercase tracking-wider font-mono text-slate-500">
                          Key Milestones:
                        </div>
                        <ul className="space-y-1.5">
                          {item.highlights.map((point, pIdx) => (
                            <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                              <ArrowRight className="w-3 h-3 text-blue-400 mt-0.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
