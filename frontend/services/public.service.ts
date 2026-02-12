import { apiGet } from './api';

export interface PublicProject {
  id: string;
  name: string;
  slug: string;
  description: string;
  client: string;
  technologies: string[];
  status: string;
  assets: { url: string; type: string }[];
}

export interface PublicTeamMember {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
}

export interface PublicContentBlock {
  id: string;
  key: string;
  value: string;
}

export const getPublicProjects = () => apiGet<PublicProject[]>('/api/public/projects');
export const getPublicTeam = () => apiGet<PublicTeamMember[]>('/api/public/team');
export const getPublicContent = () => apiGet<PublicContentBlock[]>('/api/public/content');
