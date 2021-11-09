
import { client } from '$lib/graphql-client'
import { SINGLE_PROJECT_QUERY } from '$lib/utils/queries'


export async function get(req) {
  // we have access to req.params.slug because the filename has [slug] in it.
  const {slug} = req.params

  const variables = {
    slug
  }

  const {pageData} = await client.request(SINGLE_PROJECT_QUERY, variables)

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
