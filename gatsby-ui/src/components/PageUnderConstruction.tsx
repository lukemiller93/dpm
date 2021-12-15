import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { UniversalLink } from './UniversalLink';

const StyledLink = styled(UniversalLink)`
  align-self: center;
  text-align: center;
`;

export default function PageUnderConstruction({
  liveSite,
}: {
  liveSite: string;
}): ReactElement {
  return (
    <div
      style={{
        display: `grid`,
        alignContent: `center`,
        justifyContent: `center`,
      }}
    >
      <h1>This page is still being worked on.</h1>
      <p>Check back frequently for updates!</p>
      <StyledLink to={liveSite}>View Live Site</StyledLink>
    </div>
  );
}
