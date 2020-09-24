import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { TruckBodiesPageQuery } from '@/generated/graphql';
import ProductCard from '@/components/Cards/ProductCard';
import { css } from '@emotion/core';
import slugify from 'slugify';
import getImageUrl from '@/lib/utils/getImageUrl';

const Bodies: React.FC<PageProps<TruckBodiesPageQuery>> = ({ data }) => {
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
        Truck Bodies
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
        {data.allStrapiBody.nodes.map((body) => (
          <Link to={`/truck-bodies/${body.id}`} key={body.id}>
            <ProductCard
              imageSrc={getImageUrl(body.image.publicURL)}
              name={body.model}
              viewProductLink={`/truck-bodies/${body.id}}`}
              getAQuoteLink={`/truck-bodies/${body.id}}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export const pageQuery = graphql`
  query TruckBodiesPage {
    allStrapiBody {
      nodes {
        id: strapiId
        model
        image {
          publicURL
        }
      }
    }
  }
`;

export default Bodies;
