import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { sanityClient } from './sanityClient';

const builder: ImageUrlBuilder = imageUrlBuilder(sanityClient);

export function urlFor(source): ImageUrlBuilder {
  return builder.image(source);
}
