import styled from 'styled-components';

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const ContainerPic = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  width: 50%;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
  font-size: 20px;
  text-align: center;
`;

export const DescriptionText = styled.Text`
  width: 75%;
  font-weight: 300;
  font-size: 14px;
  padding: 10px;
  padding-left: 0px;
  text-align: center;
  color: ${props => props.theme.onBackground};
`;

export const RedTitle = styled.Text`
  width: 90%;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.primary};
`;

export const ContainerButton = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
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
