import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import { Nav_ItemsQuery, SanityRoute } from '../../graphql-types';
import { UniversalLink } from './UniversalLink';

const HeaderStyles = styled.header`
  padding: 1vw 0;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .gatsby-image-wrapper {
    max-width: 400px;
  }
  ul {
    flex-wrap: wrap;
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    list-style: none;
  }

  .nav-item {
    margin-right: 2rem;
  }
  a {
    /* width: 18rem; */
    /* display: inline-block; */
  }
`;
export default function Header(): ReactElement {
  const { allSanityRoute } = useStaticQuery<Nav_ItemsQuery>(graphql`
    query NAV_ITEMS {
      allSanityRoute(sort: { fields: page____createdAt, order: ASC }) {
        nodes {
          slug {
            current
          }
          page {
            title
          }
          id
        }
      }
    }
  `);
  return (
    <HeaderStyles>
      <div className="container wrapper">
        <UniversalLink to="/">
          <StaticImage alt="logo wordmark" src="../images/dpm_wordmark.svg" />
        </UniversalLink>
        <ul className="navigation-items">
          {allSanityRoute?.nodes.map((node) => {
            const isHomePage = node?.slug?.current === 'home';
            return (
              <UniversalLink
                key={node?.slug?.current}
                className="nav-item"
                to={`/${!isHomePage ? node?.slug?.current || '' : ''}`}
              >
                {node?.page?.title}
              </UniversalLink>
            );
          })}
        </ul>
      </div>
    </HeaderStyles>
  );
}
