import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import {
  SanityGridContent,
  SanityIllustrationOrServiceOrSingleColumnOrUiComponentRef,
} from '../../../graphql-types';
import BlockContent from '../PortableText';
import ServiceCard from '../ServiceCard';
import UiComponent from './UiComponentRef';

const GridContentStyles = styled.section`
  display: grid;
  column-gap: var(--grid-gap-lg);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-bottom: var(--grid-gap-xl);
  margin-top: 0;
  /* padding: 1vw; */

  &:not(:first-of-type) {
    margin: var(--grid-gap-xl) auto;
  }
  &.service-grid {
    margin-top: var(--grid-gap-md);
    margin-bottom: var(--grid-gap-xl);
    gap: var(--grid-gap-sm);
    margin-top: 0;

    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      padding: 0;
    }
  }

  .single-column {
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
    }
    &:not(.illustration, .service) {
      display: flex;
      flex-direction: column;
      align-items: center;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .service {
    display: grid;
    align-items: stretch;
    align-self: stretch;
    width: 100%;
  }
  .illustration {
    align-self: center;
  }
`;

export default function GridContent({
  props: { columns },
}: {
  props: {
    columns: SanityIllustrationOrServiceOrSingleColumnOrUiComponentRef[];
  };
}): ReactElement {
  const serviceGrid = columns.some((v) => v._type === 'service');
  return (
    <GridContentStyles
      className={`container grid-container ${
        serviceGrid ? 'service-grid' : ''
      }`}
    >
      {columns.map((col, index) => (
        <div key={col._key + index} className={`single-column ${col._type}`}>
          {col._type === 'singleColumn' && '_rawContent' in col && (
            <BlockContent className="single-col-body" block={col._rawContent} />
          )}
          {col._type === 'illustration' && 'image' in col && (
            <GatsbyImage
              image={col.image?.asset?.gatsbyImageData}
              alt={col?.image?.alt || ''}
            />
          )}
          {col._type === 'uiComponentRef' && 'name' in col && (
            <UiComponent name={col.name} />
          )}
          {col._type === 'service' && '_rawDescription' in col && (
            <ServiceCard service={col} />
          )}
        </div>
      ))}
    </GridContentStyles>
  );
}
