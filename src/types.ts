export type ProjectCategory =
  | 'All'
  | 'Graphic Design'
  | 'Photo Editing'
  | 'Before & After'
  | 'Thumbnails'
  | 'Video Editing'
  | 'Illustration';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  year?: string;
  description?: string;
  thumbnail: string;
  images?: string[];
  beforeImage?: string;
  afterImage?: string;
  tools?: string[];
  type?: 'image' | 'video' | 'before-after';
  videoUrl?: string;
  duration?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '9/16';
}

export interface CreativeTool {
  id: string;
  name: string;
  role: string;
  iconType:
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
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface DesignerProfile {
  name: string;
  title: string;
  subtitle: string;
  intro: string;
  bio: string;
  creativeDisciplines: {
    title: string;
    description: string;
  }[];
  designApproach: string;
  creativeInterests: string;
  email: string;
  socials: {
    instagram?: string;
    behance?: string;
    linkedin?: string;
    youtube?: string;
  };
  youtubeStats?: {
    channelName: string;
    handle: string;
    url: string;
    subscribers: string;
    videos: string;
    views: string;
    joined: string;
  };
  instagramStats?: {
    handle: string;
    url: string;
    followers: string;
    following: string;
  };
  portraitImage: string;
}
