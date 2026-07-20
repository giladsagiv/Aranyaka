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
        'The gallery starts filtered to this category. Tick it on one category only — if none is ticked, the gallery opens on "All".',
      initialValue: false,
    }),
  ],
})
