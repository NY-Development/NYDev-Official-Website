export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  department: string;
  status: 'active' | 'inactive';
  avatarUrl: string;
  tags: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  createdAt: string;
  updatedAt: string;
}
