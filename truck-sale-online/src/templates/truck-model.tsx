import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Image from 'gatsby-image';
import { TruckModelPageQuery } from '@/generated/graphql';
import TruckModelDetails from '@/components/TruckModelDetails/TruckModelDetails';
import { css } from '@emotion/core';
import styled from '@/styled';
import { TruckModelDataProvider } from '@/contexts/TruckModelDataContext';

const Container = styled.section`
  margin-top: 60px;
  margin-bottom: 60px;
  padding-left: 10%;
  padding-right: 10%;
`;

const TruckModel: React.FC<PageProps<TruckModelPageQuery>> = ({ data }) => {
  return (
    <Container>
      <h2
        css={css`
          font-size: 40px;
          text-align: center;
        `}
      >
        {data.strapiTruck.model}
      </h2>
      <div
        css={css`
          margin-top: 60px;
          display: flex;
        `}
      >
        <Image
          fluid={data.strapiTruck.image.childImageSharp.fluid}
          css={css`
            flex: 1;
            max-width: 30vw;
          `}
        />
        <TruckModelDataProvider value={data}>
          <TruckModelDetails />
        </TruckModelDataProvider>
      </div>
    </Container>
  );
};

export const pageQuery = graphql`
  query TruckModelPage($id: Int!) {
    strapiTruck(strapiId: { eq: $id }) {
      id
      model
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      modelYear
      modelGVWR
      modelGCWR
      modelGAWRFront
      modelGAWRRear
      modelPayload
      modelSuspensionType
      modelSuspensionCapacity
      modelBrakeType
      modelBrakesFront
      modelBrakesRear
      modelTransmission
      modelEngine
      modelEngineDisplacement
      modelEngineHP
      modelEngineTorque
      modelBatteries
      modelFuelTankCapacity
      modelWheelbases
      limitedSlipDifferential
      modelPdfCatalogueLink
      modelCabType
      modelColors
      batteryBox
      bumper
    }
  }
`;

export default TruckModel;
