import React, { useState } from 'react';
import { Code, ExternalLink, Github, AlertCircle, Sparkles, Layers, CheckCircle2, Terminal } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filters = ['All', 'C++ / Programming', 'HTML / CSS / JavaScript', 'Game Development'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <Code className="w-3.5 h-3.5" />
            <span>Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Things I've <span className="text-gradient-electric">Built</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A showcase of software implementations, prototypes, and structured demo templates designed for easy customization and showcase expansion.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl glass-panel border border-amber-500/30 bg-amber-500/5 text-xs text-slate-300 flex items-start gap-3 shadow-md">
          <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <div className="space-y-1">
            <p>
              <strong className="text-amber-300">Demo Placeholders Notice:</strong> Except for this live portfolio website itself, project cards are intentionally configured as structured demo placeholders. They allow Aditya to update real GitHub repositories, live demo URLs, and project assets easily from a single central data file (<code className="text-blue-400 font-mono">src/data/portfolioData.ts</code>).
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 font-semibold'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass-card flex flex-col justify-between overflow-hidden group hover:border-blue-500/40 transition-all duration-300 relative shadow-xl"
            >
              {/* Card Banner / Code Visual */}
              <div className="relative h-48 bg-gradient-to-br from-[#0B0F19] to-[#111827] p-5 flex flex-col justify-between border-b border-white/[0.08] overflow-hidden">
                {/* Background Ambient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.colorGradient} opacity-60`} />

                {/* Top Status Bar */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/60 text-slate-300 border border-white/10 backdrop-blur-sm">
                    {project.category}
                  </span>
                  {project.isDemo ? (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      DEMO PLACEHOLDER
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      LIVE
                    </span>
                  )}
                </div>

                {/* Center Graphic */}
                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-300 shadow-lg">
                    {project.category.includes('Game') ? (
                      <Sparkles className="w-8 h-8 text-pink-400" />
                    ) : project.category.includes('Portfolio') ? (
                      <Layers className="w-8 h-8 text-blue-400" />
                    ) : (
                      <Terminal className="w-8 h-8 text-indigo-400" />
                    )}
                  </div>
                </div>

                {/* Bottom Tagline */}
                <div className="relative z-10 text-[11px] font-mono text-slate-400 truncate">
                  ID: {project.id}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions: GitHub & Live Demo */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-slate-200 glass-panel hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all duration-200 flex items-center justify-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </button>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-blue-600/80 hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all duration-200 flex items-center justify-center gap-1.5"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Central Data Helper Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500 font-mono">
            Want to add new projects? Edit <span className="text-blue-400">src/data/portfolioData.ts</span> and re-run your build.
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
