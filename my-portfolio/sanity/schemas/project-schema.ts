const project = {
  name: 'project',

  title: 'Projects',

  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },

    {
      name: 'skills',
      title: 'Skills',

      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
    },
    {
      name: 'appUrl',
      title: 'APP_URL',

      type: 'url',
    },

    {
      name: 'codeUrl',
      title: 'CODE_URL',

      type: 'url',
    },

    {
      name: 'content',
      title: 'Content',

      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'statement',
      title: 'Problem Statement',

      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default project;
