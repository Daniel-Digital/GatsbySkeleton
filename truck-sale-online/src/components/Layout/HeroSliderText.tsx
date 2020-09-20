import React from 'react';
import { css } from '@emotion/core';
import Button from '../Button';
import styled from '@/styled';
import { Link } from 'gatsby';

const Container = styled.div`
  position: absolute;
  top: 45%;
  left: 20%;
  transform: translateY(-50%);
`;

type Props = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

const HeroSliderText: React.FC<Props> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  return (
    <Container>
      <h1
        css={css`
          line-height: 80px;
          font-size: 60px;
          color: white;
        `}
      >
        {title}
      </h1>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        `}
      >
        <h2
          css={css`
            font-size: 16px;
            line-height: 26px;
            color: white;
          `}
        >
          {subtitle}
        </h2>
        <Button>
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </Container>
  );
};

export default HeroSliderText;
