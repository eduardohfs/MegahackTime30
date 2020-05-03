import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
`;

export const RatingContainer = styled.View`
  flex: 1;
  width: 100%;
  min-height: 150px;
  background-color: ${props => props.theme.surfacePrimary};
  border-radius: 10px;
  padding-left: 10px;
  align-items: flex-start;
`;

export const Title = styled.Text`
  width: 100%;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
  font-size: 20px;
  text-align: left;
`;

export const StarContainer = styled.View`
  width: 30%;
`;

export const DescriptionText = styled.Text`
  font-weight: normal;
  font-size: 14px;
  padding: 10px;
  padding-left: 0px;
  color: ${props => props.theme.onBackground};
`;

export const AuthorText = styled.Text`
  font-style: italic;
  font-weight: bold;
  font-size: 14px;
  padding: 10px;
  padding-left: 0px;
  color: ${props => props.theme.onBackground};
`;
