import { graphql } from 'gatsby';

export const fragments = graphql`
  fragment SanityMainImage on SanityMainImage {
    _key
    alt
    asset {
      _id
      gatsbyImageData(
        fit: FILLMAX
        formats: AUTO
        layout: FULL_WIDTH
        outputPixelDensities: 1.5
        placeholder: BLURRED
      )
    }
  }

  fragment SanityIllustration on SanityIllustration {
    _key
    _type
    image {
      ...SanityMainImage
    }
  }

  fragment SanityHero on SanityHero {
    _key
    _type
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
      title
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

  fragment SanityUiComponentRef on SanityUiComponentRef {
    _key
    _type
    name
  }

  fragment SanityService on SanityService {
    _key
    _type
    _id
    id
    _rawDescription(resolveReferences: { maxDepth: 10 })
    title
  }

  fragment SanitySingleColumn on SanitySingleColumn {
    _key
    _type
    _rawContent(resolveReferences: { maxDepth: 10 })
  }

  fragment SanityGridContent on SanityGridContent {
    _key
    __typename
    columns {
      __typename
      ...SanityIllustration
      ...SanityService
      ...SanitySingleColumn
      ...SanityUiComponentRef
    }
  }

  fragment SanityBodySection on SanityBodySection {
    _key
    _type
    _rawContent(resolveReferences: { maxDepth: 10 })
  }

  fragment SinglePageTemplate on SanityPage {
    _key
    _id
    title
    slug {
      current
    }
    content {
      __typename
      ...SanityHero
      ...SanityUiComponentRef
      ...SanityGridContent
      ...SanityBodySection
    }
  }

  # Project Queries
  fragment SharedProjectFields on SanityProject {
    _id
    mainImage {
      ...SanityMainImage
    }
    excerpt
    slug {
      current
    }
    title
    author {
      name
    }
    categories {
      _id
      title
      description
      icon {
        asset {
          _id
        }
      }
    }
  }

  fragment SanityProjectTemplate on SanityProject {
    ...SharedProjectFields
    _rawBody(resolveReferences: { maxDepth: 10 })
    projectGallery {
      gallery {
        _key
        image {
          ...SanityMainImage
        }
      }
    }
  }
`;
