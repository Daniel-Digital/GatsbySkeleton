import React from 'react';
import { graphql, PageProps } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { TermsOfUsePageQuery } from '@/generated/graphql';
import { css } from '@emotion/core';

const pageContent = css`
  margin-top: 80px;
  margin-bottom: 80px;
  padding-left: 10%;
  padding-right: 10%;
`;

const TermsOfUse: React.FC<PageProps<TermsOfUsePageQuery>> = ({ data }) => (
  <section css={pageContent}>
    <ReactMarkdown source={data.strapiTrackSaleOnline.termsOfUsePageContent} />
  </section>
);

export const pageQuery = graphql`
  query TermsOfUsePage {
    strapiTrackSaleOnline {
      termsOfUsePageContent
    }
  }
`;

export default TermsOfUse;
