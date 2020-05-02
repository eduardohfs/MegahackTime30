import React from 'react';
import {Image} from 'react-native';
import demo from '../../../../../assets/mock/Products/demo.png';
import {ProductImage} from './styles';

export function ImageDisplay() {
  return (
    <ProductImage>
      <Image source={demo} alt="logo" />
    </ProductImage>
  );
}
