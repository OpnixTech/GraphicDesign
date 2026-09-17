import React from 'react';
import { processSteps } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-2 h-2 bg-[#E11D48]" />
            <span className="oswald text-xs font-bold uppercase tracking-[0.15em] text-[#E11D48]">
              04. Workflow
            </span>
          </div>
          <h2 className="oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
            MY PROCESS<span className="text-[#E11D48]">.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-400 max-w-lg">
            A structured, collaborative creative workflow from initial concept through final delivery.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 sm:p-7 bg-[#111111] border border-white/10 relative flex flex-col justify-between hover:border-[#E11D48]/60 transition-all group"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="oswald text-4xl sm:text-5xl font-bold text-[#E11D48]">
                    {step.step}
                  </span>
                  <div className="w-2 h-2 bg-[#E11D48]/60" />
                </div>

                <h3 className="oswald text-xl font-bold uppercase tracking-wider text-white mb-2.5 group-hover:text-[#E11D48] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.15em] text-gray-400">
                <span>Phase {step.step}</span>
                <span className="text-[#E11D48]">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
