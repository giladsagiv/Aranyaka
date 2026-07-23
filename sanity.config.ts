import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'personal-gallery',
  title: 'Personal Gallery',
  projectId: '369t4bp9',
  dataset: 'production',
  // Sanity's new document Events API (default-on) returns "Internal error" for
  // this project and crashes the History pane with a ChannelError. Revert to
  // the legacy history timeline. (beta.eventsAPI.documents defaults to true.)
  beta: {
    eventsAPI: {
      documents: false,
    },
  },
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // fixed singletons, one record per page
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(
                S.document().schemaType('homePage').documentId('homePage'),
              ),
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
            S.listItem()
              .title('Prints Page')
              .id('printsPage')
              .child(
                S.document().schemaType('printsPage').documentId('printsPage'),
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
