import { DesignerProfile, ProjectItem, CreativeTool, ProcessStep } from '../types';

export const designerProfile: DesignerProfile = {
  name: "ABHAY KURMI",
  title: "HELLO, I'M ABHAY KURMI",
  subtitle: "Graphic Designer • Video Editor • Photo Editor • Illustrator",
  intro: "Creating clean, engaging visuals through graphic design, photo editing, illustration, and video.",
  bio: "I am an independent multidisciplinary visual creative focused on clarity, balance, and intentional craft. Whether designing brand collateral, grading cinematic video, or illustrating editorial artwork, my goal is always to let the visual message speak directly without unnecessary noise.",
  creativeDisciplines: [
    {
      title: "Graphic Design",
      description: "Visual identity, typography layouts, print media, brand guidelines, and editorial collateral designed for clarity."
    },
    {
      title: "Photo Editing",
      description: "Color grading, retouching, exposure restoration, background compositing, and commercial product polish."
    },
    {
      title: "Video Editing",
      description: "Rhythm-driven pacing, sound design balance, dynamic reels, motion graphics, and color grading for digital media."
    },
    {
      title: "Illustration",
      description: "Vector illustrations, character art, editorial drawings, and custom iconography with strong silhouettes."
    }
  ],
  designApproach: "Form follows intent. I focus on negative space, typographic restraint, and deliberate color choices to let the subject shine.",
  creativeInterests: "Typography systems, minimal brand aesthetics, street photography, frame-by-frame rhythm, and digital vector craft.",
  email: "abhaykurmiar@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/genifilms/",
    behance: "https://behance.net",
    linkedin: "https://linkedin.com",
    youtube: "https://www.youtube.com/@heyogeni"
  },
  youtubeStats: {
    channelName: "HeyoGeni",
    handle: "@heyogeni",
    url: "https://www.youtube.com/@heyogeni",
    subscribers: "4.88K",
    videos: "85",
    views: "64,443",
    joined: "Apr 30, 2020"
  },
  instagramStats: {
    handle: "genifilms",
    url: "https://www.instagram.com/genifilms/",
    followers: "1,520",
    following: "724"
  },
  // Clean, professional portrait for the hero section
portraitImage: `${import.meta.env.BASE_URL}Abhay.png`
};

export const creativeTools: CreativeTool[] = [
  {
    id: "tool-ps",
    name: "Photoshop",
    role: "Photo Editing & Compositing",
    iconType: "photoshop"
  },
  {
    id: "tool-ai",
    name: "Illustrator",
    role: "Graphic Design & Vector Art",
    iconType: "illustrator"
  },
  {
    id: "tool-pr",
    name: "Premiere Pro",
    role: "Video Editing & Timeline Assembly",
    iconType: "premiere"
  },
  {
    id: "tool-capcut",
    name: "CapCut",
    role: "Short-Form Video & Trend Editing",
    iconType: "capcut"
  },
  {
    id: "tool-vn",
    name: "VN",
    role: "Mobile Video Editing & Keyframing",
    iconType: "vn"
  },
  {
    id: "tool-snapseed",
    name: "Snapseed",
    role: "Selective Retouching & Fine Grading",
    iconType: "snapseed"
  },
  {
    id: "tool-pixellab",
    name: "PixelLab",
    role: "Typography & Thumbnail Graphics",
    iconType: "pixellab"
  },
  {
    id: "tool-ibispaint",
    name: "ibis Paint X",
    role: "Digital Illustration & Manga Art",
    iconType: "ibispaint"
  },
  {
    id: "tool-sketchbook",
    name: "Sketchbook",
    role: "Sketching, Inking & Concept Art",
    iconType: "sketchbook"
  },
  {
    id: "tool-ae",
    name: "After Effects",
    role: "Motion Graphics & Visual FX",
    iconType: "aftereffects"
  },
  {
    id: "tool-lr",
    name: "Lightroom",
    role: "Color Grading & RAW Processing",
    iconType: "lightroom"
  },
  {
    id: "tool-figma",
    name: "Figma",
    role: "UI & Layout Systems",
    iconType: "figma"
  },
  {
    id: "tool-canva",
    name: "Canva",
    role: "Rapid Social Collateral",
    iconType: "canva"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "IDEA",
    description: "Understanding the project brief, creative objectives, audience, and defining the core creative direction."
  },
  {
    step: "02",
    title: "RESEARCH",
    description: "Collecting moodboards, visual references, typography tests, and exploring conceptual avenues."
  },
  {
    step: "03",
    title: "DESIGN",
    description: "Creating the visual layouts, composing color palettes, editing footage, and developing the core assets."
  },
  {
    step: "04",
    title: "REFINE",
    description: "Polishing details, fine-tuning typography and color balance, testing responsiveness, and preparing delivery files."
  }
];

export const portfolioProjects: ProjectItem[] = [
  // --- GRAPHIC DESIGN ---
  {
    id: "proj-1",
    title: "Monochrome Editorial Identity",
    category: "Graphic Design",
    year: "2025",
    description: "A minimal typography and layout system for an architectural review quarterly publication.",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    tools: ["Illustrator", "InDesign"],
    type: "image",
    aspectRatio: "4/3"
  },
  {
    id: "proj-2",
    title: "Kinetic Brand Identity & Poster Series",
    category: "Graphic Design",
    year: "2025",
    description: "Minimalist Swiss-inspired typography posters exploring spatial rhythm and bold sans-serif pairings.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    tools: ["Illustrator", "Photoshop"],
    type: "image",
    aspectRatio: "3/4"
  },
  {
    id: "proj-3",
    title: "Studio Nordic Packaging System",
    category: "Graphic Design",
    year: "2024",
    description: "Custom label design and matte packaging typography for an artisan ceramic studio.",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    tools: ["Illustrator", "Photoshop"],
    type: "image",
    aspectRatio: "4/3"
  },

  // --- BEFORE & AFTER ---
  {
    id: "proj-ba-1",
    title: "Moody Cinematic Portrait Retouch",
    category: "Before & After",
    year: "2025",
    description: "High-end skin retouching, tonal balance, and cinematic color grading from raw capture.",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    // Unedited flat/raw appearance
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=40&sat=-40&con=-20",
    // Finished polished/graded appearance
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85&sat=20&con=15",
    tools: ["Photoshop", "Lightroom"],
    type: "before-after",
    aspectRatio: "4/3"
  },
  {
    id: "proj-ba-2",
    title: "Architectural Golden Hour Grade",
    category: "Before & After",
    year: "2024",
    description: "Sky replacement, perspective correction, shadow recovery, and warm twilight grade.",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=40&sat=-60&con=-30",
    afterImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=90&sat=25&con=20",
    tools: ["Lightroom", "Photoshop"],
    type: "before-after",
    aspectRatio: "16/9"
  },
  {
    id: "proj-ba-3",
    title: "Automotive Commercial Polish",
    category: "Before & After",
    year: "2024",
    description: "Specular highlight enhancement, background clean-up, and metallic tone grading.",
    thumbnail: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80",
    beforeImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=40&sat=-50&bri=-10",
    afterImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=90&sat=15&con=25",
    tools: ["Photoshop", "Lightroom"],
    type: "before-after",
    aspectRatio: "16/9"
  },

  // --- PHOTO EDITING (REGULAR) ---
  {
    id: "proj-pe-1",
    title: "Urban Atmosphere & Street Grade",
    category: "Photo Editing",
    year: "2025",
    description: "Color separation and natural grain overlay for an editorial street photography series.",
    thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80",
    tools: ["Lightroom", "Photoshop"],
    type: "image",
    aspectRatio: "4/3"
  },
  {
    id: "proj-pe-2",
    title: "Minimalist Product Still Life",
    category: "Photo Editing",
    year: "2024",
    description: "Flawless dust removal, shadow reconstruction, and balanced studio exposure.",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
    tools: ["Photoshop"],
    type: "image",
    aspectRatio: "4/3"
  },

  // --- THUMBNAIL DESIGN ---
  {
    id: "proj-th-1",
    title: "Camera Gear Breakdown & Guide",
    category: "Thumbnails",
    year: "2025",
    description: "High-contrast focal hierarchy, clear subject cutout, and bold typography designed for 16:9 mobile feeds.",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1280&q=80",
    tools: ["Photoshop", "Illustrator"],
    type: "image",
    aspectRatio: "16/9"
  },
  {
    id: "proj-th-2",
    title: "Minimalist Workspace Tour",
    category: "Thumbnails",
    year: "2025",
    description: "Clean composition, balanced lighting accent, and un-distorted thumbnail typography.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1280&q=80",
    tools: ["Photoshop"],
    type: "image",
    aspectRatio: "16/9"
  },
  {
    id: "proj-th-3",
    title: "Creative Workflow Masterclass",
    category: "Thumbnails",
    year: "2024",
    description: "Eye-catching focal subject with subtle contrast separation and high-visibility title styling.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1280&q=80",
    tools: ["Photoshop", "Illustrator"],
    type: "image",
    aspectRatio: "16/9"
  },

  // --- VIDEO EDITING ---
  {
    id: "proj-ve-1",
    title: "Travel Reel — Alpine Expedition",
    category: "Video Editing",
    year: "2025",
    description: "Paced cut matching rhythmic audio beat, color grade matching chilly dawn tones.",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    tools: ["Premiere Pro", "After Effects"],
    type: "video",
    duration: "00:32",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    aspectRatio: "16/9"
  },
  {
    id: "proj-ve-2",
    title: "Brand Anthem — Craft & Materials",
    category: "Video Editing",
    year: "2024",
    description: "Macro craft footage editing with crisp sound design and subtle motion titles.",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    tools: ["Premiere Pro", "Lightroom"],
    type: "video",
    duration: "00:48",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    aspectRatio: "16/9"
  },
  {
    id: "proj-ve-3",
    title: "Urban Architecture Motion Montage",
    category: "Video Editing",
    year: "2024",
    description: "High-contrast architectural montage highlighting form, reflections, and city tempo.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    tools: ["Premiere Pro", "After Effects"],
    type: "video",
    duration: "01:14",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    aspectRatio: "16/9"
  },

  // --- ILLUSTRATION ---
  {
    id: "proj-il-1",
    title: "Solitude — Editorial Vector Series",
    category: "Illustration",
    year: "2025",
    description: "Monochrome architectural and silhouette vectors exploring negative space and quiet moments.",
    thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
    tools: ["Illustrator"],
    type: "image",
    aspectRatio: "3/4"
  },
  {
    id: "proj-il-2",
    title: "Modern Botany Line Art Studies",
    category: "Illustration",
    year: "2024",
    description: "Fine line vector illustrations capturing delicate organic shapes and botanical structures.",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80",
    tools: ["Illustrator"],
    type: "image",
    aspectRatio: "1/1"
  },
  {
    id: "proj-il-3",
    title: "Geometric Space Exploration",
    category: "Illustration",
    year: "2024",
    description: "Minimalist retro-modern vector compositions using precise geometry and controlled red accents.",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80",
    tools: ["Illustrator", "Photoshop"],
    type: "image",
    aspectRatio: "4/3"
  }
];
