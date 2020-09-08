import React from 'react';
import './scss/index.scss';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import SEO from '@/components/Layout/SEO';
import Hero from '@/components/Layout/Hero';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <>
        <SEO />
        <Header />
        <Hero />
        <main>{children}</main>
        <Footer />
      </>
    </div>
  );
};

export default Layout;
