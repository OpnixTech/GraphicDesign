import React, { useState } from 'react';
import { Play, Eye, Sliders } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { VideoModal } from './VideoModal';
import { ProjectModal } from './ProjectModal';

const categories: ProjectCategory[] = [
  'All',
  'Graphic Design',
  'Photo Editing',
  'Before & After',
  'Thumbnails',
  'Video Editing',
  'Illustration'
];

export const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeVideoProject, setActiveVideoProject] = useState<ProjectItem | null>(null);
  const [activeImageProject, setActiveImageProject] = useState<ProjectItem | null>(null);

  // Filter projects based on category
  const filteredProjects = portfolioProjects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  // Separate Before & After items when "Before & After" or "All" is active
  const beforeAfterProjects = portfolioProjects.filter((p) => p.category === 'Before & After');

  // Handle card click
  const handleProjectClick = (project: ProjectItem) => {
    if (project.type === 'video') {
      setActiveVideoProject(project);
    } else if (project.type !== 'before-after') {
      setActiveImageProject(project);
    }
  };

  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 bg-[#E11D48]" />
              <span className="oswald text-xs font-bold uppercase tracking-[0.15em] text-[#E11D48]">
                02. Portfolio Showcase
              </span>
            </div>
            <h2 className="oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
              MY WORK<span className="text-[#E11D48]">.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 max-w-md">
            A curated selection of client commissions, editorial layouts, retouched photography, thumbnails, motion edits, and vector art.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-3 border-b border-white/10 overflow-x-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-[11px] sm:text-xs uppercase tracking-[0.15em] font-bold transition-all whitespace-nowrap min-h-[44px] cursor-pointer ${
                  isSelected
                    ? 'bg-[#E11D48] text-white'
                    : 'bg-[#111111] hover:bg-white/5 text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dedicated Interactive Before & After Area (when "Before & After" or "All" is active) */}
        {(selectedCategory === 'Before & After' || selectedCategory === 'All') && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Sliders className="w-4 h-4 text-[#E11D48]" />
                <h3 className="oswald text-xl font-bold uppercase tracking-[0.15em] text-white">
                  BEFORE & AFTER PHOTO EDITS
                </h3>
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.15em]">
                Drag slider to compare
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {beforeAfterProjects.map((project) => (
                <BeforeAfterSlider
                  key={project.id}
                  title={project.title}
                  beforeImage={project.beforeImage || project.thumbnail}
                  afterImage={project.afterImage || project.thumbnail}
                  aspectRatio={project.aspectRatio}
                  description={project.description}
                />
              ))}
            </div>
          </div>
        )}

        {/* Thumbnail Designs Specialized Grid (when "Thumbnails" category is explicitly chosen) */}
        {selectedCategory === 'Thumbnails' && (
          <div className="mb-8">
            <p className="text-xs text-[#E11D48] mb-6 uppercase tracking-[0.15em] font-bold">
              High-visibility YouTube and social media thumbnails designed for maximum click-through rate without visual clutter.
            </p>
          </div>
        )}

        {/* Regular Portfolio Project Grid */}
        {selectedCategory !== 'Before & After' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects
              // Filter out Before/After cards from this standard grid if "All" is selected since they are shown above in the dedicated slider
              .filter((p) => selectedCategory === 'All' ? p.type !== 'before-after' : true)
              .map((project) => {
                const isVideo = project.type === 'video';
                const isThumbnail = project.category === 'Thumbnails';

                return (
                  <div
                    key={project.id}
                    id={`project-card-${project.id}`}
                    onClick={() => handleProjectClick(project)}
                    className="group bg-[#141414] border border-white/10 hover:border-[#E11D48]/60 overflow-hidden flex flex-col transition-all cursor-pointer"
                  >
                    {/* Media Container */}
                    <div
                      className={`relative w-full overflow-hidden bg-black ${
                        isThumbnail || isVideo ? 'aspect-[16/9]' : project.aspectRatio === '3/4' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                      }`}
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                        loading="lazy"
                      />

                      {/* Video Indicator Overlay */}
                      {isVideo && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/60">
                          <div className="w-13 h-13 rounded-full border border-[#E11D48] bg-black/60 text-white flex items-center justify-center pl-0.5 group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-current text-[#E11D48]" />
                          </div>
                          {project.duration && (
                            <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/85 text-[10px] font-mono text-white border border-white/10 uppercase tracking-wider">
                              {project.duration}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Regular Image Hover Indicator */}
                      {!isVideo && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-11 h-11 rounded-full bg-black/80 text-white flex items-center justify-center border border-white/20">
                            <Eye className="w-4 h-4 text-[#E11D48]" />
                          </div>
                        </div>
                      )}

                      {/* Category Pill */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 backdrop-blur-xs text-[9px] font-mono uppercase tracking-[0.15em] text-gray-300 border border-white/10">
                        {project.category}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className="oswald text-lg sm:text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#E11D48] transition-colors line-clamp-1">
                            {project.title}
                          </h3>
                          {project.year && (
                            <span className="text-[10px] font-mono text-[#E11D48] shrink-0 font-bold">
                              {project.year}
                            </span>
                          )}
                        </div>

                        {project.description && (
                          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                            {project.description}
                          </p>
                        )}
                      </div>

                      {project.tools && project.tools.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#0D0D0D] text-gray-400 border border-white/10"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {/* Video Player Modal */}
        <VideoModal
          project={activeVideoProject}
          onClose={() => setActiveVideoProject(null)}
        />

        {/* Image / Artwork Lightbox Modal */}
        <ProjectModal
          project={activeImageProject}
          onClose={() => setActiveImageProject(null)}
        />
      </div>
    </section>
  );
};
