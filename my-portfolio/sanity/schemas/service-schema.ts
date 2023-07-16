const service = {
  name: 'service',
  title: 'Services',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },

    {
      name: 'content',
      title: 'Content',

      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },

    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
};

export default service;
