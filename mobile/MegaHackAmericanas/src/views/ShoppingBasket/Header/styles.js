import styled from 'styled-components';

export const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  flex-direction: row;
  height: 45px;
`;

export const LabelIcon = styled.Text`
  color: ${props => props.theme.background};
  padding: 0 15px;
  font-size: 15px;
`;

export const TouchableBack = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;

export const BackLabel = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const Icon = styled.Image``;
