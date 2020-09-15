import React from 'react';
import { css } from '@emotion/core';

const Legal = () => {
  return (
    <div
      css={css`
        color: #777;
        margin-top: 20px;
        text-align: center;
      `}
    >
      &copy; 2020 Truck sale online
    </div>
  );
};

export default Legal;
