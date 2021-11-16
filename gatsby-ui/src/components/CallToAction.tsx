/* eslint-disable @typescript-eslint/restrict-template-expressions */
import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { SanityLinkCreator } from '../../graphql-types';
import { UniversalLink } from './UniversalLink';

const UniversalLinkStyles = styled(UniversalLink)`
  text-align: center;
  justify-self: center;

  &:last-child {
    margin-top: 2rem;
  }
  &.button {
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: var(--white, #fff);
    text-decoration: none;
    box-shadow: var(--button-shadow);
  }

  &.bg--black {
    background-color: var(--black, black);
  }
`;
export default function CallToAction({
  cta,
}: {
  cta: SanityLinkCreator;
}): ReactElement | null {
  if (cta?.sitePageRoute) {
    return (
      <UniversalLinkStyles
        className={`${cta?.kind} bg--${cta?.backgroundColor?.colors?.title}`}
        to={`/${cta?.sitePageRoute?.slug?.current}`}
      >
        {cta?.title}
      </UniversalLinkStyles>
    );
  }
  return null;
}
