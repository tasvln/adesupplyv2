export interface ProjectLink {
  label: string;
  href?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: string;
  swatch: string;
  code: string;
  media?: string[];
  detail: string;
  tags: string[];
  links: ProjectLink[];
}