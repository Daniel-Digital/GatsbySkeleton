import styled from '@/styled';
import React from 'react';
import Legal from './Legal';
import MainFooter from './MainFooter';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px 10%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MainFooter />
      <Legal />
    </FooterContainer>
  );
};

export default Footer;
