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
