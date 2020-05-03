import React, {useContext} from 'react';
import basket from '../../../assets/icons/basket.png';
import {ThemeContext} from '../../../theme/themesContext';
import {
  BackLabel,
  HeaderContainer,
  Icon,
  LabelIcon,
  TouchableBack,
} from './styles';

export function Header({onClose}) {
  const {theme} = useContext(ThemeContext);

  return (
    <HeaderContainer theme={theme}>
      <Icon source={basket} alt="shoppingbasket" resizeMode="center" />
      <LabelIcon theme={theme}>lista de compras</LabelIcon>
      <TouchableBack onPress={onClose}>
        <BackLabel theme={theme}>voltar</BackLabel>
      </TouchableBack>
    </HeaderContainer>
  );
}
