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
            // drag-and-drop ordered list of artworks
            orderableDocumentListDeskItem({
              type: 'artwork',
              title: 'Artworks',
              S,
              context,
            }),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
})
