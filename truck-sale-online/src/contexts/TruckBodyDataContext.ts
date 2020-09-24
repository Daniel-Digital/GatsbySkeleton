import { createContext, useContext } from 'react';
import { TruckBodyPageQuery } from '@/generated/graphql';

const truckBodyDataContext = createContext<TruckBodyPageQuery>(null!);

export const useTruckBodyData = () => useContext(truckBodyDataContext);

export const TruckBodyDataProvider = truckBodyDataContext.Provider;
