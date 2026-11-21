import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, FileCode, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {project.category}
          </span>
          {project.isDemo ? (
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              DEMO PLACEHOLDER
            </span>
          ) : (
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ACTIVE PROJECT
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold font-heading text-white mb-3">
          {project.title}
        </h3>

        {/* Full Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {project.fullDescription}
        </p>

        {/* How to Replace / Customize Notice */}
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-6">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
            <div className="space-y-1 text-xs">
              <div className="font-semibold text-white">Central Data File Instructions:</div>
              <p className="text-slate-300">
                {project.placeholderNotice}
              </p>
              <div className="font-mono text-blue-300 pt-1">
                File: src/data/portfolioData.ts ➔ projectsData[{project.id}]
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">
            Core Features & Architecture:
          </h4>
          <ul className="space-y-2">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.05] text-slate-300 border border-white/5">
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            Close
          </button>
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>Visit GitHub</span>
          </a>
        </div>

      </div>
    </div>
  );
};
