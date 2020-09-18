import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from '@/styled';
import { css } from '@emotion/core';
import { mediaQueries } from '@/styled/media';

type NavItemProps = {
  href: string;
  text: string;
};

const NavItemContainer = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: white;
  transition: text-shadow 0.3s;
  :hover {
    text-shadow: 1px 1px 3px rgba(200, 200, 200, 0.5);
  }
`;

const NavItem: React.FC<NavItemProps> = ({ href, text }) => (
  <NavItemContainer>
    <Link to={href}>{text}</Link>
  </NavItemContainer>
);

const Navigation = () => {
  const data = useStaticQuery<import('generated/graphql').NavigationQuery>(
    query,
  );

  const links = data.strapiTrackSaleOnline.header.navigation;

  return (
    <div
      css={css`
        display: flex;
        > * {
          margin-right: 25px;
        }
        ${mediaQueries.isNotTablet} {
          display: none;
        }
      `}
    >
      {links.map((item) => (
        <NavItem href={item.href} text={item.text} key={item.id} />
      ))}
    </div>
  );
};

const query = graphql`
  query Navigation {
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

export default Navigation;
