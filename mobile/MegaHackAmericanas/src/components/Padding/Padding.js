import React, {useContext} from 'react';
import {ThemeContext} from '../../theme/themesContext';
import {AreaPd, HorizonPd, VerticalPd} from './styles';

export const HorizontalPadding = ({children, value}) => {
  const context = useContext(ThemeContext);
  const {theme} = context;
  return (
    <>
      <HorizonPd theme={theme} value={value}>
        {children}
      </HorizonPd>
    </>
  );
};

export const VerticalPadding = ({children, value}) => {
  const context = useContext(ThemeContext);
  const {theme} = context;
  return (
    <>
      <VerticalPd theme={theme} value={value}>
        {children}
      </VerticalPd>
    </>
  );
};

export const Padding = ({children, valueX, valueY}) => {
  const context = useContext(ThemeContext);
  const {theme} = context;
  return (
    <>
      <AreaPd theme={theme} valueX={valueX} valueY={valueY}>
        {children}
      </AreaPd>
    </>
  );
};
