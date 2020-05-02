import React, {useContext} from 'react';
import {Image, Text} from 'react-native';
import prime from '../../assets/images/prime.png';
import demo from '../../assets/mock/Products/demo.png';
import {SwitchInput} from '../../components/Switch/Switch';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {ThemeContext} from '../../theme/themesContext';
import {
  AsideText,
  Code,
  Container,
  Description,
  DescriptionCard,
  FilterSection,
  MainCardProduct,
  PrimeBar,
  ProductImage,
  Title,
  SearchContainer,
} from './styles';

export default function Products() {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <SearchContainer theme={theme}>
        <SearchBar />
      </SearchContainer>
      <Container theme={theme}>
        <PrimeBar theme={theme}>
          <FilterSection>
            <SwitchInput value={true} onChange={() => console.log('mudei')} />
            <Image source={prime} alt="logo" />
            <Text>prime</Text>
          </FilterSection>
          <AsideText theme={theme}>refinar</AsideText>
        </PrimeBar>
        <MainCardProduct theme={theme}>
          <ProductImage>
            <Image source={demo} alt="logo" />
          </ProductImage>
          <DescriptionCard>
            <Title>Desodorante Dove Men Aero</Title>
            <Code theme={theme}>(Cód. 37559111)</Code>
            <Description theme={theme}>
              Com o Dove Men + Care você garante 48 horas de proteção seca e
              ação antibacteriana. Poderoso contra suor, mas sem irritar a pele
            </Description>
          </DescriptionCard>
        </MainCardProduct>
      </Container>
    </>
  );
}
