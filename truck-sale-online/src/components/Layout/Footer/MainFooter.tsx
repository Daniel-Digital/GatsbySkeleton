import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@/styled';
import { css } from '@emotion/core';

const StyledLink = styled(Link)`
  color: #ccc;
  margin-left: 10px;
  margin-right: 10px;
  :hover {
    text-decoration: underline;
  }
`;

const MainFooter = () => {
  const data = useStaticQuery<
    import('generated/graphql').FooterNavigationQuery
  >(query);

  const links = data.strapiTrackSaleOnline.footer.navigation;

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin-top: 10px;
      `}
    >
      {links.map((link) => (
        <StyledLink to={link.href} key={link.id}>
          {link.text}
        </StyledLink>
      ))}
    </div>
  );
};

const query = graphql`
  query FooterNavigation {
    strapiTrackSaleOnline {
      footer {
        navigation {
          id
          text
          href
        }
      }
    }
  }
`;

export default MainFooter;
