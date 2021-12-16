import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { ProjectCardStyles } from './ProjectCard';

const pulse = keyframes`
      0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
`;

const SkeletonCardStyles = styled(motion(ProjectCardStyles))`
  .image-placeholder {
    /* background-color: var(--dpm-black-semi); */
    height: 100%;
    aspect-ratio: 16/9;
    animation: ;
  }

  .image-container {
    filter: brightness(100%);
  }

  .skeleton {
    opacity: 0.7;
    animation: ${pulse} 1s linear infinite alternate;
  }

  .skeleton-text {
    width: 100%;
    height: 0.5em;
    margin-bottom: 0.25em;
    border-radius: var(--border-radius);

    &:last-child {
      width: 75%;
    }
  }

  .content {
    background-color: var(--light-gray);
    .h3 {
      margin-bottom: var(--spacing-xs);
    }
  }

  .excerpt-placeholder {
    display: block;
    background-color: var(--link-color);
    height: calc(var(--font-size-default) / 1.5);
    margin-bottom: 0.5rem;

    &:last-of-type {
      width: 60%;
    }
  }

  .tag {
    height: 78px;
    justify-content: center;
  }

  .tag-placeholder {
    margin: 0.5rem 0.75rem;
    display: block;
    width: 60px;
    height: 10px;
    background-color: gray;
    transform: rotate(90deg);
  }
`;

export default function ProjectCardSkeleton({
  reversed,
}: {
  reversed: boolean;
}): ReactElement {
  return (
    <SkeletonCardStyles
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
      reversed={reversed}
    >
      <motion.div
        // ref={imageRef}
        // initial="hidden"
        // animate={imageCtrls}
        // variants={imageVars}

        className="image-container "
      >
        <div className="image-placeholder skeleton" />
      </motion.div>
      <div className="content ">
        <h3 className="h3">
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
        </h3>
        <motion.p
        // ref={introRef}
        // initial="hidden"
        // animate={introCtrls}
        // variants={introVars}
        >
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text" />
        </motion.p>
      </div>

      <motion.div className="tags">
        <div className="tag skeleton " />
        <div className="tag skeleton" />
        <div className="tag skeleton " />
      </motion.div>
    </SkeletonCardStyles>
  );
}
