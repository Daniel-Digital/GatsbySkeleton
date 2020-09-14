import React from 'react';
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';

import styled from '@/styled';

const HeroContainer = styled.section`
  position: relative;
  height: 700px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const Poligon = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
  width: 100%;
  clip-path: polygon(80% 0, 100% 0, 100% 100%, 60% 100%);
  z-index: -1;
`;

const Social = styled.div`
  position: absolute;
  right: 20%;
  bottom: 20px;
  > * {
    margin-right: 25px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Poligon>
        <Social>
          <a href="">
            <AiOutlineFacebook size={36} color="white" />
          </a>
          <a href="">
            <AiOutlineTwitter size={36} color="white" />
          </a>
          <a href="">
            <AiOutlineInstagram size={36} color="white" />
          </a>
        </Social>
      </Poligon>
    </HeroContainer>
  );
};

export default Hero;
