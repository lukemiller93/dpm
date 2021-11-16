import styled from '@emotion/styled';
import { useProjects } from '../../utils/useProjects';
import ProjectCard from '../ProjectCard';

const RecentProjectsStyles = styled.section`
  padding: 0 1vw;
  display: grid;
  margin-top: var(--spacing-lg);
  margin-bottom: var(--grid-gap-xl);
  gap: var(--grid-gap-sm);
  grid-template-columns: var(--cards-grid);
  place-items: center;

  @media screen and (min-width: 576px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
export default function RecentProjects() {
  const { isLoading, isError, data, error } = useProjects();

  if (isLoading) return <p>Loading projects...</p>;
  if (isError) return <span>Error: {error?.message}</span>;
  return (
    <RecentProjectsStyles className="recent-projects container">
      {data?.map((project) => (
        <ProjectCard key={project._id} cardData={project} />
      ))}
    </RecentProjectsStyles>
  );
}
