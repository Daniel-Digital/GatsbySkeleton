import React from 'react';
import { graphql } from 'gatsby';

const TruckUpfit = () => {
  return <div></div>;
};

export const pageQuery = graphql`
  query TruckUpfitPage($id: Int!) {
    strapiUpfit(strapiId: { eq: $id }) {
      id
      placeholder
    }
  }
`;

export default TruckUpfit;
