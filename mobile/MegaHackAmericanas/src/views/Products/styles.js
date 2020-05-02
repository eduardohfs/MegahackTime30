import styled from 'styled-components';

export const SearchContainer = styled.View`
  padding: 0px 20px;
  background-color: ${props => props.theme.primary};
`;
export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
`;

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

export const MainCardProduct = styled.View`
  width: 100%;
  height: 300px;
  padding: 25px;
  flex-direction: row;
`;

export const ProductImage = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
`;

export const DescriptionCard = styled.View`
  flex: 0.7;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  padding: 10px;
  font-size: 20px;
`;

export const Code = styled.Text`
  font-size: 10px;
  padding: 10px;
  color: ${props => props.theme.onSurfacePrimary};
`;

export const Description = styled.Text`
  padding: 10px;
  color: ${props => props.theme.onSurfacePrimary};
`;
