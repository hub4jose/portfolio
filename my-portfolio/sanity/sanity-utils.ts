import { createClient, groq } from 'next-sanity';

import clientConfig from './config/client-config';
import {
  Skill,
  Project,
  Testimonial,
  Experience,
  Education,
  Service,
} from '@/types';

export const getSkills = async (): Promise<Skill[]> => {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type=="skill"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "images":images[]{asset->{url}},
    }`
  );
};

export const getProjects = async (): Promise<Project[]> => {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type=="project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "images":images[]{asset->{originalFilename,url}},
        "skills":skills[]->{title,images[]{asset->{url}}},
        appUrl,
        codeUrl,
        content,
        statement
    }`
  );
};

export const getProject = async (slug: string): Promise<Project> => {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type=="project" && slug.current == $slug][0]{
              _id,
              _createdAt,
              name,
        "slug": slug.current,
        "images":images[]{asset->{originalFilename,url}},
        "skills":skills[]->{title,images[]{asset->{url}}},
        appUrl,
        codeUrl,
        content,
        statement
          }`,
    { slug }
  );
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type=="testimonial"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        title,
        "images":images[]{asset->{url}},
        comment
    }`
  );
};

export const getExperiences = async (): Promise<Experience[]> => {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type=="experience"]{
        _id,
        _createdAt,
        company,
        "slug": slug.current,
        title,
        "images":images[]{asset->{url}},
        years,
        details
    }`
  );
};

export const getEducation = async (): Promise<Education[]> => {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type=="education"]{
        _id,
        _createdAt,
        institution,
        "slug": slug.current,
        course,
        "images":images[]{asset->{url}},
        years
    }`
  );
};

export const getServices = async (): Promise<Service[]> => {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type=="service"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content,
        "images":images[]{asset->{url}},
        
    }`
  );
};
