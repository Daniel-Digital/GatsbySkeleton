import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { TruckBodyPageQuery } from '@/generated/graphql';
import { css } from '@emotion/core';
import styled from '@/styled';
import getImageUrl from '@/lib/utils/getImageUrl';
import { TruckBodyDataProvider } from '@/contexts/TruckBodyDataContext';
import TruckBodyDetails from '@/components/TruckBodyDetails/TruckBodyDetails';

const Container = styled.section`
  margin-top: 60px;
  margin-bottom: 60px;

  padding-left: 10%;
  padding-right: 10%;
`;

const TruckModel: React.FC<PageProps<TruckBodyPageQuery>> = ({ data }) => {
  return (
    <Container>
      <h2
        css={css`
          font-size: 40px;
          text-align: center;
        `}
      >
        {data.strapiBody.model}
      </h2>
      <div
        css={css`
          margin-top: 60px;
          display: flex;
        `}
      >
        <img
          src={getImageUrl(data.strapiBody.image.publicURL)}
          alt=""
          css={css`
            flex: 1;
            max-width: 30vw;
          `}
        />
        <TruckBodyDataProvider value={data}>
          <TruckBodyDetails />
        </TruckBodyDataProvider>
      </div>
    </Container>
  );
};

export const pageQuery = graphql`
  query TruckBodyPage($id: Int!) {
    strapiBody(strapiId: { eq: $id }) {
      id
      model
      image {
        publicURL
      }

      type {
        id
        name
      }

      pdfLink
      company
      subframe
      floor
      threshold
      mounting
      rearDoor
      rearFrame
      roof
      skins
      sideWall
      frontEnd
      bumper
      interiorLighting
      exteriorLighting
      mudflaps
      panels
      cabAccessDoor
      cabLiner
      rearFinish
      liningSides
      grabHandles
      sidePanels
      sideFrame
      frontACDoor
      understructure
      sideCurtains
    }
  }
`;

export default TruckModel;
