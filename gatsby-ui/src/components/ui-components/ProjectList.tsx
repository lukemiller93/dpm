import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { ReactElement, useState } from 'react';
import type { WindowLocation } from '@reach/router';
import { CategoriesQuery } from '../../../graphql-types';
import { device } from '../../styles/theme';
import { useProject } from '../../utils/useProject';
import { useProjects } from '../../utils/useProjects';
import ProjectCard from '../ProjectCard';
import Tag from '../Tag';

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
    gap: var(--spacing-md);
    margin: var(--spacing-md) auto;

    @media screen and ${device.md} {
      grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
    }
  }
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
  const { data, isError, error, isLoading } = useProjects();

  const {
    allSanityCategory: { nodes },
    allSanityProject: { distinct },
  } = useStaticQuery<CategoriesQuery>(graphql`
    query CATEGORIES {
      allSanityProject {
        distinct(field: categories___title)
      }
      allSanityCategory {
        totalCount
        nodes {
          title
          icon {
            asset {
              id
              gatsbyImageData(
                formats: AUTO
                layout: FIXED
                placeholder: DOMINANT_COLOR
                height: 32
              )
            }
          }
          _id
        }
      }
    }
  `);
  const [refId, setRefId] = useState<string | undefined>(
    location?.state?.filter || ''
  );

  const currentTag =
    nodes?.filter(({ _id }) => _id === refId).map(({ title }) => title) || '';

  if (isLoading) return <p>Loading projects...</p>;
  if (isError) return <span>Error: {error?.message}</span>;
  return (
    <ProjectListStyles className="container">
      <div className="tag-list">
        <header className="">
          <h5>Filter projects by:</h5>
          {currentTag.length > 0 && (
            <button
              type="button"
              onClick={() => setRefId('')}
              className="current-filter"
            >
              {currentTag}
            </button>
          )}
        </header>

        {nodes
          ?.filter((v) => distinct.includes(v?.title))
          .map((tag) => (
            <Tag setRefId={setRefId} key={tag?._id} tag={tag} />
          ))}
      </div>
      {refId?.length > 0 ? (
        <FilteredProjects refId={refId} />
      ) : (
        <div className="project-listings">
          {data?.map((project) => (
            <ProjectCard key={project?._id} cardData={project} />
          ))}
        </div>
      )}
    </ProjectListStyles>
  );
}
