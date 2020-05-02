import React, {useContext} from 'react';
import {ThemeContext} from '../../../theme/themesContext';
// import {} from './styles';
import {ProductDisplay} from './ProductDisplay/ProductDisplay';
import ProductImg from '../../../assets/mock/Products/demo.png';
export function RatingsModal() {
  const {theme} = useContext(ThemeContext);

  const ratingsMock = [
    {
      Id: 1,
      Title: 'Excelente!',
      Description:
        'Ea irure ex consequat sint in non sit cillum exercitation labore ut minim.',
      Author: 'Ronaldo',
      Rating: 4,
    },
    {
      Id: 2,
      Title: 'Excelente!',
      Description:
        'Ea irure ex consequat sint in non sit cillum exercitation labore ut minim.',
      Author: 'Ronaldo',
      Rating: 3,
    },
    {
      Id: 3,
      Title: 'Excelente!',
      Description:
        'Ea irure ex consequat sint in non sit cillum exercitation labore ut minim.',
      Author: 'Ronaldo',
      Rating: 2,
    },
    {
      Id: 4,
      Title: 'Excelente!',
      Description:
        'Ea irure ex consequat sint in non sit cillum exercitation labore ut minim.',
      Author: 'Ronaldo',
      Rating: 1,
    },
    {
      Id: 5,
      Title: 'Excelente!',
      Description:
        'Ea irure ex consequat sint in non sit cillum exercitation labore ut minim.',
      Author: 'Ronaldo',
      Rating: 5,
    },
  ];
  return (
    <>
      <ProductDisplay
        productTitle="Desodorante Dove Men Aero"
        productImg={ProductImg}
        avgRating={4.5}
        totalRating={200}
      />
    </>
  );
}
