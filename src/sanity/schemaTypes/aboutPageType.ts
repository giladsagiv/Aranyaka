import { defineField, defineType } from 'sanity'

// Singleton — edited via the fixed "About Page" entry in the Studio structure
export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'openingQuote',
      title: 'Opening Quote',
      type: 'text',
      rows: 3,
      description: 'Shown as an epigraph at the top of the About page.',
    }),
    defineField({
      name: 'quoteAttribution',
      title: 'Quote Attribution',
      type: 'string',
      description: 'Optional — who the quote is by. Leave empty for none.',
    }),
    defineField({
      name: 'body',
      title: 'About Text',
      type: 'text',
      rows: 20,
      description: 'The about page text. Separate paragraphs with an empty line.',
    }),
    defineField({
      name: 'cvFile',
      title: 'CV (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
      description: 'Upload a PDF to show a "Download PDF CV" button on the About page.',
    }),
  ],
})
