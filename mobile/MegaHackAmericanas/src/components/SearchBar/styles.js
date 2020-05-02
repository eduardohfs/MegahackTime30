import styled from 'styled-components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const InputHeight = '42px';

function definePlaceholder(variant, theme) {
  if (variant === 'primary') {
    return theme.onSurfacePrimary;
  }
  if (variant === 'secondary') {
    return theme.onSurfaceSecondary;
  }
  return theme.onSurfaceSecondary;
}

export const SearchContainer = styled.View`
  elevation: ${props => (props.noElevation ? 0 : 4)};
  shadow-color: #000;
  shadow-offset: ${props => (props.noElevation ? '0 2px' : '0 0')};
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  width: 100%;
  height: ${InputHeight};
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  background: ${props => {
    if (props.variant === 'primary') {
      return props.theme.surfacePrimary;
    }
    if (props.variant === 'secondary') {
      return props.theme.surfaceSecondary;
    }
    return props.theme.surfacePrimary;
  }};
  border-radius: 10px;
`;

export const InputStyleStack = styled.View`
  flex: 1;
  flex-direction: row;
  height: ${InputHeight};
`;

export const LeftIconButton = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BackIcon = styled(Icon)`
  background-color: transparent;
  color: ${props => {
    if (props.variant === 'primary') {
      return props.theme.onSurfacePrimary;
    }
    if (props.variant === 'secondary') {
      return props.theme.onSurfaceSecondary;
    }
    return props.theme.onSurfacePrimary;
  }};
  font-size: 24px;
`;

export const StyledInput = styled.TextInput.attrs(({theme, variant}) => ({
  placeholderTextColor: definePlaceholder(variant, theme),
}))`
  flex: 3;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${InputHeight};
  font-size: 16px;
  color: ${props => {
    if (props.variant === 'primary') {
      return props.theme.onSurfacePrimary;
    }
    if (props.variant === 'secondary') {
      return props.theme.onSurfaceSecondary;
    }
    return props.theme.onSurfaceSecondary;
  }};
  padding-left: ${props => {
    if (props.hideArrow) {
      return '15px';
    }
    return '2px';
  }};
`;

export const RightIconButton = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EraseIcon = styled(Icon)`
  background-color: transparent;
  color: ${props => {
    if (props.variant === 'primary') {
      return props.theme.onSurfacePrimary;
    }
    if (props.variant === 'secondary') {
      return props.theme.onSurfaceSecondary;
    }
    return props.theme.onSurfacePrimary;
  }};
  font-size: 24px;
`;

export const SearchIconButton = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled(MaterialIcon)`
  background-color: transparent;
  color: ${props => {
    if (props.variant === 'primary') {
      return props.theme.onSurfacePrimary;
    }
    if (props.variant === 'secondary') {
      return props.theme.onSurfaceSecondary;
    }
    return props.theme.onSurfacePrimary;
  }};
  font-size: 24px;
`;
