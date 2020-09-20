import { css } from '@emotion/core';
import React from 'react';

const ProductList: React.FC = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      {children}
    </div>
  );
};

export default ProductList;
