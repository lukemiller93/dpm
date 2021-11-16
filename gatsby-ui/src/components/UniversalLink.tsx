/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';

export const UniversalLink = (props: any): ReactElement => {
  const { children, to, activeClassName, partiallyActive, ...others } = props;
  const internal: boolean = /^\/(?!\/)/.test(to);

  // Use GatsbyLink for internal links, and <a></a> for others
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
    <a href={to} {...others}>
      {children}
    </a>
  );
};
