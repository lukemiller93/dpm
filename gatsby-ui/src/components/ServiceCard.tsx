/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { SanityService } from '../../graphql-types';
import BlockContent from './PortableText';

const ServiceCardStyles = styled.article`
  &.service-card {
    border-radius: var(--border-radius-sm);
    background-color: var(--white);
    box-shadow: var(--bs);
    justify-self: stretch;
    transition: all 200ms ease-in-out;
    transform: will-change;

    header {
      transition: all 200ms ease-in-out;
    }
    &:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
      transform: scale3d(1.01);

      header {
        background-color: var(--dpm-red);
        color: var(--white);
      }
    }
  }

  .content,
  h4 {
    padding: calc(var(--spacing-sm) / 1.5);
  }

  h4 {
    margin: 0;
  }

  header {
    border-bottom: 2px solid var(--light-gray);
  }
`;

function ServiceCard({ service }: { service: SanityService }): ReactElement {
  return (
    <ServiceCardStyles className="service-card">
      <header>
        <h4>{service?.title}</h4>
      </header>
      <section className="content">
        <BlockContent block={service?._rawDescription} />
      </section>
    </ServiceCardStyles>
  );
}

export default ServiceCard;
