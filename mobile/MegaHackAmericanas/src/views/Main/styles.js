import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 56px;
`;

export const MockImg = styled.Image`
  width: 100%;
`;

export const SearchContainer = styled.View`
  padding: 0px 20px;
  background-color: ${props => props.theme.primary};
`;
