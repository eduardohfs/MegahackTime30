import React, {useContext} from 'react';
import styled from 'styled-components';
import comments from '../../../../assets/icons/comments.png';
import grouplist from '../../../../assets/icons/grouplist.png';
import info from '../../../../assets/icons/info.png';
import {ThemeContext} from '../../../../theme/themesContext';

const ContainerActions = styled.View`
  flex-direction: column;
  height: 200px;
  width: 100%;
`;

const SectionIcons = styled.View`
  flex: 0.6;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Icon = styled.Image`
  width: 64px;
  height: 64px;
`;

export const IconContent = styled.View`
  width: 35%;
  justify-content: center;
  align-items: center;
`;

export const TouchableIcon = styled.TouchableOpacity``;

export const IconText = styled.Text`
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: ${props => props.theme.onSurfaceSecondary};
`;

const SectionButton = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-top: 30px;
`;

export const MainButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary};
  width: 211px;
  height: 37px;
  justify-content: center;
  align-items: center;
`;

export const MainButtonText = styled.Text`
  color: ${props => props.theme.background};
`;

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
