import React from 'react';
import { graphql, PageProps, StaticQueryDocument } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { SingleProjectQuery } from '../../../graphql-types';
import BlockContent from '../../components/PortableText';
import { UniversalLink } from '../../components/UniversalLink';
import { urlFor } from '../../utils/urlFor';

const ProjectHeaderStyles = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-height: clamp(450px, 50vh, 600px);

  .gatsby-image-wrapper {
    grid-area: 1/2;
    width: 100%;
  }

  > * {
    grid-area: 1/2;
  }
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

const ProjectGalleryStyles = styled.section`
  margin: var(--grid-gap-lg) auto;
  display: grid;
  gap: var(--grid-gap-sm);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  h2 {
    grid-column: 1/-1;
  }

  .gatsby-image-wrapper {
    width: 100%;
    margin: 0;
    box-shadow: var(--bs);
    border-radius: var(--border-radius-md);
    overflow: hidden;
    cursor: zoom-in;
    aspect-ratio: 4/3;
    object-fit: cover;
  }
`;
const SanityProject: React.FC<PageProps<SingleProjectQuery>> = ({
  data: { sanityProject },
}) => (
  <>
    <ProjectHeaderStyles className="project-header">
      <GatsbyImage
        image={sanityProject?.mainImage?.asset?.gatsbyImageData || ''}
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
              to={`/portfolio?filter=${encodeURIComponent(
                category?.title || ''
              )}`}
              className="text-small"
            >
              {category?.title}
            </UniversalLink>
          </div>
        ))}
      </aside>
    </ProjectBodyStyles>
    <ProjectGalleryStyles className=" container">
      <h2>Project Screenshots</h2>
      {sanityProject?.projectGallery?.gallery?.map((image, index) => (
        <GatsbyImage
          key={index}
          image={image?.image?.asset?.gatsbyImageData || ''}
          alt={image?.image?.alt || ''}
        />
      ))}
    </ProjectGalleryStyles>
  </>
);

export default SanityProject;

export const query: StaticQueryDocument = graphql`
  query SingleProject($id: String!) {
    sanityProject(id: { eq: $id }) {
      ...SanityProjectTemplate
      title
    }
  }
`;
