import styled from 'styled-components';

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
