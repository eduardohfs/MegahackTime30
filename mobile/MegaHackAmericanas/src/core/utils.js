/* eslint-disable no-unused-vars */
import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';
// #region [CSS]
/**
 * * CSS
 * * Funcoes para utilizacao no CSS
 */
/* ========================================================================== */

export const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
export const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

// #endregion
