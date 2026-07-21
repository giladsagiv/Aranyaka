import { defineField, defineType } from 'sanity'

// Reusable size row — one selectable print size and its price.
// Shared by the global table on the Prints Page and the per-artwork override.
export const printSizeType = defineType({
  name: 'printSize',
  title: 'Print Size',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Size Label',
      type: 'string',
      description: 'e.g. "A5", "A4", "A3".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g. "14.8 × 21 cm". Shown in brackets next to the label.',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Free text, e.g. "€28".',
    }),
  ],
  preview: {
    select: { label: 'label', dimensions: 'dimensions', price: 'price' },
    prepare({ label, dimensions, price }) {
      const subtitle = [dimensions, price].filter(Boolean).join(' – ')
      return { title: label || 'Size', subtitle }
    },
  },
})
