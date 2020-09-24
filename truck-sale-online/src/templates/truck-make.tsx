import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { TruckMakePageQuery } from '@/generated/graphql';
import { css } from '@emotion/core';
import ProductList from '@/components/ProductList/ProductList';
import ProductCard from '@/components/Cards/ProductCard';
import slugify from 'slugify';
import getImageUrl from '@/lib/utils/getImageUrl';
import getTruckTitle from '@/lib/utils/getTruckTitle';

const TruckMake: React.FC<PageProps<TruckMakePageQuery>> = ({ data }) => {
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
        {data.strapiMake.name} models
      </h2>
      <ProductList>
        {data.strapiMake.trucks.map((truck) => {
          return (
            <Link
              to={`/truck-makes/${slugify(data.strapiMake.name)}/${truck.id}`}
              css={css`
                width: 30%;
              `}
              key={truck.id}
            >
              <ProductCard
                name={getTruckTitle(truck, data.strapiMake.name)}
                imageSrc={getImageUrl(truck.image?.publicURL)}
                viewProductLink={`/truck-makes/${slugify(
                  data.strapiMake.name,
                )}/${truck.id}`}
                getAQuoteLink={`/truck-makes/${slugify(data.strapiMake.name)}/${
                  truck.id
                }#get-a-quote`}
              />
            </Link>
          );
        })}
      </ProductList>
    </section>
  );
};

export const pageQuery = graphql`
  query TruckMakePage($id: Int!) {
    strapiMake(strapiId: { eq: $id }) {
      id
      name
      trucks {
        id
        model
        image {
          publicURL
        }
      }
    }
  }
`;

export default TruckMake;
