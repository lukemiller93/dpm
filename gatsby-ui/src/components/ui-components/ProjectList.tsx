/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { ReactElement, useState } from 'react';
import type { WindowLocation } from '@reach/router';
import { AnimatePresence } from 'framer-motion';
import { CategoriesQuery, SanityProject } from '../../../graphql-types';
import { device } from '../../styles/theme';
import { useProject } from '../../hooks/useProject';
import { useProjects } from '../../hooks/useProjects';
import ProjectCard from '../ProjectCard';
import Tag from '../Tag';
import ProjectCardSkeleton from '../ProjectCardSkeleton';

const ProjectListStyles = styled.section`
  margin-top: var(--grid-gap-md);
  .tag-list {
    margin: var(--grid-gap-sm) auto;
    display: flex;
    gap: var(--spacing-xs);
    flex-wrap: wrap;
    justify-content: space-around;

    header {
      flex-basis: 100%;
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      h5 {
        margin: 0;
      }

      button {
        padding-right: var(--spacing-xs);
        position: relative;
        border: none;
        display: flex;
        align-items: center;
        gap: calc(var(--spacing-xs) / 1.5);
        padding: calc(var(--spacing-xs) / 3) var(--spacing-xs);
        cursor: pointer;
        border-radius: var(--border-radius-lg);
        box-shadow: var(--button-shadow);
        transition: all 200ms ease;
        background: var(--color-accent, gray);
        color: var(--white, white);
        &:hover {
          background: var(--bg-danger, darkred);
        }
        &::after {
          position: relative;
          top: -1px;
          /* position: absolute;
          bottom: 0;
          right: (var(--spacing-xs) / 4); */
          content: 'x';
        }
      }
    }
  }
  .project-listings {
    display: grid;
    gap: var(--grid-gap-lg);
    margin: var(--grid-gap-lg) auto;

    /* @media screen and ${device.md} {
      grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
    } */
  }
`;

const ProjectListingList = styled.div`
  display: grid;
  gap: var(--grid-gap-lg);
  margin: var(--grid-gap-lg) auto;
`;

function FilteredProjects({ refId }: { refId: string }) {
  const { data, isError, error, isLoading } = useProject(refId);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <span>Error: {error?.message}</span>;
  return (
    <div className="project-listings">
      {data?.map((project) => (
        <ProjectCard key={project?._id} cardData={project} />
      ))}
    </div>
  );
}

export default function ProjectList({
  location,
}: {
  location: {
    state: {
      filter: string;
    };
  };
}): ReactElement {
  // const { data, isError, error, isLoading } = useProjects();

  const {
    // allSanityCategory: { nodes },
    allSanityProject: { nodes: projectNodes },
  } = useStaticQuery<{ allSanityProject: { nodes: SanityProject[] } }>(graphql`
    query CATEGORIES {
      allSanityProject {
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

  return (
    <ProjectListStyles className="container">
      <ProjectListingList>
        {projectNodes?.map((project, index) => (
          <ProjectCard
            key={project?.id}
            reversed={!!(index % 2)}
            cardData={project}
          />
        ))}
      </ProjectListingList>
      {/* )} */}
    </ProjectListStyles>
  );
}
