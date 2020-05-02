import React, {useContext} from 'react';
import {ThemeContext} from '../../theme/themesContext';
import {PaddingArea} from './styles';

export const PaddingView = ({
  children,
  padTop,
  padBottom,
  padLeft,
  padRight,
}) => {
  const context = useContext(ThemeContext);
  const {theme} = context;
  return (
    <>
      <PaddingArea
        theme={theme}
        padTop={padTop}
        padBottom={padBottom}
        padLeft={padLeft}
        padRight={padRight}>
        {children}
      </PaddingArea>
    </>
  );
};
