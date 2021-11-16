import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { SanityProject } from "../../graphql-types";
import { client } from "./graphql-client";

export const useProjects = () => {
  return useQuery<SanityProject[]>("projects", async () => {
    const {allProject} = await client.request(
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
    return allProject
  });
};
