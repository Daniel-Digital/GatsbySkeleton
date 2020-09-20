import React from 'react';
import { graphql, PageProps } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { AboutPageQuery } from '@/generated/graphql';
import { css } from '@emotion/core';

const pageContent = css`
  margin-top: 80px;
  margin-bottom: 80px;
  padding-left: 10%;
  padding-right: 10%;
`;

const About: React.FC<PageProps<AboutPageQuery>> = ({ data }) => (
  <section css={pageContent}>
    <ReactMarkdown source={data.strapiTrackSaleOnline.aboutPageContent} />
  </section>
);

export const pageQuery = graphql`
  query AboutPage {
    strapiTrackSaleOnline {
      aboutPageContent
    }
  }
`;

export default About;
