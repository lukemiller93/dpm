/* eslint-disable @typescript-eslint/restrict-template-expressions */
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { SanityProject } from '../../graphql-types';
import useAnimateIn from '../hooks/useAnimateIn';
import useFadeIn from '../hooks/useFadeIn';
import { device } from '../styles/theme';
import { urlFor } from '../utils/urlFor';
import BlockContent from './PortableText';
import { UniversalLink } from './UniversalLink';

type ProjectCardStyleProps = {
  reversed: boolean;
};

const ProjectCardStyles = styled.article<ProjectCardStyleProps>`
  /* background-color: var(--light-gray); */
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-columns: repeat(24, 1fr);
  width: 100%;
  position: relative;
  .image-container {
    z-index: 0;
    grid-column: ${({ reversed }) => (reversed ? `3/-1` : `1/-3`)};
    filter: brightness(40%);
    /* aspect-ratio: 16/9; */
    transition: filter 200ms ease;
    @media screen and ${device.lg} {
      grid-column: ${({ reversed }) => (reversed ? `-1/-17` : `1/17`)};
      grid-row: 1/1;
    }
  }

  .content {
    padding: var(--spacing-sm);
    z-index: var(--z-index-default);
    box-shadow: var(--button-shadow);
    grid-column: ${({ reversed }) => (reversed ? `5/-3` : `3/-5`)};
    margin-top: -1.5rem;
    background-color: var(--dpm-black);
    /* color: ${({ reversed }) =>
      reversed ? `var(--white)` : `var(--dpm-black)`}; */
    color: var(--white);

    h3 {
      margin: 0;
    }

    p {
      line-height: 1.3;
      margin: 0;
    }

    @media screen and ${device.lg} {
      align-self: center;
      grid-column: ${({ reversed }) => (reversed ? `2/-16` : `16/-2`)};
      grid-row: 1/1;
      margin-top: 0;
    }
  }

  .tags {
    display: flex;
    flex-direction: column;
    font-size: calc(var(--font-size-default) / 1.5);
    font-variation-settings: 'wght' 400;
    position: absolute;
    font-family: 'InterVariable', sans-serif;
    left: ${({ reversed }) => (reversed ? `0` : `auto`)};
    right: ${({ reversed }) => (reversed ? `auto` : `0`)};
    top: 0;
    width: 1rem;
  }

  .tag {
    background-color: var(--dpm-black-semi);
    color: var(--link-color);
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.75rem;
    text-transform: uppercase;
    transition: background-color 200ms ease;
    writing-mode: vertical-rl;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }

  &:hover {
    .image-container {
      filter: brightness(80%);
    }

    .tag {
      background-color: ${({ reversed }) =>
        reversed ? `var(--dpm-red)` : `var(--accent-color)`};
      color: ${({ reversed }) =>
        reversed ? `var(--white)` : `var(--dpm-black)`};
    }
  }

  /*
  .content {
    padding: var(--spacing-sm);
  }

  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 4/3;
    filter: brightness(20%);
    /* max-height: var(--grid-gap-xl);
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
  } */
`;
interface ExtendedProjectType extends SanityProject {
  excerpt?: string;
}

export default function ProjectCard({
  reversed,
  cardData,
}: {
  cardData: ExtendedProjectType;
  reversed: boolean;
}): ReactElement {
  const { title, mainImage, slug, excerpt, categories } = cardData;

  // Image animation
  const {
    ref: imageRef,
    ctrls: imageCtrls,
    vars: imageVars,
  } = useFadeIn({ threshold: 0.25 });

  // Tags animation
  const {
    ref: tagsRef,
    ctrls: tagsCtrls,
    vars: tagsVars,
  } = useAnimateIn({
    delay: 0.75,
    threshold: 0.5,
  });

  // Intro animation
  const {
    ref: introRef,
    ctrls: introCtrls,
    vars: introVars,
  } = useAnimateIn({
    delay: 0.5,
    threshold: 0.5,
  });

  console.log({ imageRef, imageCtrls, tagsCtrls, tagsRef });

  return (
    <UniversalLink
      style={{ textDecoration: `none` }}
      to={`/portfolio/${slug?.current}`}
    >
      <ProjectCardStyles reversed={reversed}>
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageCtrls}
          variants={imageVars}
          className="image-container"
        >
          {mainImage && (
            <img
              src={urlFor(mainImage).width(600).url() || ''}
              alt={mainImage?.alt || ''}
            />
          )}
        </motion.div>
        <div className="content">
          <h3>{title}</h3>
          <motion.p
            ref={introRef}
            initial="hidden"
            animate={introCtrls}
            variants={introVars}
          >
            {excerpt}
          </motion.p>
          {/* <footer style={{ display: 'flex', justifyContent: 'end' }}>
          <a href={`/portfolio/${slug?.current}`}>Case Study</a>
        </footer> */}
        </div>

        <motion.div
          ref={tagsRef}
          initial="hidden"
          animate={tagsCtrls}
          variants={tagsVars}
          className="tags"
        >
          {categories?.map((tag, index) => (
            <div key={tag.title} className="tag">
              {tag.title}
            </div>
          ))}
        </motion.div>
      </ProjectCardStyles>
    </UniversalLink>
  );
}
