import { client } from '$lib/graphql-client'

export async function get(req) {
  const {allNavigationMenu} = await client.request(
    `query {
      allNavigationMenu{
        title
        _id
        items{
          sitePageRoute{
            __typename
            ...on Page {
              title
              _id
              slug{
                current
              }
            }
          }
        }
      }
    }
  `)

  if(allNavigationMenu) {
    return {
      status: 200,
      body: allNavigationMenu
    }
  }
}