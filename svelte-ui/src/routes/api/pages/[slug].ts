import { client } from '../../../lib/components/SanityClient';

export async function get(req) {

    // We have access to req.params.slug because the filename has [slug] in it.

      const {slug} = req.params
      const filter = '*[_type == "page" && slug.current == $slug][0]';
      const projection = `{ _id, slug, title, body }`;

      const query = filter + projection
      const pageData = await client.fetch(query, {slug})

      if(!pageData?._id) {
        return {
          status: 404,
          error: 'Page not found'
        }
      }
        return {
          status: 200,
          body: {
            pageData
          }
        }




}


