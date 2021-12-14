/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FunctionComponentElement, ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { genericHashLink } from 'react-router-hash-link';

const MyHashLink = genericHashLink(GatsbyLink);

export const UniversalLink = (props: any): ReactElement => {
  const {
    children,
    to,
    activeClassName,
    partiallyActive,
    hashLink,
    ...others
  } = props;
  const internal: boolean = /^\/(?!\/)/.test(to);
  // Use GatsbyLink for internal links, and <a></a> for others
  if (hashLink) {
    return (
      <MyHashLink
        to={to}
        smooth
        scroll={(el) => el.scrollIntoView()}
        {...others}
      >
        {children}
      </MyHashLink>
    );
  }
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...others}
      >
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} {...others} target="_BLANK" rel="noopener noreferrer">
      {children}
    </a>
  );
};
