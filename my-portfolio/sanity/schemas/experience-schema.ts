const experience = {
  name: 'experience',
  title: 'Experiences',
  type: 'document',

  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'company',
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
    {
      name: 'years',
      title: 'Years',
      type: 'string',
    },

    {
      name: 'details',
      title: 'Details',

      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },
  ],
};

export default experience;
