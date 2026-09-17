import React from 'react';
import { Youtube, Instagram, ExternalLink, Users, PlaySquare, Eye, Calendar } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

export const About: React.FC = () => {
  const yt = designerProfile.youtubeStats;
  const ig = designerProfile.instagramStats;

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-2 h-2 bg-[#E11D48]" />
            <span className="oswald text-xs font-bold uppercase tracking-[0.15em] text-[#E11D48]">
              01. Background & Focus
            </span>
          </div>
          <h2 className="oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
            ABOUT ME<span className="text-[#E11D48]">.</span>
          </h2>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Short Introduction & Design Approach */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                {designerProfile.bio}
              </p>

              <div className="pt-5 border-t border-white/10">
                <h3 className="oswald text-xs uppercase tracking-[0.15em] text-[#E11D48] font-bold mb-2">
                  My Design Approach
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {designerProfile.designApproach}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10">
                <h3 className="oswald text-xs uppercase tracking-[0.15em] text-gray-300 font-bold mb-2">
                  Creative Interests
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {designerProfile.creativeInterests}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6 text-[11px] font-mono uppercase tracking-[0.15em] text-gray-400">
              <span>Independent Creative</span>
              <span className="text-gray-600">•</span>
              <span className="text-[#E11D48]">Available for Projects</span>
            </div>
          </div>

          {/* Right Column: Creative Disciplines */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {designerProfile.creativeDisciplines.map((discipline, idx) => (
              <div
                key={discipline.title}
                className="p-6 bg-[#111111] border border-white/10 transition-all hover:border-[#E11D48]/50 group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="oswald text-xl sm:text-2xl font-bold text-white tracking-wide uppercase group-hover:text-[#E11D48] transition-colors">
                    {discipline.title}
                  </h3>
                  <span className="font-mono text-xs text-[#E11D48] font-bold">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {discipline.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Channels / Audience Presence Cards */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-[#E11D48]" />
            <h3 className="oswald text-xs font-bold uppercase tracking-[0.15em] text-gray-300">
              Channels & Social Presence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* YouTube Card */}
            {yt && (
              <div
                id="about-youtube-card"
                className="p-6 sm:p-7 bg-[#111111] border border-white/10 hover:border-[#FF0000]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-11 rounded-[6px] bg-white p-1 border border-white/20 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                        <img
                          src="/youtube_logo.png"
                          alt="YouTube Logo"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="oswald text-xl sm:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-[#FF0000] transition-colors">
                            {yt.channelName}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 bg-[#FF0000]/20 text-[#FF4D4D] border border-[#FF0000]/40 uppercase tracking-wider">
                            YouTube
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">{yt.handle}</p>
                      </div>
                    </div>

                    <a
                      href={yt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                      title="Visit YouTube Channel"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 py-4 my-2 border-y border-white/10">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase tracking-wider font-mono">
                        <Users className="w-3 h-3 text-[#FF0000]" />
                        <span>Subs</span>
                      </div>
                      <span className="oswald text-xl font-bold text-white mt-1">{yt.subscribers}</span>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase tracking-wider font-mono">
                        <PlaySquare className="w-3 h-3 text-[#FF0000]" />
                        <span>Videos</span>
                      </div>
                      <span className="oswald text-xl font-bold text-white mt-1">{yt.videos}</span>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase tracking-wider font-mono">
                        <Eye className="w-3 h-3 text-[#FF0000]" />
                        <span>Views</span>
                      </div>
                      <span className="oswald text-xl font-bold text-white mt-1">{yt.views}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 mt-3">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>Joined {yt.joined}</span>
                  </div>
                </div>

                <a
                  href={yt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-youtube-btn"
                  className="mt-6 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold text-xs uppercase tracking-[0.15em] transition-all min-h-[44px]"
                >
                  <img src="/youtube_logo.png" alt="YouTube" className="h-5 w-auto object-contain brightness-0 invert" />
                  <span>SUBSCRIBE ON YOUTUBE</span>
                </a>
              </div>
            )}

            {/* Instagram Card */}
            {ig && (
              <div
                id="about-instagram-card"
                className="p-6 sm:p-7 bg-[#111111] border border-white/10 hover:border-[#E11D48]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-[6px] bg-[#E11D48]/10 border border-[#E11D48]/30 flex items-center justify-center text-[#E11D48]">
                        <Instagram className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="oswald text-xl sm:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-[#E11D48] transition-colors">
                            {ig.handle}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 bg-[#E11D48]/20 text-[#FF4D88] border border-[#E11D48]/40 uppercase tracking-wider">
                            Instagram
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">@{ig.handle}</p>
                      </div>
                    </div>

                    <a
                      href={ig.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                      title="Visit Instagram Profile"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 py-4 my-2 border-y border-white/10">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase tracking-wider font-mono">
                        <Users className="w-3 h-3 text-[#E11D48]" />
                        <span>Followers</span>
                      </div>
                      <span className="oswald text-xl font-bold text-white mt-1">{ig.followers}</span>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase tracking-wider font-mono">
                        <Users className="w-3 h-3 text-[#E11D48]" />
                        <span>Following</span>
                      </div>
                      <span className="oswald text-xl font-bold text-white mt-1">{ig.following}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    Visual journal showcasing poster art, design breakdowns, edits, and creative WIPs.
                  </p>
                </div>

                <a
                  href={ig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-instagram-btn"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E11D48] hover:brightness-110 text-white font-bold text-xs uppercase tracking-[0.15em] transition-all min-h-[44px]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>FOLLOW ON INSTAGRAM</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
