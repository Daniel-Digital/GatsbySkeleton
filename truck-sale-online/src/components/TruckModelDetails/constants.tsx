import React from 'react';
import GeneralInfo from './Tabs/GeneralInfo';
import Specification from './Tabs/Specification';

type Tab = {
  id: number;
  name: string;
  component: React.ReactNode;
};

export const TABS: Tab[] = [
  {
    id: 0,
    name: 'General info',
    component: <GeneralInfo />,
  },
  {
    id: 1,
    name: 'Specification',
    component: <Specification />,
  },
];

export const NOT_IN_WEBSITE = 'Not in website';
