/* eslint-disable react-native/no-inline-styles */
import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';

export function Animations({source, background}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: background,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.34,

        elevation: 5,
      }}>
      <LottieView
        source={source}
        autoPlay
        loop
        style={{backgroundColor: 'transparent'}}
      />
    </View>
  );
}
