/* eslint-disable @typescript-eslint/naming-convention */
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

type TagProps = {
  tag: SanityCategory;
  setRefId: (string: string) => void;
};

export default function Tag({
  tag,
  setRefId,
  setActiveTag,
}: TagProps): ReactElement {
  const { _id, title, icon } = tag;
  return (
    <TagStyles
      onClick={(e) => {
        e.preventDefault();
        setRefId(_id);
      }}
    >
      <GatsbyImage image={icon?.asset?.gatsbyImageData} alt={title || ''} />
      <span className="title">{title}</span>
    </TagStyles>
  );
}
