/* eslint-disable camelcase */
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Nav_ItemsQuery, SanityRoute } from '../../graphql-types';
import { UniversalLink } from './UniversalLink';
import PrimaryMenu from './menus/PrimaryMenu';
import useMenuState from '../hooks/useMenuState';

type HeaderStyleProps = {
  footerVisible: boolean;
  isHomePage: boolean;
  pastHero: boolean;
  isMenuOpen: boolean;
  isProposalIntakePage: boolean;
};
const HeaderStyles = styled.header<HeaderStyleProps>`
  position: ${({ isHomePage }) => (isHomePage ? `fixed` : `sticky`)};
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-floating);
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
    /* flex-wrap: wrap; */
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    list-style: none;
  }

  .nav-item {
    margin-right: 2rem;
    color: ${({
      footerVisible,
      pastHero,
      isHomePage,
      isProposalIntakePage,
      isMenuOpen,
    }) =>
      // eslint-disable-next-line no-nested-ternary
      (footerVisible && !isMenuOpen) || (isProposalIntakePage && !isMenuOpen)
        ? `var(--link-color)`
        : isMenuOpen || (pastHero && isMenuOpen) || (!isHomePage && isMenuOpen)
        ? `var(--dpm-black)`
        : `var(--link-color)`};

    text-decoration: none;
    text-transform: lowercase;
    position: relative;
    outline-color: var(--accent-color);
    &::after {
      background-color: var(--white);
      content: '';
      display: block;
      left: 0;
      right: 0;
      position: absolute;
      height: 2px;
      background-color: var(--link-color);
      transform: scaleX(0);
      transition: transform 250ms ease-out;
    }
    &:hover,
    &:focus {
      ::after {
        background-color: var(--accent-color);
        transform: scaleX(1);
        transform-origin: top left;
      }
    }

    &--active {
      color: var(--accent-color, gold);
    }
  }
`;
export default function Header({
  footerVisible,
  isHomePage,
  isProposalIntakePage,
}: {
  footerVisible: boolean;
  isHomePage: boolean;
  isProposalIntakePage: boolean;
}): ReactElement {
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

  const { ref, inView } = useInView({
    threshold: 0.99,
    initialInView: true,
  });
  const { isMenuOpen } = useMenuState();

  // useEffect(() => {
  //   console.log(isMenuOpen);
  // }, [isMenuOpen]);
  console.log(isMenuOpen);
  return (
    <>
      <HeaderStyles
        isMenuOpen={isMenuOpen}
        isProposalIntakePage={isProposalIntakePage}
        pastHero={!inView}
        isHomePage={isHomePage}
        footerVisible={footerVisible}
      >
        <div className="container wrapper">
          <UniversalLink to="/">
            <StaticImage
              imgStyle={{
                filter:
                  footerVisible ||
                  isProposalIntakePage ||
                  (inView && isHomePage)
                    ? `invert(1)`
                    : `invert(0)`,
              }}
              alt="logo wordmark"
              src="../images/dpm_wordmark.svg"
            />
          </UniversalLink>
          <ul className="navigation-items">
            {/* {allSanityRoute?.nodes.map((node) => {
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
            })} */}
            <PrimaryMenu
              itemClassName="nav-item"
              items={allSanityRoute?.nodes as SanityRoute[]}
            />
          </ul>
        </div>
      </HeaderStyles>
      <div
        style={{ width: 1, height: 1, position: `absolute`, left: 0, top: 925 }}
        ref={ref}
        id="pixel-to-track-hero"
      />
    </>
  );
}
