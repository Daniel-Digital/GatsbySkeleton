import React from 'react';
import styled from '@/styled';
import { FluidObject } from 'gatsby-image';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

type ContainerProps = {
  width?: string;
  viewProductLink: string;
  getAQuoteLink: string;
};

const Container = styled.div<ContainerProps>`
  box-shadow: 1px 4px 6px rgba(33, 33, 33, 0.1);
  width: ${(props) => props.width || '100%'};
  border-radius: 3px;
`;

const linkCss = css`
  font-weight: 700;
  transition: text-shadow 0.2s;
  :hover {
    text-shadow: 1px 1px 3px rgba(120, 120, 120, 0.2);
  }
`;

type Props = {
  name: string;
  fluidImage?: FluidObject;
  imageSrc: string;
} & ContainerProps;

const ProductCard: React.FC<Props> = ({
  name,
  imageSrc,
  width,
  viewProductLink,
  getAQuoteLink,
}) => {
  return (
    <Container width={width}>
      <img
        src={imageSrc}
        alt=""
        css={css`
          width: 100%;
          height: 280px;
        `}
      />
      <h3
        css={css`
          padding-top: 30px;
          padding-bottom: 25px;
          text-align: center;
          background-color: #f5f5f5;
          text-transform: uppercase;
          font-weight: 700;
          color: #212121;
          font-size: 24px;
          line-height: 1.1;
        `}
      >
        {name}
      </h3>
      <div
        css={css`
          background-color: #f5f5f5;
          padding-bottom: 20px;
          display: flex;
          justify-content: space-around;
        `}
      >
        <Link css={linkCss} to={viewProductLink}>
          View product
        </Link>
        <Link css={linkCss} to={getAQuoteLink}>
          Get a Quote
        </Link>
      </div>
    </Container>
  );
};

export default ProductCard;
