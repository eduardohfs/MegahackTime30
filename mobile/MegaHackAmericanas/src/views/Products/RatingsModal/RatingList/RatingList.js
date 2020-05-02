import React, {useContext} from 'react';
import {ThemeContext} from '../../../../theme/themesContext';
import {StarRating} from '../../../../components/StarRating/StarRating';
import {Container} from './styles';

export function RatingList({list}) {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <Container />
    </>
  );
}
