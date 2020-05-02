import React from 'react';
import {ImageDisplay} from './ImageDisplay/ImageDisplay';
import {Info} from './Info/Info';
import styled from 'styled-components';

export const MainCardProduct = styled.View`
  width: 100%;
  height: 300px;
  padding: 25px;
  flex-direction: row;
`;

export function ProductDescription() {
  return (
    <MainCardProduct>
      <ImageDisplay />
      <Info />
    </MainCardProduct>
  );
}
