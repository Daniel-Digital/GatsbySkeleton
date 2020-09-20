import React from 'react';
import { PageProps } from 'gatsby';
import { css, Global } from '@emotion/core';

import { resetStyles, typographyStyles } from '@/styled/global-styles';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import SEO from '@/components/Layout/SEO';
import Hero from '@/components/Layout/Hero';

const Layout: React.FC<PageProps> = ({ children, location }) => {
  return (
    <>
      <Global styles={resetStyles} />
      <Global styles={typographyStyles} />
      <SEO />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        `}
      >
        <Header />
        <Hero />
        <main
          css={css`
            flex: 1;
          `}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
