import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import styled from '@/styled';
import SearchBox from '../SearchBox/SearchBox';
import { TruckHeroImageQuery } from '@/generated/graphql';
import HttpFetch from '@/lib/api/http-fetch';
import getImageUrl from '@/lib/utils/getImageUrl';
import HeroSliderText from './HeroSliderText';
import { css } from '@emotion/core';
import slugify from 'slugify';

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  max-height: 700px;
`;

type HeroImageProps = {
  background: string;
};

const imageCommon = css`
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

const HeroImage = styled.div<HeroImageProps>`
  ${imageCommon}
  background-image: url(${(props) => props.background});

`;

const GatsbyHeroImage = styled(BackgroundImage)`
  ${imageCommon}
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
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderIndexRef = useRef(sliderIndex);
  sliderIndexRef.current = sliderIndex;
  const data = useStaticQuery<TruckHeroImageQuery>(query);
  const featuredTrucks = useQuery('featured-trucks', () =>
    HttpFetch.get({ url: '/trucks?_limit=3' }),
  );

  useEffect(() => {
    if (!featuredTrucks.data) return;
    const intervalID = setInterval(() => {
      let nextIndex: number;
      if (sliderIndexRef.current + 1 >= featuredTrucks.data.length) {
        nextIndex = 0;
      } else {
        nextIndex = sliderIndexRef.current + 1;
      }
      setSliderIndex(nextIndex);
    }, 3000);
    return () => {
      clearInterval(intervalID);
    };
  }, [featuredTrucks.data]);

  const currectTruck = featuredTrucks.data && featuredTrucks.data[sliderIndex];

  return (
    <HeroContainer>
      {currectTruck ? (
        <HeroImage background={getImageUrl(currectTruck.image?.url)} />
      ) : (
        <GatsbyHeroImage fluid={data.file.childImageSharp.fluid} />
      )}
      <Poligon />
      {currectTruck && (
        <HeroSliderText
          title={`${currectTruck.modelYear || 2020} ${
            currectTruck.make?.name
          } ${currectTruck.model}`}
          subtitle={''}
          buttonText={`Explore ${currectTruck.make?.name} for Sale`}
          buttonLink={`/truck-makes/${slugify(currectTruck.make?.name)}`}
        />
      )}
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
