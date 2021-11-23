/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { graphql, PageProps, StaticQueryDocument } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import BlockContent from '../../components/PortableText';
import { UniversalLink } from '../../components/UniversalLink';
import {
  SanityProject as SanityProjectType,
  SingleProjectQuery,
} from '../../../graphql-types';
import Lightbox from '../../components/Lightbox';

const ProjectHeaderStyles = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  place-items: center;
  .gatsby-image-wrapper {
    grid-column: 1/-1;
    grid-row: 1/2;
    width: 100%;
  }

  .hero-image {
    filter: grayscale(50%);
    transition: filter 200ms ease;
    &:hover {
      filter: grayscale(0);
    }
  }

  .overlay {
    grid-column: 1/-1;
    grid-row: 1/2;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.7);
    padding: var(--spacing-xs);
    h1 {
      color: var(--white, white);
      margin: 0;
    }
  }

  /* display: grid;
  place-items: center;
  max-height: clamp(450px, 50vh, 600px);


  > * {
    grid-area: 1/2;
  } */
`;

const ProjectBodyStyles = styled.section`
  margin: var(--grid-gap-sm) auto;
  display: grid;
  gap: var(--grid-gap-sm);
  align-items: start;
  padding: var(--spacing-sm);
  .tag {
    display: flex;
    height: 2ch;
    margin: 1rem auto;
    margin-right: 0.25rem;
    /* align-items: center; */
  }

  .project-body {
  }

  h4 {
    margin-top: 0;
  }

  @media screen and (min-width: 576px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const SanityProject: React.FC<PageProps<SingleProjectQuery>> = ({
  data: { sanityProject },
}: {
  data: { sanityProject: SanityProjectType };
}) => {
  const mainImage: IGatsbyImageData =
    sanityProject?.mainImage?.asset?.gatsbyImageData;
  return (
    <>
      <ProjectHeaderStyles className="project-header">
        <GatsbyImage
          imgClassName="hero-image"
          loading="eager"
          image={mainImage}
          alt={sanityProject?.mainImage?.alt || ''}
        />
        <div className="overlay">
          <h1>{sanityProject?.title}</h1>
        </div>
      </ProjectHeaderStyles>
      <ProjectBodyStyles className="container">
        <article className="project-body">
          <BlockContent block={sanityProject?._rawBody} />
        </article>
        <aside className="project-meta">
          <h4>Project Tags</h4>
          {sanityProject?.categories?.map((category) => (
            <div className="tag" key={category?.title}>
              <UniversalLink
                to="/portfolio/"
                state={{ filter: category?._id }}
                className="text-small"
              >
                {category?.title}
              </UniversalLink>
            </div>
          ))}
        </aside>
      </ProjectBodyStyles>
      {sanityProject?.projectGallery?.gallery?.length > 0 && (
        <section className=" container">
          <h2>Project Screenshots</h2>
          <Lightbox gallery={sanityProject?.projectGallery?.gallery} />
        </section>
      )}
    </>
  );
};

export default SanityProject;

export const query: StaticQueryDocument = graphql`
  query SingleProject($id: String!) {
    sanityProject(id: { eq: $id }) {
      ...SanityProjectTemplate
      title
    }
  }
`;
