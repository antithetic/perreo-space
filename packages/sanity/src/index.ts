import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema'
import { structure } from './structure'

export const config = defineConfig({
  name: 'default',
  title: 'Love Hangover',

  projectId: 'e7t10841',
  dataset: 'production',

  plugins: [structureTool({ structure: structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev) =>
      prev.filter((item) => item.templateId !== 'siteSettings'),
  },
})
