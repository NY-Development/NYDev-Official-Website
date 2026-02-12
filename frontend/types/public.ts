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
