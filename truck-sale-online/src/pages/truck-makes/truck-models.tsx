import React from 'react';
import { PageProps } from 'gatsby';
import ProductFilter from '@/components/ProductFilter/ProductFilter';
import ProductList from '@/components/ProductList/ProductList';

const TruckModels: React.FC<PageProps> = () => {
  return (
    <div>
      <ProductFilter />
      <ProductList />
    </div>
  );
};

export default TruckModels;
