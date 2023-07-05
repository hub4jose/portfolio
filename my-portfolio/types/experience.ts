import { PortableTextBlock } from 'sanity';

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
