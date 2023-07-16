const education = {
  name: 'education',
  title: 'Education',
  type: 'document',

  fields: [
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'institution',
      },
    },
    {
      name: 'course',
      title: 'Course',
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
  ],
};

export default education;
