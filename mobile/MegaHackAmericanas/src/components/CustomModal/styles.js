import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ModalContainer = styled.View`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ChildrenContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.background};
  padding-top: 20px;
  border-radius: 10px;
`;

export const IconContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.surfaceTertiary};
  width: 30px;
  height: 30px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 2;
`;

export const CloseIcon = styled(Icon)``;
