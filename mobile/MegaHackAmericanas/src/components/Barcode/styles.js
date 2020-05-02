import {RNCamera} from 'react-native-camera';
import {Platform} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components';

const iconSize = '25px';
const marginTopIcons = '20px';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const WrapperTopBar = styled.View`
  elevation: 1;
  z-index: 1;
  position: absolute;
  top: ${Platform.OS === 'ios' ? '33px' : 0};
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FlashButton = styled(MaterialIcons)`
  elevation: 12;
  z-index: 12;
  top: ${marginTopIcons};
  left: 15px;
  color: #fff;
  font-size: ${iconSize};
  position: absolute;
`;

export const BasketButton = styled(FontAwesomeIcon)`
  elevation: 12;
  z-index: 12;
  top: 22px;
  left: 60px;
  color: #fff;
  font-size: 20px;
  position: absolute;
`;

export const SaveButton = styled(MaterialIcons)`
  position: absolute;
  top: ${marginTopIcons};
  right: 15px;
  color: #fff;
  font-size: ${iconSize};
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  position: absolute;
  height: 100%;
  width: 100%;
`;
