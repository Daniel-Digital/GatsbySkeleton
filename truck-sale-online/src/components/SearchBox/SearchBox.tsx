import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { WorldMapImageQuery } from '@/generated/graphql';

import * as S from './search-box-styled';
import { css } from '@emotion/core';
import Search from './Search';

const SearchBox = () => {
  const data = useStaticQuery<WorldMapImageQuery>(query);

  const suggestions = data.allStrapiMake.nodes.map((node) => ({
    name: node.name,
  }));

  return (
    <S.SearchBox>
      <Image
        fluid={data.file.childImageSharp.fluid}
        css={css`
          z-index: -1;
          width: 100%;
          height: 100%;
        `}
      />
      <h2
        css={css`
          position: absolute;
          text-align: center;
          width: 100%;
          top: 80px;
          font-size: 30px;
          text-transform: uppercase;
        `}
      >
        Find a truck:
      </h2>
      <h3
        css={css`
          position: absolute;
          text-align: center;
          width: 100%;
          top: 130px;
          text-transform: uppercase;
          color: #212121;
          opacity: 0.75;
          font-size: 14px;
        `}
      >
        Search for your favourite truck
      </h3>
      <Search
        placeholder="Type a truck manufacturer"
        suggestions={suggestions}
      />
    </S.SearchBox>
  );
};

const query = graphql`
  query WorldMapImage {
    file(relativePath: { eq: "world-small.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allStrapiMake {
      nodes {
        id
        name
      }
    }
  }
`;

export default SearchBox;
