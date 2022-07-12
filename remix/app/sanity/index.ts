import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const SANITY_DATASET = 'production'
export const SANITY_PROJECT_ID = "sd6anpfo"
export const SANITY_API_VERSION = 'v2022-07-11'

export const client = new sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true
})

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}