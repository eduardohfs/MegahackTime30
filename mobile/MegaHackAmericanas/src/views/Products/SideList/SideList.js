import React, {useContext} from 'react';
import img from '../../../assets/mock/Products/desodorante.png';
import {ThemeContext} from '../../../theme/themesContext';
import {StarRating} from '../../../components/StarRating/StarRating';
import {
  ContainerSideList,
  ItemRow,
  Icon,
  ItemDescription,
  ItemName,
  StarContainer,
  ItemPrice,
} from './style';

const productsList = [
  {
    id: 0,
    src: img,
    name: 'Desodorante Dove Men Aerosol 150ml',
    rating: 4,
    price: 12.99,
  },
  {
    id: 1,
    src: img,
    name: 'Desodorante Dove Men Aerosol 150ml',
    rating: 1,
    price: 12.99,
  },
  {
    id: 2,
    src: img,
    name: 'Desodorante Dove Men Aerosol 150ml',
    rating: 3,
    price: 12.99,
  },
  {
    id: 3,
    src: img,
    name: 'Desodorante Dove Men Aerosol 150ml',
    rating: 5,
    price: 14.99,
  },
];

export function SideList() {
  const {theme} = useContext(ThemeContext);

  return (
    <ContainerSideList theme={theme}>
      {productsList.length > 0 &&
        productsList.map(product => (
          <ItemRow theme={theme} key={product.id}>
            <Icon source={product.src} alt="product" resizeMode="center" />
            <ItemDescription>
              <ItemName theme={theme}>{product.name}</ItemName>
              <StarContainer>
                <StarRating rating={product.rating} starSize={12} />
              </StarContainer>
              <ItemPrice>{`R$ ${product.price}`}</ItemPrice>
            </ItemDescription>
          </ItemRow>
        ))}
    </ContainerSideList>
  );
}
