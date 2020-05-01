import React, {useContext} from 'react';
import {Platform, StatusBar} from 'react-native';
import {ThemeContext} from '../../theme/themesContext';
import {StatusBarSafeArea} from './styles';

export const StyledStatusBar = ({background}) => {
  const context = useContext(ThemeContext);
  const {theme} = context;
  return (
    <>
      {Platform.OS === 'ios' && (
        <StatusBarSafeArea theme={theme} background={background}>
          <StatusBar
            barStyle={theme.key === 'dark' ? 'dark-content' : 'light-content'}
            backgroundColor={background ? background : theme.primary}
          />
        </StatusBarSafeArea>
      )}
      {Platform.OS === 'android' && (
        <StatusBar
          barStyle={theme.key === 'dark' ? 'dark-content' : 'light-content'}
          backgroundColor={background ? background : theme.primary}
        />
      )}
    </>
  );
};
