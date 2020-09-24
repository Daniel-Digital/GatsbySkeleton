import React from 'react';
import { graphql } from 'gatsby';

const TruckAccessory = () => {
  return <div></div>;
};

export const queryPage = graphql`
  query TruckAccessoryPage($id: Int!) {
    strapiAccessory(strapiId: { eq: $id }) {
      id
      placeholder
    }
  }
`;

export default TruckAccessory;
