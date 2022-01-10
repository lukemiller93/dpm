/* eslint-disable react/display-name */
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { useEffect } from 'react';
import useMenuState from '../../hooks/useMenuState';
import { device } from '../../styles/theme';
import MenuItem from './MenuItem';
import { SidedrawerNavigation } from './SidedrawerNavigation';

const StyledNav = styled.nav`
  flex-basis: 80%;
  margin-top: 2rem;
  @media ${device.xl} {
    margin-top: 0;
  }

  > ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 4rem;
    row-gap: 1rem;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    width: 100%;
    > li {
      line-height: var(--line-height);
      display: flex;
      gap: 1rem;
      align-items: center;
      position: relative;
      color: var(--cbc-light-gray);

      > a {
        text-decoration: none;
        color: var(--cbc-blue);
        display: flex;
        align-items: center;

        &.primary-navigation--active {
          color: var(--cbc-red);
          font-weight: 600;
        }
      }
    }
  }
`;
export default function PrimaryMenu({ items }) {
  const { browserWidth, isMenuOpen, closeMenu } = useMenuState();
  useEffect(() => {
    if (browserWidth >= 750) {
      closeMenu();
    }
  }, [browserWidth]);
  if (browserWidth >= 750 && !!items) {
    return (
      <StyledNav>
        <ul>
          {items.map((menuItem, i) => (
            <li key={menuItem.id}>
              <MenuItem menuItem={menuItem} />
            </li>
          ))}
        </ul>
      </StyledNav>
    );
  }
  if (browserWidth < 750) {
    return <SidedrawerNavigation items={items} />;
  }
  return null;
}
