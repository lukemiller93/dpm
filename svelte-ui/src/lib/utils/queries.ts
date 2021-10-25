import { gql } from "graphql-request";

const IllustrationFrag = gql`
  ...on Illustration {
      _key
      image {
        _key
        alt
        objectFit
        asset {
          url
          assetId
          url
        }
      }
  }
`;

const UiComponentRefFrag = gql`
  ...on UiComponentRef {
    _key
    _type
    name
  }
`

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
