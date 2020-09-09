import React from 'react';
import { PageProps } from 'gatsby';
import { Global } from '@emotion/core';

import { resetStyles } from '@/styled/global-styles';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import SEO from '@/components/Layout/SEO';
import Hero from '@/components/Layout/Hero';

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Global styles={resetStyles} />
      <SEO />
      <Header />
      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
