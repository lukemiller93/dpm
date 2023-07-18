import { graphql, PageProps, Script, StaticQueryDocument } from 'gatsby';
import React from 'react';
import loadable from '@loadable/component';
import type { SinglePageQuery } from '../../graphql-types';
import SEO from '../components/SEO';

const SanityPage: React.FC<PageProps<SinglePageQuery>> = ({
  data,
  location,
}) => (
  <>
    <SEO
      openGraph={data?.sanityRoute?.openGraph}
      useSiteTitle={data?.sanityRoute?.useSiteTitle}
      location={location.pathname}
    />
    {data?.sanityPage?.content?.map((element) => {
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
    <Script  src="https://js.stripe.com/v3/pricing-table.js" />
    <stripe-pricing-table
      pricing-table-id="prctbl_1MWoJfAeQQ1pM0eHn99x2K3T"
      publishable-key="pk_live_51IMfrgAeQQ1pM0eHaTRZeDFCcYWJRAONH1kyOQxtZPIGKFtHzUEKFU5FDwo6xhZIFvTu3JrjcQ81br6fekCokT4B00PhYsTi6Z"
    />
  </>
);
export default SanityPage;

export const query: StaticQueryDocument = graphql`
  query SinglePage($id: String!) {
    sanityRoute(page: { id: { eq: $id } }) {
      useSiteTitle
      openGraph {
        title
        description
        image {
          asset {
            url
          }
        }
      }
    }
    sanityPage(id: { eq: $id }) {
      ...SinglePageTemplate
      title
    }
  }
`;
