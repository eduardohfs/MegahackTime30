import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '~/theme/themesContext';
import { AreaPd, HorizonPd, VerticalPd } from './styles';

export const HorizontalPadding = ({ children, value }) => {
  const context = useContext(ThemeContext);
  const { theme } = context;
  return (
    <>
      <HorizonPd theme={theme} value={value}>
        {children}
      </HorizonPd>
    </>
  );
};

HorizontalPadding.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  value: PropTypes.number,
};

HorizontalPadding.defaultProps = {
  value: 20,
};

export const VerticalPadding = ({ children, value }) => {
  const context = useContext(ThemeContext);
  const { theme } = context;
  return (
    <>
      <VerticalPd theme={theme} value={value}>
        {children}
      </VerticalPd>
    </>
  );
};

VerticalPadding.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  value: PropTypes.number,
};

VerticalPadding.defaultProps = {
  value: 20,
};

export const Padding = ({ children, valueX, valueY }) => {
  const context = useContext(ThemeContext);
  const { theme } = context;
  return (
    <>
      <AreaPd theme={theme} valueX={valueX} valueY={valueY}>
        {children}
      </AreaPd>
    </>
  );
};

Padding.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  valueX: PropTypes.number,
  valueY: PropTypes.number,
};

Padding.defaultProps = {
  children: null,
  valueX: 20,
  valueY: 20,
};
