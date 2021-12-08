import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import { navigate } from '@reach/router';
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
    max-width: 200px;
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
    color: var(--white);
    text-decoration: none;
    text-transform: lowercase;
    position: relative;
    &::after {
      background-color: var(--white);
      content: '';
      display: block;
      left: 0;
      right: 0;
      position: absolute;
      height: 2px;
      background-color: white;
      transform: scaleX(0);
      transition: transform 250ms ease-out;
    }
    &:hover {
      ::after {
        transform: scaleX(1);
        transform-origin: top left;
      }
    }

    &--active {
      color: var(--accent-color, gold);
    }
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
          <StaticImage
            imgStyle={{ filter: `invert()` }}
            alt="logo wordmark"
            src="../images/dpm_wordmark.svg"
          />
        </UniversalLink>
        <ul className="navigation-items">
          {allSanityRoute?.nodes.map((node) => {
            const isHomePage = node?.slug?.current === 'home';
            return (
              <UniversalLink
                activeClassName="nav-item--active"
                key={node?.slug?.current}
                className="nav-item"
                to={`/${!isHomePage ? node?.slug?.current || '' : ''}`}
              >
                {node?.page?.title}
              </UniversalLink>
            );
          })}
          <a
            href="#contact"
            onClick={() => navigate('#contact')}
            className="nav-item"
          >
            Contact
          </a>
        </ul>
      </div>
    </HeaderStyles>
  );
}
