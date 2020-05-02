import React, {useContext} from 'react';
import {Image} from 'react-native';
import prime from '../../../assets/images/prime.png';
import {SwitchInput} from '../../../components/Switch/Switch';
import {ThemeContext} from '../../../theme/themesContext';
import {AsideText, FilterSection, PrimeBar, PrimeLabel} from './styles';

export function HeaderProduct() {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <PrimeBar theme={theme}>
        <FilterSection>
          <SwitchInput value={true} onChange={() => console.log('mudei')} />
          <Image source={prime} alt="logo" />
          <PrimeLabel>prime</PrimeLabel>
        </FilterSection>
        <AsideText theme={theme}>refinar</AsideText>
      </PrimeBar>
    </>
  );
}
