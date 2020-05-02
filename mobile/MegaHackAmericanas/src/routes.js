// #region [IMPORTS]
import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from 'react-navigation-stack';

import logo from './assets/logo/logo.png';
// #endregion

// #region [VIEWS]
import Main from './views/Main/Main';
import Products from './views/Products/Products';
// #endregion

/**
 * ============================================================================
 * * App Container
 * ============================================================================
 */
export default createAppContainer(
  createStackNavigator(
    {
      Main: Main,
      Products,
    },
    {
      initialRouteName: 'Products',
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerTitle: () => <Image source={logo} alt="logo" />,
        headerStyle: {
          backgroundColor: '#e60014',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      },
    },
  ),
);
