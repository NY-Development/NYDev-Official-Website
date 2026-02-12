import { apiGet } from './api';

export interface PublicProject {
  id: string;
  title: string;
  desc: string;
  image: string;
  link: string;
  techTags: string[];
  category: string[];
  isDone: string;
}

export interface PublicTeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  desc: string;
  links: Record<string, string>;
}

export interface PublicContentBlock {
  id: string;
  key: string;
  value: string;
}

export const getPublicProjects = () => apiGet<PublicProject[]>('/api/public/projects');
export const getPublicTeam = () => apiGet<PublicTeamMember[]>('/api/public/team');
export const getPublicContent = () => apiGet<PublicContentBlock[]>('/api/public/content');
