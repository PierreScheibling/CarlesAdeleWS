export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      group: 'meta',
      name: 'meta_title',
      type: 'string',
      title: 'Meta Title',
      validation: (Rule) => Rule.required(),
    },
    {
      group: 'content',
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      group: 'content',
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    {
      group: 'content',
      name: 'createdDate',
      type: 'datetime',
      title: 'Created Date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    {
      group: 'content',
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      group: 'content',
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      group: 'content',
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      group: 'content',
      title: 'Article description',
      name: 'article',
      type: 'array',
      // validation: Rule => Rule.required(),
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      title: 'Test',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
