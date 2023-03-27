import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'carles-adele',

  projectId: 'tynq4rd6',
  dataset: 'carles-adele-dataset',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
