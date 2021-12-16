import styled from '@emotion/styled';
import { ReactElement } from 'react';
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
  const { isLoading, isError, data, error } = useProjects();

  if (isLoading)
    return (
      <RecentProjectsStyles className="container">
        <ProjectCardSkeleton reversed={false} />
        <ProjectCardSkeleton reversed />
      </RecentProjectsStyles>
    );
  if (isError) return <span>Error: {error?.message}</span>;
  return (
    <RecentProjectsStyles className="recent-projects container">
      {data?.map((project, index) => (
        <ProjectCard
          key={project._id}
          reversed={!!(index % 2)}
          cardData={project}
        />
      ))}
    </RecentProjectsStyles>
  );
}
