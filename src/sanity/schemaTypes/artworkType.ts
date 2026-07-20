import { defineField, defineType } from 'sanity'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

export const artworkType = defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    // hidden field managed by drag-and-drop reordering
    orderRankField({ type: 'artwork' }),
    defineField({
      name: 'title',
      title: 'Artwork Title',
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'The section this artwork appears under on the site.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Place the hotspot dot on the focal point — the square thumbnail crops around it.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text (accessibility)',
      type: 'string',
      description: 'Describe the image for visually impaired visitors.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g. 50 × 70 cm',
    }),
    defineField({
      name: 'year',
      title: 'Year Created',
      type: 'number',
    }),
    defineField({
      name: 'medium',
      title: 'Medium / Materials',
      type: 'string',
      description: 'e.g. Oil on canvas, Digital photograph',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Optional, free text — e.g. "€1,200". Leave empty to show no price.',
    }),
    defineField({
      name: 'sold',
      title: 'Sold',
      type: 'boolean',
      description: 'Marks the artwork as sold on the site.',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Artwork Description',
      type: 'text',
    }),
    defineField({
      name: 'extraImages',
      title: 'Additional Images',
      type: 'array',
      description: 'Optional extra photos (details, framing, in situ) shown on the artwork page.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
              description: 'Falls back to the main alt text if empty.',
            }),
          ],
        },
      ],
    }),
  ],
})
