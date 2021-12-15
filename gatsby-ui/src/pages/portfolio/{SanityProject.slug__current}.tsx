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
import ProjectCard from '../../components/ProjectCard';
import { device } from '../../styles/theme';
import PageUnderConstruction from '../../components/PageUnderConstruction';
import SEO from '../../components/SEO';

const ProjectIntroStyles = styled.header`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  width: 100%;
  max-width: 100ch;
  margin: var(--grid-gap-lg) auto;
  h1 {
    grid-column: 1/-1;

    @media screen and ${device.md} {
      margin-bottom: var(--spacing-lg);
      grid-column: 1/18;
    }
  }

  .intro-description {
    grid-row-start: 2;
    grid-column: 1/-1;
    display: flex;
    position: relative;
    gap: var(--spacing-md);
    justify-content: center;

    p {
      margin-top: 0;
      max-width: 80ch;
    }

    @media screen and ${device.md} {
      grid-column: 8/-4;
    }
  }

  .tags {
    display: flex;
    flex-direction: column;
    font-size: calc(var(--font-size-default) / 1.5);
    font-variation-settings: 'wght' 400;
    /* position: absolute; */
    font-family: 'InterVariable', sans-serif;
    left: 0;
    top: 0;
    width: 1rem;
  }

  .tag {
    background-color: var(--dpm-red);
    color: var(--link-color);
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.75rem;
    text-transform: uppercase;
    transition: background-color 200ms ease;
    writing-mode: vertical-rl;
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

  /*
  @media screen and (min-width: 576px) {
    grid-template-columns: 3fr 1fr;
  } */
`;

const SanityProject: React.FC<PageProps<SingleProjectQuery>> = ({
  data: { sanityProject },
}: {
  data: { sanityProject: SanityProjectType };
}) => {
  const mainImage: IGatsbyImageData =
    sanityProject?.mainImage?.asset?.gatsbyImageData;

  const liveSiteLink: string = sanityProject?._rawBody
    ?.filter((block) => block?.markDefs.length > 0)
    .map((b) => b.markDefs.map((m) => m.href))[0][0];
  console.log(liveSiteLink);
  return (
    <>
      <SEO />
      <section className="container">
        <ProjectIntroStyles>
          <h1>{sanityProject?.title}</h1>
          <div className="intro-description">
            <div className="tags">
              {sanityProject?.categories?.map((tag) => (
                <span className="tag" key={tag?._id}>
                  {tag?.title}
                </span>
              ))}
            </div>
            <p>{sanityProject?.excerpt}</p>
          </div>
        </ProjectIntroStyles>

        <ProjectBodyStyles className="container">
          <article className="project-body">
            <PageUnderConstruction liveSite={liveSiteLink} />
            {/* <BlockContent block={sanityProject?._rawBody} /> */}
          </article>
          {/* <aside className="project-meta">
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
        </aside> */}
        </ProjectBodyStyles>
        {/* {sanityProject?.projectGallery?.gallery?.length > 0 && (
        <section className=" container">
          <h2>Project Screenshots</h2>
          <Lightbox gallery={sanityProject?.projectGallery?.gallery} />
        </section>
      )} */}
      </section>
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
