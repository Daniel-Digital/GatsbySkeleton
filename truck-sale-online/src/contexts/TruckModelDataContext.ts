import { createContext, useContext } from 'react';
import { TruckModelPageQuery } from '@/generated/graphql';

const truckModelDataContext = createContext<TruckModelPageQuery>(null!);

export const useTruckModelData = () => useContext(truckModelDataContext);

export const TruckModelDataProvider = truckModelDataContext.Provider;
