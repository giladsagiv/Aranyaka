import { defineField, defineType } from 'sanity'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    // hidden field managed by drag-and-drop reordering
    orderRankField({ type: 'category' }),
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      description: 'Shown as a filter on the gallery page, e.g. "Scrolls", "Paintings".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isDefault',
      title: 'Open the gallery on this category',
      type: 'boolean',
      description:
        'The gallery starts on this category. Tick it on one category only — if none is ticked, the first category in this list is used.',
      initialValue: false,
    }),
    defineField({
      name: 'seriesTitle',
      title: 'Series Title',
      type: 'string',
      description:
        'Large heading shown above this category’s grid, e.g. "Reflection of the Inner Landscape". Leave empty for no header.',
    }),
    defineField({
      name: 'seriesSubtitle',
      title: 'Series Subtitle',
      type: 'string',
      description: 'Smaller line under the series title, e.g. "A Wandering Journey".',
    }),
    defineField({
      name: 'statement',
      title: 'Curatorial Statement',
      type: 'text',
      rows: 6,
      description:
        'Short text shown under the series title. Separate paragraphs with an empty line.',
    }),
  ],
})
