import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export async function get(req) {

    // We have access to req.params.slug because the filename has [slug] in it.

      const {slug} = req.params
      console.log(slug)
      const query = gql`
        query($slug: String!) {
        pageData: allPage(where: { slug: { current: { eq: $slug } } }) {
          title
          _id
          content {
            __typename
            ... on BodySection {
              contentRaw
              _key
            }
          }
        }
      }
      `
      const variables = {
        slug: slug ? slug : '/'
      }
      const {pageData} = await client.request(query, variables)

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


