import { graphql, PageProps, StaticQueryDocument } from 'gatsby';
import React from 'react';
import loadable from '@loadable/component';
import type { SinglePageQuery } from '../../graphql-types';
import SEO from '../components/SEO';

const SanityPage: React.FC<PageProps<SinglePageQuery>> = ({
  data,
  location,
}) => {
  const { sanityPage } = data;
  return (
    <>
      <SEO title={sanityPage?.title} location={location.pathname} />
      {sanityPage?.content?.map((element) => {
        const typename = element?.__typename.replace('Sanity', '');
        const Component = loadable(
          () => import(`../components/modules/${typename}`)
        );
        return (
          <Component
            props={{ ...element, location }}
            key={element?._key}
            location={location}
          />
        );
      })}
    </>
  );
};

export default SanityPage;

export const query: StaticQueryDocument = graphql`
  query SinglePage($id: String!) {
    sanityPage(id: { eq: $id }) {
      ...SinglePageTemplate
      title
    }
  }
`;
