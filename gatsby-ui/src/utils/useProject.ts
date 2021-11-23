import { gql } from 'graphql-request';
import { useQuery, UseQueryResult } from 'react-query';
import { SanityProject } from '../../graphql-types';
import { client } from './graphql-client';

const fetchProject = async (refId: string) => {
  const { allProject }: { allProject: SanityProject[] } = await client.request(
    gql`
      query FILTERED_PROJECTS_QUERY($refId: ID) {
        allProject(
          sort: { publishedAt: DESC }
          where: { _: { is_draft: false, references: $refId } }
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
            _id
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
    `,
    { refId }
  );
  return allProject;
};

export const useProject: (
  refId: string
) => UseQueryResult<SanityProject[], unknown> = (refId) =>
  useQuery(['project', refId], () => fetchProject(refId));
