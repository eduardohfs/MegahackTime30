import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '~/theme/themesContext';
import { PaddingArea } from './styles';

export const PaddingView = ({
  children,
  padTop,
  padBottom,
  padLeft,
  padRight,
}) => {
  const context = useContext(ThemeContext);
  const { theme } = context;
  return (
    <>
      <PaddingArea
        theme={theme}
        padTop={padTop}
        padBottom={padBottom}
        padLeft={padLeft}
        padRight={padRight}
      >
        {children}
      </PaddingArea>
    </>
  );
};

PaddingView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  padTop: PropTypes.number,
  padBottom: PropTypes.number,
  padLeft: PropTypes.number,
  padRight: PropTypes.number,
};

PaddingView.defaultProps = {
  children: null,
  padTop: 20,
  padLeft: 20,
  padRight: 20,
  padBottom: 20,
};
