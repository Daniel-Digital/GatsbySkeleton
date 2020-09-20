import { css } from '@emotion/core';
import React, { useState } from 'react';
import { TABS } from './constants';

const TruckModelDetails = () => {
  const [currentTab, setCurrentTab] = useState(1);

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
        {TABS.map((tab, index) => (
          <h3
            key={tab.id}
            css={
              currentTab === index &&
              ((theme) => ({ color: theme.colors.primary }))
            }
            onClick={() => setCurrentTab(index)}
          >
            {tab.name}
          </h3>
        ))}
      </div>
      <div>{TABS[currentTab].component}</div>
    </div>
  );
};

export default TruckModelDetails;
