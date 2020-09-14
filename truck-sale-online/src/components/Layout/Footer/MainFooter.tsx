import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

const MainFooter = () => {
  const data = useStaticQuery<
    import('generated/graphql').FooterNavigationQuery
  >(query);

  const links = data.strapiTrackSaleOnline.footer.navigation;

  return (
    <div>
      {links.map((link) => (
        <Link to={link.href} key={link.id}>
          {link.text}
        </Link>
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
