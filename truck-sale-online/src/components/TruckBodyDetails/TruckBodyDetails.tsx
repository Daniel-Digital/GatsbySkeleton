import React from 'react';
import { css } from '@emotion/core';
import Specification from '../Specification';
import { useTruckBodyData } from '@/contexts/TruckBodyDataContext';

const TruckBodyDetails = () => {
  const data = useTruckBodyData();

  const body = data.strapiBody;

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
        >{`${body.company} ${body.model} Specification`}</h3>
      </div>
      <div>
        <Specification data={data.strapiBody} toExclude={['image', 'id']} />
      </div>
    </div>
  );
};

export default TruckBodyDetails;
