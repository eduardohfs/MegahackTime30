import styled from 'styled-components';

export const SwitchContainer = styled.View``;
export const StyledSwitch = styled.Switch.attrs(({theme, value}) => ({
  thumbColor: value ? theme.primary : theme.meta,
  trackColor: {true: '#999999', false: '#9E9E9E'},
}))`
  margin-top: 3;
  margin-left: 5;
`;

export const SwitchLabel = styled.Text`
  font-size: 20;
  margin-left: 10;
  color: ${props => props.theme.onSurfacePrimary};
`;
