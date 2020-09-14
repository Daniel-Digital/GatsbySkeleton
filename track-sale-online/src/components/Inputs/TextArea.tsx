import styled from '@/styled';
import React, { TextareaHTMLAttributes } from 'react';

const Area = styled.textarea`
  background-color: #f5f5f5;
  color: #757575;
  border: 0px solid rgba(255, 255, 255, 0.5);
  height: 150px;
  padding: 10px 15px;
  margin-bottom: 40px;
  outline: none;
`;

type Props = {} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<Props> = ({ ...otherProps }) => {
  return <Area {...otherProps}></Area>;
};

export default TextArea;
