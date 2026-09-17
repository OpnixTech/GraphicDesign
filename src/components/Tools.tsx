import React from 'react';
import { creativeTools } from '../data/portfolioData';
import { SoftwareIcon } from './SoftwareIcon';

export const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-2 h-2 bg-[#E11D48]" />
            <span className="oswald text-xs font-bold uppercase tracking-[0.15em] text-[#E11D48]">
              03. Software & Stack
            </span>
          </div>
          <h2 className="oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
            TOOLS I USE<span className="text-[#E11D48]">.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-400 max-w-lg">
            Industry-standard creative applications used daily for production-ready design, editorial retouching, and video assembly.
          </p>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {creativeTools.map((tool) => (
            <div
              key={tool.id}
              className="p-6 bg-[#111111] border border-white/10 hover:border-[#E11D48]/60 flex flex-col items-start gap-4 transition-all group"
            >
              <div className="shrink-0 transition-transform group-hover:scale-105">
                <SoftwareIcon type={tool.iconType} size={48} />
              </div>

              <div>
                <h3 className="oswald text-lg sm:text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#E11D48] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mt-1">
                  {tool.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
