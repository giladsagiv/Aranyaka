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
      description: 'Shown as a section heading on the site, e.g. "Scrolls", "Paintings".',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
