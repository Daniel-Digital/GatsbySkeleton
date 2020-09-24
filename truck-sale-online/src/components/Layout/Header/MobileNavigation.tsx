import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { MobileNavigationQuery } from '@/generated/graphql';
import styled from '@/styled';
import { css } from '@emotion/core';

const NavItem = styled.div`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 35px;
`;

const MobileNavigation = () => {
  const data = useStaticQuery<MobileNavigationQuery>(query);

  const nav = data.strapiTrackSaleOnline.header.navigation;

  return (
    <nav
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -100%);
      `}
    >
      {nav.map((item) => (
        <NavItem key={item.id}>
          <Link to={item.href}>{item.text}</Link>
        </NavItem>
      ))}
    </nav>
  );
};

const query = graphql`
  query MobileNavigation {
    strapiTrackSaleOnline {
      header {
        navigation {
          id
          text
          href
        }
      }
    }
  }
`;

export default MobileNavigation;
