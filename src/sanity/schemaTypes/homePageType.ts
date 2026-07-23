import { defineField, defineType } from 'sanity'

// Singleton — edited via the fixed "Home Page" entry in the Studio structure
export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
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
      name: 'studioName',
      title: 'Studio Name',
      type: 'string',
      description: 'Small label above the studio tagline, e.g. “Aranyaka Studio”.',
    }),
    defineField({
      name: 'studioTagline',
      title: 'Studio Tagline',
      type: 'string',
      description: 'The studio motto shown under the studio name.',
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
  ],
})
