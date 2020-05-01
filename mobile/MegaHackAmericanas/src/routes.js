// #region [IMPORTS]
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// #endregion

// #region [VIEWS]
import Main from './views/Main/Main';
// #endregion

/**
 * ============================================================================
 * * App Container
 * ============================================================================
 */
export default createAppContainer(
  createSwitchNavigator(
    {
      Main: Main,
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        headerMode: 'none',
        headerShown: false,
      },
    },
  ),
);
