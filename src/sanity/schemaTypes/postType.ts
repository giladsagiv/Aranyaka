import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Journal Entry',
  type: 'document',
  orderings: [
    {
      title: 'Newest first',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Click "Generate" after typing the title.',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date',
      type: 'date',
      description: 'Posts are listed newest first.',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video Link (optional)',
      type: 'url',
      description: 'Paste a YouTube or Vimeo link to make this a vlog post.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image (optional)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'altText',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for visually impaired visitors.',
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Summary (optional)',
      type: 'text',
      rows: 3,
      description: 'Shown on the blog list. If empty, the start of the text is used.',
    }),
    defineField({
      name: 'body',
      title: 'Text',
      type: 'text',
      rows: 20,
      description: 'Separate paragraphs with an empty line.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' },
  },
})
