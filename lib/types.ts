// lib/types.ts
export interface BaseItem {
  title: string;
  subtitle: string;
  description?: string;
  duration?: string;
  location?: string;
  icon?: string;
  skills?: string[];
}

export interface WorkItem extends BaseItem {
  current?: boolean;
}

export interface EducationItem extends BaseItem {
  degree?: string;
  gpa?: string;
}

export interface ProjectItem extends BaseItem {
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export type ContentCategory = "work" | "education" | "projects" | "skills";

export interface ContentData {
  work: WorkItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  [key: string]: BaseItem[];
}

// Legacy type for backward compatibility
export interface Item extends BaseItem {
  current?: boolean;
}

export interface Content {
  work: Item[];
  education: Item[];
  projects: Item[];
  [key: string]: Item[];
}

export interface InstagramMedia {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  alt_text?: string;
  children?: InstagramMedia[]; // For carousel albums
}

export interface InstagramResponse {
  data: InstagramMedia[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export interface Photo {
  id: string;
  url: string;
  thumbnailUrl: string;
  caption?: string;
  timestamp: string;
  permalink: string;
  location?: string;
  tags?: string[];
  alt_text?: string;
  media_type?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  carousel_media?: Photo[]; // For carousel albums
}

export interface PhotoCategory {
  category: string;
  photos: Photo[];
}
