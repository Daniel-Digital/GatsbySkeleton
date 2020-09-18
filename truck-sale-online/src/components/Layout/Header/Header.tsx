import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { Squash as Hamburger } from 'hamburger-react';

import styled from '@/styled';
import Logo from './Logo';
import { mediaQueries } from '@/styled/media';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px 20px;
  z-index: 1000;

  ${mediaQueries.isTablet} {
    padding: 20px 20%;
  }
`;

const HamburgerWrapper = styled.div`
  ${mediaQueries.isTablet} {
    display: none;
  }
`;

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <HeaderContainer>
      <header
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <MobileMenu show={showMobileMenu} />

        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
        <HamburgerWrapper>
          <Hamburger color="white" onToggle={setShowMobileMenu} />
        </HamburgerWrapper>
      </header>
    </HeaderContainer>
  );
};

export default Header;
