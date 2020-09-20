import React from 'react';
import { css } from '@emotion/core';
import { MdLocalShipping } from 'react-icons/md';

const Logo = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <MdLocalShipping color="white" size={56} />
      <div
        css={css`
          margin-left: 30px;
        `}
      >
        <h1
          css={css`
            color: white;
          `}
        >
          Trucks sale
        </h1>
        <h2
          css={css`
            color: white;
          `}
        >
          online
        </h2>
      </div>
    </div>
  );
};

export default Logo;
