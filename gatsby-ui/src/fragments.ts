import { graphql } from "gatsby";

export const fragments = graphql`
  fragment SanityIllustration on SanityIllustration {
    image {
        asset {
        gatsbyImageData(
          fit: FILLMAX
          formats: AUTO
          layout: FULL_WIDTH
          outputPixelDensities: 1.5
          placeholder: BLURRED
        )
      }
    }
  }

  fragment SanityHero on SanityHero {
    _key
    __typename
    _rawHeading(resolveReferences: { maxDepth: 10 })
    _rawHeadLine(resolveReferences: { maxDepth: 10 })
    illustration {
      ...SanityIllustration
    }
    cta {
      route
      link
      kind
      backgroundColor {
        colors {
          title
          value
        }
      }
      sitePageRoute {
        __typename
        ... on SanityPage {
          slug {
            current
          }
        }
        ... on SanityRoute {
          slug {
            current
          }
        }
      }
    }
  }

  fragment SinglePageTemplate on SanityPage {
    _id
    title
    slug {
      current
    }
    content {
      __typename
      ...SanityHero
    }
  }
`;
