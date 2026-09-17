import React from 'react';

interface SoftwareIconProps {
  type:
    | 'photoshop'
    | 'illustrator'
    | 'premiere'
    | 'aftereffects'
    | 'lightroom'
    | 'figma'
    | 'canva'
    | 'capcut'
    | 'vn'
    | 'snapseed'
    | 'pixellab'
    | 'ibispaint'
    | 'sketchbook';
  size?: number;
}

export const SoftwareIcon: React.FC<SoftwareIconProps> = ({ type, size = 48 }) => {
  switch (type) {
    case 'photoshop':
      return (
        <div
          className="flex items-center justify-center font-bold select-none rounded-[6px] transition-transform group-hover:scale-105"
          style={{
            width: size,
            height: size,
            backgroundColor: '#001e36',
            border: '2px solid #31a8ff',
            color: '#31a8ff',
            fontSize: `${size * 0.42}px`,
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
          title="Adobe Photoshop"
        >
          Ps
        </div>
      );
    case 'illustrator':
      return (
        <div
          className="flex items-center justify-center font-bold select-none rounded-[6px] transition-transform group-hover:scale-105"
          style={{
            width: size,
            height: size,
            backgroundColor: '#330000',
            border: '2px solid #ff9a00',
            color: '#ff9a00',
            fontSize: `${size * 0.42}px`,
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
          title="Adobe Illustrator"
        >
          Ai
        </div>
      );
    case 'premiere':
      return (
        <div
          className="flex items-center justify-center font-bold select-none rounded-[6px] transition-transform group-hover:scale-105"
          style={{
            width: size,
            height: size,
            backgroundColor: '#00005b',
            border: '2px solid #9999ff',
            color: '#9999ff',
            fontSize: `${size * 0.42}px`,
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
          title="Adobe Premiere Pro"
        >
          Pr
        </div>
      );
    case 'aftereffects':
      return (
        <div
          className="flex items-center justify-center font-bold select-none rounded-[6px] transition-transform group-hover:scale-105"
          style={{
            width: size,
            height: size,
            backgroundColor: '#00005b',
            border: '2px solid #9999ff',
            color: '#d6a5ff',
            fontSize: `${size * 0.42}px`,
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
          title="Adobe After Effects"
        >
          Ae
        </div>
      );
    case 'lightroom':
      return (
        <div
          className="flex items-center justify-center font-bold select-none rounded-[6px] transition-transform group-hover:scale-105"
          style={{
            width: size,
            height: size,
            backgroundColor: '#001e36',
            border: '2px solid #31a8ff',
            color: '#8be5ff',
            fontSize: `${size * 0.42}px`,
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
          title="Adobe Lightroom"
        >
          Lr
        </div>
      );
    case 'figma':
      return (
        <div
          className="flex items-center justify-center p-2 rounded-[6px] bg-[#1e1e1e] border border-[#333338] transition-transform group-hover:scale-105"
          style={{ width: size, height: size }}
          title="Figma"
        >
          <svg viewBox="0 0 38 57" fill="none" className="w-full h-full">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
        </div>
      );
    case 'canva':
      return (
        <div
          className="flex items-center justify-center p-2 rounded-[6px] bg-[#00c4cc]/10 border border-[#00c4cc]/40 text-[#00c4cc] font-serif font-black transition-transform group-hover:scale-105"
          style={{ width: size, height: size, fontSize: `${size * 0.5}px` }}
          title="Canva"
        >
          <span className="italic">C</span>
        </div>
      );
    case 'capcut':
      return (
        <div
          className="flex items-center justify-center rounded-[6px] bg-black border border-white/20 text-white transition-transform group-hover:scale-105 p-2 overflow-hidden"
          style={{ width: size, height: size }}
          title="CapCut"
        >
          {/* Official CapCut Hourglass / Dual trapezoid brand logo */}
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <path
              d="M10 26H56L44 48H10V26Z"
              fill="white"
            />
            <path
              d="M90 26H44L56 48H90V26Z"
              fill="white"
            />
            <path
              d="M10 74H56L44 52H10V74Z"
              fill="white"
            />
            <path
              d="M90 74H44L56 52H90V74Z"
              fill="white"
            />
          </svg>
        </div>
      );
    case 'vn':
      return (
        <div
          className="flex items-center justify-center font-black select-none rounded-[6px] bg-black border border-white/20 transition-transform group-hover:scale-105 p-1"
          style={{ width: size, height: size }}
          title="VN Video Editor"
        >
          {/* Official VN Video Editor logo */}
          <div className="w-full h-full rounded-[4px] bg-black border border-white/20 flex items-center justify-center">
            <span
              className="font-black tracking-tight text-white leading-none italic"
              style={{ fontSize: `${size * 0.42}px`, fontFamily: 'Impact, Arial Black, sans-serif' }}
            >
              VN
            </span>
          </div>
        </div>
      );
    case 'snapseed':
      return (
        <div
          className="flex items-center justify-center rounded-[6px] bg-[#ffffff] border border-gray-200 transition-transform group-hover:scale-105 p-1.5"
          style={{ width: size, height: size }}
          title="Snapseed"
        >
          {/* Official Snapseed 3D green stylized leaf emblem */}
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <path
              d="M50 12C32 28 22 48 22 66C22 80 34 90 50 90C66 90 78 80 78 66C78 48 68 28 50 12Z"
              fill="#2DB84C"
            />
            {/* Darker green facet */}
            <path
              d="M50 12C50 12 30 35 30 62C30 76 40 86 50 90V12Z"
              fill="#1C9438"
            />
            {/* Lighter highlight facet */}
            <path
              d="M50 12C62 25 72 44 72 62C72 74 64 84 50 90C50 78 52 50 50 12Z"
              fill="#34C759"
            />
          </svg>
        </div>
      );
    case 'pixellab':
      return (
        <div
          className="flex items-center justify-center rounded-[6px] bg-[#1E88E5] border border-[#1976D2] transition-transform group-hover:scale-105 p-1.5"
          style={{ width: size, height: size }}
          title="PixelLab"
        >
          {/* Official PixelLab signature P logo with pen tool nib */}
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <rect width="100" height="100" rx="20" fill="#1E88E5" />
            <circle cx="50" cy="50" r="38" fill="white" />
            <path
              d="M40 28H56C64.8366 28 72 35.1634 72 44C72 52.8366 64.8366 60 56 60H48V74H38V28H40Z"
              fill="#1E88E5"
            />
            <path
              d="M48 37H56C59.866 37 63 40.134 63 44C63 47.866 59.866 51 56 51H48V37Z"
              fill="white"
            />
          </svg>
        </div>
      );
    case 'ibispaint':
      return (
        <div
          className="flex items-center justify-center rounded-[6px] bg-black border border-white/20 transition-transform group-hover:scale-105 p-1.5"
          style={{ width: size, height: size }}
          title="ibis Paint X"
        >
          {/* Official ibis Paint X rainbow color wheel with brush icon */}
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="ibisWheel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF3366" />
                <stop offset="25%" stopColor="#FFAA00" />
                <stop offset="50%" stopColor="#33CC66" />
                <stop offset="75%" stopColor="#0099FF" />
                <stop offset="100%" stopColor="#9933FF" />
              </linearGradient>
            </defs>
            {/* Color ring */}
            <circle cx="50" cy="50" r="38" stroke="url(#ibisWheel)" strokeWidth="12" fill="#111111" />
            {/* Stylized brush / feather */}
            <path
              d="M34 66C38 62 44 54 54 44L66 32C68 30 70 30 71 31C72 32 72 34 70 36L58 48C48 58 40 64 36 68L34 66Z"
              fill="white"
            />
            <circle cx="34" cy="67" r="4" fill="#FF3366" />
          </svg>
        </div>
      );
    case 'sketchbook':
      return (
        <div
          className="flex items-center justify-center rounded-[6px] bg-[#222222] border border-white/20 transition-transform group-hover:scale-105 p-1.5"
          style={{ width: size, height: size }}
          title="Autodesk Sketchbook"
        >
          {/* Official Autodesk Sketchbook orange curved drafting pencil logo */}
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <rect width="100" height="100" rx="18" fill="#1E1E1E" />
            {/* Curving orange pencil body */}
            <path
              d="M74 24C60 38 32 66 28 80C26 86 32 86 36 82C48 70 76 42 84 32C88 28 86 20 80 18C77 17 75 20 74 24Z"
              fill="#FF6600"
            />
            {/* White pencil tip nib */}
            <path
              d="M25 83L21 89L29 86L25 83Z"
              fill="#FFFFFF"
            />
            <circle cx="21" cy="89" r="2.5" fill="#111111" />
            {/* Subtle pencil facet ridge */}
            <path
              d="M75 23C62 37 36 63 32 77"
              stroke="#FFA366"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    default:
      return null;
  }
};
