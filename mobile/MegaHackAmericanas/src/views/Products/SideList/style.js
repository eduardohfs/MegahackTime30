import styled from 'styled-components';

export const ContainerSideList = styled.View`
  background-color: ${props => props.theme.meta};
`;

export const ItemRow = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.background};
  padding: 10px;
  margin: 4px 10px;
`;

export const ItemDescription = styled.View`
  padding: 10px;
`;

export const ItemName = styled.Text`
  color: ${props => props.theme.onSurfacePrimary};
`;

export const ItemPrice = styled.Text`
  font-weight: bold;
`;

export const Icon = styled.Image`
  width: 64px;
  height: 64px;
  padding: 20px;
`;

export const Star = styled.Image`
  width: 18px;
  height: 18px;
`;

export const StarContainer = styled.View`
  align-items: center;
  width: 30%;
`;
