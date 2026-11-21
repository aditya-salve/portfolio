import React from 'react';
import { X, ExternalLink, Award, Calendar, CheckCircle2, FileText, Hash } from 'lucide-react';
import { CertificationItem } from '../types/portfolio';

interface CertificateModalProps {
  cert: CertificationItem;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close certificate modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Preview Image */}
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0B0F19] mb-6 shadow-xl">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-auto max-h-[420px] object-contain mx-auto"
          />
        </div>

        {/* Status Badge & Title */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
            cert.isDemo 
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' 
              : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
          }`}>
            {cert.statusBadge}
          </span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            {cert.issuedOn}
          </span>
        </div>

        <h3 className="text-2xl font-bold font-heading text-white mb-2">
          {cert.title}
        </h3>

        <div className="text-sm font-medium text-blue-400 mb-4">
          Issuer: {cert.issuer}
        </div>

        {/* Verification Meta Table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono">
          {cert.gradeOrScore && (
            <div className="flex items-center gap-2 text-slate-300">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{cert.gradeOrScore}</span>
            </div>
          )}
          {cert.credentialId && (
            <div className="flex items-center gap-2 text-slate-300">
              <Hash className="w-4 h-4 text-blue-400 shrink-0" />
              <span>ID: {cert.credentialId}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {cert.description}
        </p>

        {/* Key Points */}
        <div className="space-y-2 mb-8">
          <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
            Credential Details & Curriculum Focus:
          </div>
          {cert.highlights.map((item, idx) => (
            <div key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <div className="text-xs text-slate-500 font-mono">
            {cert.isDemo ? 'Placeholder for future credential' : 'Verified Student Document'}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Close
            </button>
            {cert.verificationUrl && (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1.5"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
