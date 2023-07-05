import { PortableTextBlock } from 'sanity';
export type Skill = {
  _id: string;

  _createdAt: Date;

  title: string;

  slug: string;

  images: any[];
};

export type Project = {
  _id: string;

  _createdAt: Date;

  name: string;

  slug: string;

  images: any[];

  skills: any[];

  appUrl: string;

  codeUrl: string;

  content: PortableTextBlock[];

  statement: PortableTextBlock[];
};

export type Testimonial = {
  _id: string;

  _createdAt: Date;

  name: string;

  slug: string;

  title: string;

  images: any[];

  comment: PortableTextBlock[];
};

export type Experience = {
  _id: string;

  _createdAt: Date;

  company: string;

  slug: string;

  title: string;

  images: any[];

  years: string;

  details: PortableTextBlock[];
};

export type Education = {
  _id: string;

  _createdAt: Date;

  institution: string;

  slug: string;

  course: string;

  images: any[];

  years: string;
};
