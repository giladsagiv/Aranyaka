import { defineField, defineType } from 'sanity'

// Singleton — edited via the fixed "About Page" entry in the Studio structure
export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
      description: 'Shown large on the home page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'One line shown under the name on the home page.',
    }),
    defineField({
      name: 'homeImage',
      title: 'Home Page Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Shown beside the name on the home page.',
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
      name: 'body',
      title: 'About Text',
      type: 'text',
      rows: 20,
      description: 'The about page text. Separate paragraphs with an empty line.',
    }),
  ],
})
