import styled from 'styled-components';
import FontIcon from 'react-native-vector-icons/FontAwesome';

export const ContainerActions = styled.View`
  flex-direction: column;
  height: 200px;
  width: 100%;
`;

export const SectionIcons = styled.View`
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

export const SectionButton = styled.View`
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
  flex-direction: row;
`;

export const MainButtonText = styled.Text`
  color: ${props => props.theme.background};
`;

export const MainButtonIcon = styled(FontIcon)`
  padding-right: 10px;
  color: ${props => props.theme.background};
`;
