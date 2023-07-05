import { PortableTextBlock } from 'sanity';

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
