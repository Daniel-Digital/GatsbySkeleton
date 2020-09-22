import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { TruckMakesPageQuery } from '@/generated/graphql';
import ProductCard from '@/components/Cards/ProductCard';
import { css } from '@emotion/core';
import slugify from 'slugify';
import getImageUrl from '@/lib/utils/getImageUrl';

const TruckMakes: React.FC<PageProps<TruckMakesPageQuery>> = ({ data }) => {
  return (
    <section
      css={css`
        padding: 80px 10%;
      `}
    >
      <h2
        css={css`
          text-align: center;
          margin-bottom: 60px;
          font-size: 50px;
        `}
      >
        Truck makes
      </h2>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          > * {
            flex-basis: 30%;
          }
        `}
      >
        {data.allStrapiMake.nodes.map((make) => (
          <Link to={`/truck-makes/${slugify(make.name)}`} key={make.id}>
            <ProductCard
              imageSrc={getImageUrl(make.image.publicURL)}
              name={make.name}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export const pageQuery = graphql`
  query TruckMakesPage {
    allStrapiMake {
      nodes {
        id
        name
        image {
          publicURL
        }
      }
    }
  }
`;

export default TruckMakes;
