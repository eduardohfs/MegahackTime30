import React, {useContext} from 'react';
import {ThemeContext} from '../../theme/themesContext';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export function StarRating({rating, starSize}) {
  const {theme} = useContext(ThemeContext);

  const createStarts = () => {
    const stars = [];
    let aux = rating;
    for (var i = 1; i <= 5; i++) {
      aux -= 1;
      if (i > rating) {
        stars.push(
          <Icon
            name="star-o"
            size={starSize}
            color="#F2C24F"
            key={`${i}${aux}`}
          />,
        );
      } else if (aux > 0 && aux < 1) {
        stars.push(
          <Icon
            name="star-half-empty"
            size={starSize}
            color="#F2C24F"
            key={`${i}${aux}`}
          />,
        );
      } else {
        stars.push(
          <Icon
            name="star"
            size={starSize}
            color="#F2C24F"
            key={`${i}${aux}`}
          />,
        );
      }
    }

    return stars;
  };

  return (
    <>
      <Container>{createStarts()}</Container>
    </>
  );
}
