import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, Youtube, Send, CheckCircle2 } from 'lucide-react';
import { designerProfile } from '../data/portfolioData';

export const Connect: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Graphic Design',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate immediate clean local submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Graphic Design',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="connect" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-2 h-2 bg-[#E11D48]" />
            <span className="oswald text-xs font-bold uppercase tracking-[0.15em] text-[#E11D48]">
              05. Get In Touch
            </span>
          </div>
          <h2 className="oswald text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
            LET'S CONNECT<span className="text-[#E11D48]">.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl">
            Have a project or creative idea? Let's work together.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Quick Contact Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you need a full brand system, a photo collection graded, an engaging YouTube thumbnail, or a dynamic video cut, reach out directly or submit the inquiry form.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                {/* Email Direct Link */}
                <a
                  href={`mailto:${designerProfile.email}`}
                  id="connect-email-link"
                  className="flex items-center justify-between p-4.5 bg-[#111111] border border-white/10 hover:border-[#E11D48] transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="oswald text-xs uppercase tracking-[0.15em] font-bold text-white group-hover:text-[#E11D48] transition-colors block">
                        EMAIL ME
                      </span>
                      <span className="text-xs text-gray-400">{designerProfile.email}</span>
                    </div>
                  </div>
                  <span className="text-gray-500 group-hover:text-[#E11D48] transition-colors font-mono">→</span>
                </a>

                {/* YouTube Link */}
                {designerProfile.socials.youtube && (
                  <a
                    href={designerProfile.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="connect-youtube-link"
                    className="flex items-center justify-between p-4.5 bg-[#111111] border border-white/10 hover:border-[#FF0000]/60 transition-all group min-h-[44px]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-9 rounded-[4px] bg-white p-1 border border-white/20 flex items-center justify-center shrink-0">
                        <img
                         src={`${import.meta.env.BASE_URL}youtube_logo.png`}
                          alt="YouTube"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="oswald text-xs uppercase tracking-[0.15em] font-bold text-white group-hover:text-[#FF0000] transition-colors block">
                            YOUTUBE ({designerProfile.youtubeStats?.channelName || 'HeyoGeni'})
                          </span>
                          {designerProfile.youtubeStats && (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 bg-[#FF0000]/20 text-[#FF4D4D] border border-[#FF0000]/40 uppercase tracking-wider">
                              {designerProfile.youtubeStats.subscribers}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-400">Video edits, creative logs & breakdowns</span>
                      </div>
                    </div>
                    <span className="text-gray-500 group-hover:text-[#FF0000] transition-colors font-mono">→</span>
                  </a>
                )}

                {/* Instagram Link */}
                {designerProfile.socials.instagram && (
                  <a
                    href={designerProfile.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="connect-instagram-link"
                    className="flex items-center justify-between p-4.5 bg-[#111111] border border-white/10 hover:border-[#E11D48]/60 transition-all group min-h-[44px]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 bg-[#E11D48]/10 text-[#E11D48] flex items-center justify-center">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="oswald text-xs uppercase tracking-[0.15em] font-bold text-white group-hover:text-[#E11D48] transition-colors block">
                            INSTAGRAM (@{designerProfile.instagramStats?.handle || 'genifilms'})
                          </span>
                          {designerProfile.instagramStats && (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 bg-[#E11D48]/20 text-[#FF4D88] border border-[#E11D48]/40 uppercase tracking-wider">
                              {designerProfile.instagramStats.followers}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-400">Visual journal, poster art & WIPs</span>
                      </div>
                    </div>
                    <span className="text-gray-500 group-hover:text-[#E11D48] transition-colors font-mono">→</span>
                  </a>
                )}

                {/* LinkedIn Link */}
                {designerProfile.socials.linkedin && (
                  <a
                    href={designerProfile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="connect-linkedin-link"
                    className="flex items-center justify-between p-4.5 bg-[#111111] border border-white/10 hover:border-white/25 transition-all group min-h-[44px]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 bg-white/5 text-gray-300 flex items-center justify-center">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="oswald text-xs uppercase tracking-[0.15em] font-bold text-white group-hover:text-gray-200 transition-colors block">
                          LINKEDIN
                        </span>
                        <span className="text-xs text-gray-400">Professional network</span>
                      </div>
                    </div>
                    <span className="text-gray-500 group-hover:text-white transition-colors font-mono">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] border border-white/10 p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#E11D48]/10 border border-[#E11D48]/30 flex items-center justify-center text-[#E11D48] mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="oswald text-2xl font-bold uppercase tracking-[0.15em] text-white mb-2">
                    MESSAGE SENT<span className="text-[#E11D48]">.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-sm mb-6 leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been recorded. I will review and reply promptly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold uppercase tracking-[0.15em] transition-colors min-h-[44px]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] uppercase font-bold tracking-[0.15em] text-gray-300 mb-2">
                        Your Name <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full bg-[#0D0D0D] border border-white/15 focus:border-[#E11D48] focus:outline-hidden text-sm text-white px-3.5 py-3 transition-colors placeholder:text-gray-600 min-h-[44px]"
                      />
                      {errors.name && <p className="text-xs text-[#E11D48] mt-1.5">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] uppercase font-bold tracking-[0.15em] text-gray-300 mb-2">
                        Your Email <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full bg-[#0D0D0D] border border-white/15 focus:border-[#E11D48] focus:outline-hidden text-sm text-white px-3.5 py-3 transition-colors placeholder:text-gray-600 min-h-[44px]"
                      />
                      {errors.email && <p className="text-xs text-[#E11D48] mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="contact-project-type" className="block text-[11px] uppercase font-bold tracking-[0.15em] text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-white/15 focus:border-[#E11D48] focus:outline-hidden text-sm text-white px-3.5 py-3 transition-colors min-h-[44px]"
                    >
                      <option value="Graphic Design">Graphic Design (Branding, Posters, Layout)</option>
                      <option value="Photo Editing">Photo Editing (Retouching, Color Grade)</option>
                      <option value="Thumbnail Design">Thumbnail Design (YouTube, Social)</option>
                      <option value="Video Editing">Video Editing (Reels, Assembly, Montages)</option>
                      <option value="Illustration">Illustration (Vector Art, Line Art)</option>
                      <option value="Other">Other Creative Inquiry</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] uppercase font-bold tracking-[0.15em] text-gray-300 mb-2">
                      Message <span className="text-[#E11D48]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project, timeline, or objectives..."
                      className="w-full bg-[#0D0D0D] border border-white/15 focus:border-[#E11D48] focus:outline-hidden text-sm text-white px-3.5 py-3 transition-colors placeholder:text-gray-600 resize-y min-h-[100px]"
                    />
                    {errors.message && <p className="text-xs text-[#E11D48] mt-1.5">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E11D48] hover:brightness-110 disabled:opacity-50 text-white font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] transition-all cursor-pointer min-h-[44px]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
