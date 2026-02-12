export type ProjectStatus = 'draft' | 'published' | 'archived';

export interface ProjectAsset {
  id: string;
  url: string;
  type: 'image' | 'video';
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  client: string;
  technologies: string[];
  status: ProjectStatus;
  assets: ProjectAsset[];
  createdAt: string;
  updatedAt: string;
}
