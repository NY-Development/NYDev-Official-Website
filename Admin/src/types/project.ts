export type ProjectStatus = 'draft' | 'published' | 'archived';
export type ProjectDelivery = 'pending' | 'testing' | 'done';

export interface Project {
  id: string;
  title: string;
  desc: string;
  image: string;
  link: string;
  techTags: string[];
  category: string[];
  isDone: ProjectDelivery;
  status?: ProjectStatus;
  createdAt: string;
  updatedAt: string;
}
