import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { ReactElement } from 'react';
import { SanityProject } from '../../../graphql-types';
import { useProjects } from '../../hooks/useProjects';
import ProjectCard from '../ProjectCard';
import ProjectCardSkeleton from '../ProjectCardSkeleton';

const RecentProjectsStyles = styled.section`
  padding: 0 1vw;
  display: grid;
  margin-top: var(--spacing-lg);
  margin-bottom: var(--grid-gap-xl);
  gap: var(--grid-gap-lg);
  place-items: center;

  @media screen and (min-width: 576px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
export default function RecentProjects(): ReactElement {
  // const { isLoading, isError, data, error } = useProjects();

  const { allSanityProject } = useStaticQuery<{
    allSanityProject: { nodes: SanityProject[] };
  }>(graphql`
    query RECENT_PROJECTS {
      allSanityProject(sort: { order: ASC, fields: _createdAt }) {
        nodes {
          id
          title
          _id
          mainImage {
            asset {
              gatsbyImageData(
                fit: CROP
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
              altText
            }
            alt
          }
          slug {
            current
          }
          excerpt
          author {
            name
          }
          categories {
            title
            description
          }
        }
      }
    }
  `);
  // if (isLoading)
  //   return (
  //     <RecentProjectsStyles className="container">
  //       <ProjectCardSkeleton reversed={false} />
  //       <ProjectCardSkeleton reversed />
  //     </RecentProjectsStyles>
  //   );
  // if (isError) return <span>Error: {error?.message}</span>;
  return (
    <RecentProjectsStyles className="recent-projects container">
      {allSanityProject?.nodes?.map((project, index) => (
        <ProjectCard
          key={project.id}
          reversed={!!(index % 2)}
          cardData={project}
        />
      ))}
    </RecentProjectsStyles>
  );
}
