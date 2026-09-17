import React, { useEffect } from 'react';
import { X, Calendar, Wrench } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#111111] border border-white/10 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D0D0D] shrink-0">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#E11D48] font-bold">
              {project.category}
            </span>
            <h3 id="project-modal-title" className="oswald text-lg font-bold uppercase tracking-wide text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Artwork Display Area */}
        <div className="relative flex-1 min-h-[320px] max-h-[68vh] bg-black flex items-center justify-center p-3 sm:p-6 overflow-auto">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="max-h-[62vh] w-auto max-w-full object-contain select-none"
          />
        </div>

        {/* Bottom Details Footer */}
        <div className="p-5 bg-[#111111] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-gray-400 shrink-0">
          <p className="leading-relaxed text-gray-300 max-w-xl">
            {project.description || `${project.title} — Created for ${project.category}.`}
          </p>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {project.year && (
              <div className="flex items-center gap-1.5 text-[#E11D48] font-mono text-[11px] font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{project.year}</span>
              </div>
            )}
            {project.tools && project.tools.length > 0 && (
              <div className="flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-gray-500" />
                {project.tools.map((tool) => (
                  <span key={tool} className="px-2 py-0.5 bg-[#0D0D0D] text-gray-400 border border-white/10 text-[10px] font-mono uppercase tracking-wider">
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
