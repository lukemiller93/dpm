import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import { CategoriesQuery } from '../../../graphql-types';
import { useProjects } from '../../utils/useProjects';
import ProjectCard from '../ProjectCard';

const ProjectListStyles = styled.section`
  .tag-list {
    display: flex;
    gap: var(--spacing-xs);
    flex-wrap: wrap;
    > span {
      display: flex;
      align-items: center;
      gap: calc(var(--spacing-xs) / 2);
    }
  }
  .project-listings {
    display: grid;
    gap: var(--spacing-md);
    grid-template-columns: 1fr 1fr 1fr;
    margin: var(--spacing-md) auto;
  }
`;

export default function ProjectList(): ReactElement {
  const { data, isError, error, isLoading } = useProjects();

  const {
    allSanityCategory: { nodes },
  } = useStaticQuery<CategoriesQuery>(graphql`
    query CATEGORIES {
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
                height: 20
              )
            }
          }
          _id
        }
      }
    }
  `);
  console.log(nodes);
  if (isLoading) return <p>Loading projects...</p>;
  if (isError) return <span>Error: {error?.message}</span>;
  return (
    <ProjectListStyles className="container">
      <div className="tag-list">
        {nodes?.map((tag) => (
          <span key={tag?._id}>
            <GatsbyImage image={tag?.icon?.asset?.gatsbyImageData} alt="" />
            {tag?.title}
          </span>
        ))}
      </div>
      <div className="project-listings">
        {data?.map((project) => (
          <ProjectCard key={project?._id} cardData={project} />
        ))}
      </div>
    </ProjectListStyles>
  );
}
