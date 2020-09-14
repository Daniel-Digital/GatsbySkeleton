import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const MainFooter = () => {
  const data = useStaticQuery<
    import('generated/graphql').FooterNavigationQuery
  >(query);
  return <div></div>;
};

const query = graphql`
  query FooterNavigation {
    strapiTrackSaleOnline {
      footer {
        navigation {
          text
          href
        }
      }
    }
  }
`;

export default MainFooter;
