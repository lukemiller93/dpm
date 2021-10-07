import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export async function get(req) {

    // We have access to req.params.slug because the filename has [slug] in it.

      const query = gql`
        query {
        pageData: allPage(where: { slug: { current: { eq: "/" } } }) {
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
      const {pageData} = await client.request(query)

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