import React from 'react';

import styled from '@/styled';

const HeroContainer = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const Poligon = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
  width: 100%;
  clip-path: polygon(80% 0, 100% 0, 100% 100%, 60% 100%);
  z-index: -1;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Poligon />
    </HeroContainer>
  );
};

export default Hero;
