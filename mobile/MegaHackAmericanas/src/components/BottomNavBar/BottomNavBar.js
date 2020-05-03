import React, {useContext} from 'react';
import {ThemeContext} from '../../theme/themesContext';
import {
  BarcodeIcon,
  BottomNav,
  BottomNavFix,
  BottomNavImg,
  BottomNavLeftArea,
  BottomNavRightArea,
  BottomNavItemContainer,
  FabBottomNav,
  Icon,
  ItemText,
} from './styles';

import bar from '../../assets/navbar/bar.png';

import listIcon from '../../assets/icons/list.png';
import cesta from '../../assets/icons/cesta.png';
import heart from '../../assets/icons/heart.png';
import more from '../../assets/icons/more.png';
import leitor from '../../assets/icons/leitor.png';

export const BottomNavBar = ({action, hideFab}) => {
  const context = useContext(ThemeContext);
  const {theme} = context;
  return (
    <>
      <BottomNav theme={theme}>
        <BottomNavImg source={bar} alt="bar" resizeMode="stretch" />
        <BottomNavLeftArea theme={theme}>
          <BottomNavItemContainer theme={theme}>
            <Icon source={listIcon} alt="listIcon" resizeMode="center" />
            <ItemText theme={theme}>categoria</ItemText>
          </BottomNavItemContainer>
          <BottomNavItemContainer theme={theme}>
            <Icon source={cesta} alt="cesta" resizeMode="center" />
            <ItemText theme={theme}>cesta</ItemText>
          </BottomNavItemContainer>
        </BottomNavLeftArea>
        <BottomNavRightArea theme={theme}>
          <BottomNavItemContainer theme={theme}>
            <Icon source={heart} alt="heart" resizeMode="center" />
            <ItemText theme={theme}>favoritos</ItemText>
          </BottomNavItemContainer>
          <BottomNavItemContainer theme={theme}>
            <Icon source={more} alt="more" resizeMode="center" />
            <ItemText theme={theme}>mais</ItemText>
          </BottomNavItemContainer>
        </BottomNavRightArea>
      </BottomNav>
      <BottomNavFix theme={theme} />
      {!hideFab && (
        <FabBottomNav theme={theme} onPress={action}>
          <BarcodeIcon source={leitor} alt="leitor" resizeMode="center" />
        </FabBottomNav>
      )}
    </>
  );
};
