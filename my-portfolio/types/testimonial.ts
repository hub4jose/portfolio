import { PortableTextBlock } from 'sanity';

export type Testimonial = {
  _id: string;

  _createdAt: Date;

  name: string;

  slug: string;

  title: string;

  images: any[];

  comment: PortableTextBlock[];
};
