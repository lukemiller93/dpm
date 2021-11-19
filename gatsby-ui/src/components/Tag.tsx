/* eslint-disable react/destructuring-assignment */
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import { SanityCategory } from '../../graphql-types';

const TagStyles = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* gap: calc(var(--spacing-xs) / 2); */
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
  min-width: max-content;

  justify-content: start;
  .title {
    transition: all 200ms ease;
    opacity: 0;
  }

  &:hover {
    transform: scale(1.01);
    border-radius: 500px;
    /* box-shadow: var(--bs); */
    .title {
      opacity: 1;
    }
  }
`;
export default function Tag({
  _id,
  title,
  icon,
}: SanityCategory): ReactElement {
  return (
    <TagStyles
      onClick={(e) => {
        console.log(e.target.value);
      }}
    >
      <GatsbyImage
        imgStyle={{ boxShadow: `var(--bs)` }}
        image={icon?.asset?.gatsbyImageData}
        alt={title || ''}
      />
      <span className="title">{title}</span>
    </TagStyles>
  );
}
