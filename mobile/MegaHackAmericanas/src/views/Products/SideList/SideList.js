import React, {useContext} from 'react';
import img from '../../../assets/mock/Products/desodorante.png';
import styled from 'styled-components';
import {ThemeContext} from '../../../theme/themesContext';
import starFilled from '../../../assets/images/star_filled.png';
import starEmpty from '../../../assets/images/star_corner.png';

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

const ContainerSideList = styled.View`
  background-color: ${props => props.theme.meta};
`;

const ItemRow = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.background};
  padding: 10px;
  margin: 4px 10px;
`;

const ItemDescription = styled.View`
  padding: 10px;
`;

const ItemName = styled.Text`
  color: ${props => props.theme.onSurfacePrimary};
`;

const ItemPrice = styled.Text`
  font-weight: bold;
`;

export const Icon = styled.Image`
  width: 64px;
  height: 64px;
  padding: 20px;
`;

export const Star = styled.Image`
  width: 18px;
  height: 18px;
`;

export function SideList() {
  const {theme} = useContext(ThemeContext);

  return (
    <ContainerSideList theme={theme}>
      {productsList.length > 0 &&
        productsList.map(product => (
          <ItemRow theme={theme} key={product.id}>
            <Icon source={product.src} alt="buylist" resizeMode="center" />
            <ItemDescription>
              <ItemName theme={theme}>{product.name}</ItemName>
              <Star source={starFilled} alt="star" resizeMode="center" />
              <ItemPrice>{`R$ ${product.price}`}</ItemPrice>
            </ItemDescription>
          </ItemRow>
        ))}
    </ContainerSideList>
  );
}
