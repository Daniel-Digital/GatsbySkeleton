import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from '@/styled';
import { css } from '@emotion/core';

type NavItemProps = {
  href: string;
  text: string;
};

const NavItemContainer = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
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
  return (
    <div
      css={css`
        display: flex;
        > * {
          margin-right: 20px;
        }
      `}
    >
      {data.strapiTrackSaleOnline.navigation.link.map((item) => (
        <NavItem href={item.href} text={item.text} key={item.id} />
      ))}
    </div>
  );
};

const query = graphql`
  query Navigation {
    strapiTrackSaleOnline {
      navigation {
        link {
          id
          text
          href
        }
      }
    }
  }
`;

export default Navigation;
