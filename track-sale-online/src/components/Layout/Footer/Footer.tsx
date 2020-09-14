import styled from '@/styled';
import React from 'react';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px 10%;
`;

const Footer = () => {
  return <FooterContainer></FooterContainer>;
};

export default Footer;
