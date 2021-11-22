import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { ReactElement, useEffect, useState } from 'react';
import { CategoriesQuery } from '../../../graphql-types';
import { device } from '../../styles/theme';
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
                height: 32
              )
            }
          }
          _id
        }
      }
    }
  `);
  const [filterString, setFilterString] = useState('');
  // const toggleFilter = (string: string) => {
  //   const filteredList = data?.filter(({ categories }) =>
  //     categories?.some((v) => v?.title === string)
  //   );
  // };
  if (isLoading) return <p>Loading projects...</p>;
  if (isError) return <span>Error: {error?.message}</span>;
  console.log(data);
  return (
    <ProjectListStyles className="container">
      <div className="tag-list">
        <h5>Filter projects by:</h5>
        {nodes?.map((tag) => (
          <Tag toggleFilter={setFilterString} key={tag?._id} tag={tag} />
        ))}
      </div>
      <div className="project-listings">
        {data
          ?.filter(({ categories }) =>
            categories?.some((v) => v.title === filterString)
          )
          .map((project) => (
            <ProjectCard key={project?._id} cardData={project} />
          ))}
      </div>
    </ProjectListStyles>
  );
}
