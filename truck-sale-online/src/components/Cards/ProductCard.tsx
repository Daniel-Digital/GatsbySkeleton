import React from 'react';
import styled from '@/styled';
import { FluidObject } from 'gatsby-image';
import { css } from '@emotion/core';

type ContainerProps = {
  width?: string;
};

const Container = styled.div<ContainerProps>`
  box-shadow: 1px 4px 6px rgba(33, 33, 33, 0.1);
  width: ${(props) => props.width || '100%'};
  border-radius: 3px;
`;

type Props = {
  name: string;
  fluidImage?: FluidObject;
  imageSrc: string;
} & ContainerProps;

const ProductCard: React.FC<Props> = ({ name, imageSrc, width }) => {
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
          padding-bottom: 30px;
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
    </Container>
  );
};

export default ProductCard;
