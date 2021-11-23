import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { ReactElement, useState } from 'react';
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

    h5 {
      flex-basis: 100%;
      margin: 0;
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
function FilteredProjects(refId: string) {
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

export default function ProjectList(): ReactElement {
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
  const [refId, setRefId] = useState<string | undefined>('');

  if (isLoading) return <p>Loading projects...</p>;
  if (isError) return <span>Error: {error?.message}</span>;
  console.log(refId);
  return (
    <ProjectListStyles className="container">
      <div className="tag-list">
        <h5>Filter projects by:</h5>
        {nodes
          ?.filter((v) => distinct.includes(v?.title))
          .map((tag) => (
            <Tag setRefId={setRefId} key={tag?._id} tag={tag} />
          ))}
      </div>
      <div className="project-listings">
        {refId.length > 0 ? (
          <FilteredProjects refId={refId} />
        ) : (
          data?.map((project) => (
            <ProjectCard key={project?._id} cardData={project} />
          ))
        )}
      </div>
    </ProjectListStyles>
  );
}
