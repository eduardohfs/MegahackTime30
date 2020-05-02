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

export const BottomNavBar = () => {
  const context = useContext(ThemeContext);
  const {theme} = context;
  return (
    <>
      <BottomNav theme={theme}>
        <BottomNavImg source={bar} alt="bar" resizeMode="stretch" />
        <BottomNavLeftArea>
          <BottomNavItemContainer>
            <Icon source={listIcon} alt="listIcon" resizeMode="center" />
            <ItemText>categoria</ItemText>
          </BottomNavItemContainer>
          <BottomNavItemContainer>
            <Icon source={cesta} alt="cesta" resizeMode="center" />
            <ItemText>cesta</ItemText>
          </BottomNavItemContainer>
        </BottomNavLeftArea>
        <BottomNavRightArea>
          <BottomNavItemContainer>
            <Icon source={heart} alt="heart" resizeMode="center" />
            <ItemText>favoritos</ItemText>
          </BottomNavItemContainer>
          <BottomNavItemContainer>
            <Icon source={more} alt="more" resizeMode="center" />
            <ItemText>mais</ItemText>
          </BottomNavItemContainer>
        </BottomNavRightArea>
      </BottomNav>
      <BottomNavFix theme={theme} />
      <FabBottomNav>
        <BarcodeIcon source={leitor} alt="leitor" resizeMode="center" />
      </FabBottomNav>
    </>
  );
};
