import React, {useContext} from 'react';
import styled from 'styled-components';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {ThemeContext} from '../../theme/themesContext';
import {HeaderProduct} from './HeaderProduct/HeaderProduct';
import {MainProduct} from './MainProduct/MainProduct';
import {SideList} from './SideList/SideList';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
`;

export const SearchContainer = styled.View`
  padding: 0px 20px;
  background-color: ${props => props.theme.primary};
`;

export default function Products() {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <SearchContainer theme={theme}>
        <SearchBar />
      </SearchContainer>
      <Container theme={theme}>
        <HeaderProduct />
        <MainProduct />
        <SideList />
      </Container>
    </>
  );
}
