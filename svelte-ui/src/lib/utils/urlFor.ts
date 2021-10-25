import { sanityClient } from "$lib/sanityClient";
import imageUrlBuilder from '@sanity/image-url'

// get a pre-configured url-builder form your sanity client
const builder = imageUrlBuilder(sanityClient)


// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source) {
  return builder.image(source)
}
