import React, { ReactChildren, ReactElement } from 'react';
import { Global } from '@emotion/react';
import Header from './Header';
import { theme } from '../styles/theme';

export default function Layout({
  children,
}: {
  children: ReactChildren;
}): ReactElement {
  return (
    <>
      <Global styles={theme} />
      <Header />
      <main>{children}</main>
    </>
  );
}
