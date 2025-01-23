export interface NavItem {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: React.ComponentType;
  label: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  isRight?: boolean;
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  date: string;
  link?: string;
}

export interface Education {
  school: string;
  degree: string;
  details: string[];
  gpa?: string;
  period: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType;
  category: "languages" | "frameworks" | "tools";
}

export interface Interest {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
}
