import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ThemeProvider } from 'emotion-theming';

import Layout from '@/components/Layout';
import { theme } from '@/styled/theme';

export const wrapRootElement = ({ element }) => {
  const queryCache = new QueryCache();

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </ReactQueryCacheProvider>
  );
};

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};
