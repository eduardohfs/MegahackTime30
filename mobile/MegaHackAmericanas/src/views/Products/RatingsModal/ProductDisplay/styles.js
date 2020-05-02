import styled from 'styled-components';

export const Container = styled.View`
  flex: 0.2;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImgContainer = styled.View`
  flex: 0.3;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ImgProduct = styled.Image`
  width: 100px;
  height: 100px;
`;

export const InfoContainer = styled.View`
  flex: 0.7;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  padding: 10px;
  font-size: 20px;
`;

export const RatingContainer = styled.View`
  flex: 0.8;
  height: 100%;
  flex-direction: row;
`;

export const StarsContainer = styled.View`
  flex: 0.4;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const RatingTextContainer = styled.View`
  flex: 0.6;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const RatingNumber = styled.Text`
  font-weight: normal;
  font-size: 12px;
  color: ${props => props.theme.onBackground};
`;
