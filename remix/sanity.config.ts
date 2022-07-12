import { createConfig } from 'sanity'

import { deskTool } from 'sanity/desk'

import { schemaTypes } from '~/components/Studio/schema'
import { SANITY_DATASET, SANITY_PROJECT_ID } from '~/sanity'


export default createConfig({
  name: 'dauntlessPusuitMedia.com',
  basePath: '/studio',

  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,

  plugins: [
    deskTool()
  ],

  schema: {
    types: schemaTypes
  }
})