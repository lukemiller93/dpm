import { gql } from "graphql-request";

const MainImageFrag = gql`
  ...on MainImage {
    _key
    alt
    objectFit
    asset {
      url
      assetId
      _createdAt
      _id
      _rev
      _type
      _updatedAt
      description
      altText
      extension
      label
      metadata {
        _type
        dimensions {
          _type
          _key
          aspectRatio
          height
          width
      }
        hasAlpha
        isOpaque
        lqip
      }
      mimeType
      originalFilename
      path
      sha1hash
      size
      # source {
      #   _key
      #   id
      #   name
      #   url
      # }
      title
    }
    crop {
      _key
      _type
      bottom
      left
      right
      top
    }
    hotspot {
      _key
      _type
      height
      width
      x
      y
    }
  }
`;

const IllustrationFrag = gql`
  ...on Illustration {
      _key
      _type
      image {
        ${MainImageFrag}
      }
  }
`;

const UiComponentRefFrag = gql`
  ...on UiComponentRef {
    _key
    _type
    name
  }
`;

const ServiceFrag = gql`
  ...on Service {
     _key
  _type
  _id
  _createdAt
  title
  descriptionRaw
  }

 `;

const HeroFragment = gql`
  ...on Hero {
    _key
    _type
    __typename
    headLineRaw
    headingRaw
    illustration {
      ${IllustrationFrag}
    }
    cta {
      _key
      title
      __typename
      sitePageRoute {
        ...on Page {
          _id
          title
          slug {
            current
          }
        }
        ...on Route {
          _id
          slug {
            current
          }
        }
      }
      route
      link
      kind
      backgroundColor {
        colors {
          title
          value
        }
      }
    }
  }
`;

const GridContentFragment = gql`
  ...on GridContent {
    _key
    columns {
      ${IllustrationFrag}
      ...on SingleColumn {
        _key
        _type
        contentRaw
      }
      ${UiComponentRefFrag}
      ${ServiceFrag}
    }
  }
`;

export const FILTERED_PAGE_QUERY = gql`
  query FILTERED_PAGE_QUERY($slug: String!) {
    pageData: allPage(where: { slug: { current: { eq: $slug } } }) {
      title
      _id
      content {
        __typename
        ${HeroFragment}
        ${GridContentFragment}
        ${UiComponentRefFrag}
        ... on BodySection {
          contentRaw
          _key
        }
      }
    }
  }
`;

export const FILTERED_PROJECTS_QUERY = gql`
  query FILTERED_PROJECTS_QUERY {
    allProject(sort: { publishedAt: DESC }, where: { _: { is_draft: false } }) {
      _id
      mainImage {
        _key
        _type
        alt
        asset {
          url
          assetId
        }
      }
      slug {
        current
      }
      title
      author {
        name
      }
      categories {
        title
        description
        icon {
          _type
          __typename
          asset {
            _id
            __typename
            _type
          }
        }
        description
      }
    }
  }
`;

export const SINGLE_PROJECT_QUERY = gql`
  query SINGLE_PROJECT_QUERY($slug: String!) {
    pageData: allProject(where: { slug: { current: { eq: $slug } } }) {
      _id
      mainImage {
        ${MainImageFrag}
      }
      slug {
        current
      }
      title
      author {
        name
      }
      categories {
        title
        description
        icon {
          asset {
            _id
          }
        }
      }
      bodyRaw
      projectGallery {
        gallery {
          image {
           ${MainImageFrag}
          }
        }
      }
    }
  }
`;
