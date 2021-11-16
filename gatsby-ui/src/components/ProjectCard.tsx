/* eslint-disable @typescript-eslint/restrict-template-expressions */
import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { SanityProject } from '../../graphql-types';
import { normalizePath } from '../utils/normalizePath';
import { urlFor } from '../utils/urlFor';

const ProjectCardStyles = styled.section`
  background-color: var(--light-gray);
  border-radius: var(--border-radius-md);
  box-shadow: var(--button-shadow);
  overflow: hidden;

  .content {
    padding: var(--spacing-sm);
  }

  img {
    /* border-top-left-radius: var(--border-radius-md);
    border-top-right-radius: var(--border-radius-md); */
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  h4 {
    margin: 0;
    text-align: center;
    margin-bottom: 2rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
  }

  footer > a {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: var(--white, white);
    text-decoration: none;
    box-shadow: var(--button-shadow);
    background-color: var(--black, black);
  }
`;

export default function ProjectCard({
  cardData,
}: {
  cardData: SanityProject;
}): ReactElement {
  const { title, mainImage, slug } = cardData;
  return (
    <ProjectCardStyles>
      {mainImage && (
        <img
          src={urlFor(mainImage).width(600).url() || ''}
          alt={mainImage?.alt || ''}
        />
      )}
      <div className="content">
        <h4>{title}</h4>
        <footer style={{ display: 'flex', justifyContent: 'end' }}>
          <a href={normalizePath(`/portfolio/${slug?.current}`)}>Case Study</a>
        </footer>
      </div>
    </ProjectCardStyles>
  );
}
