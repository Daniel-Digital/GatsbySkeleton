import React from 'react';
import styled from '@/styled';

type Props = {};

const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 15px;
  color: #fff;

  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  border: 0;
  outline: none;
  cursor: pointer;

  :active {
    transform: translateY(1px);
  }
`;

const Button: React.FC<Props> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
