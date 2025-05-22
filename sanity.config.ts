import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './schemaTypes/structure'

export default defineConfig({
  name: 'default',
  title: 'rundfrau-sanity',

  projectId: 'x8r4dlu1',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
