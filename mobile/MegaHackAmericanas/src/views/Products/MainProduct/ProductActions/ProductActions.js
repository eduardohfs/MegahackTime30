import React, {useContext} from 'react';
import comments from '../../../../assets/icons/comments.png';
import grouplist from '../../../../assets/icons/grouplist.png';
import info from '../../../../assets/icons/info.png';
import {ThemeContext} from '../../../../theme/themesContext';
import {
  ContainerActions,
  Icon,
  IconContent,
  IconText,
  MainButton,
  MainButtonText,
  SectionButton,
  SectionIcons,
  TouchableIcon,
} from './styles';

export function ProductActions() {
  const {theme} = useContext(ThemeContext);

  return (
    <ContainerActions>
      <SectionIcons>
        <IconContent>
          <TouchableIcon>
            <Icon source={grouplist} alt="buylist" resizeMode="center" />
          </TouchableIcon>
          <IconText theme={theme}>adicione à sua lista de compras</IconText>
        </IconContent>
        <IconContent>
          <TouchableIcon>
            <Icon source={comments} alt="buylist" resizeMode="center" />
          </TouchableIcon>
          <IconText theme={theme}>avaliações e comentários</IconText>
        </IconContent>
        <IconContent>
          <TouchableIcon>
            <Icon source={info} alt="buylist" resizeMode="center" />
          </TouchableIcon>
          <IconText theme={theme}>saiba mais informações</IconText>
        </IconContent>
      </SectionIcons>
      <SectionButton>
        <MainButton theme={theme}>
          <MainButtonText theme={theme}>pegar ou receber hoje</MainButtonText>
        </MainButton>
      </SectionButton>
    </ContainerActions>
  );
}
