/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactElement } from 'react';
import { SanityService } from '../../graphql-types';
import BlockContent from './PortableText';

function ServiceCard({ service }: { service: SanityService }): ReactElement {
  return (
    <article className="service-card">
      <header>
        <h4>{service?.title}</h4>
      </header>
      <section className="content">
        <BlockContent block={service?._rawDescription} />
      </section>
    </article>
  );
}

export default ServiceCard;
