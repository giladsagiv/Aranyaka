import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'personal-gallery',
  title: 'Personal Gallery',
  projectId: '369t4bp9',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // fixed singleton for the about page / site identity
            S.listItem()
              .title('About Page')
              .id('aboutPage')
              .child(
                S.document().schemaType('aboutPage').documentId('aboutPage'),
              ),
            S.listItem()
              .title('Contact Page')
              .id('contactPage')
              .child(
                S.document().schemaType('contactPage').documentId('contactPage'),
              ),
            S.divider(),
            // drag-and-drop ordered lists; drag order = site order
            orderableDocumentListDeskItem({
              type: 'category',
              title: 'Categories',
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              type: 'artwork',
              title: 'Artworks',
              S,
              context,
            }),
            S.divider(),
            // chronological, newest first — no manual ordering needed
            S.listItem()
              .title('Journal')
              .schemaType('post')
              .child(
                S.documentTypeList('post')
                  .title('Journal')
                  .defaultOrdering([
                    { field: 'publishedAt', direction: 'desc' },
                  ]),
              ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
})
