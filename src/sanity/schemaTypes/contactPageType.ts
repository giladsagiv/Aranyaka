import { defineField, defineType } from 'sanity'

// Singleton — edited via the fixed "Contact Page" entry in the Studio structure
export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Intro Text',
      type: 'text',
      rows: 6,
      description: 'Optional text shown above the contact details.',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'Shown as a mailto link.',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      description: 'Optional, full URL (https://instagram.com/...).',
    }),
  ],
})
