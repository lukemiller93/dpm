import React, { ReactChildren, ReactElement, useEffect } from 'react';
import { Global } from '@emotion/react';
import { useInView } from 'react-intersection-observer';
import { PageProps, PageRendererProps } from 'gatsby';
import Header from './Header';
import { theme } from '../styles/theme';
import ContactForm from './ui-components/ContactForm';
import Footer from './Footer';

interface LayoutProps extends PageRendererProps {
  children: ReactChildren;
}

export default function Layout({
  children,
  location,
}: LayoutProps): ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.95,
  });
  return (
    <>
      <Global styles={theme} />
      <Header
        isHomePage={location?.pathname === '/'}
        isProposalIntakePage={location?.pathname.includes('request-a-proposal')}
        footerVisible={inView}
      />
      <main>{children}</main>
      <Footer ref={ref} />
    </>
  );
}
