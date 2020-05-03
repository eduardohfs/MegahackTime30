import React, {useContext} from 'react';
import {BottomNavBar} from '../../components/BottomNavBar/BottomNavBar';
import {CheckoutOptions} from './CheckoutOptions/CheckoutOptions';
import {Header} from './Header/Header';
import {ProductsList} from './ProductsList/ProductsList';
import styled from 'styled-components';
import {ThemeContext} from '../../theme/themesContext';

export const Container = styled.View`
  background-color: ${props => props.theme.meta};
  flex: 1;
  justify-content: flex-end;
`;
export default function ShoppingBasket() {
  const {theme} = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Header onClose={() => console.log('voltar')} />
      <ProductsList />
      <CheckoutOptions />
      <BottomNavBar hideFab backgroundColor={theme.background} />
    </Container>
  );
}
