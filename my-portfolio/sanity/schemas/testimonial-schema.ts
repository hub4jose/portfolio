const testimonial = {
  name: 'testimonial',
  title: 'Testimonials',
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
      options: {
        source: 'name',
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
      name: 'comment',
      title: 'Comment',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default testimonial;
