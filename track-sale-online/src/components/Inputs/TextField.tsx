import React, { InputHTMLAttributes } from 'react';
import styled from '@/styled';

const Input = styled.input`
  background-color: #f5f5f5;
  color: #757575;
  border: 0px solid rgba(255, 255, 255, 0.5);
  height: 50px;
  padding: 10px 15px;
  margin-bottom: 40px;
  outline: none;
`;

type Props = {} & InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<Props> = ({ ...otherProps }) => {
  return <Input {...otherProps} />;
};

export default TextField;
