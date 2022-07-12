/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { graphql, useStaticQuery } from 'gatsby';
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { SanityOpenGraph, SiteSettingsQuery } from '../../graphql-types';

interface SEOProps {
  useSiteTitle: boolean | null | undefined;
  location: string;
  openGraph?: any;
}

function SEO({ useSiteTitle, openGraph, location }: SEOProps): ReactElement {
  const { sanitySiteSettings, site } =
    useStaticQuery<SiteSettingsQuery>(graphql`
      query SiteSettings {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            siteUrl
            title
          }
        }
        sanitySiteSettings {
          openGraph {
            title
            image {
              asset {
                url
                size
                altText
              }
              alt
            }
            description
          }
        }
      }
    `);

  const siteUrl = site?.siteMetadata?.siteUrl;
  const defaultTitle = site?.siteMetadata?.title;
  const siteTitle = useSiteTitle
    ? sanitySiteSettings?.openGraph?.title
    : openGraph?.title;
  const siteImage = useSiteTitle
    ? sanitySiteSettings?.openGraph?.image
    : openGraph?.image?.asset?.url;
  const siteDescription = useSiteTitle
    ? sanitySiteSettings?.openGraph?.description
    : openGraph?.description;

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': siteUrl,
      url: siteUrl,
      name: defaultTitle,
      alternateName: defaultTitle || '',
    },
  ];

  return (
    <Helmet
      title={`${useSiteTitle ? siteTitle : openGraph?.title || ''} | ${
        defaultTitle || ''
      }`}
      bodyAttributes={{
        class: location.includes('request-a-proposal')
          ? 'proposal-intake'
          : null,
      }}
    >
      <meta name="description" content={siteDescription} />
      <meta name="image" content={siteImage} />
      <meta name="apple-mobile-web-app-title" content="DPM" />
      <meta name="application-name" content="DPM" />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph  */}
      <meta property="og:url" content={siteUrl || ''} />
      {/* <meta property="og:type" content={article ? 'article' : null} /> */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
    </Helmet>
  );
}

export default SEO;
