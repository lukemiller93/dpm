import { gql, request } from "graphql-request";
import { useQuery } from "react-query";

export const usePosts = () => {
  return useQuery("projects", async () => {
    const data = await request(
      process.env.GATSBY_GRAPHQL_ENDPOINT,
      gql`
        query FILTERED_PROJECTS_QUERY {
          allProject(
            sort: { publishedAt: DESC }
            where: { _: { is_draft: false } }
          ) {
            _id
            mainImage {
              _key
              _type
              alt
              asset {
                url
                assetId
              }
            }
            slug {
              current
            }
            title
            author {
              name
            }
            categories {
              title
              description
              icon {
                _type
                __typename
                asset {
                  _id
                  __typename
                  _type
                }
              }
              description
            }
          }
        }
      `
    );
  });
};
