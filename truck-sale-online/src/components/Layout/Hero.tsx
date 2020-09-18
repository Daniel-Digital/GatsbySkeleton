import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import styled from '@/styled';
import SearchBox from '../SearchBox/SearchBox';
import { TruckHeroImageQuery } from '@/generated/graphql';
import { css } from '@emotion/core';
import Button from '../Button';

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  max-height: 700px;
`;

const HeroImage = styled(BackgroundImage)`
  position: absolute;
  width: 80%;
  height: 100%;
  left: 0;
  top: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(33, 33, 33, 0.85);
  background-blend-mode: multiply;
  z-index: -1;
`;

const SliderText = styled.div`
  position: absolute;
  top: 45%;
  left: 20%;
  transform: translateY(-50%);
`;

const Poligon = styled.div`
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
  width: 100%;
  clip-path: polygon(80% 0, 100% 0, 100% 100%, 60% 100%);
`;

const Hero = () => {
  const data = useStaticQuery<TruckHeroImageQuery>(query);
  return (
    <HeroContainer>
      <HeroImage fluid={data.file.childImageSharp.fluid} />
      <Poligon />
      <SliderText>
        <h1
          css={css`
            line-height: 80px;
            font-size: 60px;
            color: white;
          `}
        >
          Truck model
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
            Another info
          </h2>
          <Button>Do whatever now!</Button>
        </div>
      </SliderText>
      <SearchBox />
    </HeroContainer>
  );
};

const query = graphql`
  query TruckHeroImage {
    file(relativePath: { eq: "truck.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Hero;
