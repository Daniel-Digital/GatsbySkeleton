import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { TruckMakePageQuery } from '@/generated/graphql';
import { css } from '@emotion/core';
import ProductList from '@/components/ProductList/ProductList';
import ProductCard from '@/components/Cards/ProductCard';

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
            <ProductCard
              width="30%"
              name={truck.model}
              fluidImage={truck.image?.childImageSharp.fluid}
              key={truck.id}
            />
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
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default TruckMake;
