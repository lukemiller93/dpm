import { client } from '$lib/graphql-client';
import { FILTERED_PAGE_QUERY } from '$lib/utils/queries';

export async function get(req) {

    // We have access to req.params.slug because the filename has [slug] in it.

      const {pageData} = await client.request(FILTERED_PAGE_QUERY, {slug: '/'})

      if(!pageData[0]?._id) {
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
