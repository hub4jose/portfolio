import { defineConfig } from 'sanity';

import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'oz3hdom5',
  dataset: 'production',
  title: 'My Portfolio',
  apiVersion: '2023-06-15',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
