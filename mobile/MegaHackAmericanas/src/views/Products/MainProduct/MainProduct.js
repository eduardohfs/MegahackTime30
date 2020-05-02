import React from 'react';
import {ProductActions} from './ProductActions/ProductActions';
import {ProductDescription} from './ProductDescription/ProductDescription';

export function MainProduct() {
  return (
    <>
      <ProductDescription />
      <ProductActions />
    </>
  );
}
