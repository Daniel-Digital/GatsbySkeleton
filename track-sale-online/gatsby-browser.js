import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import Layout from '@/components/Layout';
import { theme } from '@/styled/theme';

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ThemeProvider theme={theme}>
      <Layout {...props}>{element}</Layout>;
    </ThemeProvider>
  );
};
