import React, { useState } from 'react';
import { css } from '@emotion/core';
import useMedia from 'use-media';
import { Squash as Hamburger } from 'hamburger-react';

import styled from '@/styled';
import Logo from './Logo';
import { mediaQueries, DESKTOP_VIEW } from '@/styled/media';
import MobileMenu from './MobileMenu';

const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px 20px;
  z-index: 1000;

  ${mediaQueries.isTablet} {
    padding: 20px 20%;
  }
`;

const Header = () => {
  const isNotDesktop = useMedia({ maxWidth: DESKTOP_VIEW });
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

        <Logo />
        {isNotDesktop && (
          <Hamburger color="white" onToggle={setShowMobileMenu} />
        )}
      </header>
    </HeaderContainer>
  );
};

export default Header;
