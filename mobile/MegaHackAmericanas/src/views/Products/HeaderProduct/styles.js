import styled from 'styled-components';

export const PrimeBar = styled.View`
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.surfacePrimary};
  padding: 10px;
  justify-content: space-between;
  flex-direction: row;
`;

export const FilterSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0.4;
`;

export const PrimeLabel = styled.Text``;

export const AsideText = styled.Text`
  color: ${props => props.theme.primaryVariant};
`;
