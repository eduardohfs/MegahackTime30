import React, {useContext, useState} from 'react';
import {Barcode} from '../../components/Barcode/Barcode';
import {BottomNavBar} from '../../components/BottomNavBar/BottomNavBar';
import {ThemeContext} from '../../theme/themesContext';
import {SearchBar} from '../../components/SearchBar/SearchBar';

//#region [MOCK IMG]
import horizontaList from '../../assets/mock/Main/horizontaList.png';
import covid from '../../assets/mock/Main/covid.png';
import iphoneSe from '../../assets/mock/Main/iphoneSe.png';
import maes from '../../assets/mock/Main/maes.png';
import absolut from '../../assets/mock/Main/absolut.png';
import categorias from '../../assets/mock/Main/categorias.png';
import promo from '../../assets/mock/Main/promo.png';
import lista from '../../assets/mock/Main/lista.png';
import sansung from '../../assets/mock/Main/sansung.png';
import opniao from '../../assets/mock/Main/opniao.png';
//#endregion

import {Container, MockImg, Scroll, SearchContainer} from './styles';
export default function Main() {
  const {theme} = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Barcode
        open={show}
        onCapture={res => console.log(res)}
        onClose={() => handleShow()}
      />
      <SearchContainer theme={theme}>
        <SearchBar />
      </SearchContainer>
      <Scroll>
        <Container>
          <MockImg
            source={horizontaList}
            alt="horizontaList"
            resizeMode="contain"
          />

          <MockImg source={covid} alt="covid" resizeMode="center" />

          <MockImg source={iphoneSe} alt="iphoneSe" resizeMode="center" />

          <MockImg source={maes} alt="maes" resizeMode="center" />

          <MockImg source={absolut} alt="absolut" resizeMode="center" />

          <MockImg source={categorias} alt="categorias" resizeMode="center" />

          <MockImg source={promo} alt="promo" resizeMode="center" />

          <MockImg source={lista} alt="lista" resizeMode="center" />

          <MockImg source={sansung} alt="sansung" resizeMode="center" />

          <MockImg source={opniao} alt="opniao" resizeMode="center" />
        </Container>
      </Scroll>
      <BottomNavBar action={() => handleShow()} />
    </>
  );
}
