export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  // groups: [
  //   {
  //     name: 'content',
  //     title: 'Content',
  //   },
  //   // {
  //   //   name: 'meta',
  //   //   title: 'Meta',
  //   // },
  // ],
  fields: [
    // {
    //   group: 'meta',
    //   name: 'meta_title',
    //   type: 'string',
    //   title: 'Titre Meta',
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      type: 'string',
      title: 'Auteur',
      validation: (Rule) => Rule.required(),
    },
    // {
    //   group: 'content',
    //   name: 'publishedDate',
    //   type: 'date',
    //   title: 'Date de Publication',
    //   validation: (Rule) => Rule.required(),
    //   options: {
    //     dateFormat: 'DD-MM-YYYY',
    //   },
    // },
    {
      name: 'createdDate',
      type: 'date',
      title: 'Date de création',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      // fields: [
      //   {
      //     name: 'caption',
      //     type: 'string',
      //     title: 'Caption',
      //   },
      //   {
      //     name: 'attribution',
      //     type: 'string',
      //     title: 'Attribution',
      //   },
      // ],
    },
    // {
    //   group: 'content',
    //   title: 'Slug',
    //   name: 'slug',
    //   type: 'slug',
    //   validation: (Rule) => Rule.required(),
    //   options: {
    //     source: 'title',
    //     maxLength: 200, // will be ignored if slugify is set
    //     slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
    //   },
    // },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  orderings: [
    {
      title: 'Created Date, New',
      name: 'rcreatedDate',
      by: [
        {field: 'createdDate', direction: 'desc'}
      ]
    },
  ]
}
