export interface TeamMember {
  id: string;
  name: string;
  role: string;
  desc: string;
  image: string;
  status?: 'active' | 'inactive';
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    x?: string;
    instagram?: string;
    telegram?: string;
    website?: string;
    youtube?: string;
    leetcode?: string;
  };
  createdAt: string;
  updatedAt: string;
}
