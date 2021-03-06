import React from 'react';
import { css } from '@emotion/core';
import Specification from '../Specification';
import { useTruckModelData } from '@/contexts/TruckModelDataContext';

const TruckModelDetails = () => {
  const data = useTruckModelData();

  const truck = data.strapiTruck;

  return (
    <div
      css={css`
        margin-left: 30px;
        flex: 1;
      `}
    >
      <div
        css={css`
          margin-bottom: 30px;
          display: flex;
          justify-content: space-around;
        `}
      >
        <h3
          css={(theme) => ({ color: theme.colors.primary })}
        >{`${truck.modelYear} ${truck.make?.name} ${truck.model} Specification`}</h3>
      </div>
      <div>
        <Specification
          data={data.strapiTruck}
          toExclude={['id', 'model', 'image', 'make', 'modelPdfCatalogueLink']}
        />
      </div>
    </div>
  );
};

export default TruckModelDetails;
