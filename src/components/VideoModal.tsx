import React, { useEffect } from 'react';
import { X, Film } from 'lucide-react';
import { ProjectItem } from '../types';

interface VideoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
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

  const isEmbed = project.videoUrl?.includes('youtube.com') ||
                  project.videoUrl?.includes('youtu.be') ||
                  project.videoUrl?.includes('vimeo.com');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#111111] border border-white/10 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D0D0D]">
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-[#E11D48]" />
            <h3 id="video-modal-title" className="oswald text-base font-bold uppercase tracking-wide text-white">
              {project.title}
            </h3>
            {project.duration && (
              <span className="text-[10px] px-2 py-0.5 bg-[#141414] text-gray-400 font-mono border border-white/10">
                {project.duration}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors"
            aria-label="Close video modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full aspect-[16/9] bg-black flex items-center justify-center">
          {isEmbed ? (
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : project.videoUrl ? (
            <video
              controls
              playsInline
              preload="metadata"
              poster={project.thumbnail}
              className="w-full h-full object-contain"
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>
          ) : (
            <div className="text-center p-8 text-gray-400">
              <Film className="w-12 h-12 mx-auto mb-3 text-gray-600" />
              <p>Video source file not configured for this preview.</p>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="p-5 bg-[#111111] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-400">
          <p className="leading-relaxed text-gray-300">
            {project.description || `${project.title} — Video editing and pacing project.`}
          </p>
          {project.tools && project.tools.length > 0 && (
            <div className="flex items-center gap-1.5 shrink-0">
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
  );
};
