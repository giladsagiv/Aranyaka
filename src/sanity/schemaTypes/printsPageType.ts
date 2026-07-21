import { defineField, defineType } from 'sanity'

// Singleton — edited via the fixed "Prints Page" entry in the Studio structure
export const printsPageType = defineType({
  name: 'printsPage',
  title: 'Prints Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Page Heading',
      type: 'string',
      description: 'Large heading at the top of the page, e.g. "Art Prints".',
    }),
    defineField({
      name: 'intro',
      title: 'Intro Text',
      type: 'text',
      rows: 6,
      description:
        'Short opening text under the heading. Separate paragraphs with an empty line.',
    }),
    defineField({
      name: 'printSubtitle',
      title: 'Print Subtitle',
      type: 'string',
      description:
        'Line shown under every print’s title, e.g. "Art Print on 220g Textured Paper".',
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes & Prices',
      type: 'array',
      of: [{ type: 'printSize' }],
      description:
        'The default size/price table applied to every print. A single artwork can override this on its own page.',
    }),
    defineField({
      name: 'details',
      title: 'Details & Shipping',
      type: 'array',
      description:
        'Rows shown in the details box at the bottom, e.g. Framing, Authenticity, Packaging, Shipping.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g. "Framing".',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'text' },
          },
        },
      ],
    }),
  ],
})
