import { css } from '@emotion/core';

export const resetStyles = css`
  body {
    margin: 0;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const typographyStyles = css`
  body {
    color: #757575;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #212121;
  }

  p {
    font-size: 18px;
  }
`;
