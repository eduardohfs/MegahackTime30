import React, {useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../../../theme/themesContext';
import {ProductDisplay} from './ProductDisplay/ProductDisplay';
import {RatingList} from './RatingList/RatingList';
import ProductImg from '../../../assets/mock/Products/demo.png';

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

export function RatingsModal() {
  const {theme} = useContext(ThemeContext);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    async function loadData() {
      let total = 0;
      for await (const item of ratingsMock) {
        total += item.Rating;
      }
      let avgAux = total / ratingsMock.length;

      setAvg(avgAux);
    }

    loadData();
  }, []);

  return (
    <>
      <ProductDisplay
        productTitle="Desodorante Dove Men Aero"
        productImg={ProductImg}
        avgRating={avg}
        totalRating={ratingsMock.length}
      />
      <RatingList list={ratingsMock} />
    </>
  );
}
